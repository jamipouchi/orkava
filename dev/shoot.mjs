#!/usr/bin/env node
// Screenshots a prototype page in headless Chrome with real WebGL.
//
//   node dev/shoot.mjs <page.html> [--out dir] [--scroll 0,0.5,1]
//        [--mouse 0.2,0.3] [--wait 2500] [--viewport 1440x900] [--mobile]
//        [--reduced-motion] [--query "?foo=1"]
//
// --scroll   page scroll fractions (0 = top, 1 = bottom); one PNG per value
// --mouse    pointer position as viewport fractions, moved before each shot
// --wait     ms to let intro animations settle after load and after each scroll
// --mobile   390x844 touch viewport at device scale 3
// --offline  block every network request, so three.js never arrives: this is
//            what a visitor sees before the scene is ready (file tag "-offline")
// Prints console errors, page errors, the GL renderer and a rough frame rate.
//
//   node dev/shoot.mjs --diff a.png b.png [--out diff.png]
//
// Compares two screenshots of the same size: prints the share of pixels that
// differ by more than 24/255 on any channel and writes a PNG marking them red.

import { pathToFileURL } from "node:url";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";

import { PLAYWRIGHT, OUT } from "./deps.mjs";
const { chromium } = await import(PLAYWRIGHT);

const args = process.argv.slice(2);

if (args.includes("--diff")) {
  const i = args.indexOf("--diff");
  const [a, b] = [args[i + 1], args[i + 2]].map((p) => resolve(p));
  const o = args.indexOf("--out");
  const outPath = resolve(o === -1 ? join(a, "..", "diff.png") : args[o + 1]);
  const uri = (p) => `data:image/png;base64,${readFileSync(p).toString("base64")}`;
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage();
  const result = await page.evaluate(
    async ([ua, ub]) => {
      const load = (u) =>
        new Promise((ok, bad) => {
          const im = new Image();
          im.onload = () => ok(im);
          im.onerror = bad;
          im.src = u;
        });
      const [ia, ib] = await Promise.all([load(ua), load(ub)]);
      if (ia.width !== ib.width || ia.height !== ib.height) {
        return { error: `sizes differ: ${ia.width}x${ia.height} vs ${ib.width}x${ib.height}` };
      }
      const pixels = (im) => {
        const c = document.createElement("canvas");
        c.width = im.width;
        c.height = im.height;
        const g = c.getContext("2d");
        g.drawImage(im, 0, 0);
        return [c, g, g.getImageData(0, 0, im.width, im.height)];
      };
      const [, , da] = pixels(ia);
      const [cb, gb, db] = pixels(ib);
      let differing = 0;
      let minX = ia.width, minY = ia.height, maxX = -1, maxY = -1;
      for (let p = 0; p < da.data.length; p += 4) {
        const d = Math.max(
          Math.abs(da.data[p] - db.data[p]),
          Math.abs(da.data[p + 1] - db.data[p + 1]),
          Math.abs(da.data[p + 2] - db.data[p + 2]),
        );
        if (d > 24) {
          differing += 1;
          const x = (p / 4) % ia.width, y = Math.floor(p / 4 / ia.width);
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
          db.data[p] = 255; db.data[p + 1] = 0; db.data[p + 2] = 0; db.data[p + 3] = 255;
        }
      }
      gb.putImageData(db, 0, 0);
      return {
        share: differing / (ia.width * ia.height),
        box: maxX < 0 ? null : [minX, minY, maxX, maxY],
        size: [ia.width, ia.height],
        png: cb.toDataURL("image/png").split(",")[1],
      };
    },
    [uri(a), uri(b)],
  );
  await browser.close();
  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }
  writeFileSync(outPath, Buffer.from(result.png, "base64"));
  console.log(`differing pixels: ${(result.share * 100).toFixed(2)}% of ${result.size.join("x")}`);
  console.log(result.box ? `differences inside box x ${result.box[0]}..${result.box[2]}, y ${result.box[1]}..${result.box[3]}` : "identical");
  console.log(`diff image ${outPath}`);
  process.exit(0);
}

const page_path = args.find((a) => !a.startsWith("--") && a.endsWith(".html"));
if (!page_path) {
  console.error("usage: node dev/shoot.mjs <page.html> [options]");
  process.exit(2);
}
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const has = (name) => args.includes(`--${name}`);

const mobile = has("mobile");
const [vw, vh] = (flag("viewport", mobile ? "390x844" : "1440x900")).split("x").map(Number);
const scrolls = flag("scroll", "0").split(",").map(Number);
const mouse = flag("mouse", null)?.split(",").map(Number) ?? null;
const wait = Number(flag("wait", "2500"));
const out = resolve(flag("out", join(OUT, "shots")));
const query = flag("query", "");
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"],
});
const context = await browser.newContext({
  viewport: { width: vw, height: vh },
  deviceScaleFactor: mobile ? 3 : 2,
  isMobile: mobile,
  hasTouch: mobile,
  reducedMotion: has("reduced-motion") ? "reduce" : "no-preference",
});
const page = await context.newPage();
const offline = has("offline");
if (offline) await context.route(/^https?:/, (route) => route.abort());

const problems = [];
page.on("console", (m) => {
  if (m.type() === "error" || m.type() === "warning") problems.push(`[console.${m.type()}] ${m.text()}`);
});
page.on("pageerror", (e) => problems.push(`[pageerror] ${e.message}`));
page.on("requestfailed", (r) => problems.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText ?? ""}`));

await page.goto(pathToFileURL(resolve(page_path)).href + query, { waitUntil: "load" });
await page.waitForTimeout(wait);

const renderer = await page.evaluate(() => {
  const gl = document.createElement("canvas").getContext("webgl2");
  if (!gl) return "NO WEBGL2";
  const ext = gl.getExtension("WEBGL_debug_renderer_info");
  return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "unknown";
});

const tag = `${mobile ? "mobile" : "desktop"}${has("reduced-motion") ? "-reduced" : ""}${offline ? "-offline" : ""}`;
for (const s of scrolls) {
  await page.evaluate((f) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: Math.round(max * f), behavior: "instant" });
  }, s);
  if (mouse) await page.mouse.move(mouse[0] * vw, mouse[1] * vh, { steps: 12 });
  await page.waitForTimeout(scrolls.length > 1 || mouse ? Math.max(900, wait / 2) : 0);
  const name = `${tag}-scroll${String(Math.round(s * 100)).padStart(3, "0")}${mouse ? `-mouse${mouse.join("x")}` : ""}.png`;
  await page.screenshot({ path: join(out, name) });
  console.log(`shot ${join(out, name)}`);
}

const fps = await page.evaluate(
  () =>
    new Promise((done) => {
      let frames = 0;
      const start = performance.now();
      const tick = () => {
        frames += 1;
        const elapsed = performance.now() - start;
        if (elapsed >= 1500) done(Math.round((frames * 1000) / elapsed));
        else requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }),
);

const height = await page.evaluate(() => document.documentElement.scrollHeight);
console.log(`renderer: ${renderer}`);
console.log(`frame rate: ~${fps} fps (headless, indicative only)`);
console.log(`page height: ${height}px at ${vw}x${vh}`);
console.log(problems.length ? `PROBLEMS:\n${problems.join("\n")}` : "no console errors or failed requests");
await browser.close();

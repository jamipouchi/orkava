#!/usr/bin/env node
// Motion check: captures a burst of frames from a page and reports how much each
// frame differs from the one before, to catch flicker, pops and jumps that still
// screenshots cannot show.
//
//   node dev/frames.mjs <page.html> [--at 0.4] [--mode idle|wheel|sweep]
//        [--frames 40] [--step 60] [--wait 3000] [--viewport 1440x900] [--dsf 1]
//        [--query "?x=1"] [--out dir]
//
// --at      scroll fraction to start from (0 = top)
// --mode    idle: do nothing and watch; wheel: one mouse-wheel notch of --step px
//           per frame, as a visitor scrolls; sweep: jump the scroll position by
//           --step px per frame
// It prints, per frame, the share of pixels that changed by more than 24/255 and the
// mean brightness, then writes the frames, and a strip of the frames around the
// biggest change, into --out (default <page dir>/frames).
// A steady scene gives small, even numbers. Flicker shows as numbers that alternate
// high and low; a pop shows as one spike; a brightness that goes up and down while
// scrolling one way is a light or theme that is not monotonic.

import { pathToFileURL } from "node:url";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { resolve, join } from "node:path";

import { PLAYWRIGHT, OUT } from "./deps.mjs";
const { chromium } = await import(PLAYWRIGHT);

const args = process.argv.slice(2);
const pagePath = args.find((a) => !a.startsWith("--") && a.endsWith(".html"));
if (!pagePath) {
  console.error("usage: node dev/frames.mjs <page.html> [--at 0.4] [--mode idle|wheel|sweep] [--frames 40]");
  process.exit(2);
}
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const at = Number(flag("at", "0"));
const mode = flag("mode", "idle");
const count = Number(flag("frames", "40"));
const step = Number(flag("step", "60"));
const wait = Number(flag("wait", "3000"));
const [vw, vh] = flag("viewport", "1440x900").split("x").map(Number);
const dsf = Number(flag("dsf", "1"));
const query = flag("query", "");
const out = resolve(flag("out", join(OUT, "frames")));
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"],
});
const context = await browser.newContext({ viewport: { width: vw, height: vh }, deviceScaleFactor: dsf });
const page = await context.newPage();
const problems = [];
page.on("pageerror", (e) => problems.push(`[pageerror] ${e.message}`));
page.on("console", (m) => (m.type() === "error" || m.type() === "warning") && problems.push(`[console.${m.type()}] ${m.text()}`));

await page.goto(pathToFileURL(resolve(pagePath)).href + query, { waitUntil: "load" });
await page.evaluate((f) => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo({ top: Math.round(max * f), behavior: "instant" });
}, at);
await page.mouse.move(vw / 2, vh / 2);
await page.waitForTimeout(wait);

const shots = [];
const scrollYs = [];
for (let i = 0; i < count; i++) {
  if (i > 0 && mode === "wheel") await page.mouse.wheel(0, step);
  if (i > 0 && mode === "sweep") await page.evaluate((d) => window.scrollBy({ top: d, behavior: "instant" }), step);
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  shots.push(await page.screenshot({ type: "png" }));
  scrollYs.push(await page.evaluate(() => Math.round(window.scrollY)));
}
shots.forEach((b, i) => writeFileSync(join(out, `f${String(i).padStart(3, "0")}.png`), b));

const helper = await context.newPage();
const stats = await helper.evaluate(async (uris) => {
  const load = (u) =>
    new Promise((ok, bad) => {
      const im = new Image();
      im.onload = () => ok(im);
      im.onerror = bad;
      im.src = u;
    });
  const c = document.createElement("canvas");
  const g = c.getContext("2d", { willReadFrequently: true });
  let prev = null;
  const res = [];
  for (const u of uris) {
    const im = await load(u);
    c.width = im.width;
    c.height = im.height;
    g.drawImage(im, 0, 0);
    const d = g.getImageData(0, 0, im.width, im.height).data;
    let lum = 0, changed = 0;
    for (let p = 0; p < d.length; p += 16) {
      lum += d[p] + d[p + 1] + d[p + 2];
      if (prev && Math.max(Math.abs(d[p] - prev[p]), Math.abs(d[p + 1] - prev[p + 1]), Math.abs(d[p + 2] - prev[p + 2])) > 24) changed += 1;
    }
    const n = d.length / 16;
    res.push({ lum: lum / n / 3, changed: prev ? changed / n : 0 });
    prev = d;
  }
  return res;
}, shots.map((b) => `data:image/png;base64,${b.toString("base64")}`));

let worst = 1;
stats.forEach((s, i) => {
  if (i > 0 && s.changed > stats[worst].changed) worst = i;
});
console.log(`mode ${mode}, from scroll ${at}, ${count} frames at ${vw}x${vh} @${dsf}x`);
console.log("frame  scrollY  changed%  brightness");
stats.forEach((s, i) => {
  console.log(`${String(i).padStart(5)}  ${String(scrollYs[i]).padStart(7)}  ${(s.changed * 100).toFixed(2).padStart(8)}  ${s.lum.toFixed(1).padStart(10)}`);
});

const from = Math.max(0, worst - 2), to = Math.min(count - 1, worst + 2);
const strip = `<!doctype html><meta charset="utf-8"><style>
  body { margin: 0; padding: 16px; background: #888; display: flex; gap: 10px; width: max-content; font: 12px sans-serif; color: #fff; }
  img { display: block; width: 620px; border: 1px solid #000; }
</style>${shots
  .slice(from, to + 1)
  .map((b, k) => `<div>frame ${from + k}<img src="data:image/png;base64,${b.toString("base64")}"></div>`)
  .join("")}`;
await helper.setContent(strip, { waitUntil: "load" });
await helper.waitForFunction(() => [...document.images].every((im) => im.complete));
const size = await helper.evaluate(() => {
  const r = document.body.getBoundingClientRect();
  return [Math.ceil(r.width), Math.ceil(r.height)];
});
await helper.setViewportSize({ width: size[0], height: size[1] });
await helper.screenshot({ path: join(out, "around-worst.png"), clip: { x: 0, y: 0, width: size[0], height: size[1] } });
console.log(`biggest change at frame ${worst}; frames ${from}-${to} in ${join(out, "around-worst.png")}`);
console.log(problems.length ? `PROBLEMS:\n${[...new Set(problems)].join("\n")}` : "no console errors");
await browser.close();

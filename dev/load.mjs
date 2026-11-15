#!/usr/bin/env node
// Load check: what a visitor sees, moment by moment, while a page loads, on a chosen
// connection and machine. It serves the repo as https://landing.test/ from disk (no
// server process), slows every response to the chosen connection, and takes a frame
// every ~100 ms from navigation. Output: a filmstrip, and the timings that matter.
//
//   node dev/load.mjs <page.html> [--net fast|4g|3g] [--cpu 1] [--gl metal|swiftshader]
//        [--for 6000] [--viewport 1440x900] [--mobile] [--reload-at 0.5] [--file]
//        [--query "?x=1"] [--out dir]
//
// --net        fast: no delay; 4g: 9 Mbit/s, 170 ms round trip; 3g: 1.6 Mbit/s, 300 ms
//              (applies to the page's own files and to anything it fetches from a CDN)
// --cpu        slow the main thread by this factor (4 is a mid-range phone or an old PC)
// --gl         swiftshader draws WebGL on the CPU, as a PC with no usable graphics does
// --reload-at  load, scroll to this fraction, then reload and record that reload
// --file       open the file by its file:// path instead (what a double-click does)
// It prints: first paint, when the hero picture is on screen, when the 3D scene takes
// over (the page adds the class "live" to <html>), the longest main-thread block, the
// frame rate once live, the requests made, and how much each frame differs from the
// one before (a pop shows as a spike after things had settled).

import { pathToFileURL } from "node:url";
import { mkdirSync, readFileSync, existsSync, statSync, writeFileSync, rmSync } from "node:fs";
import { resolve, join, extname, relative } from "node:path";

import { PLAYWRIGHT, OUT } from "./deps.mjs";
const { chromium } = await import(PLAYWRIGHT);

const args = process.argv.slice(2);
const pagePath = args.find((a) => !a.startsWith("--") && a.endsWith(".html"));
if (!pagePath) {
  console.error("usage: node dev/load.mjs <page.html> [--net fast|4g|3g] [--cpu 4] [--gl swiftshader]");
  process.exit(2);
}
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const has = (name) => args.includes(`--${name}`);
const NET = { fast: [0, Infinity], "4g": [170, 9000], "3g": [300, 1600] }[flag("net", "4g")];
const cpu = Number(flag("cpu", "1"));
const gl = flag("gl", "metal");
const span = Number(flag("for", "6000"));
const mobile = has("mobile");
const [vw, vh] = flag("viewport", mobile ? "390x844" : "1440x900").split("x").map(Number);
const reloadAt = flag("reload-at", null);
const query = flag("query", "");
const out = resolve(flag("out", join(OUT, "load")));
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const ORIGIN = "https://landing.test";
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".avif": "image/avif", ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const delayFor = (bytes) => (NET[1] === Infinity ? 0 : NET[0] + (bytes * 8) / NET[1]);

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: gl === "swiftshader" ? ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] : ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"],
});
const context = await browser.newContext({ viewport: { width: vw, height: vh }, deviceScaleFactor: mobile ? 3 : 1, isMobile: mobile, hasTouch: mobile });
const requests = [];
await context.route(/^https?:/, async (route) => {
  const url = new URL(route.request().url());
  if (url.origin === ORIGIN) {
    let file = join(ROOT, decodeURIComponent(url.pathname));
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
    if (!existsSync(file)) return route.fulfill({ status: 404, body: "not found" });
    const body = readFileSync(file);
    // text compresses on the wire; count roughly what brotli would send
    const wire = /\.(html|js|mjs|css|svg|json|txt|xml)$/.test(file) ? Math.round(body.length * 0.27) : body.length;
    requests.push({ url: url.pathname, bytes: body.length, wire });
    await sleep(delayFor(wire));
    return route.fulfill({ status: 200, body, headers: { "content-type": TYPES[extname(file)] || "application/octet-stream" } });
  }
  const res = await route.fetch();
  const body = await res.body();
  requests.push({ url: url.host + url.pathname, bytes: body.length, wire: Number(res.headers()["content-length"] || body.length), outside: true });
  await sleep(delayFor(Number(res.headers()["content-length"] || body.length)));
  return route.fulfill({ response: res, body });
});
const page = await context.newPage();
const problems = [];
page.on("pageerror", (e) => problems.push(`[pageerror] ${e.message}`));
page.on("console", (m) => (m.type() === "error" || m.type() === "warning") && problems.push(`[console.${m.type()}] ${m.text()}`));
await page.addInitScript(() => {
  window.__long = [];
  new PerformanceObserver((l) => l.getEntries().forEach((e) => window.__long.push([Math.round(e.startTime), Math.round(e.duration)]))).observe({ type: "longtask", buffered: true });
  const mark = () => {
    if (!window.__live && document.documentElement.classList.contains("live")) window.__live = Math.round(performance.now());
  };
  new MutationObserver(mark).observe(document, { attributes: true, subtree: true, attributeFilter: ["class"] });
});
const cdp = await context.newCDPSession(page);
if (cpu > 1) await cdp.send("Emulation.setCPUThrottlingRate", { rate: cpu });

const url = has("file") ? pathToFileURL(resolve(pagePath)).href + query : `${ORIGIN}/${relative(ROOT, resolve(pagePath))}${query}`;
if (reloadAt !== null) {
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(2500);
  await page.evaluate((f) => window.scrollTo({ top: Math.round((document.documentElement.scrollHeight - innerHeight) * f), behavior: "instant" }), Number(reloadAt));
  await page.waitForTimeout(1500);
  requests.length = 0;
}

const frames = [];
const t0 = Date.now();
const nav = reloadAt !== null ? page.reload({ waitUntil: "commit" }) : page.goto(url, { waitUntil: "commit" });
nav.catch((e) => problems.push(`[navigation] ${e.message}`));
while (Date.now() - t0 < span) {
  const started = Date.now() - t0;
  try {
    frames.push({ t: started, png: await page.screenshot({ type: "png" }) });
  } catch {
    /* the document is being swapped; try again */
  }
  const left = 100 - (Date.now() - t0 - started);
  if (left > 0) await sleep(left);
}
frames.forEach((f, i) => writeFileSync(join(out, `t${String(f.t).padStart(5, "0")}.png`), f.png));

const m = await page.evaluate(
  () =>
    new Promise((done) => {
      const paint = Object.fromEntries(performance.getEntriesByType("paint").map((e) => [e.name, Math.round(e.startTime)]));
      let n = 0;
      const start = performance.now();
      const tick = () => {
        n += 1;
        const el = performance.now() - start;
        if (el >= 2000) done({ paint, live: window.__live ?? null, long: window.__long, fps: Math.round((n * 1000) / el), scrollY: Math.round(scrollY) });
        else requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }),
);

const helper = await context.newPage();
const diffs = await helper.evaluate(async (uris) => {
  const load = (u) => new Promise((ok, bad) => { const im = new Image(); im.onload = () => ok(im); im.onerror = bad; im.src = u; });
  const c = document.createElement("canvas");
  const g = c.getContext("2d", { willReadFrequently: true });
  let prev = null;
  const res = [];
  for (const u of uris) {
    const im = await load(u);
    c.width = Math.round(im.width / 3);
    c.height = Math.round(im.height / 3);
    g.drawImage(im, 0, 0, c.width, c.height);
    const d = g.getImageData(0, 0, c.width, c.height).data;
    let ch = 0;
    if (prev) for (let p = 0; p < d.length; p += 4) if (Math.max(Math.abs(d[p] - prev[p]), Math.abs(d[p + 1] - prev[p + 1]), Math.abs(d[p + 2] - prev[p + 2])) > 20) ch += 1;
    res.push(prev ? ch / (d.length / 4) : 0);
    prev = d;
  }
  return res;
}, frames.map((f) => `data:image/png;base64,${f.png.toString("base64")}`));

const pick = frames.filter((_, i) => i === 0 || diffs[i] > 0.002).slice(0, 14);
const tileW = Math.min(420, Math.floor(3500 / Math.max(1, pick.length)));
const strip = `<!doctype html><meta charset="utf-8"><style>
  body { margin: 0; padding: 14px; background: #777; display: flex; gap: 8px; width: max-content; font: 12px sans-serif; color: #fff; }
  img { display: block; width: ${tileW}px; border: 1px solid #000; }
</style>${pick.map((f) => `<div>${f.t} ms<img src="data:image/png;base64,${f.png.toString("base64")}"></div>`).join("")}`;
await helper.setContent(strip, { waitUntil: "load" });
await helper.waitForFunction(() => [...document.images].every((im) => im.complete));
const size = await helper.evaluate(() => { const r = document.body.getBoundingClientRect(); return [Math.ceil(r.width), Math.ceil(r.height)]; });
await helper.setViewportSize({ width: size[0], height: size[1] });
await helper.screenshot({ path: join(out, "filmstrip.png"), clip: { x: 0, y: 0, width: size[0], height: size[1] } });

const longest = m.long.reduce((a, b) => (b[1] > a[1] ? b : a), [0, 0]);
const own = requests.filter((r) => !r.outside), outside = requests.filter((r) => r.outside);
console.log(`${has("file") ? "file://" : "served"}, net ${flag("net", "4g")}, cpu x${cpu}, gl ${gl}, ${vw}x${vh}${reloadAt !== null ? `, reload at ${reloadAt}` : ""}`);
console.log(`first paint            ${m.paint["first-paint"] ?? "?"} ms`);
console.log(`first contentful paint ${m.paint["first-contentful-paint"] ?? "?"} ms`);
console.log(`3D scene live          ${m.live ?? "never"} ms`);
console.log(`longest main-thread block ${longest[1]} ms (at ${longest[0]} ms); blocks over 50 ms: ${m.long.length}, total ${m.long.reduce((a, b) => a + b[1], 0)} ms`);
console.log(`frame rate once live   ~${m.fps} fps`);
console.log(`scroll position        ${m.scrollY}px`);
console.log(`own files: ${own.length}, ${Math.round(own.reduce((a, r) => a + r.wire, 0) / 1024)} KB on the wire (${Math.round(own.reduce((a, r) => a + r.bytes, 0) / 1024)} KB raw); from other hosts: ${outside.length} requests, ${Math.round(outside.reduce((a, r) => a + r.wire, 0) / 1024)} KB`);
console.log("visible changes (ms: % of the screen that changed since the frame before):");
console.log(frames.map((f, i) => (diffs[i] > 0.002 ? `${f.t}:${(diffs[i] * 100).toFixed(1)}` : null)).filter(Boolean).join("  ") || "none");
console.log(`filmstrip ${join(out, "filmstrip.png")} (frames in ${out})`);
console.log(problems.length ? `PROBLEMS:\n${[...new Set(problems)].join("\n")}` : "no console errors");
await browser.close();

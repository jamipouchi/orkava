#!/usr/bin/env node
// Regenerates the landing's stills: the pictures that stand in for the 3D scene on the first
// screen (the night) and, on the plain page, beside the contact form (the morning).
//
//   node dev/make-poster.mjs <page.html> [--quality 0.8]
//
// For each layout and density (desktop at 1x and 2x on a 1440x900 window, phone at 1.5x on a
// 390x844 touch screen) and each moment (t=0 the night, t=9 the morning), it opens the page
// with ?poster=<layout>&dpr=<d>&t=<t>, waits for the page to draw that frame into its hero box
// (window.__poster: sky transparent, no stars, the night's green cross off as the live scene
// starts it), and writes it to stills/<night|day>-<layout>[-<d>x].webp next to the page.
// Then it rewrites the <picture> between
//   <!-- still:night --> and <!-- /still:night -->, and <!-- still:day --> … <!-- /still:day -->
// with the framing the stills were made with (data-r-d, data-s-d, --a-d, --wmax-d for desktop;
// -p for the phone). The page is served from disk as https://landing.test/ and draws with its
// built scene bundle (run build.mjs first after changing scene.js); nothing goes to the network.
// --quality is the WebP quality: 0.8 is as low as it goes before the hairlines soften.

import { mkdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { resolve, join, extname, relative, dirname } from "node:path";

import { PLAYWRIGHT } from "./deps.mjs";
const { chromium } = await import(PLAYWRIGHT);

const args = process.argv.slice(2);
const pagePath = args.find((a) => !a.startsWith("--") && a.endsWith(".html"));
if (!pagePath) {
  console.error("usage: node dev/make-poster.mjs <page.html> [--quality 0.8]");
  process.exit(2);
}
const qi = args.indexOf("--quality");
const quality = qi === -1 ? 0.8 : Number(args[qi + 1]);
const file = resolve(pagePath);
const outDir = join(dirname(file), "stills");
mkdirSync(outDir, { recursive: true });

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const ORIGIN = "https://landing.test";
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml" };

const SHOTS = [];
for (const t of [0, 9]) {
  SHOTS.push({ layout: "desktop", dpr: 1, t, viewport: { width: 1440, height: 900 }, mobile: false });
  SHOTS.push({ layout: "desktop", dpr: 2, t, viewport: { width: 1440, height: 900 }, mobile: false });
  SHOTS.push({ layout: "phone", dpr: 1.5, t, viewport: { width: 390, height: 844 }, mobile: true });
}
const name = (s) => `${s.t === 0 ? "night" : "day"}-${s.layout}${s.layout === "desktop" ? `-${s.dpr}x` : ""}.webp`;

let html = readFileSync(file, "utf8");
for (const k of ["night", "day"]) {
  if (!html.includes(`<!-- still:${k} -->`) || !html.includes(`<!-- /still:${k} -->`)) {
    console.error(`${pagePath}: missing the <!-- still:${k} --> … <!-- /still:${k} --> markers`);
    process.exit(1);
  }
}

const browser = await chromium.launch({ channel: "chrome", headless: true, args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"] });
const framing = {};
try {
  for (const s of SHOTS) {
    const context = await browser.newContext({
      viewport: s.viewport, deviceScaleFactor: s.mobile ? 3 : s.dpr, isMobile: s.mobile, hasTouch: s.mobile, reducedMotion: "no-preference",
    });
    await context.route(/^https?:/, async (route) => {
      const url = new URL(route.request().url());
      if (url.origin !== ORIGIN) return route.abort();
      let f = join(ROOT, decodeURIComponent(url.pathname));
      if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
      if (!existsSync(f)) return route.fulfill({ status: 404, body: "not found" });
      return route.fulfill({ status: 200, body: readFileSync(f), headers: { "content-type": TYPES[extname(f)] || "application/octet-stream" } });
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`${ORIGIN}/${relative(ROOT, file)}?poster=${s.layout}&dpr=${s.dpr}&t=${s.t}&q=${quality}`, { waitUntil: "load" });
    const result = await page
      .waitForFunction(() => window.__poster, null, { timeout: 60000 })
      .then((h) => h.jsonValue())
      .catch(() => ({ error: `no still rendered${errors.length ? `: ${errors.join("; ")}` : ""}` }));
    await context.close();
    if (result.error) throw new Error(`${name(s)}: ${result.error}`);
    const bytes = Buffer.from(result.uri.split(",")[1], "base64");
    writeFileSync(join(outDir, name(s)), bytes);
    const key = s.layout === "desktop" ? "d" : "p";
    const f = { r: result.r, s: result.s, a: result.a, wmax: result.wmax };
    if (framing[key] && JSON.stringify(framing[key]) !== JSON.stringify(f)) throw new Error(`${name(s)}: framing differs from the other ${s.layout} stills`);
    framing[key] = f;
    console.log(`${name(s)}: ${result.width}x${result.height}, ${(bytes.length / 1024).toFixed(1)} KB`);
  }
} finally {
  await browser.close();
}

const { d, p } = framing;
const img = (k) => {
  const attrs = [
    `class="poster-img"`, `src="stills/${k}-desktop-1x.webp"`, `alt=""`,
    `data-r-d="${d.r}" data-s-d="${d.s}" data-r-p="${p.r}" data-s-p="${p.s}"`,
    `style="--a-d: ${d.a}; --wmax-d: ${d.wmax}px; --a-p: ${p.a}; --wmax-p: ${p.wmax}px"`,
    k === "night" ? `fetchpriority="high"` : `loading="lazy"`,
  ];
  return (
    `<picture><source media="(max-width: 760px)" srcset="stills/${k}-phone.webp" />` +
    `<source media="(min-resolution: 1.5dppx)" srcset="stills/${k}-desktop-2x.webp" />` +
    `<img ${attrs.join(" ")} /></picture>`
  );
};
for (const k of ["night", "day"]) {
  const open = `<!-- still:${k} -->`, close = `<!-- /still:${k} -->`;
  const a = html.indexOf(open) + open.length, b = html.indexOf(close, a);
  const indent = html.slice(html.lastIndexOf("\n", a - open.length) + 1, a - open.length);
  html = html.slice(0, a) + `\n${indent}${img(k)}\n${indent}` + html.slice(b);
}
writeFileSync(file, html);
console.log(`wrote ${file}`);

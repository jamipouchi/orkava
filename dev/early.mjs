#!/usr/bin/env node
// Early-input check: what happens when a visitor scrolls before the page is ready.
//
//   node dev/early.mjs <page.html> [--at 350] [--cpu 4] [--notches 4] [--for 3600] [--out strip.png]
//
// Opens the page by its file path with the main thread slowed by --cpu, starts turning the
// mouse wheel --at milliseconds after navigation (420 px per notch, --notches times), and
// writes a strip of frames with their times. Read the strip: nothing on it should look
// broken, at any moment.

import { pathToFileURL } from "node:url";
import { resolve, join } from "node:path";

import { PLAYWRIGHT, OUT } from "./deps.mjs";
const { chromium } = await import(PLAYWRIGHT);

const args = process.argv.slice(2);
const pagePath = args.find((a) => !a.startsWith("--") && a.endsWith(".html"));
if (!pagePath) {
  console.error("usage: node dev/early.mjs <page.html> [--at 350] [--cpu 4]");
  process.exit(2);
}
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const at = Number(flag("at", "350")), cpu = Number(flag("cpu", "4")), notches = Number(flag("notches", "4")), span = Number(flag("for", "3600"));
const out = resolve(flag("out", join(OUT, "early.png")));

const browser = await chromium.launch({ channel: "chrome", headless: true, args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist"] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const problems = [];
page.on("pageerror", (e) => problems.push(e.message));
if (cpu > 1) await (await ctx.newCDPSession(page)).send("Emulation.setCPUThrottlingRate", { rate: cpu });
const t0 = Date.now();
page.goto(pathToFileURL(resolve(pagePath)).href, { waitUntil: "commit" }).catch(() => {});
const shots = [];
let done = 0;
while (Date.now() - t0 < span) {
  const t = Date.now() - t0;
  if (t > at && done < notches) {
    try { await page.mouse.move(700, 450); await page.mouse.wheel(0, 420); done += 1; } catch { /* not ready for input yet */ }
  }
  try {
    const y = await page.evaluate(() => Math.round(scrollY));
    shots.push([`${t} ms, scrollY ${y}`, (await page.screenshot({ type: "jpeg", quality: 78 })).toString("base64")]);
  } catch { /* document being swapped */ }
  await new Promise((r) => setTimeout(r, 110));
}
const pick = shots.filter((_, i) => i % Math.max(1, Math.ceil(shots.length / 12)) === 0);
const h = await ctx.newPage();
await h.setContent(`<!doctype html><style>body{margin:0;padding:12px;background:#777;display:flex;gap:8px;width:max-content;font:12px sans-serif;color:#fff}img{display:block;width:290px;border:1px solid #000}</style>${pick.map(([l, b]) => `<div>${l}<img src="data:image/jpeg;base64,${b}"></div>`).join("")}`);
await h.waitForFunction(() => [...document.images].every((i) => i.complete));
const sz = await h.evaluate(() => { const r = document.body.getBoundingClientRect(); return [Math.ceil(r.width), Math.ceil(r.height)]; });
await h.setViewportSize({ width: sz[0], height: sz[1] });
await h.screenshot({ path: out, clip: { x: 0, y: 0, width: sz[0], height: sz[1] } });
console.log(`strip ${out}`);
console.log(problems.length ? `PROBLEMS: ${[...new Set(problems)].join(" | ")}` : "no page errors");
await browser.close();

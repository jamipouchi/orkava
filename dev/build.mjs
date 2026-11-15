#!/usr/bin/env node
// Builds the scene: scene.js (the readable source) with three.js and the add-ons it uses,
// bundled, tree-shaken and minified into one classic script, scene.<hash>.js, at the site
// root next to the page. The name carries a hash of the content, so it can be cached forever; the build
// rewrites the page's reference (const SCENE = "…" in index.html) and removes older bundles.
//
//   node dev/build.mjs [--three <dir>]
//
// --three   where three.js comes from: an unpacked npm package of three (the folder with
//           package.json, build/ and examples/) or, by default, vendor/ next to this file
//           (three.module.min.js, three.core.min.js and addons/).
// It uses the esbuild that pharmaCRM's node_modules already has; nothing is installed.

import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { ESBUILD } from "./deps.mjs";
process.env.ESBUILD_BINARY_PATH ||= join(ESBUILD, "bin/esbuild");
const { build } = await import(join(ESBUILD, "lib/main.js"));

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const ti = args.indexOf("--three");
const three = resolve(ti === -1 ? join(here, "vendor") : args[ti + 1]);
const npm = existsSync(join(three, "build/three.module.js"));
// "three" and "three/addons/…", in either layout; the vendor build imports ./three.core.js,
// which is the minified core there
const paths = npm
  ? { main: join(three, "build/three.module.js"), addons: join(three, "examples/jsm") }
  : { main: join(three, "three.module.min.js"), addons: join(three, "addons") };
const resolveThree = {
  name: "three",
  setup(b) {
    b.onResolve({ filter: /^three$/ }, () => ({ path: paths.main }));
    b.onResolve({ filter: /^three\/addons\// }, (a) => ({ path: join(paths.addons, a.path.slice("three/addons/".length)) }));
    if (!npm) b.onResolve({ filter: /^\.\/three\.core\.js$/ }, () => ({ path: join(three, "three.core.min.js") }));
  },
};

const out = await build({
  entryPoints: [join(here, "scene.js")],
  bundle: true,
  format: "iife",
  minify: true,
  treeShaking: true,
  target: ["chrome100", "safari15", "firefox100"],
  legalComments: "eof",
  plugins: [resolveThree],
  write: false,
  logLevel: "warning",
});
const code = out.outputFiles[0].contents;
const hash = createHash("sha256").update(code).digest("hex").slice(0, 10);
const name = `scene.${hash}.js`;
const site = join(here, "..");
for (const f of readdirSync(site)) if (/^scene\.[0-9a-f]{10}\.js$/.test(f) && f !== name) rmSync(join(site, f));
writeFileSync(join(site, name), code);

const page = join(site, "index.html");
const html = readFileSync(page, "utf8");
const ref = /const SCENE = "scene(?:\.[0-9a-f]{10})?\.js";/;
if (!ref.test(html)) throw new Error(`index.html: no const SCENE = "scene….js"; line to update`);
writeFileSync(page, html.replace(ref, `const SCENE = "${name}";`));
console.log(`${name}: ${(code.length / 1024).toFixed(1)} KB, three.js from ${npm ? "the npm package" : "vendor/"} at ${three}`);

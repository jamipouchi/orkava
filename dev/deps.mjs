// What the dev scripts borrow. This site has no dependencies of its own, so the scripts use
// the playwright-core and esbuild already installed for pharmaCRM, the sibling folder, and
// drive the Chrome installed on this machine. Their output goes to dev/out/, which is
// neither committed nor deployed.

import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pnpm = join(here, "../../pharmaCRM/node_modules/.pnpm");

export const PLAYWRIGHT = join(pnpm, "playwright-core@1.64.1/node_modules/playwright-core/index.mjs");
export const ESBUILD = join(pnpm, "esbuild@0.28.1/node_modules/esbuild");
export const OUT = join(here, "out");
mkdirSync(OUT, { recursive: true });

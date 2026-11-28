# Orkava — landing

The public site of Orkava: the landing and the legal pages (aviso legal,
privacidad, cookies, eliminación de datos) that Meta, LinkedIn and Google
verification link to.

Titular: **ORKAVA TECHNOLOGIES SL** · NIF B93935401 ·
Plaza Catalunya 10, 17004 Girona (España) · help@orkava.app

## What is here

Plain files, served as they are. Vercel runs no build.

- `index.html`: the landing. One night in a pharmacy, told by scrolling: the
  shop open in daylight with customers coming and going, closing as the visitor
  starts to scroll, Orky sorting the back room through the night while the sun
  comes up, the shop opening again, and the contact form. It also holds the script for the
  story, the words and the form. On a machine without usable graphics, or
  without scripts, the same file is a plain page: the copy between two stills.
- `scene.<hash>.js`: the 3D scene, built from `dev/scene.js` with three.js
  bundled in. Only machines that can draw it download it.
- `stills/`: the first screen (the shop open at closing time) and the open
  shop in the morning, as images. The first still is what paints first; the
  scene takes over from it.
- `aviso-legal.html`, `privacidad.html`, `cookies.html`,
  `eliminacion-de-datos.html`, with `styles.css` and `orky.svg`.
- `vercel.json`: forwards `/api/demo-requests` to the API, so the contact form
  lands in the portal's admin under Demo requests; lets browsers keep the
  scene bundle forever; and marks every host other than www as `noindex`.
- `dev/`: the scene's source and the scripts below. Not deployed
  (`.vercelignore` lists the only files that are).

## Changing the scene

Edit `dev/scene.js`, then:

```sh
node dev/build.mjs                    # writes scene.<hash>.js, updates index.html
node dev/make-poster.mjs index.html   # redraws stills/ if the first or last frame changed
```

The scripts borrow `esbuild` and `playwright-core` from `../pharmaCRM/node_modules`
and drive the Chrome installed on this machine; nothing is installed here.

## Checking it

A screenshot cannot show a pop, a flicker or a slow load, so check motion:

```sh
node dev/load.mjs index.html --net 3g --cpu 4       # a load, frame by frame, with timings
node dev/load.mjs index.html --gl swiftshader       # a PC without graphics: the plain page
node dev/load.mjs index.html --reload-at 0.5        # a reload half-way down
node dev/early.mjs index.html                       # scrolling before the page is ready
node dev/frames.mjs index.html --mode wheel         # the whole scroll: no dark frames
node dev/shoot.mjs index.html --scroll 0,0.5,1      # stills, desktop; add --mobile
```

Output goes to `dev/out/`. `?seed=<n>` repeats the same day of customers at the
end, `?view=plain` shows the plain page, `?form=success|error|sending` shows the
form's states. Opened from a file, the form sends nothing.

## Deploying

- **landing.orkava.app** is the Vercel project `orkava-landing`. From this
  folder, on the branch `rebotica`: `vercel deploy --prod`.
- **www.orkava.app** is the Vercel project `orkava`, which deploys `main` on
  every push.

## Putting it on www

When the Meta tech-provider review has passed (until then www keeps the page
that spells out the product):

1. Merge `rebotica` into `main` and push. Vercel deploys www.
2. Open www.orkava.app, scroll through it, and send the form once.
3. Remove the `orkava-landing` project, or point landing.orkava.app at www.

The page remembers on the visitor's device whether it can run the 3D scene, so
a return visit starts faster. `cookies.html` says the site stores nothing:
bring the two into line before step 1.

## Notes

- help@orkava.app is the LSSI contact address quoted in all legal pages; the
  mailbox has to exist.
- Legal data last verified against the Registro Mercantil report dated
  2026-08-24.

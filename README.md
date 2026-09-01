# Orkava — landing

Static marketing site for Orkava ("Inteligencia artificial para farmacias"),
used as the public presence + legal pages (aviso legal, privacidad, cookies)
required for Google Business / Meta Business verification.

Titular: **ORKAVA TECHNOLOGIES SL** · NIF B93935401 ·
Plaza Catalunya 10, 17004 Girona (España) · miquel@orkava.app

## Structure

Plain HTML + CSS, no build step.

- `index.html` — landing
- `aviso-legal.html` — LSSI-CE legal notice
- `privacidad.html` — RGPD / LOPDGDD privacy policy
- `cookies.html` — cookie policy (site sets no cookies)
- `styles.css`, `favicon.svg`, `robots.txt`

## Deploy

The repo is deployed on Vercel (static). Push to `main` or run:

```sh
vercel --prod
```

## Notes

- Contact email is `miquel@orkava.app` — make sure the mailbox exists (it is the
  LSSI contact address quoted in all legal pages).
- Legal data last verified against the Registro Mercantil report dated
  2026-08-24.

# Harryliz Barbers — marketing demo

Static marketing site for **Harryliz Barbers** on Lower Road, Bermondsey SE16.

Stack: **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**.

## Features

- Full-bleed hero with ink / sand / lilac opacity wash
- All **Book** CTAs deep-link to the real Fresha page (no booking widget)
- Secondary **Call** CTA: `tel:+447761533632`
- Real Harryliz photography (see `SOURCES.md`)
- Motion via transform only — no Framer `opacity: 0` traps
- Production static export + `public/.nojekyll` for GitHub Pages

Suggested later Pages slug: `harryliz-barbers-demo`.

## Run locally

```bash
npm install
npm run dev
```

Dev server defaults to an uncommon port when started with:

```bash
npx next dev -p 43127 -H 127.0.0.1
```

## Production static export

```bash
npm run build
```

Output lands in `out/`. GitHub Pages project path is configured as:

- `basePath` / `assetPrefix`: `/harryliz-barbers-demo`
- Live URL: https://androidkrayze.github.io/harryliz-barbers-demo/
- `.nojekyll` is included under `public/` (copied into `out/` on build)

Deploy by pushing source to `main` and the contents of `out/` to the `gh-pages` branch (root).

## Booking

Never invent an in-page booking UI. Always send clients to:

https://www.fresha.com/a/harryliz-barbers-london-134-lower-road-ioktr926

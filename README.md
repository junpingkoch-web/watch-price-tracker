# Watch Price Trends

A free, static (no build step) tool for looking up secondary-market price
trends of popular luxury watch references — search or filter by brand/
category, then open a model to see a full price history chart. Trilingual
UI: 中文 (default) / English / Deutsch.

## Run locally

Just open `index.html` in a browser, or serve the folder with any static
server, e.g.:

```
npx serve .
```

## Updating prices

Edit `data.js` — it's the only file you need to touch. It's plain
JavaScript (not a fetched JSON file), so the site still works if someone
just double-clicks `index.html`. See the comment block at the top of that
file for the exact format.

Important: `data.js` currently ships with `sampleData: true` and
placeholder prices for 7 well-known references, so the UI has something
real to render out of the box. **Before sharing this publicly, replace the
placeholder `history` numbers with real figures and set `sampleData` to
`false`.** While `sampleData` is `true`, the page shows a trilingual
warning banner so nobody mistakes the placeholders for real quotes.

## Deploy

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages,
S3, etc.) — upload the folder as-is.

Before going live:

1. ✅ Real AdSense publisher ID (`ca-pub-4830421367394194`) is already wired in
   `index.html` and `ads.txt`.
2. Add your AdSense `<ins>` snippet inside the three `.ad-slot`
   placeholders in `index.html` (marked with comment blocks).
3. Update the `buymeacoffee.com` link in `index.html` if you want the
   support button to point elsewhere.
4. Replace placeholder prices in `data.js` and set `sampleData: false`
   (see above).

## Structure

- `index.html` — page markup, SEO meta tags, ad slot placeholders, help
  modal.
- `style.css` — styling (dark/light auto, responsive).
- `data.js` — the price data you maintain by hand (`window.WATCH_PRICE_DATA`).
- `script.js` — zh/en/de text dictionary, search/filter, watch-card grid
  with sparklines, detail view with a hand-rolled SVG line chart (no
  charting library), localStorage persistence for language choice.

# Lenxtech Website

Corporate distribution website modeled on [firealps.com](https://firealps.com/), rebranded for **Lenxtech**.

## Tech stack

- React 19 + Vite 8
- React Router 7
- Build-time prerendering for SEO (static HTML per route)

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # client + SSR prerender → dist/
npm run preview  # preview production build
```

## Production build (SEO)

Before building for production, set your live domain:

```bash
cp .env.example .env.production
# Edit VITE_SITE_URL=https://www.yourdomain.com (no trailing slash)
npm run build
```

The build will:

1. Bundle the client app
2. Prerender all 10 routes into `dist/` (e.g. `dist/business/index.html`)
3. Generate `dist/sitemap.xml` and `dist/robots.txt` with absolute URLs when `VITE_SITE_URL` is set

Per-route titles, descriptions, Open Graph tags, Twitter cards, canonical URLs, and Organization JSON-LD are defined in [`src/seo/config.js`](src/seo/config.js).

## Deploy to GitHub Pages (free live URL)

Live site: **https://anwesh257.github.io/lenxtech-website/**

Every push to `main` triggers [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) to build and publish automatically.

**One-time GitHub setup:**

1. Open [github.com/anwesh257/lenxtech-website/settings/pages](https://github.com/anwesh257/lenxtech-website/settings/pages)
2. Under **Build and deployment** → **Source**, select **GitHub Actions**
3. Push to `main` (or re-run the workflow from the **Actions** tab)

Share the URL above with anyone — works on mobile and desktop, no install needed.

## Deploy to Hostinger

1. Run `npm run build` with `VITE_SITE_URL` set in `.env.production`
2. Upload **all contents** of the `dist/` folder to `public_html` (not the `dist` folder itself)
3. Ensure SSL is enabled in Hostinger
4. The included `.htaccess` handles SPA fallback for any non-prerendered paths

Prerendered pages are served as real HTML files; crawlers receive full content without executing JavaScript.

## Replace your logo

Drop your logo file at `public/assets/logo.svg` (or `logo.png` and update `Header.jsx` src).

For better social previews, add a 1200×630 PNG at `public/assets/og-image.png` and set `DEFAULT_OG_IMAGE` in `src/seo/config.js`.

## Pages

- Home, Business, Portfolio, Product Gallery, Library, Our Team, Stock Buy, Contact Us, Authorized Distributor, Privacy Policy

## Customize

- Copy & data: `src/data/content.js`
- SEO metadata: `src/seo/config.js`
- Styles: `src/index.css`
- Social links, addresses, PDFs: edit `content.js` or wire real URLs in `PdfButton.jsx`

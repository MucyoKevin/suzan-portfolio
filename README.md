# Suzan Owembabazi — Portfolio

A single-page marketing and communications portfolio, built with Next.js 16
(App Router, Turbopack) and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

All site copy lives in one file — [`src/content/portfolio.ts`](src/content/portfolio.ts).
The section components read from it, and so do the metadata, the JSON-LD, and
the generated social card, so editing copy there updates everything at once.

## Environment

Copy [`.env.example`](.env.example) to `.env.local`. Nothing is required
locally; the two verification tokens are optional and the site URL falls back
to the Vercel production host.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin. **Set this the moment a custom domain is attached** — canonical links, OG tags, `sitemap.xml` and JSON-LD all derive from it. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token from Google Search Console (HTML-tag method). |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Token from Bing Webmaster Tools. |

## Analytics

[`@vercel/analytics`](https://vercel.com/analytics) and
[`@vercel/speed-insights`](https://vercel.com/docs/speed-insights) are mounted in
[`src/app/layout.tsx`](src/app/layout.tsx). Both only report from a Vercel
deployment, and each has to be switched on once in the Vercel dashboard
(Project → Analytics, and Project → Speed Insights). Nothing is collected while
running locally.

## SEO

| Concern | Where |
| --- | --- |
| Canonical origin resolution | [`src/lib/site.ts`](src/lib/site.ts) |
| Title, description, OG/Twitter, robots, icons, verification | [`src/app/layout.tsx`](src/app/layout.tsx) |
| `Person` / `WebSite` / `ProfilePage` JSON-LD | [`src/lib/structured-data.ts`](src/lib/structured-data.ts) |
| Generated 1200×630 social card | [`src/lib/og-image.tsx`](src/lib/og-image.tsx) |
| Generated favicon / app icon | [`src/lib/brand-mark.tsx`](src/lib/brand-mark.tsx) |
| `robots.txt`, `sitemap.xml`, web manifest | [`src/app/robots.ts`](src/app/robots.ts), [`src/app/sitemap.ts`](src/app/sitemap.ts), [`src/app/manifest.ts`](src/app/manifest.ts) |

Preview deployments return `Disallow: /` and point their canonical at the
production origin, so they can never compete with the live site in search.

### After deploying

1. Add the property in [Google Search Console](https://search.google.com/search-console)
   and submit `https://<domain>/sitemap.xml`.
2. Validate the structured data with the
   [Rich Results Test](https://search.google.com/test/rich-results).
3. Check the social card with the
   [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and
   [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

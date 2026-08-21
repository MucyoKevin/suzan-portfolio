import { expertise, profile } from "@/content/portfolio";

/**
 * Canonical origin for the deployed site.
 *
 * Every absolute URL the app emits — canonical link, OG tags, sitemap,
 * robots.txt, JSON-LD `@id`s — resolves through here, so a domain change is a
 * one-line env change rather than a find-and-replace.
 *
 * Precedence:
 *  1. `NEXT_PUBLIC_SITE_URL` — set this once a custom domain is attached.
 *  2. `VERCEL_PROJECT_PRODUCTION_URL` — Vercel's production host, so preview
 *     deployments still point their canonicals at production (never at the
 *     preview URL, which must not be indexed).
 *  3. The current *.vercel.app production host.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  return "https://suzan-portfolio.vercel.app";
}

export const siteUrl = resolveSiteUrl();

/** Used as og:site_name and as the WebSite node's name. */
export const siteName = `${profile.name} — ${profile.portfolioTitle}`;

/** ~55 chars: fits Google's title pixel budget without truncation. */
export const siteTitle = `${profile.name} — ${profile.portfolioTitle}`;

/** ~150 chars: long enough to be descriptive, short enough to survive the SERP. */
export const siteDescription = `${profile.name} is a marketing and communications specialist in ${profile.location} — brand storytelling, PR, digital marketing, and event experiences.`;

/**
 * Not a Google ranking signal, but still read by Bing, Yandex, and a number of
 * social/AI crawlers. Derived from real page content so it never drifts.
 */
export const siteKeywords = [
  profile.name,
  profile.title,
  ...profile.pillars,
  ...expertise.map((item) => item.title),
  "Marketing Specialist Uganda",
  "Communications Specialist Kampala",
  "Brand Communications Portfolio",
  "PR Consultant Uganda",
];

/** Portrait used for OG cards, JSON-LD `image`, and the PWA icon set. */
export const portraitPath = "/pic_2.jpeg";

export const portraitAlt = `${profile.name}, ${profile.title}`;

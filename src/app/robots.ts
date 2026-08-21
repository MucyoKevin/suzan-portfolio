import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/**
 * Preview deployments must never be indexed — a duplicate of the whole site on
 * a *.vercel.app preview host splits ranking signals with production.
 */
const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : true;

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  // Nothing is disallowed on purpose: /_next/ holds the CSS and JS Google needs
  // to render the page, and blocking it degrades how the page is indexed.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/**
 * The portfolio is a single document — its sections are in-page anchors, not
 * routes, and listing anchors as separate <url> entries would be treated as
 * duplicate content. One canonical URL is the correct sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

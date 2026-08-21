import type { MetadataRoute } from "next";

import { profile } from "@/content/portfolio";
import { siteDescription, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: profile.name,
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#faf6f1",
    theme_color: "#faf6f1",
    lang: "en",
    categories: ["business", "portfolio", "marketing"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      // Served by app/icon.tsx and app/apple-icon.tsx.
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No value to visitors, and one less detail to advertise about the stack.
  poweredByHeader: false,

  images: {
    // AVIF first, WebP as the fallback: smaller bytes for the portraits means
    // a faster LCP, which Core Web Vitals scores directly.
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Sends the origin (not the full path) on cross-origin requests, so
          // referral traffic still shows up in analytics.
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { contact, profile } from "@/content/portfolio";
import {
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

// Raleway is a variable font (wght 100-900), so no `weight` array is needed.
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Lets every URL field below be written as a relative path and still emit an
  // absolute URL, which crawlers and social scrapers require.
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    // Applies to future child routes (e.g. a case-study page) automatically.
    template: `%s — ${profile.name}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "Marketing & Communications",
  // Points crawlers at the single canonical URL, so a preview host, a trailing
  // slash, or a ?utm_source link never registers as duplicate content.
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Full-size image previews and untruncated snippets in the SERP.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: profile.name.split(" ")[0],
    lastName: profile.name.split(" ").slice(1).join(" "),
    username: contact.instagramLabel.split("/").pop(),
    title: siteTitle,
    description: profile.tagline,
    url: "/",
    siteName,
    locale: "en_US",
    // og:image is supplied by app/opengraph-image.tsx, which also emits the
    // width/height/type tags social scrapers need to render a large card.
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.tagline,
  },
  // The contact block already exposes tappable mailto:/tel: links; this stops
  // iOS Safari from auto-linking (and restyling) numbers elsewhere in the copy.
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  // Paste the token from Search Console / Bing Webmaster Tools into the env var
  // and the verification tag appears; leave it unset and nothing is emitted.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : {},
  },
  appleWebApp: {
    capable: true,
    title: profile.name,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  // Matches --color-cream so mobile browser chrome blends into the page.
  themeColor: "#faf6f1",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  // Capped rather than locked: pinch-zoom stays available for accessibility.
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream font-sans text-ink-soft">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import { ogAlt, ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

// X renders the same 1.91:1 card, so it reuses the Open Graph artwork.
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return renderOgImage();
}

import { ImageResponse } from "next/og";

import { profile } from "@/content/portfolio";

/** "SO" — the initials Next renders into the favicon/app-icon set. */
const monogram = profile.name
  .split(" ")
  .map((word) => word[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

/**
 * Square brand mark used by `app/icon` and `app/apple-icon`. Generated rather
 * than checked in so the palette stays in one place and every size stays sharp.
 */
export function renderBrandMark(edge: number): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1c1917",
          color: "#faf6f1",
          fontFamily: "sans-serif",
          fontSize: edge * 0.42,
          letterSpacing: edge * 0.02,
        }}
      >
        {monogram}
      </div>
    ),
    { width: edge, height: edge },
  );
}

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { profile } from "@/content/portfolio";
import { portraitPath } from "@/lib/site";

/** Facebook/LinkedIn/X all crop to 1.91:1 — render at the exact ratio. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = `${profile.name} — ${profile.portfolioTitle}. ${profile.tagline}`;

// Mirrors the @theme palette in globals.css so shared links look like the site.
const cream = "#faf6f1";
const sand = "#efe4da";
const sandDeep = "#e3d3c4";
const ink = "#1c1917";
const inkSoft = "#57534e";
const terracotta = "#b4653a";
const terracottaDeep = "#8f4e2c";

/**
 * Renders the social card shared by `opengraph-image` and `twitter-image`.
 *
 * Deliberately uses no custom font: `ImageResponse` ships its own default face,
 * so the card generates from local assets alone and a build can never fail on a
 * font CDN being unreachable.
 */
export async function renderOgImage(): Promise<ImageResponse> {
  const portrait = await readFile(join(process.cwd(), "public", portraitPath));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: cream,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "68px 56px 60px 68px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ width: 52, height: 2, backgroundColor: terracotta }} />
              <div
                style={{
                  fontSize: 22,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  color: terracottaDeep,
                }}
              >
                {profile.name}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 30,
                fontSize: 58,
                lineHeight: 1.08,
                letterSpacing: -1.5,
                color: ink,
                maxWidth: 600,
              }}
            >
              {profile.portfolioTitle}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 21,
                lineHeight: 1.55,
                color: inkSoft,
                maxWidth: 560,
              }}
            >
              {profile.tagline}
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {profile.pillars.map((pillar) => (
                <div
                  key={pillar}
                  style={{
                    display: "flex",
                    padding: "9px 18px",
                    backgroundColor: sand,
                    border: `1px solid ${sandDeep}`,
                    fontSize: 17,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: ink,
                  }}
                >
                  {pillar}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", fontSize: 19, letterSpacing: 3, color: inkSoft }}>
              {profile.location.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Seam between the copy panel and the photo, in the brand accent. */}
        <div style={{ display: "flex", width: 10, height: "100%", backgroundColor: terracotta }} />

        <div style={{ display: "flex", width: 420, height: "100%" }}>
          <img
            src={portraitSrc}
            alt=""
            width={420}
            height={630}
            style={{ width: 420, height: 630, objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>
    ),
    ogSize,
  );
}

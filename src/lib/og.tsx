import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared Open Graph / social-card renderer.
 * Dark, branded card matching the site: eyebrow label, big title, tagline.
 */
export function renderOgImage({
  title,
  subtitle,
  eyebrow = "GBOLAGADE ISHOLA",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(900px 500px at 80% -10%, rgba(255,255,255,0.10), transparent), radial-gradient(700px 500px at -10% 110%, rgba(255,255,255,0.06), transparent)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: "#a1a1aa",
            fontWeight: 600,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: title.length > 40 ? 70 : 86,
            lineHeight: 1.05,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              marginTop: 30,
              fontSize: 34,
              lineHeight: 1.3,
              color: "#d4d4d8",
              maxWidth: 980,
            }}
          >
            {subtitle}
          </div>
        ) : null}
        <div
          style={{
            marginTop: subtitle ? 48 : 40,
            fontSize: 28,
            color: "#71717a",
          }}
        >
          gbolagade.com
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

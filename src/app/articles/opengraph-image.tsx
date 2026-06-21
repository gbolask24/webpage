import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Articles by Gbolagade Ishola";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "ARTICLES · GBOLAGADE ISHOLA",
    title: "Writing on AI engineering",
    subtitle: "Agents, observability, enterprise context, and agentic commerce.",
  });
}

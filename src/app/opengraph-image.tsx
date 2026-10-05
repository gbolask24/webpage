import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Gbolagade Ishola, AI Engineer and Forward Deployed Engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "AI ENGINEER · LONDON",
    title: "I build production AI that does real work.",
    subtitle: "Agentic systems built inside working businesses, from scoping to handover.",
  });
}

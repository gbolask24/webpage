import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Gbolagade Ishola, AI Engineer & AI Automation Architect";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "AI ENGINEER · LONDON",
    title: "I build production AI that does real work.",
    subtitle: "RAG, multi-agent automation, and observable LLM systems.",
  });
}

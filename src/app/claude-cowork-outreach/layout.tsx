import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Cowork for Cold Outreach (B2B Sales) — Free Setup Guide",
  description:
    "Use Claude Cowork to automate LinkedIn cold outreach — it browses LinkedIn, researches prospects, writes personalized messages, and sends connection requests on autopilot.",
  keywords: [
    "Claude Cowork",
    "cold outreach AI",
    "LinkedIn automation",
    "B2B sales AI",
    "Claude Code tutorial",
    "AI sales automation",
  ],
  openGraph: {
    title: "Claude Cowork for Cold Outreach (B2B Sales) — Free Setup Guide",
    description:
      "Use Claude Cowork to automate LinkedIn cold outreach on autopilot.",
    type: "article",
    url: "https://oleg.ae/claude-cowork-outreach",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-cowork-outreach",
  },
};

export default function ClaudeCoworkOutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

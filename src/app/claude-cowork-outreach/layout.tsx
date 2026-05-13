import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Cowork for Cold Outreach — AI LinkedIn Automation Guide",
  description:
    "Use Claude Cowork to automate LinkedIn cold outreach. It browses LinkedIn, researches prospects, writes personalized messages, and sends connection requests on autopilot. Free step-by-step setup guide.",
  keywords: [
    "Claude Cowork",
    "Claude AI",
    "AI LinkedIn automation",
    "cold outreach AI",
    "B2B sales AI",
    "Claude Code tutorial",
    "AI sales automation",
    "LinkedIn lead generation AI",
    "AI outreach tool",
    "Claude Code for marketing",
  ],
  openGraph: {
    title: "Claude Cowork for Cold Outreach — AI LinkedIn Automation Guide",
    description:
      "Automate LinkedIn cold outreach with Claude Cowork. Research prospects, write personalized messages, and send connections on autopilot.",
    type: "article",
    url: "https://oleg.ae/claude-cowork-outreach",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Cowork for Cold Outreach — AI LinkedIn Automation",
    description:
      "Automate LinkedIn cold outreach with Claude Cowork. Research prospects, write personalized messages, and send connections on autopilot.",
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

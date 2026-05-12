import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code for B2B Outreach (35% Reply Rate) — Free Setup Guide",
  description:
    "Build a hyper-personalized B2B outreach system with Claude Code. Find leads on LinkedIn, score them, and generate value-driven messages with custom visuals that actually get replies.",
  keywords: [
    "Claude Code",
    "B2B outreach",
    "LinkedIn outreach AI",
    "Claude Code tutorial",
    "AI lead generation",
    "personalized outreach automation",
  ],
  openGraph: {
    title: "Claude Code for B2B Outreach (35% Reply Rate) — Free Setup Guide",
    description:
      "Build a hyper-personalized B2B outreach system with Claude Code. Find leads, score them, and generate value-driven messages.",
    type: "article",
    url: "https://oleg.ae/claude-b2b-outreach",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-b2b-outreach",
  },
};

export default function ClaudeB2bOutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

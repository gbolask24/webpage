import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI B2B Outreach with Claude Code (35% Reply Rate) — Free Setup Guide",
  description:
    "Build a hyper-personalized AI B2B outreach system with Claude Code. Find leads on LinkedIn, score them with AI, and generate value-driven messages with custom visuals that get a 35% reply rate.",
  keywords: [
    "Claude Code",
    "Claude AI",
    "AI B2B outreach",
    "AI lead generation",
    "LinkedIn outreach AI",
    "Claude Code tutorial",
    "AI sales outreach",
    "personalized outreach automation",
    "Claude Code for marketing",
    "B2B lead gen AI",
  ],
  openGraph: {
    title: "AI B2B Outreach with Claude Code (35% Reply Rate) — Free Setup Guide",
    description:
      "Build a hyper-personalized AI B2B outreach system with Claude Code. Find leads, score them, and generate value-driven messages that actually get replies.",
    type: "article",
    url: "https://oleg.ae/claude-b2b-outreach",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI B2B Outreach with Claude Code (35% Reply Rate)",
    description:
      "Build a hyper-personalized AI B2B outreach system. Find leads, score them, and generate value-driven messages with custom visuals.",
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

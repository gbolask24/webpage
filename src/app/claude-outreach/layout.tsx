import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code for Cold Outreach — Free AI Outreach Setup Guide (2026)",
  description:
    "Build an AI cold outreach system with Claude Code in minutes. Scrape leads from LinkedIn, Instagram, or Facebook, generate personalized messages with custom visuals, and close deals automatically.",
  keywords: [
    "Claude Code",
    "Claude AI",
    "AI cold outreach",
    "AI cold outreach tool",
    "AI outreach automation",
    "Claude Code tutorial",
    "Claude Code for marketing",
    "AI lead generation",
    "AI cold email generator",
    "AI sales outreach",
  ],
  openGraph: {
    title: "Claude Code for Cold Outreach — Free AI Outreach Setup Guide",
    description:
      "Build an AI cold outreach system with Claude Code. Scrape leads, generate personalized messages with visuals, and close deals on autopilot.",
    type: "article",
    url: "https://oleg.ae/claude-outreach",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code for Cold Outreach — Free Setup Guide",
    description:
      "Build an AI cold outreach system with Claude Code. Scrape leads, generate personalized messages, and close deals automatically.",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-outreach",
  },
};

export default function ClaudeOutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

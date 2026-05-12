import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code for Content Creation in 10 Minutes — Free Setup Guide",
  description:
    "Set up an AI content creation system with Claude Code that generates platform-specific posts with custom visuals, infographics, carousels, and personal images from a single prompt.",
  keywords: [
    "Claude Code",
    "AI content creation",
    "social media content AI",
    "Claude Code tutorial",
    "automated content generation",
    "AI social media posts",
  ],
  openGraph: {
    title: "Claude Code for Content Creation in 10 Minutes — Free Setup Guide",
    description:
      "Generate weeks of social media content with custom visuals in one prompt using Claude Code.",
    type: "article",
    url: "https://oleg.ae/claude-content",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-content",
  },
};

export default function ClaudeContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

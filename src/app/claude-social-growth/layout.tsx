import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI Social Media Growth with Claude Code — Free Setup Guide (2026)",
  description:
    "Use Claude Code to analyze thousands of competitor videos, identify viral outliers, and build a data-driven AI content strategy for YouTube, Instagram, and TikTok growth.",
  keywords: [
    "Claude Code",
    "Claude AI",
    "AI social media growth",
    "AI content strategy",
    "viral content analysis",
    "Claude Code tutorial",
    "YouTube growth AI",
    "AI social media marketing",
    "Claude Code for marketing",
    "AI for social media",
  ],
  openGraph: {
    title: "AI Social Media Growth with Claude Code — Free Setup Guide",
    description:
      "Analyze thousands of competitor videos, identify viral outliers, and build a data-driven AI content strategy for YouTube, Instagram, and TikTok.",
    type: "article",
    url: "https://oleg.ae/claude-social-growth",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Social Media Growth with Claude Code",
    description:
      "Analyze competitor videos, find viral outliers, and build a data-driven content growth strategy with Claude Code.",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-social-growth",
  },
};

export default function ClaudeSocialGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

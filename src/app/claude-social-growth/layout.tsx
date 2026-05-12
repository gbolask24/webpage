import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code for Viral Social Media Growth — Free Setup Guide",
  description:
    "Use Claude Code to analyze thousands of competitor videos, identify viral outliers, and build a personalized content growth strategy for YouTube, Instagram, and TikTok.",
  keywords: [
    "Claude Code",
    "social media growth",
    "AI content strategy",
    "viral content analysis",
    "Claude Code tutorial",
    "YouTube growth strategy",
  ],
  openGraph: {
    title: "Claude Code for Viral Social Media Growth — Free Setup Guide",
    description:
      "Use Claude Code to analyze thousands of competitor videos, identify viral outliers, and build a personalized content growth strategy for YouTube, Instagram, and TikTok.",
    type: "article",
    url: "https://oleg.ae/claude-social-growth",
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

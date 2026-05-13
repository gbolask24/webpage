import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Claude Code for Marketing — AI Marketing Automation Guide (2026)",
  description:
    "A complete guide to using Claude Code for marketing. Five real use cases: AI Instagram Reels, competitor analysis, ad campaigns, cold outreach, and social media content automation.",
  keywords: [
    "Claude Code for marketing",
    "Claude Code",
    "Claude AI",
    "AI marketing automation",
    "AI for marketers",
    "Claude AI marketing",
    "Claude Code tutorial",
    "AI social media marketing",
    "AI content creation",
    "AI marketing tools 2026",
  ],
  openGraph: {
    title: "Claude Code for Marketing — AI Marketing Automation Guide",
    description:
      "Five real marketing use cases with Claude Code — Instagram Reels, competitor analysis, ad campaigns, cold outreach, and content automation.",
    type: "article",
    url: "https://oleg.ae/claude-marketing",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code for Marketing — AI Marketing Automation Guide",
    description:
      "Five real marketing use cases with Claude Code — Reels, competitor analysis, ads, outreach, and content automation.",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-marketing",
  },
};

export default function ClaudeMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

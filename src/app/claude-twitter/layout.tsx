import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Twitter Content Machine with Claude Code — Free Setup Guide",
  description:
    "Build an AI-powered X/Twitter content system with Claude Code. Scrape competitor tweets, analyze what goes viral in your niche, and generate ready-to-publish posts automatically.",
  keywords: [
    "Claude Code",
    "Claude AI",
    "AI Twitter content",
    "AI X content automation",
    "Claude Code tutorial",
    "AI social media marketing",
    "Twitter growth strategy",
    "AI social media posts",
    "Claude Code for marketing",
    "AI content creation",
  ],
  openGraph: {
    title: "AI Twitter Content Machine with Claude Code — Free Setup Guide",
    description:
      "Build an AI-powered X/Twitter content system with Claude Code. Scrape competitors, analyze viral tweets, and generate posts in your voice.",
    type: "article",
    url: "https://oleg.ae/claude-twitter",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Twitter Content Machine with Claude Code",
    description:
      "Scrape competitor tweets, analyze what goes viral, and generate ready-to-publish posts with Claude Code.",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-twitter",
  },
};

export default function ClaudeTwitterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

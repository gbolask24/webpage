import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code Trend Scanner for 10x More Views — Free Setup Guide",
  description:
    "Build an AI trend scanner with Claude Code that monitors Twitter, Reddit, YouTube, TikTok, and websites for trending topics in your niche. Get a daily briefing automatically.",
  keywords: [
    "Claude Code",
    "AI trend scanner",
    "content trends",
    "Claude Code tutorial",
    "social media monitoring",
    "trending topics AI",
  ],
  openGraph: {
    title: "Claude Code Trend Scanner for 10x More Views — Free Setup Guide",
    description:
      "Build an AI trend scanner with Claude Code that monitors Twitter, Reddit, YouTube, TikTok, and websites for trending topics in your niche. Get a daily briefing automatically.",
    type: "article",
    url: "https://oleg.ae/claude-trend-scanner",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-trend-scanner",
  },
};

export default function ClaudeTrendScannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

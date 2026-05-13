import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI TikTok Content with Claude Code — Free Setup Guide (2026)",
  description:
    "Build an AI system with Claude Code that reverse-engineers viral TikToks in your niche, analyzes what makes them work, and generates scroll-stopping video concepts and scripts automatically.",
  keywords: [
    "Claude Code",
    "Claude AI",
    "AI TikTok content",
    "AI TikTok video generator",
    "viral TikTok strategy",
    "Claude Code tutorial",
    "AI short form video",
    "AI video marketing",
    "Claude Code for marketing",
    "TikTok content AI",
  ],
  openGraph: {
    title: "AI TikTok Content with Claude Code — Free Setup Guide",
    description:
      "Build an AI system that reverse-engineers viral TikToks and generates scroll-stopping video concepts and scripts automatically.",
    type: "article",
    url: "https://oleg.ae/claude-tiktok",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI TikTok Content with Claude Code — Free Setup Guide",
    description:
      "Reverse-engineer viral TikToks and generate scroll-stopping video concepts with Claude Code.",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-tiktok",
  },
};

export default function ClaudeTiktokLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

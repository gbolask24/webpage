import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code for Viral TikTok Videos — Free Setup Guide",
  description:
    "Build an AI system with Claude Code that reverse-engineers viral TikToks in your niche and generates scroll-stopping video concepts and scripts automatically.",
  keywords: [
    "Claude Code",
    "Claude Code for TikTok",
    "AI TikTok content",
    "viral TikTok strategy",
    "Claude Code tutorial",
    "AI video marketing",
  ],
  openGraph: {
    title: "Claude Code for Viral TikTok Videos — Free Setup Guide",
    description:
      "Build an AI system with Claude Code that reverse-engineers viral TikToks in your niche and generates scroll-stopping video concepts and scripts automatically.",
    type: "article",
    url: "https://oleg.ae/claude-tiktok",
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

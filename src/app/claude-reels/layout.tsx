import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code for Viral Instagram Reels — Free Setup Guide",
  description:
    "Use Claude Code to reverse-engineer viral Instagram Reels from competitors. Scrape top-performing videos, analyze hooks and retention, and generate ready-to-film scripts.",
  keywords: [
    "Claude Code",
    "Instagram Reels AI",
    "viral Reels strategy",
    "Claude Code tutorial",
    "AI Instagram marketing",
    "Reels script generator",
  ],
  openGraph: {
    title: "Claude Code for Viral Instagram Reels — Free Setup Guide",
    description:
      "Reverse-engineer viral Reels and generate ready-to-film scripts with Claude Code.",
    type: "article",
    url: "https://oleg.ae/claude-reels",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-reels",
  },
};

export default function ClaudeReelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

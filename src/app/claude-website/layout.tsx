import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Build a Website with AI Using Claude Code — Free Setup Guide (2026)",
  description:
    "Build a professional personal website from scratch with Claude Code in under 30 minutes. No design skills needed — step-by-step guide to design, build, and deploy your site with a custom domain.",
  keywords: [
    "Claude Code",
    "Claude AI",
    "build website with AI",
    "Claude Code website",
    "AI web development",
    "Claude Code tutorial",
    "personal website AI",
    "AI website builder",
    "Claude Code for marketing",
    "build personal website",
  ],
  openGraph: {
    title: "Build a Website with AI Using Claude Code — Free Setup Guide",
    description:
      "Build a professional personal website from scratch with Claude Code in under 30 minutes. No design skills needed.",
    type: "article",
    url: "https://oleg.ae/claude-website",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build a Website with AI Using Claude Code",
    description:
      "Build a professional personal website with Claude Code in under 30 minutes. No design skills needed.",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-website",
  },
};

export default function ClaudeWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

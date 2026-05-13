import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SEO Optimization with Claude Code — Free Setup Guide (2026)",
  description:
    "Let Claude Code handle your entire SEO strategy — meta tags, structured data, sitemaps, keyword research, and content optimization. Watch a real 2-hour AI SEO sprint and replicate it for your site.",
  keywords: [
    "Claude Code",
    "Claude AI",
    "AI SEO optimization",
    "AI SEO tools 2026",
    "Claude Code SEO",
    "website SEO AI",
    "Claude Code tutorial",
    "automated SEO",
    "AI search optimization",
    "Claude Code for marketing",
  ],
  openGraph: {
    title: "AI SEO Optimization with Claude Code — Free Setup Guide",
    description:
      "Let Claude Code handle your entire SEO strategy — meta tags, structured data, sitemaps, keyword research, and content optimization in one session.",
    type: "article",
    url: "https://oleg.ae/claude-seo",
    publishedTime: "2026-05-12T00:00:00Z",
    modifiedTime: "2026-05-13T00:00:00Z",
    authors: ["Oleg Melnikov"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO Optimization with Claude Code — Free Guide",
    description:
      "Let Claude Code handle your entire SEO strategy in one session. Meta tags, structured data, sitemaps, and keyword research.",
  },
  alternates: {
    canonical: "https://oleg.ae/claude-seo",
  },
};

export default function ClaudeSeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

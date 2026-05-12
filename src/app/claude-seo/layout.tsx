import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code for SEO Optimization — Free Setup Guide",
  description:
    "Let Claude Code handle your entire SEO strategy — meta tags, structured data, sitemaps, keyword research, and content optimization. Watch a real 2-hour SEO sprint.",
  keywords: [
    "Claude Code",
    "AI SEO optimization",
    "Claude Code SEO",
    "website SEO AI",
    "Claude Code tutorial",
    "automated SEO",
  ],
  openGraph: {
    title: "Claude Code for SEO Optimization — Free Setup Guide",
    description:
      "Let Claude Code handle your entire SEO strategy in one session.",
    type: "article",
    url: "https://oleg.ae/claude-seo",
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

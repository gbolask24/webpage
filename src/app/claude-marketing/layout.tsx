import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code for Marketing (SMM, Ads, Outreach) — Free Setup Guide",
  description:
    "A complete guide to using Claude Code for marketing — generate Instagram reels, scrape competitor content, run ad campaigns, and automate outreach. Five use cases in one video.",
  keywords: [
    "Claude Code",
    "AI marketing",
    "Claude Code for marketing",
    "social media automation",
    "AI ads",
    "Claude Code tutorial",
  ],
  openGraph: {
    title: "Claude Code for Marketing (SMM, Ads, Outreach) — Free Setup Guide",
    description:
      "Five marketing use cases with Claude Code — social media, ads, outreach, and more.",
    type: "article",
    url: "https://oleg.ae/claude-marketing",
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your Personal Website With Claude Code — Free Setup Guide",
  description:
    "Build a professional personal website with Claude Code in under 30 minutes. Step-by-step guide to design, build, and deploy your site with a custom domain.",
  keywords: [
    "Claude Code",
    "build website with AI",
    "Claude Code website",
    "personal website",
    "Claude Code tutorial",
    "AI web development",
  ],
  openGraph: {
    title: "Build Your Personal Website With Claude Code — Free Setup Guide",
    description:
      "Build a professional personal website with Claude Code in under 30 minutes. Step-by-step guide to design, build, and deploy your site with a custom domain.",
    type: "article",
    url: "https://oleg.ae/claude-website",
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

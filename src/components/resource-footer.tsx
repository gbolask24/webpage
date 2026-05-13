import Link from "next/link";
import {
  Send,
  Target,
  MousePointerClick,
  MessageSquare,
  PenTool,
  Film,
  Clapperboard,
  TrendingUp,
  Search,
  Megaphone,
  Globe,
  Code,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const resources: { slug: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    slug: "claude-outreach",
    title: "Cold Outreach",
    description: "Build an AI outreach system that scrapes leads and sends personalized messages",
    icon: Send,
  },
  {
    slug: "claude-b2b-outreach",
    title: "B2B Outreach (35% Reply Rate)",
    description: "AI-powered B2B lead gen with personalized visuals and value-first messaging",
    icon: Target,
  },
  {
    slug: "claude-cowork-outreach",
    title: "Cowork for Outreach",
    description: "Automate LinkedIn lead gen and cold outreach with Claude Cowork",
    icon: MousePointerClick,
  },
  {
    slug: "claude-twitter",
    title: "X/Twitter Content Machine",
    description: "Automate viral X/Twitter content with Claude Code",
    icon: MessageSquare,
  },
  {
    slug: "claude-content",
    title: "Content Creation in 10 Min",
    description: "Generate weeks of social media content with custom visuals from one prompt",
    icon: PenTool,
  },
  {
    slug: "claude-reels",
    title: "Viral Instagram Reels",
    description: "Create scroll-stopping Reels with AI-generated scripts and visuals",
    icon: Film,
  },
  {
    slug: "claude-tiktok",
    title: "Viral TikTok Videos",
    description: "Build a TikTok content engine with Claude Code and AI",
    icon: Clapperboard,
  },
  {
    slug: "claude-social-growth",
    title: "Viral Social Media Growth",
    description: "Scale your social presence with AI-powered content and growth tactics",
    icon: TrendingUp,
  },
  {
    slug: "claude-trend-scanner",
    title: "Trend Scanner for 10x Views",
    description: "Scan trending topics in your niche to create content that gets views",
    icon: Search,
  },
  {
    slug: "claude-marketing",
    title: "Marketing (SMM, Ads, Outreach)",
    description: "Set up AI-powered marketing workflows for social media, ads, and outreach",
    icon: Megaphone,
  },
  {
    slug: "claude-seo",
    title: "SEO Optimization",
    description: "SEO-optimize your website using Claude Code and AI tools",
    icon: Globe,
  },
  {
    slug: "claude-website",
    title: "Build Personal Website",
    description: "Build a personal website from scratch with Claude Code in minutes",
    icon: Code,
  },
];

export function ResourceFooter({ currentSlug }: { currentSlug: string }) {
  const filtered = resources.filter((r) => r.slug !== currentSlug);

  return (
    <footer className="mx-auto max-w-3xl px-6 pb-12">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-10 sm:px-8 sm:py-12 mt-16">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-600">
          more free resources
        </p>

        <div className="mx-auto mt-6 grid max-w-4xl gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <Link
              key={resource.slug}
              href={`/${resource.slug}`}
              className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-white/5"
            >
              <resource.icon className="mt-0.5 size-4 shrink-0 text-zinc-600 transition-colors group-hover:text-white" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-400 transition-colors group-hover:text-white">
                  {resource.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">
                  {resource.description}
                </p>
              </div>
              <ArrowRight className="mt-1 size-3 shrink-0 text-zinc-700 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-zinc-600">
        &copy; 2026 oleg melnikov
      </p>
    </footer>
  );
}

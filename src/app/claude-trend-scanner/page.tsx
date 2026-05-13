"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";

const VIDEO_ID = "gVpAjLUnD2c";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const steps = [
  {
    title: "install visual studio code",
    content: (
      <div className="space-y-3">
        <p>
          download and install VS Code from{" "}
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            code.visualstudio.com
          </a>
          .
        </p>
        <p>this is where you&apos;ll run claude code.</p>
      </div>
    ),
  },
  {
    title: "install claude code extension",
    content: (
      <div className="space-y-3">
        <p>
          open VS Code, go to the Extensions tab, and search for{" "}
          <span className="text-white font-medium">Claude Code</span>. install
          the extension and log in with your Anthropic account.
        </p>
        <p>
          the Claude Code subscription is $19/mo — it gives you access to the
          agent that builds the entire app for you.
        </p>
      </div>
    ),
  },
  {
    title: "download the source code",
    content: (
      <div className="space-y-3">
        <p>
          grab the source code from the free Skool community:{" "}
          <a
            href="https://www.skool.com/ai-automation-7100/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            skool.com/ai-automation-7100
          </a>
          .
        </p>
        <p>once downloaded, open the project folder in VS Code.</p>
      </div>
    ),
  },
  {
    title: "get your api keys",
    content: (
      <div className="space-y-4">
        <p>you need two services:</p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              Apify{" "}
              <span className="font-normal text-zinc-500">
                — scraping social platforms
              </span>
            </p>
            <p className="mt-1">
              scrapes Twitter, Reddit, TikTok, and other platforms for trending
              content. sign up at{" "}
              <a
                href="https://apify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                apify.com
              </a>{" "}
              — free tier available.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Anthropic API{" "}
              <span className="font-normal text-zinc-500">
                — analyzing trends
              </span>
            </p>
            <p className="mt-1">
              powers the AI analysis of scraped content. sign up at{" "}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                console.anthropic.com
              </a>{" "}
              — $5 minimum to start.
            </p>
          </div>
        </div>
        <p>add your keys to a .env file in the project root:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          APIFY_API_KEY=your_apify_key_here
          <br />
          ANTHROPIC_API_KEY=your_anthropic_key_here
        </div>
      </div>
    ),
  },
  {
    title: "run the app",
    content: (
      <div className="space-y-3">
        <p>open the terminal in VS Code and run:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          npm run dev
        </div>
        <p>
          open{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            localhost:3000
          </code>{" "}
          in your browser. you&apos;ll see the dashboard with trending news and
          analysis.
        </p>
      </div>
    ),
  },
  {
    title: "configure your sources",
    content: (
      <div className="space-y-3">
        <p>
          add Twitter accounts, subreddits, YouTube channels, websites, and any
          data sources relevant to your niche. the system monitors all of them.
        </p>
        <p>
          the more specific your sources, the more relevant your trend data
          will be.
        </p>
      </div>
    ),
  },
  {
    title: "set up daily briefings",
    content: (
      <div className="space-y-3">
        <p>
          configure the system to run on schedule. each morning you get a
          structured briefing with trending topics, AI-generated summaries, and
          visual cards explaining what&apos;s happening.
        </p>
        <p>
          no more manually scrolling through feeds — everything is distilled
          and ready to act on.
        </p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-4">
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              use trends for content creation
            </p>
            <p className="mt-1">
              post about trending topics early for exponential reach. being
              first to cover a trend means the algorithm pushes your content to
              more people.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              great for founders staying ahead of competitors
            </p>
            <p className="mt-1">
              monitor what&apos;s gaining traction in your industry before your
              competitors notice. use it to inform product decisions, marketing
              angles, and positioning.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              investors can monitor portfolio-relevant news
            </p>
            <p className="mt-1">
              track market shifts, competitor moves, and emerging narratives
              across your portfolio companies and their sectors.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              let AI drive conclusions and suggest actions
            </p>
            <p className="mt-1">
              don&apos;t just read the trends — let the AI analyze patterns and
              recommend specific actions based on what it finds.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ClaudeTrendScannerPage() {
  return (
    <>
      {/* Minimal header */}
      <header className="px-2">
        <div className="mx-auto mt-2 flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-[family-name:var(--font-unbounded)] tracking-tight"
          >
            oleg melnikov
          </Link>
          <Link
            href="https://www.youtube.com/@Oleg-Melnikov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            youtube
          </Link>
        </div>
      </header>

      <main>
        {/* Hero / title */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="mx-auto max-w-3xl px-6 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400"
            >
              free resource
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
            >
              claude code system for 10x more views
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              scan twitter, reddit, instagram, tiktok, youtube, and any website
              for trending topics in your niche. get a structured briefing every
              morning — automatically.
            </motion.p>
          </motion.div>
        </section>

        {/* Setup guide */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="pb-16 md:pb-20"
        >
          <div className="mx-auto max-w-3xl px-6">
            <motion.h2
              variants={fadeUp}
              className="text-sm uppercase tracking-widest text-zinc-500"
            >
              setup guide
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-8">
              <Accordion items={steps} />
            </motion.div>
          </div>
        </motion.section>

        {/* YouTube video */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="pb-24 md:pb-32"
        >
          <div className="mx-auto max-w-3xl px-6">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Claude Code System for 10x More Views"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-trend-scanner" />
    </>
  );
}

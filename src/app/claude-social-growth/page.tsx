"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";

const VIDEO_ID = "GK3JFG7x7LA";

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
        <p>
          this is where you&apos;ll run claude code and manage your analysis
          projects.
        </p>
      </div>
    ),
  },
  {
    title: "install claude code extension",
    content: (
      <div className="space-y-3">
        <p>
          open VS Code, go to the Extensions tab (left sidebar), and search for{" "}
          <span className="text-white">Claude Code</span>.
        </p>
        <p>install it and log in with your Anthropic account.</p>
        <p>
          the subscription is $19/mo — it gives you access to claude code
          directly inside VS Code.
        </p>
      </div>
    ),
  },
  {
    title: "pick your competitors",
    content: (
      <div className="space-y-3">
        <p>
          identify 10-15 creators in your niche on YouTube (or
          Instagram/TikTok).
        </p>
        <p>
          collect their channel URLs or usernames. the more competitors you
          analyze, the better the patterns claude code will find.
        </p>
      </div>
    ),
  },
  {
    title: "get your apify api key",
    content: (
      <div className="space-y-3">
        <p>
          sign up at{" "}
          <a
            href="https://apify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            apify.com
          </a>{" "}
          (free tier available) and get your API token from Settings.
        </p>
        <p>
          claude code uses Apify to scrape all competitor videos, thumbnails, and
          metadata automatically.
        </p>
      </div>
    ),
  },
  {
    title: "run the analysis",
    content: (
      <div className="space-y-4">
        <p>
          open terminal in VS Code, start claude code, and give it a prompt
          like:
        </p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-5 text-[15px] leading-relaxed text-zinc-300 italic">
          &quot;Analyze all videos from these YouTube channels: [paste URLs].
          Scrape every video, identify outliers that performed way above average,
          and analyze their titles, thumbnails, and transcripts.&quot;
        </div>
        <p>
          this takes 15-30 minutes depending on the volume of videos. in the
          video, we analyzed 1,906 videos from 14 competitors.
        </p>
      </div>
    ),
  },
  {
    title: "review the report",
    content: (
      <div className="space-y-3">
        <p>
          claude code generates a detailed report with everything you need to
          understand what&apos;s working in your niche:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-zinc-400">
          <li>outlier videos ranked by performance</li>
          <li>common hooks and title patterns</li>
          <li>thumbnail analysis</li>
          <li>content gaps</li>
          <li>topic clusters that perform best</li>
        </ul>
      </div>
    ),
  },
  {
    title: "get your personalized strategy",
    content: (
      <div className="space-y-3">
        <p>
          tell claude code about your channel and ask it to create a content
          strategy based on what it found.
        </p>
        <p>
          it&apos;ll suggest video concepts, titles, thumbnail ideas, and a
          posting schedule tailored to your niche.
        </p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
          <li>
            <span className="text-zinc-300">re-run monthly</span> to catch new
            trends and shifts in what&apos;s working
          </li>
          <li>
            <span className="text-zinc-300">analyze transcript patterns</span>{" "}
            — what story structures do top videos use?
          </li>
          <li>
            <span className="text-zinc-300">study comment sections</span> for
            video ideas your competitors haven&apos;t covered
          </li>
          <li>
            <span className="text-zinc-300">
              track your own analytics
            </span>{" "}
            and feed them back to claude code for optimization
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ClaudeSocialGrowthPage() {
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
              claude code for viral social media growth
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              analyze thousands of competitor videos, find viral outliers, and
              build a data-driven content strategy for your channel. all
              automated with claude code.
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
                  title="Claude Code for Viral Social Media Growth"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-social-growth" />
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";
import { ConsultCta } from "@/components/consult-cta";
import { ArticleJsonLd } from "@/components/json-ld";

const VIDEO_ID = "Jjz4YxtlwHQ";

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
          this is where you&apos;ll run claude code and build your outreach
          system.
        </p>
      </div>
    ),
  },
  {
    title: "install claude code extension",
    content: (
      <div className="space-y-3">
        <p>
          open VS Code, go to the Extensions tab on the left sidebar, and search
          for &quot;Claude Code&quot;. install the extension by Anthropic.
        </p>
        <p>
          claude code costs $19/mo — it gives you access to Claude directly
          inside your editor to build and modify code with natural language.
        </p>
      </div>
    ),
  },
  {
    title: "download the source code",
    content: (
      <div className="space-y-3">
        <p>
          the full source code for this outreach system is available for free
          inside the skool community.
        </p>
        <p>
          join here:{" "}
          <a
            href="https://www.skool.com/ai-automation-7100/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            skool.com/ai-automation-7100
          </a>{" "}
          — it&apos;s free. download the source code from the resources section
          and open it in VS Code.
        </p>
      </div>
    ),
  },
  {
    title: "get your api keys",
    content: (
      <div className="space-y-4">
        <p>you need three services:</p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              Apify{" "}
              <span className="font-normal text-zinc-500">
                — scraping LinkedIn leads
              </span>
            </p>
            <p className="mt-1">
              scrapes LinkedIn profiles to find and pull information about
              prospects. sign up at{" "}
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
              Kie.ai{" "}
              <span className="font-normal text-zinc-500">
                — generating custom visuals/banners
              </span>
            </p>
            <p className="mt-1">
              generates personalized visuals to send as value pieces to
              prospects. sign up at{" "}
              <a
                href="https://kie.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                kie.ai
              </a>{" "}
              and generate your API key.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Anthropic API{" "}
              <span className="font-normal text-zinc-500">
                — crafting messages
              </span>
            </p>
            <p className="mt-1">
              powers the personalized message generation. sign up at{" "}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                console.anthropic.com
              </a>{" "}
              — $5 minimum to get started.
            </p>
          </div>
        </div>
        <p>add all three keys to your .env file:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          APIFY_API_KEY=your_apify_key_here
          <br />
          KIE_API_KEY=your_kie_ai_key_here
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
          the app will start at{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            localhost:3000
          </code>
          . open it in your browser to access the dashboard.
        </p>
      </div>
    ),
  },
  {
    title: "find and import leads",
    content: (
      <div className="space-y-3">
        <p>
          use Apify to scrape LinkedIn profiles matching your ideal customer
          profile. filter by industry, role, and company size to find the right
          prospects.
        </p>
        <p>
          import the scraped leads into the dashboard. the system will organize
          them and prepare them for scoring.
        </p>
      </div>
    ),
  },
  {
    title: "score your leads",
    content: (
      <div className="space-y-3">
        <p>
          the system scores each lead from 1 to 10 based on custom criteria you
          define — engagement level, relevance to your offer, company size, and
          more.
        </p>
        <p>
          focus your outreach on the highest-scored prospects first. this is how
          you avoid wasting time on leads that won&apos;t convert.
        </p>
      </div>
    ),
  },
  {
    title: "generate personalized messages",
    content: (
      <div className="space-y-3">
        <p>
          for each prospect, the system analyzes their LinkedIn profile, creates
          a value piece (like an improved LinkedIn banner or content audit), and
          crafts a personalized message.
        </p>
        <p>
          not generic templates — each message references specific details about
          the prospect. that&apos;s why reply rates hit 35%.
        </p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-3">
        <p>four tips to maximize your results:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-white">always lead with value</span> — send an
            improved banner or content sample, not just text
          </li>
          <li>
            <span className="text-white">personalize the visual</span> — use
            their branding, colors, and style so it feels made for them
          </li>
          <li>
            <span className="text-white">follow up with a second value piece</span>{" "}
            — if no reply, don&apos;t just bump the thread. send something new
          </li>
          <li>
            <span className="text-white">track reply rates and iterate</span> —
            measure what&apos;s working and refine your messaging over time
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ClaudeB2bOutreachPage() {
  return (
    <>
      <ArticleJsonLd
        title="AI B2B Outreach with Claude Code (35% Reply Rate)"
        description="Build a hyper-personalized AI B2B outreach system with Claude Code. Find leads on LinkedIn, score them, and generate value-driven messages with custom visuals."
        url="https://oleg.ae/claude-b2b-outreach"
        datePublished="2026-05-12"
        dateModified="2026-05-13"
        videoId="Jjz4YxtlwHQ"
        videoTitle="Claude Code for B2B Outreach"
      />
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
              claude code for b2b outreach (35% reply rate)
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              build a personalized outreach system that finds leads on linkedin,
              scores them, and generates value-first messages with custom
              visuals. no generic pitches.
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
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Claude Code for B2B Outreach"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ConsultCta />
      <ResourceFooter currentSlug="claude-b2b-outreach" />
    </>
  );
}

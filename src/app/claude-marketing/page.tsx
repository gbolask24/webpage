"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";

const VIDEO_ID = "AKtT6NLZGoM";

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
          this is where you&apos;ll run claude code and build your marketing
          workflows.
        </p>
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
          the extension and sign in.
        </p>
        <p>
          claude code costs $19/mo and gives you access to the full agent — it
          writes code, runs commands, and builds entire projects from a prompt.
        </p>
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
                — scraping social media
              </span>
            </p>
            <p className="mt-1">
              scrapes social media platforms to find trending content and pull
              competitor data. sign up at{" "}
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
                — generating visuals
              </span>
            </p>
            <p className="mt-1">
              generates visual content for ads, reels, and outreach pieces. sign
              up at{" "}
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
        </div>
        <p>add both keys to a .env file in your project:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          APIFY_API_KEY=your_apify_key_here
          <br />
          KIE_API_KEY=your_kie_ai_key_here
        </div>
      </div>
    ),
  },
  {
    title: "generate instagram reels",
    content: (
      <div className="space-y-3">
        <p>
          tell claude code your brand and style guide. it generates video
          scripts, visual directions, and even rendered video content matching
          your brand identity.
        </p>
        <p>use the output for ads or organic posts.</p>
      </div>
    ),
  },
  {
    title: "scrape competitor content",
    content: (
      <div className="space-y-3">
        <p>
          claude code uses Apify to find trending reels and posts from your
          competitors. it analyzes engagement patterns, identifies what&apos;s
          working, and generates new concepts based on proven formats.
        </p>
      </div>
    ),
  },
  {
    title: "create ad campaigns",
    content: (
      <div className="space-y-3">
        <p>
          describe your product and target audience. claude code generates ad
          copy, visual assets, and targeting suggestions. works for Meta, Google,
          or any platform.
        </p>
      </div>
    ),
  },
  {
    title: "automate cold outreach",
    content: (
      <div className="space-y-3">
        <p>
          scrape leads matching your ICP, generate personalized messages with
          value pieces (improved banners, content audits), and manage outreach
          sequences.
        </p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-white font-medium">
              combine use cases
            </span>{" "}
            — scrape trends then generate content in one session
          </li>
          <li>
            <span className="text-white font-medium">
              use your brand style guide
            </span>{" "}
            for consistent visuals across all outputs
          </li>
          <li>
            <span className="text-white font-medium">
              let claude code analyze your analytics
            </span>{" "}
            to optimize what&apos;s working
          </li>
          <li>
            <span className="text-white font-medium">
              start with one use case
            </span>
            , master it, then add more
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ClaudeMarketingPage() {
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
              claude code for marketing (smm, ads, outreach)
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              five real marketing use cases with claude code — instagram reels,
              competitor analysis, ad campaigns, cold outreach, and content
              generation. all in one walkthrough.
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
                  title="Claude Code for Marketing"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-zinc-600">
        &copy; 2026 oleg melnikov
      </footer>
    </>
  );
}

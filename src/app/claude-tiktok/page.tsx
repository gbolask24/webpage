"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";
import { ArticleJsonLd } from "@/components/json-ld";

const VIDEO_ID = "lw69SOTKRM4";

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
          </a>{" "}
          — it auto-detects your OS.
        </p>
        <p>run the installer and verify VS Code launches properly.</p>
      </div>
    ),
  },
  {
    title: "install claude code",
    content: (
      <div className="space-y-3">
        <p>
          open the terminal in VS Code (Terminal → New Terminal) and run:
        </p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          npm install -g @anthropic-ai/claude-code
        </div>
        <p>
          requires Node.js (LTS). if you don&apos;t have it, download from{" "}
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            nodejs.org
          </a>
          .
        </p>
        <p>
          once installed, type{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            claude
          </code>{" "}
          in the terminal and complete Anthropic account authentication.
        </p>
      </div>
    ),
  },
  {
    title: "download the project from github",
    content: (
      <div className="space-y-3">
        <p>go to the GitHub repository:</p>
        <p>
          <a
            href="https://github.com/melnikoff-oleg/tiktok-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            github.com/melnikoff-oleg/tiktok-ai
          </a>
        </p>
        <p>
          click the green <span className="text-white">&lt;&gt; Code</span>{" "}
          button, then <span className="text-white">Download ZIP</span>. unzip
          the file and open the folder in VS Code via File → Open Folder.
        </p>
        <p>alternatively, clone it from the terminal:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          git clone https://github.com/melnikoff-oleg/tiktok-ai.git
        </div>
      </div>
    ),
  },
  {
    title: "get your api keys",
    content: (
      <div className="space-y-4">
        <p>you need three API keys:</p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              Apify{" "}
              <span className="font-normal text-zinc-500">
                — scraping TikTok
              </span>
            </p>
            <p className="mt-1">
              scrapes videos from competitor TikTok creators. create an account
              at{" "}
              <a
                href="https://apify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                apify.com
              </a>{" "}
              → Settings → Integrations and copy your Personal API Token.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Google Gemini{" "}
              <span className="font-normal text-zinc-500">
                — analyzing competitor visuals
              </span>
            </p>
            <p className="mt-1">
              analyzes video thumbnails and visual patterns from competitor
              TikToks. get your key at{" "}
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                aistudio.google.com/apikey
              </a>
              .
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Anthropic{" "}
              <span className="font-normal text-zinc-500">
                — generating concepts
              </span>
            </p>
            <p className="mt-1">
              powers the video concept and script generation engine. sign up at{" "}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                console.anthropic.com
              </a>{" "}
              → Settings → API Keys.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "configure your .env file",
    content: (
      <div className="space-y-3">
        <p>
          in the project folder, find{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            .env.example
          </code>{" "}
          (or{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            .env
          </code>
          ). duplicate it and rename to{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            .env
          </code>{" "}
          if needed.
        </p>
        <p>paste your API keys:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          APIFY_API_KEY=your_apify_key
          <br />
          GEMINI_API_KEY=your_gemini_key
          <br />
          ANTHROPIC_API_KEY=your_anthropic_key
        </div>
        <p>
          save the file. check the project README if variable names differ.
        </p>
      </div>
    ),
  },
  {
    title: "run the project",
    content: (
      <div className="space-y-3">
        <p>
          open the terminal in VS Code, type{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            claude
          </code>{" "}
          to start Claude Code, and ask it to help you run the project.
        </p>
        <p>
          claude code will install dependencies, start the app, and walk you
          through the workflow — adding TikTok creators, configuring your brand,
          and running the content pipeline.
        </p>
      </div>
    ),
  },
];

export default function ClaudeTiktokPage() {
  return (
    <>
      <ArticleJsonLd
        title="AI TikTok Content with Claude Code"
        description="Build an AI system that reverse-engineers viral TikToks in your niche and generates scroll-stopping video concepts and scripts automatically."
        url="https://oleg.ae/claude-tiktok"
        datePublished="2026-05-12"
        dateModified="2026-05-13"
        videoId="lw69SOTKRM4"
        videoTitle="Claude Code for Viral TikTok Videos"
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
              claude code for viral tiktok videos
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              reverse-engineer viral tiktoks in your niche and generate
              scroll-stopping video concepts and scripts with ai. set it up in
              10 minutes.
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
                  title="Claude Code for Viral TikTok Videos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-tiktok" />
    </>
  );
}

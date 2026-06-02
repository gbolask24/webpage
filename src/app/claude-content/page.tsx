"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";
import { ArticleJsonLd } from "@/components/json-ld";

const VIDEO_ID = "QOuH88WW7bQ";

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
    title: "get your api keys",
    content: (
      <div className="space-y-4">
        <p>you need two API keys:</p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              Apify{" "}
              <span className="font-normal text-zinc-500">
                — scraping trending content from social media
              </span>
            </p>
            <p className="mt-1">
              create an account at{" "}
              <a
                href="https://apify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                apify.com
              </a>
              , then go to Settings → Integrations and copy your Personal API
              Token.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Kie.ai{" "}
              <span className="font-normal text-zinc-500">
                — generating visuals (infographics, carousels)
              </span>
            </p>
            <p className="mt-1">
              sign up at{" "}
              <a
                href="https://kie.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                kie.ai
              </a>{" "}
              and generate your API key from account settings.
            </p>
          </div>
        </div>
        <p>store both keys somewhere safe — you&apos;ll need them in step 5.</p>
      </div>
    ),
  },
  {
    title: "get the project files",
    content: (
      <div className="space-y-3">
        <p>
          download or copy the project folder from Google Drive:
        </p>
        <p>
          <a
            href="https://drive.google.com/drive/folders/15E8VAaO7ULLYOINJOxYedvXeokegjP0D?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            open Google Drive folder
          </a>
        </p>
        <p>
          once downloaded, open the folder in VS Code via File → Open Folder.
        </p>
      </div>
    ),
  },
  {
    title: "add your api keys and run the project",
    content: (
      <div className="space-y-3">
        <p>
          open the terminal in VS Code and type{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            claude
          </code>{" "}
          to start Claude Code.
        </p>
        <p>
          insert both API keys into the project configuration — follow the
          README instructions in the project folder. claude code can help you
          set everything up if you ask it.
        </p>
      </div>
    ),
  },
];

export default function ClaudeContentPage() {
  return (
    <>
      <ArticleJsonLd
        title="AI Content Creation with Claude Code in 10 Minutes"
        description="Generate weeks of social media content with custom visuals — infographics, carousels, personal images — from a single prompt using Claude Code."
        url="https://oleg.ae/claude-content"
        datePublished="2026-05-12"
        dateModified="2026-05-13"
        videoId="QOuH88WW7bQ"
        videoTitle="Claude Code for Content Creation in 10 Minutes"
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
              claude code for content creation in 10 minutes
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              generate weeks of social media content with custom visuals —
              infographics, carousels, personal images — from a single prompt.
              works for linkedin, instagram, x, and more.
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
                  title="Claude Code for Content Creation in 10 Minutes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-content" />
    </>
  );
}

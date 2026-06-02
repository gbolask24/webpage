"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";
import { ConsultCta } from "@/components/consult-cta";
import { ArticleJsonLd } from "@/components/json-ld";

const VIDEO_ID = "KOK8-0v4mUc";

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
          this is where you&apos;ll run claude code and work on your website.
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
          <span className="text-white">Claude Code</span>. install the
          extension.
        </p>
        <p>
          claude code costs $19/mo through the Max plan. it gives you access to
          claude directly inside your editor — no copy-pasting between tabs.
        </p>
      </div>
    ),
  },
  {
    title: "open your website project",
    content: (
      <div className="space-y-3">
        <p>
          open your existing website folder in VS Code. claude code needs access
          to your project files to audit and optimize them.
        </p>
        <p>
          if you don&apos;t have a website yet, check out the{" "}
          <Link
            href="/claude-website"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            /claude-website
          </Link>{" "}
          guide first.
        </p>
      </div>
    ),
  },
  {
    title: "scrape seo knowledge",
    content: (
      <div className="space-y-3">
        <p>
          tell claude code to scrape YouTube videos about SEO and generative
          engine optimization. it extracts strategies and best practices from
          expert content, so you don&apos;t need to be an SEO expert yourself.
        </p>
        <p>
          this gives claude code a foundation of up-to-date SEO knowledge before
          it touches your site.
        </p>
      </div>
    ),
  },
  {
    title: "run the seo audit",
    content: (
      <div className="space-y-3">
        <p>
          tell claude code to audit your website. it checks meta tags, page
          titles, descriptions, heading hierarchy, image alt text, sitemap,
          robots.txt, structured data, and internal linking.
        </p>
        <p>
          you get a full report of what&apos;s missing and what needs fixing —
          prioritized by impact.
        </p>
      </div>
    ),
  },
  {
    title: "implement seo fixes",
    content: (
      <div className="space-y-4">
        <p>
          claude code implements everything from the audit. here&apos;s what it
          handles:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-zinc-400">
          <li>adds meta tags to every page</li>
          <li>
            creates{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
              sitemap.ts
            </code>{" "}
            and{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
              robots.ts
            </code>
          </li>
          <li>adds structured data (JSON-LD)</li>
          <li>fixes heading hierarchy</li>
          <li>adds canonical URLs</li>
          <li>optimizes keyword usage across pages</li>
        </ul>
      </div>
    ),
  },
  {
    title: "deploy and verify",
    content: (
      <div className="space-y-3">
        <p>
          push your changes to production. then set up{" "}
          <a
            href="https://search.google.com/search-console"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            Google Search Console
          </a>{" "}
          to track indexing and search performance.
        </p>
        <p>
          submit your sitemap, request indexing for key pages, and monitor how
          your rankings change over the next few weeks.
        </p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-4">
        <p>once the basics are in place, keep going:</p>
        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
          <li>
            set up weekly automated SEO reviews with claude code to track
            analytics and adjust your strategy
          </li>
          <li>
            write blog articles targeting long-tail keywords in your niche
          </li>
          <li>add Open Graph images for better social sharing</li>
          <li>
            monitor competitors&apos; SEO and adapt your strategy accordingly
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ClaudeSeoPage() {
  return (
    <>
      <ArticleJsonLd
        title="AI SEO Optimization with Claude Code"
        description="Let Claude Code handle your entire SEO strategy — meta tags, structured data, sitemaps, keyword research, and content optimization in one session."
        url="https://oleg.ae/claude-seo"
        datePublished="2026-05-12"
        dateModified="2026-05-13"
        videoId="KOK8-0v4mUc"
        videoTitle="Claude Code for SEO Optimization"
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
              claude code for seo optimization
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              let claude code handle your entire seo strategy — meta tags,
              structured data, sitemaps, keyword research, and ongoing
              optimization. all in one session.
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
                  title="Claude Code for SEO Optimization"
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
      <ResourceFooter currentSlug="claude-seo" />
    </>
  );
}

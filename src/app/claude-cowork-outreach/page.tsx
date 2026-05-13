"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";
import { ArticleJsonLd } from "@/components/json-ld";

const VIDEO_ID = "QoiFASDh8J8";

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
    title: "install claude cowork",
    content: (
      <div className="space-y-3">
        <p>
          claude cowork is a desktop tool from Anthropic that controls your
          computer. download it from{" "}
          <a
            href="https://claude.ai/download"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            claude.ai/download
          </a>
          .
        </p>
        <p>
          it connects to your desktop and can perform tasks on your behalf.
        </p>
      </div>
    ),
  },
  {
    title: "set up your linkedin profile",
    content: (
      <div className="space-y-3">
        <p>
          make sure your LinkedIn profile is optimized before outreach.
          professional photo, clear headline, and a compelling about section.
        </p>
        <p>
          claude cowork will be sending connections from your profile, so first
          impressions matter.
        </p>
      </div>
    ),
  },
  {
    title: "get leads with apify (free)",
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
          — the free tier gives you 5,000 leads/month.
        </p>
        <p>
          use LinkedIn scraper actors to find prospects matching your ICP —
          filter by industry, role, location, and company size.
        </p>
      </div>
    ),
  },
  {
    title: "define your outreach strategy",
    content: (
      <div className="space-y-3">
        <p>
          decide what value you&apos;ll provide in each message. not generic
          &quot;let&apos;s connect&quot; — send something useful: a content
          audit, improved banner, industry insight.
        </p>
        <p>
          tell claude cowork your service and ideal message structure so it knows
          how to craft personalized outreach.
        </p>
      </div>
    ),
  },
  {
    title: "run live outreach",
    content: (
      <div className="space-y-3">
        <p>
          open claude cowork, give it a LinkedIn profile URL, and tell it to
          research the prospect and craft a personalized message.
        </p>
        <p>
          it browses LinkedIn, reads their posts, understands their business, and
          writes a tailored message with a value piece.
        </p>
      </div>
    ),
  },
  {
    title: "send at scale",
    content: (
      <div className="space-y-3">
        <p>
          feed claude cowork a list of prospect URLs. it processes each one:
          visits their profile, analyzes their content, generates a personalized
          message, and sends the connection request with the message attached.
        </p>
      </div>
    ),
  },
  {
    title: "manage conversations",
    content: (
      <div className="space-y-3">
        <p>
          when prospects reply, claude cowork can help you continue the
          conversation and funnel toward booking a call.
        </p>
        <p>
          keep it personal — use AI for research and drafting, but review before
          sending.
        </p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5">
          <li>always lead with value, never generic pitches</li>
          <li>
            personalize visuals with prospect&apos;s branding using{" "}
            <a
              href="https://kie.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
            >
              Kie.ai
            </a>
          </li>
          <li>follow up after 3-5 days if no reply</li>
          <li>track reply rates and refine your messaging weekly</li>
        </ul>
      </div>
    ),
  },
];

export default function ClaudeCoworkOutreachPage() {
  return (
    <>
      <ArticleJsonLd
        title="Claude Cowork for Cold Outreach — AI LinkedIn Automation"
        description="Use Claude Cowork to automate LinkedIn cold outreach. Research prospects, write personalized messages, and send connection requests on autopilot."
        url="https://oleg.ae/claude-cowork-outreach"
        datePublished="2026-05-12"
        dateModified="2026-05-13"
        videoId="QoiFASDh8J8"
        videoTitle="Claude Cowork for Cold Outreach"
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
              claude cowork for cold outreach (b2b sales)
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              claude cowork browses linkedin, researches your prospects, writes
              personalized messages, and sends connections — all on autopilot
              while you focus on your business.
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
                  title="Claude Cowork for Cold Outreach"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-cowork-outreach" />
    </>
  );
}

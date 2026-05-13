"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";

const VIDEO_ID = "JhtbnZUU_8E";

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
          this is where you&apos;ll run claude code and build your reels
          pipeline.
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
          for &quot;Claude Code&quot;. install the extension and log in with your
          Anthropic account.
        </p>
        <p>
          the subscription is $19/mo and gives you access to claude code
          directly inside VS Code.
        </p>
      </div>
    ),
  },
  {
    title: "download the source code",
    content: (
      <div className="space-y-3">
        <p>
          join the free Skool community to get the source code for this project:
        </p>
        <p>
          <a
            href="https://www.skool.com/ai-automation-7100/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            https://www.skool.com/ai-automation-7100/about
          </a>
        </p>
        <p>
          once you have the files, open the project folder in VS Code.
        </p>
      </div>
    ),
  },
  {
    title: "get your api keys",
    content: (
      <div className="space-y-4">
        <p>you need three APIs:</p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              Apify{" "}
              <span className="font-normal text-zinc-500">
                — scraping Instagram
              </span>
            </p>
            <p className="mt-1">
              scrapes Instagram reels, view counts, and engagement data from
              competitor accounts. sign up at{" "}
              <a
                href="https://apify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                apify.com
              </a>
              . free tier available.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Gemini API{" "}
              <span className="font-normal text-zinc-500">
                — analyzing video content
              </span>
            </p>
            <p className="mt-1">
              analyzes the actual video content of reels — hooks, visuals,
              retention mechanisms. get your key at{" "}
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                aistudio.google.com
              </a>
              . free to use.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Anthropic API{" "}
              <span className="font-normal text-zinc-500">
                — generating scripts
              </span>
            </p>
            <p className="mt-1">
              generates ready-to-film scripts based on competitor analysis. sign
              up at{" "}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                console.anthropic.com
              </a>
              . $5 minimum deposit.
            </p>
          </div>
        </div>
        <p>add your keys to a .env file in the project root:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          APIFY_API_KEY=your_apify_key_here
          <br />
          GEMINI_API_KEY=your_gemini_key_here
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
        <p>open terminal in VS Code and run:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          npm run dev
        </div>
        <p>
          open{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            localhost:3000
          </code>{" "}
          in your browser. you&apos;ll see a dashboard with competitor tracking
          and content generation.
        </p>
      </div>
    ),
  },
  {
    title: "add instagram creators",
    content: (
      <div className="space-y-3">
        <p>
          go to the creators tab and add 5+ competitor Instagram accounts in your
          niche.
        </p>
        <p>
          the system scrapes their most viral reels, view counts, and engagement
          data.
        </p>
      </div>
    ),
  },
  {
    title: "configure your brand",
    content: (
      <div className="space-y-3">
        <p>
          go to the configs tab and define your brand context, ICP, and content
          pillars.
        </p>
        <p>
          set your analysis instructions — hook analysis, retention mechanisms,
          engagement drivers.
        </p>
        <p>
          set your generation instructions — how to adapt competitor ideas to
          your voice and niche.
        </p>
      </div>
    ),
  },
  {
    title: "run the pipeline",
    content: (
      <div className="space-y-3">
        <p>
          select your config and set parameters: posts per creator, top
          selection, and time window.
        </p>
        <p>
          the pipeline takes ~15 minutes. you&apos;ll get full scripts with
          hooks, visual direction, captions, and retention strategies.
        </p>
        <p>ready to film immediately.</p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-3">
        <p>once you&apos;re running, here are ways to get even better results:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-white">provide more brand context</span> —
            your website, other socials, brand guidelines. the more context, the
            better the scripts.
          </li>
          <li>
            <span className="text-white">analyze competitor comments</span> —
            look for content gaps and questions people are asking.
          </li>
          <li>
            <span className="text-white">
              feed your own reel performance data
            </span>{" "}
            — after 30+ posts, use your analytics to refine what works for your
            audience.
          </li>
          <li>
            <span className="text-white">
              use claude code for other marketing tasks
            </span>{" "}
            — ads, outreach, content repurposing. the same workflow applies.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ClaudeReelsPage() {
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
              claude code for viral instagram reels
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              reverse-engineer viral reels from your competitors and generate
              ready-to-film scripts with hooks, retention analysis, and visual
              direction. built in under 30 minutes.
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
                  title="Claude Code for Viral Instagram Reels"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-reels" />
    </>
  );
}

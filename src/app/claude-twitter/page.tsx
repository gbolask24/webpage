"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";

const VIDEO_ID = "JQQhT0edXXw";

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
        <p>this is where you&apos;ll run claude code and the twitter content app.</p>
      </div>
    ),
  },
  {
    title: "install claude code extension",
    content: (
      <div className="space-y-3">
        <p>
          open VS Code, go to the extensions panel on the left side, and search
          for &quot;Claude Code&quot;. install the extension and log in.
        </p>
        <p>
          you need a paid subscription (at least $19/month). once installed, you
          can interact with claude code through the chat interface in plain
          english.
        </p>
      </div>
    ),
  },
  {
    title: "download the source code",
    content: (
      <div className="space-y-3">
        <p>
          grab the project folder from the link in the{" "}
          <a
            href="https://www.skool.com/ai-automation-7100/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            free skool community
          </a>
          .
        </p>
        <p>
          open the folder in VS Code — you&apos;ll see the full project
          structure on the left side with everything ready to configure.
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
                — scraping X/Twitter
              </span>
            </p>
            <p className="mt-1">
              scrapes tweets from your competitors. sign up at{" "}
              <a
                href="https://apify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                apify.com
              </a>{" "}
              (free tier available) → Settings → Personal API Token.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Gemini API{" "}
              <span className="font-normal text-zinc-500">
                — analyzing competitor visuals
              </span>
            </p>
            <p className="mt-1">
              analyzes infographics and images from competitor posts. sign up at{" "}
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                aistudio.google.com
              </a>{" "}
              (free) → Get API Key.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              Anthropic API{" "}
              <span className="font-normal text-zinc-500">
                — generating content
              </span>
            </p>
            <p className="mt-1">
              powers the content generation engine. sign up at{" "}
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                console.anthropic.com
              </a>{" "}
              → add at least $5 credit → copy your API key.
            </p>
          </div>
        </div>
        <p>paste all three keys in the .env file:</p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 font-mono text-sm text-zinc-300">
          APIFY_API_KEY=your_apify_key
          <br />
          GEMINI_API_KEY=your_gemini_key
          <br />
          ANTHROPIC_API_KEY=your_anthropic_key
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
          in your browser. you&apos;ll see the full dashboard where you can add
          competitors, configure your brand, and run the content pipeline.
        </p>
      </div>
    ),
  },
  {
    title: "add your competitors",
    content: (
      <div className="space-y-3">
        <p>
          go to the creators tab in the dashboard. find twitter accounts in your
          niche — people who are posting content related to your offer.
        </p>
        <p>
          paste their username, select a category, and the system will scrape
          and analyze their profile automatically. add at least 5-9 creators
          for best results.
        </p>
      </div>
    ),
  },
  {
    title: "configure your brand",
    content: (
      <div className="space-y-4">
        <p>go to the configs tab and create a new configuration. define:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>your brand context and ICP (ideal customer profile)</li>
          <li>content pillars and topics</li>
          <li>
            analysis instructions — how to break down competitor posts (hooks,
            structure, engagement drivers)
          </li>
          <li>
            generation instructions — how to turn their ideas into your own
            voice and niche
          </li>
        </ul>
        <p>
          the more specific you are here, the better your generated content will
          be.
        </p>
      </div>
    ),
  },
  {
    title: "run the pipeline",
    content: (
      <div className="space-y-3">
        <p>
          go to &quot;run pipeline&quot;, select your config, and hit run. in
          advanced settings, you can control:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>how many posts to scrape per creator (default: 20)</li>
          <li>how many top posts to select (default: top 3)</li>
          <li>time window (default: past 30 days)</li>
        </ul>
        <p>
          takes about 15 minutes. you&apos;ll get ready-to-publish posts with a
          mix of infographics (60%), personal image posts (30%), and text-only
          (10%).
        </p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-white font-medium">provide more brand context</p>
          <p className="mt-1">
            tell claude code to scrape your website, LinkedIn, and Instagram to
            build a richer brand DNA for the generator.
          </p>
        </div>
        <div>
          <p className="text-white font-medium">add calls to action</p>
          <p className="mt-1">
            configure CTAs for some posts (e.g. &quot;book a 30-min
            consultation&quot;) to turn content into lead generation.
          </p>
        </div>
        <div>
          <p className="text-white font-medium">analyze competitor comments</p>
          <p className="mt-1">
            find gaps in what competitors cover by analyzing their comment
            sections — then fill those gaps in your content.
          </p>
        </div>
        <div>
          <p className="text-white font-medium">
            feed your own performance data
          </p>
          <p className="mt-1">
            once you have 30+ posts, tell claude code to analyze your
            performance and optimize future content toward what&apos;s working.
          </p>
        </div>
      </div>
    ),
  },
];

export default function ClaudeTwitterPage() {
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
              claude code x/twitter content machine
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              reverse-engineer viral tweets from your competitors and generate
              ready-to-publish content for your niche. set it up in 10 minutes.
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
                  title="Claude Code X/Twitter Content Machine"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-twitter" />
    </>
  );
}

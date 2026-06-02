"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";
import { ArticleJsonLd } from "@/components/json-ld";

const VIDEO_ID = "Na1ET0-s4CA";

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
    title: "install claude code",
    content: (
      <div className="space-y-3">
        <p>
          you can use claude code in the terminal, as a VS Code extension, or in
          the browser at{" "}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            claude.ai/code
          </a>
          .
        </p>
        <p>
          you&apos;ll need a Claude Code subscription at $19/mo. this gives you
          access to claude&apos;s coding agent that can build apps, write
          scripts, and automate workflows.
        </p>
      </div>
    ),
  },
  {
    title: "set up your personal context file",
    content: (
      <div className="space-y-3">
        <p>
          create a file called{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            CLAUDE.md
          </code>{" "}
          in your project folder. this is where you tell claude everything about
          you — your expertise, your business, your audience, and your content
          goals.
        </p>
        <p>
          the more context you give, the better the interview questions and the
          final content will be. include your niche, your unique angle, and
          examples of posts you like.
        </p>
      </div>
    ),
  },
  {
    title: "create your voice agent on ElevenLabs",
    content: (
      <div className="space-y-3">
        <p>
          go to{" "}
          <a
            href="https://elevenlabs.io/app/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            elevenlabs.io/app/agents
          </a>{" "}
          and create a new agent using the blank template. this is the
          AI interviewer that will talk to you naturally via voice.
        </p>
        <p>configure two things in the Agent tab:</p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              first message{" "}
              <span className="font-normal text-zinc-500">
                — what the agent says when the conversation starts
              </span>
            </p>
            <p className="mt-1">
              something like: &quot;hey, let&apos;s talk about what&apos;s been
              going on in your business lately. what&apos;s top of mind for you
              right now?&quot;
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              system prompt{" "}
              <span className="font-normal text-zinc-500">
                — tells the agent how to behave
              </span>
            </p>
            <p className="mt-1">
              instruct it to interview you about your expertise, ask follow-up
              questions, dig into stories and unique insights, and keep the
              conversation natural — like talking to a friend.
            </p>
          </div>
        </div>
        <p>
          pick a voice you like from the Voice tab, then hit{" "}
          <span className="text-white">&quot;Test AI agent&quot;</span> to try it
          out.
        </p>
      </div>
    ),
  },
  {
    title: "add your copywriting system",
    content: (
      <div className="space-y-4">
        <p>
          train claude on proven copywriting techniques for your platform.
          provide examples of viral posts in your niche and explain what makes
          them work.
        </p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              viral hooks{" "}
              <span className="font-normal text-zinc-500">
                — opening lines that stop the scroll
              </span>
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              storytelling frameworks{" "}
              <span className="font-normal text-zinc-500">
                — structures that keep people reading
              </span>
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              platform-specific formatting{" "}
              <span className="font-normal text-zinc-500">
                — line breaks, emojis, CTAs optimized for LinkedIn
              </span>
            </p>
          </div>
        </div>
        <p>
          the key: the interview gives you raw authentic material, and the
          copywriting system shapes it into a post that performs.
        </p>
      </div>
    ),
  },
  {
    title: "add your personal image library",
    content: (
      <div className="space-y-3">
        <p>
          upload a library of your personal photos — headshots, behind-the-scenes
          shots, event photos, workspace pics. the system picks the most relevant
          image for each post.
        </p>
        <p>
          posts with real personal images massively outperform generic AI
          visuals. authenticity is the competitive advantage.
        </p>
      </div>
    ),
  },
  {
    title: "run the interview and generate content",
    content: (
      <div className="space-y-3">
        <p>
          start a conversation with your ElevenLabs agent. spend 10-15 minutes
          just talking naturally — while cooking, walking, or during your morning
          routine.
        </p>
        <p>
          when you&apos;re done, go to the{" "}
          <span className="text-white">Call history</span> tab in the ElevenLabs
          dashboard to grab the full transcript. feed it to claude code along
          with your copywriting system — claude extracts the best content angles,
          applies your techniques, pairs it with a personal image, and produces a
          ready-to-post piece.
        </p>
      </div>
    ),
  },
  {
    title: "the simple alternative: claude voice mode",
    content: (
      <div className="space-y-3">
        <p>
          don&apos;t want to build the full system? use Claude&apos;s built-in
          voice mode as a starting point:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            open Claude and give it context about your business and content goals
          </li>
          <li>
            ask it to interview you with great questions for LinkedIn content
          </li>
          <li>
            answer via voice notes or just type your responses naturally
          </li>
          <li>
            then ask claude to turn the conversation into a LinkedIn post
          </li>
        </ul>
        <p>
          it won&apos;t be as polished as the full automated system, but
          it&apos;s a great way to start producing authentic content with minimal
          effort.
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
            interview yourself about different topics each session — business
            updates, industry insights, personal stories, lessons learned
          </li>
          <li>
            use WhisperFlow for quick voice-to-text if you prefer a chat-based
            workflow
          </li>
          <li>
            build a content calendar — one 12-minute interview can produce
            multiple posts across platforms
          </li>
          <li>
            the key insight: authentic content from real experience beats
            generic AI content every single time
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ClaudeInterviewerPage() {
  return (
    <>
      <ArticleJsonLd
        title="AI Interviewer That Makes All Your Content"
        description="Build an AI voice interviewer that turns casual conversations into viral LinkedIn posts. No writing required — just talk about your expertise."
        url="https://oleg.ae/claude-interviewer"
        datePublished="2026-05-17"
        dateModified="2026-05-17"
        videoId="Na1ET0-s4CA"
        videoTitle="My AI Interviewer Makes All My Content"
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
              AI interviewer that makes all your content
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              build a voice AI agent that interviews you about your expertise,
              then turns the conversation into ready-to-post linkedin content. no
              writing. no editing. just talk.
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
                  title="My AI Interviewer Makes All My Content"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-interviewer" />
    </>
  );
}

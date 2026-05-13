"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/accordion";
import { ResourceFooter } from "@/components/resource-footer";

const VIDEO_ID = "Iew4mx03C3s";

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
          this is where you&apos;ll run claude code and build your website.
        </p>
      </div>
    ),
  },
  {
    title: "install claude code extension",
    content: (
      <div className="space-y-3">
        <p>
          open VS Code, go to the extensions panel on the left sidebar, and
          search for &quot;Claude Code&quot;. install the extension.
        </p>
        <p>
          claude code costs $19/mo — it gives you an AI coding agent right
          inside your editor that can build entire projects from a description.
        </p>
      </div>
    ),
  },
  {
    title: "download the starter template",
    content: (
      <div className="space-y-3">
        <p>
          grab the free starter template from the{" "}
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
          download it, unzip, and open the folder in VS Code (File → Open
          Folder).
        </p>
      </div>
    ),
  },
  {
    title: "describe your website to claude",
    content: (
      <div className="space-y-4">
        <p>
          open the terminal in VS Code (Terminal → New Terminal), type{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-zinc-300">
            claude
          </code>
          , and describe what you want.
        </p>
        <p>
          tell it who you are, what you do, and what sections to include — hero,
          about, results, social links. claude code builds the full site from
          your description.
        </p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-5 text-[15px] leading-relaxed text-zinc-300 italic">
          &quot;Build me a personal website. I&apos;m [your name], I do [what
          you do]. Include a hero section with my tagline and photo, an about
          section, a results/stats section, and social links at the bottom.&quot;
        </div>
      </div>
    ),
  },
  {
    title: "customize the design",
    content: (
      <div className="space-y-3">
        <p>
          tell claude code to adjust colors, fonts, layout, and add animations.
          iterate in plain english until it looks right.
        </p>
        <div className="rounded-lg bg-white/[0.03] border border-white/10 p-5 text-[15px] leading-relaxed text-zinc-300 italic">
          &quot;Make the background darker, use a more modern font, and add
          smooth fade-in animations as sections scroll into view.&quot;
        </div>
        <p>
          no design skills needed — just describe the vibe you want and claude
          code handles the rest.
        </p>
      </div>
    ),
  },
  {
    title: "add your content",
    content: (
      <div className="space-y-3">
        <p>
          provide your photo, bio, social links, testimonials, and stats. claude
          code places everything in the right spots.
        </p>
        <p>
          drop your images into the project folder and tell claude where to use
          them. update text by simply telling it what to change.
        </p>
      </div>
    ),
  },
  {
    title: "deploy to vercel",
    content: (
      <div className="space-y-3">
        <p>
          sign up at{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            vercel.com
          </a>{" "}
          (free tier available). connect your github repo and deploy with one
          click.
        </p>
        <p>your site goes live instantly with a vercel URL.</p>
      </div>
    ),
  },
  {
    title: "connect your domain",
    content: (
      <div className="space-y-3">
        <p>
          buy a domain from namecheap, google domains, or any registrar. then in
          your vercel dashboard, go to Settings → Domains and add your domain.
        </p>
        <p>
          update the DNS records as shown in vercel — usually just an A record
          and CNAME. your site will be live on your custom domain within minutes.
        </p>
      </div>
    ),
  },
  {
    title: "level up: extra tips",
    content: (
      <div className="space-y-4">
        <p>once your site is live, here are 4 ways to take it further:</p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-medium">
              a) add analytics
            </p>
            <p className="mt-1">
              set up{" "}
              <a
                href="https://plausible.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
              >
                plausible
              </a>{" "}
              or google analytics to track visitors and see where your traffic
              comes from.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              b) optimize for SEO
            </p>
            <p className="mt-1">
              add meta tags, a sitemap, and structured data so search engines
              find and rank your site.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              c) add resource pages
            </p>
            <p className="mt-1">
              create companion pages for your youtube videos to drive traffic
              from search to your site.
            </p>
          </div>
          <div>
            <p className="text-white font-medium">
              d) keep iterating with claude code
            </p>
            <p className="mt-1">
              want to change something? just describe the change in plain
              english. no need to touch code yourself.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ClaudeWebsitePage() {
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
              build your personal website with claude code
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-zinc-400 md:text-xl"
            >
              create a professional personal website from scratch using claude
              code. no design skills needed — just describe what you want and
              deploy it live.
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
                  title="Build Your Personal Website With Claude Code"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <ResourceFooter currentSlug="claude-website" />
    </>
  );
}

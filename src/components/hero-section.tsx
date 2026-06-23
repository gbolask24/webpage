"use client";

import Image from "next/image";
import Link from "next/link";
import { TextEffect } from "@/components/motion/text-effect";
import { AnimatedGroup } from "@/components/motion/animated-group";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Radial gradient background effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate opacity-65"
      >
        <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[22rem] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="absolute left-0 top-0 h-[80rem] w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="absolute left-0 top-0 h-[80rem] w-60 -translate-y-[22rem] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <div className="relative pt-32 md:pt-44">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Top label */}
          <AnimatedGroup>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
              AI Engineer · AI Automation Architect · London, UK
            </span>
          </AnimatedGroup>

          {/* Main heading */}
          <TextEffect
            as="h1"
            delay={0.2}
            className="mx-auto mt-8 max-w-3xl text-balance text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
          >
            I build production AI that does real work.
          </TextEffect>

          {/* Subheading */}
          <TextEffect
            as="p"
            delay={0.6}
            per="line"
            className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-400 md:text-xl"
          >
            From internal tools to production AI systems, built end to end.
          </TextEffect>

          {/* CTAs */}
          <AnimatedGroup
            variants={{
              container: {
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 1 },
                },
              },
              item: {
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", bounce: 0.3, duration: 1.5 },
                },
              },
            }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              View Projects
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="#connect"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Work with me
            </Link>
          </AnimatedGroup>
        </div>

        {/* Hero image */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: {},
              visible: {
                transition: { delayChildren: 0.15 },
              },
            },
            item: {
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", bounce: 0.2, duration: 0.9 },
              },
            },
          }}
          className="mt-16 px-4 sm:px-6"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40">
            <Image
              src="/hero.png"
              alt="Gbolagade Ishola"
              width={1672}
              height={941}
              className="rounded-xl"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </AnimatedGroup>

        {/* Bottom fade */}
        <div className="pointer-events-none relative -mt-32 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}

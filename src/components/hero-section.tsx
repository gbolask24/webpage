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
              ai software entrepreneur
            </span>
          </AnimatedGroup>

          {/* Main heading */}
          <TextEffect
            as="h1"
            delay={0.2}
            className="mx-auto mt-8 max-w-3xl text-balance text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
          >
            5 years in AI. left big tech and a hedge fund to do my own thing.
          </TextEffect>

          {/* Subheading */}
          <TextEffect
            as="p"
            delay={0.6}
            per="line"
            className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-400 md:text-xl"
          >
            now i'm running a service business that's 90% AI inside — and sharing AI systems for marketing with 17K+ on youtube.
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
              href="https://www.youtube.com/@Oleg-Melnikov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              watch on youtube
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link
              href="#results"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              see my work
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </AnimatedGroup>
        </div>

        {/* Hero image */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: {},
              visible: {
                transition: { delayChildren: 1.2 },
              },
            },
            item: {
              hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { type: "spring", bounce: 0.2, duration: 2 },
              },
            },
          }}
          className="mt-16 px-4 sm:px-6"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40">
            <Image
              src="/hero.jpg"
              alt="Oleg Melnikov"
              width={1920}
              height={1080}
              className="rounded-xl"
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

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const YOUTUBE_URL = "https://youtu.be/AKtT6NLZGoM";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function VideoSection() {
  return (
    <section id="watch" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto max-w-4xl px-6"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          watch
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl text-zinc-300 md:text-2xl"
        >
          i share my journey building with ai on{" "}
          <Link
            href="https://www.youtube.com/@Oleg-Melnikov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            youtube
          </Link>
          .
        </motion.p>

        {/* Looping video preview */}
        <motion.div variants={fadeUp} className="mt-10">
          <Link
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full transition-all duration-500 group-hover:scale-105 group-hover:blur-md"
            >
              <source src="/preview.mp4" type="video/mp4" />
            </video>

            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40">
              <span className="text-xl font-medium tracking-tight opacity-0 transition-all duration-500 group-hover:opacity-100 md:text-2xl">
                watch on youtube
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-center text-zinc-500"
        >
          subscribe for weekly claude code tutorials and ai automation
          breakdowns.
        </motion.p>
      </motion.div>
    </section>
  );
}

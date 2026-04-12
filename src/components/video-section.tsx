"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const VIDEO_ID = "AKtT6NLZGoM";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function VideoSection() {
  const [playing, setPlaying] = React.useState(false);

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
            href="https://youtube.com/@oleeeg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            youtube
          </Link>
          .
        </motion.p>

        {/* Video embed */}
        <motion.div
          variants={fadeUp}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40"
        >
          {playing ? (
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            </div>
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group relative block w-full cursor-pointer"
            >
              <div className="relative aspect-video">
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Watch on YouTube"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform group-hover:scale-110 md:size-20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="black"
                      className="ml-1 size-6 md:size-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          )}
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

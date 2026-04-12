"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="mx-auto max-w-3xl px-6"
      >
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
          what i do
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          i run{" "}
          <Link
            href="https://buildauthority.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            authority ai
          </Link>{" "}
          — a done-for-you system that turns busy founders into linkedin
          authorities. one hour per week, 5 posts delivered. no ghostwriters, no
          templates — an AI interview that captures your real voice.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          i also teach ai automation and{" "}
          <Link
            href="https://youtube.com/@oleeeg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            claude code
          </Link>{" "}
          to 15,000+ subscribers on youtube.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          before this, i spent 2 years as a quantitative researcher at pinely in
          amsterdam, building high-frequency trading strategies. i left a
          ~$650k/year career because i wanted to build something of my own.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg leading-relaxed text-zinc-500"
        >
          8 months of zero revenue, zero clients, zero plan. then the first deal
          came — completely organically from youtube.
        </motion.p>
      </motion.div>
    </section>
  );
}

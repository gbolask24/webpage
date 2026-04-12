"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1M+", label: "views generated for clients" },
  { value: "16.6K", label: "youtube subscribers" },
  { value: "500K+", label: "youtube views" },
  { value: "$6,600", label: "first inbound deal for a client in 14 days" },
];

const highlights = [
  {
    title: "mike kamo",
    description:
      "co-founder of NP Digital ($100M+ agency) — 80,000 views in 2 months using authority ai. time reduced from 3+ hrs/week to 45 min.",
  },
  {
    title: "math & cs background",
    description:
      "russian national math olympiad winner (2017, 2018). international math olympiad candidate. codeforces.com master. BS math & CS from saint petersburg state university.",
  },
  {
    title: "building in public",
    description:
      "sharing the real journey — failures, wins, and everything in between. no polished highlight reel, just honest progress.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ResultsSection() {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          results
        </motion.p>

        {/* Stats grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-lg font-medium">{h.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {h.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

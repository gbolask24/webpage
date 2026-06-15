"use client";

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
        <motion.h2 variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
          About
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          I&apos;m Gbolagade, an AI engineer based in London. I design and ship production AI systems, turning large language models into reliable services that behave predictably inside secure, governed environments.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          My focus is the hard part of AI: retrieval-augmented generation, structured output validation, multi-agent automation, and AI co-pilots that take real actions rather than just chat. I build the pipelines, integrations, and monitoring that let these systems run dependably at scale.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          I work end to end, from research and prototyping through to deployment, observability, and real business impact, across customer operations, internal tooling, and content. I care about systems that are accurate, cost-aware, and accountable.
        </motion.p>
      </motion.div>
    </section>
  );
}

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
          I&apos;m Gbolagade, an AI engineer based in London. I build the software businesses actually run on, internal tools, automations, customer-facing products, and production AI systems, and I use AI to make them faster, cheaper, and smarter.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          I am not boxed into one kind of work. Some days that is a RAG pipeline or a multi-agent automation that takes real actions. Other days it is an internal tool, a back-office integration, or an open-source library that solves a problem cleanly. I go where the business problem is, and I use the right tool for it.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          I work end to end, from research and prototyping through to deployment, observability, and real business impact, across customer operations, internal tooling, ecommerce, and content. I care about systems that are accurate, cost-aware, and accountable, whether they are powered by a large language model or just good engineering.
        </motion.p>
      </motion.div>
    </section>
  );
}

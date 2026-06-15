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
          I&apos;m Gbolagade — an AI engineer based in London. I design and ship production AI systems, turning large language models into reliable services that behave predictably inside secure, governed environments.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          I started out in SEO and digital marketing, leading content and growth for a range of businesses. From there I moved into AI automation — wiring language models into ERPs, customer operations, and internal tooling for enterprise teams.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Today I lead enterprise AI work end to end: RAG architectures, multi-agent automation, prompt evaluation, and the monitoring that keeps it all reliable in production. I hold an MSc in Digital Marketing from Middlesex University, alongside AI and machine-learning certifications.
        </motion.p>
      </motion.div>
    </section>
  );
}

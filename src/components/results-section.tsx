"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Business software & internal tools",
    description:
      "The day-to-day systems a business runs on: internal tools, dashboards, integrations, and automations that remove manual work and connect the systems you already use.",
  },
  {
    title: "Production LLM & agent systems",
    description:
      "RAG pipelines, multi-agent automation, structured-output validation, and AI co-pilots that take real actions, built to behave predictably and stay reliable in production.",
  },
  {
    title: "AI for real business problems",
    description:
      "Customer operations, content, ecommerce catalogs, and back-office workflows. I use AI where it pays off and plain engineering where it does not, then ship the result.",
  },
  {
    title: "Observability, governance & open source",
    description:
      "Latency, cost, and output-validity monitoring with GDPR-aligned redaction, plus open-source tools I build and share. AI you can trust, audit, and run accountably.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ResultsSection() {
  return (
    <section id="impact" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          What I Build & The Impact
        </motion.h2>

        {/* Capabilities grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-lg font-medium">{cap.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

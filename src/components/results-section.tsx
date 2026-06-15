"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Production LLM systems",
    description:
      "RAG pipelines, structured-output validation, prompt evaluation, and multi-provider routing. AI that behaves predictably and stays reliable in production.",
  },
  {
    title: "AI co-pilots & automations",
    description:
      "Voice and chat assistants that take real actions across business tools, with confirmed writes and event-driven workflows that remove manual busywork.",
  },
  {
    title: "AI customer operations",
    description:
      "AI-first support and back-office automation across channels, handling the bulk of routine work while keeping a human in the loop where it matters.",
  },
  {
    title: "Observability & governance",
    description:
      "Latency, cost, and output-validity monitoring with PII exclusion and GDPR-aligned redaction. AI you can trust, audit, and run accountably.",
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

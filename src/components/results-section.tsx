"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Business software & internal tools",
    description:
      "The day-to-day systems a business runs on: internal tools, dashboards, integrations, and automations, in custom code or on Power Platform, that remove manual work and connect the systems you already use.",
  },
  {
    title: "Production LLM & agent systems",
    description:
      "RAG pipelines, multi-agent orchestration, agent memory, MCP servers, and AI co-pilots that take real actions behind confirmation. Evals and structured-output validation keep them predictable in production.",
  },
  {
    title: "Forward deployed delivery",
    description:
      "With clients I work inside the business. I scope the problem with the founder or operations manager, build on the systems already in place, run the launch, then train the staff and hand over. I have done this across customer operations, ecommerce catalogues, content, and back-office workflows.",
  },
  {
    title: "Observability, governance & open source",
    description:
      "Latency, cost, and output-validity monitoring with GDPR-aligned redaction, plus open-source tools and local-model experiments that I publish. You can see what a system did, what it cost, and who approved it.",
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

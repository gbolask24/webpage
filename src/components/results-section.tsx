"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Production LLM systems",
    description:
      "RAG pipelines, structured-output validation, prompt evaluation, and multi-provider routing — AI that behaves predictably and stays reliable in production.",
  },
  {
    title: "AI customer operations",
    description:
      "AI-first support across multiple channels and stores — automating the bulk of routine queries and routing the rest intelligently, while protecting customer satisfaction.",
  },
  {
    title: "Agentic content pipelines",
    description:
      "Multi-agent ingestion, enrichment, and publishing that let a small team expand a large product catalogue while cutting manual onboarding to a fraction of the time.",
  },
  {
    title: "Observability & governance",
    description:
      "Latency, cost, and output-validity monitoring with PII exclusion and GDPR-aligned redaction — AI you can trust, audit, and run accountably.",
  },
];

const credentials = [
  "MSc Digital Marketing — Middlesex University",
  "Azure AI Engineer Associate (in progress)",
  "Machine Learning Specialization — Andrew Ng",
  "RAG with LangChain",
  "Vector Databases with Pinecone",
  "Transformer Models with PyTorch",
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

        {/* Credentials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
          className="mt-16"
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
            Education & Certifications
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {credentials.map((c) => (
              <motion.span
                key={c}
                variants={fadeUp}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

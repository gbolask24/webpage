"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ConsultCta() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="pb-16 md:pb-20"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 text-center">
          <p className="text-sm text-zinc-500">
            stuck on something?{" "}
            <a
              href="https://calendly.com/authority-ai/ai-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-300 hover:decoration-zinc-500"
            >
              book a 1:1 consult
            </a>{" "}
            — bring a specific problem, leave with a clear next step.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

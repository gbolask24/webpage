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
          I&apos;m Gbolagade, an AI engineer based in London. I build the software a business runs on day to day: internal tools, customer-facing products, and the AI systems behind them.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Most of my work is agentic. I have built an assistant that triages email, runs a calendar and places calls, and a hub that joins a company&apos;s internal apps into one assistant with a memory layer behind it. Some of the work is plain engineering, such as a back-office integration or an internal tool, because that is often what the problem needs.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          I have done this in-house and on contract for clients in pharmacy, wholesale and retail. With clients I work as a forward deployed engineer. I sit down with the founder or the operations manager, build on the systems they already have, run the launch, and train their staff before I hand it over.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          Everything I ship has evals, cost tracking and an audit trail, so the people running it can see what it did and what it cost. In my own time I run open-weight models on a laptop to see how far a small one goes.
        </motion.p>
      </motion.div>
    </section>
  );
}

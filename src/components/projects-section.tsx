"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { projects } from "@/lib/projects";

/** Cards shown before the "More projects" button is pressed. */
const INITIAL_COUNT = 6;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  function toggle() {
    // Collapsing removes cards above the button, so bring the section back
    // into view instead of leaving the reader stranded further down the page.
    if (expanded) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setExpanded(!expanded);
  }

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          id="projects-grid"
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {visible.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              // The first cards fade in with the grid as it scrolls into view.
              // Cards revealed by the button mount after that has happened, so
              // they have to run their own entrance or they stay invisible.
              {...(index >= INITIAL_COUNT && {
                initial: fadeUp.hidden,
                animate: {
                  ...fadeUp.visible,
                  transition: {
                    ...fadeUp.visible.transition,
                    delay: (index - INITIAL_COUNT) * 0.08,
                  },
                },
              })}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <p className="text-lg font-medium transition-colors group-hover:text-white">
                  {project.title}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.cardDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors group-hover:text-white">
                  View case study
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {hiddenCount > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={toggle}
              aria-expanded={expanded}
              aria-controls="projects-grid"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              {expanded ? "Show fewer" : `More projects (${hiddenCount})`}
              <ChevronDown
                className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function ResourceFooter({ currentSlug = "" }: { currentSlug?: string }) {
  const filtered = projects.filter((p) => p.slug !== currentSlug);

  return (
    <footer className="mx-auto max-w-3xl px-6 pb-12">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-10 sm:px-8 sm:py-12 mt-16">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-500">
          More projects
        </p>

        <div className="mx-auto mt-6 grid max-w-4xl gap-2.5 sm:grid-cols-2">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-white/5"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-400 transition-colors group-hover:text-white">
                  {project.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">
                  {project.cardDescription}
                </p>
              </div>
              <ArrowRight className="mt-1 size-3 shrink-0 text-zinc-600 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-zinc-500">
        &copy; 2026 Gbolagade Ishola
      </p>
    </footer>
  );
}

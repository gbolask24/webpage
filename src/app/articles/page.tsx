import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, formatArticleDate } from "@/lib/articles";
import { ResourceFooter } from "@/components/resource-footer";

const DESCRIPTION =
  "Writing on AI engineering: loop engineering, agent observability and cost, enterprise context layers, ERP and cloud agents, and agentic commerce.";

export const metadata: Metadata = {
  title: "Articles",
  description: DESCRIPTION,
  alternates: { canonical: "https://gbolagade.com/articles" },
  openGraph: {
    title: "Articles · Gbolagade Ishola",
    description: DESCRIPTION,
    type: "website",
    url: "https://gbolagade.com/articles",
    siteName: "Gbolagade Ishola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles · Gbolagade Ishola",
    description: DESCRIPTION,
  },
};

export default function ArticlesIndex() {
  const articles = getAllArticles();

  return (
    <>
      {/* Minimal header */}
      <header className="px-2">
        <div className="mx-auto mt-2 flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-[family-name:var(--font-unbounded)] tracking-tight"
          >
            Gbolagade Ishola
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            Projects
          </Link>
        </div>
      </header>

      <main id="main">
        <section className="pt-16 pb-6 md:pt-24 md:pb-8">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Articles
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-zinc-400">
              Field notes on building AI that does real work: the loops, the
              context layers, the observability, and the systems agents act on.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/articles/${a.slug}`}
                    className="group block py-7 transition-colors"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
                      <time dateTime={a.date}>{formatArticleDate(a.date)}</time>
                      <span aria-hidden>·</span>
                      <span>{a.readingTime}</span>
                    </div>
                    <h2 className="mt-3 text-xl font-medium tracking-tight text-zinc-100 transition-colors group-hover:text-white sm:text-2xl">
                      {a.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-zinc-400">
                      {a.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {a.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <ResourceFooter />
    </>
  );
}

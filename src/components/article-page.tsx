"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Article } from "@/lib/articles";
import { formatArticleDate } from "@/lib/format-date";
import { ResourceFooter } from "@/components/resource-footer";
import { ArticleJsonLd } from "@/components/json-ld";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const markdownComponents: Components = {
  h2: ({ node, ...props }) => (
    <h2
      className="mt-12 text-xl font-medium tracking-tight text-white sm:text-2xl"
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="mt-8 text-lg font-medium text-white" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="mt-5 text-lg leading-relaxed text-zinc-300" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-5 text-lg leading-relaxed text-zinc-300 marker:text-zinc-600"
      {...props}
    />
  ),
  ol: ({ node, ...props }) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-5 text-lg leading-relaxed text-zinc-300 marker:text-zinc-600"
      {...props}
    />
  ),
  li: ({ node, ...props }) => <li className="pl-1.5" {...props} />,
  strong: ({ node, ...props }) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  a: ({ node, href = "", ...props }) => {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  },
  code: ({ node, ...props }) => (
    <code
      className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-zinc-200"
      {...props}
    />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="mt-6 border-l-2 border-white/20 pl-5 text-lg italic text-zinc-400"
      {...props}
    />
  ),
};

export function ArticlePage({
  article,
  more,
}: {
  article: Article;
  more: Article[];
}) {
  return (
    <>
      <ArticleJsonLd article={article} />
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
            href="/articles"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            All articles
          </Link>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="pt-16 pb-8 md:pt-24 md:pb-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="mx-auto max-w-3xl px-6"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500"
            >
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
              <span aria-hidden>·</span>
              <span>{article.readingTime}</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
            >
              {article.title}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap gap-2"
            >
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Body */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto max-w-3xl px-6 pb-16"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {article.body}
          </ReactMarkdown>
        </motion.article>

        {/* More articles */}
        {more.length > 0 && (
          <section className="mx-auto max-w-3xl px-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-10 sm:px-8 sm:py-12">
              <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-400">
                More articles
              </p>
              <div className="mx-auto mt-6 grid max-w-4xl gap-2.5 sm:grid-cols-2">
                {more.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-white/5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-zinc-400 transition-colors group-hover:text-white">
                        {a.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">
                        {a.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Projects + footer for cross-linking */}
      <ResourceFooter />
    </>
  );
}

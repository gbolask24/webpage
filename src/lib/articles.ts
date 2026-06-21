import fs from "fs";
import path from "path";
import matter from "gray-matter";

export { formatArticleDate } from "./format-date";

export interface Article {
  slug: string;
  title: string;
  /** SEO meta description (140-160 chars). */
  description: string;
  /** Short hook shown on the listing page. */
  excerpt: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  tags: string[];
  /** Markdown body. */
  body: string;
  /** Derived, e.g. "8 min read". */
  readingTime: string;
}

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function estimateReadingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

function parseArticle(slug: string): Article {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.md`), "utf8");
  const { content, data } = matter(raw);
  const meta = data as {
    title: string;
    description: string;
    excerpt: string;
    date: string;
    tags?: string[];
  };
  return {
    slug,
    title: meta.title,
    description: meta.description,
    excerpt: meta.excerpt,
    date: meta.date,
    tags: meta.tags ?? [],
    body: content.trim(),
    readingTime: estimateReadingTime(content),
  };
}

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** All articles, newest first. */
export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map(parseArticle)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): Article | undefined {
  try {
    return parseArticle(slug);
  } catch {
    return undefined;
  }
}

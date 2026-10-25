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
  /**
   * ISO date of the last change to the results or method, YYYY-MM-DD.
   * Set it only when content changed, never for typos. Feeds the sitemap
   * lastmod and the JSON-LD dateModified.
   */
  updated?: string;
  /** Short title for the <title> tag (under about 60 characters). The H1 stays `title`. */
  seoTitle?: string;
  /** Featured image, a path under /public. Shown on the page and the index. */
  image?: string;
  imageAlt?: string;
  /** 1200x630 social card, a path under /public. Served as the OG image when set. */
  ogImage?: string;
  tags: string[];
  /** Markdown body. */
  body: string;
  /** Derived, e.g. "8 min read". */
  readingTime: string;
  /** Every image the page shows: the featured image plus those in the body. */
  images: string[];
}

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function estimateReadingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

function imagesIn(body: string): string[] {
  return [...body.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)].map((m) => m[1]);
}

function parseArticle(slug: string): Article {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.md`), "utf8");
  const { content, data } = matter(raw);
  const meta = data as {
    title: string;
    description: string;
    excerpt: string;
    date: string;
    updated?: string;
    seoTitle?: string;
    image?: string;
    imageAlt?: string;
    ogImage?: string;
    tags?: string[];
  };
  const body = content.trim();
  return {
    slug,
    title: meta.title,
    description: meta.description,
    excerpt: meta.excerpt,
    date: meta.date,
    updated: meta.updated,
    seoTitle: meta.seoTitle,
    image: meta.image,
    imageAlt: meta.imageAlt,
    ogImage: meta.ogImage,
    tags: meta.tags ?? [],
    body,
    readingTime: estimateReadingTime(content),
    images: [...(meta.image ? [meta.image] : []), ...imagesIn(body)],
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

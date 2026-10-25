import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { getAllArticles } from "@/lib/articles";

const base = "https://gbolagade.com";

const day = (d: string) => new Date(`${d}T00:00:00Z`);
const latest = (dates: (string | undefined)[]) =>
  dates.filter((d): d is string => Boolean(d)).sort().pop();

// No changefreq or priority: Google ignores both, and they only add noise.
// lastmod is emitted only where a real date backs it; a made-up, churning
// value gets the whole field ignored.
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  // The index changes when an article is published or revised.
  const articlesModified = latest(
    articles.flatMap((a) => [a.date, a.updated]),
  );

  // The home page lists every project, so it changes when a case study is
  // added or revised, or when a new article appears in its footer.
  const homeModified = latest([
    ...projects.map((p) => p.updated),
    articlesModified,
  ]);

  return [
    {
      url: base,
      ...(homeModified && { lastModified: day(homeModified) }),
      images: [`${base}/hero.png`],
    },
    {
      url: `${base}/articles`,
      ...(articlesModified && { lastModified: day(articlesModified) }),
    },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      ...(p.updated && { lastModified: day(p.updated) }),
    })),
    ...articles.map((a) => ({
      url: `${base}/articles/${a.slug}`,
      lastModified: day(a.updated ?? a.date),
      ...(a.images.length && {
        images: a.images.map((src) =>
          src.startsWith("http") ? src : `${base}${src}`,
        ),
      }),
    })),
  ];
}

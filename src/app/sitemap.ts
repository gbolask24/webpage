import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gbolagade.com";
  const articles = getAllArticles();

  // Home and the articles index don't change on their own; their "last
  // modified" is really the last time new content was published. Tie lastmod
  // to the newest article date so it reflects a real change, not the build.
  const latestPublished = articles.length
    ? new Date(`${articles[0].date}T00:00:00Z`)
    : new Date();

  return [
    {
      url: base,
      lastModified: latestPublished,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/articles`,
      lastModified: latestPublished,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      // Only emit lastmod when we have a real date for it. A made-up, churning
      // value is worse than none — Google ignores lastmod if it looks unreliable.
      ...(p.updated && { lastModified: new Date(`${p.updated}T00:00:00Z`) }),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: `${base}/articles/${a.slug}`,
      lastModified: new Date(`${a.date}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

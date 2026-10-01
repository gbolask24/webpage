import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gbolagade.com";
  const articles = getAllArticles();

  // The articles index doesn't change on its own; its "last modified" is
  // really the last time an article was published. Tie lastmod to the newest
  // article date so it reflects a real change, not the build.
  const latestPublished = articles.length
    ? new Date(`${articles[0].date}T00:00:00Z`)
    : new Date();

  // The home page also lists every project, so it changes when a case study
  // is added or revised. Use whichever is newer: an article or a project.
  const latestProject = projects
    .map((p) => p.updated)
    .filter((d): d is string => Boolean(d))
    .sort()
    .pop();
  const homeModified =
    latestProject && new Date(`${latestProject}T00:00:00Z`) > latestPublished
      ? new Date(`${latestProject}T00:00:00Z`)
      : latestPublished;

  return [
    {
      url: base,
      lastModified: homeModified,
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

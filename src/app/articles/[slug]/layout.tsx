import type { Metadata } from "next";
import { getArticle } from "@/lib/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `https://gbolagade.com/articles/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: `${article.title} · Gbolagade Ishola`,
      description: article.description,
      type: "article",
      url,
      siteName: "Gbolagade Ishola",
      authors: ["Gbolagade Ishola"],
      publishedTime: article.date,
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} · Gbolagade Ishola`,
      description: article.description,
    },
    alternates: { canonical: url },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

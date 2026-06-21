import { notFound } from "next/navigation";
import {
  getArticle,
  getArticleSlugs,
  getAllArticles,
} from "@/lib/articles";
import { ArticlePage } from "@/components/article-page";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const more = getAllArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 4);
  return <ArticlePage article={article} more={more} />;
}

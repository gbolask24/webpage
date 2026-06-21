import { getArticle, getArticleSlugs } from "@/lib/articles";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Article by Gbolagade Ishola";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  return renderOgImage({
    eyebrow: "ARTICLE · GBOLAGADE ISHOLA",
    title: article?.title ?? "Article",
    subtitle: article?.tags.join("   ·   "),
  });
}

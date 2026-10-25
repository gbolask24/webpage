import fs from "fs";
import path from "path";
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
  if (article?.ogImage) {
    // A hand-made 1200x630 PNG under /public wins over the generated card.
    const file = path.join(process.cwd(), "public", article.ogImage);
    return new Response(fs.readFileSync(file), {
      headers: { "Content-Type": OG_CONTENT_TYPE },
    });
  }
  return renderOgImage({
    eyebrow: "ARTICLE · GBOLAGADE ISHOLA",
    title: article?.title ?? "Article",
    subtitle: article?.tags.join("   ·   "),
  });
}

import { getProject, projects } from "@/lib/projects";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Project case study by Gbolagade Ishola";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgImage({
    eyebrow: "PROJECT · GBOLAGADE ISHOLA",
    title: project?.title ?? "Project",
    subtitle: project?.tagline,
  });
}

import type { Metadata } from "next";
import { getProject } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `https://gbolagade.com/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
      url,
      authors: ["Gbolagade Ishola"],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
    },
    alternates: { canonical: url },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { ProjectPage } from "@/components/project-page";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}

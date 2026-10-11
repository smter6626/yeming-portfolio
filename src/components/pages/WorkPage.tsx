import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project/ProjectDetail";
import { getProjects } from "@/content/localized";
import type { Locale } from "@/lib/types";

export type WorkParams = Promise<{ slug: string }>;
export function workStaticParams(locale: Locale) { return getProjects(locale).map(project => ({ slug: project.id })); }
export async function workMetadata(locale: Locale, params: WorkParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects(locale).find(item => item.id === slug);
  return { title: project?.title ?? (locale === "zh" ? "作品" : "Work"), description: project?.summary };
}

export default async function WorkPage({ params, locale }: { params: WorkParams; locale: Locale }) {
  const { slug } = await params;
  const projects = getProjects(locale);
  const project = projects.find(item => item.id === slug);
  if (!project) notFound();
  return <main id="main" className="container detail-shell"><ProjectDetail project={project} allProjects={projects} locale={locale} /></main>;
}

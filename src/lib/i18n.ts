import type { Locale, ProjectCategory, EvidenceItem } from "./types";

// Locale is part of the static URL; internal IDs remain language-independent.
export function localePath(locale: Locale, path = "/"): string {
  return locale === "zh" ? `/zh${path === "/" ? "/" : path}` : path;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const base = pathname === "/zh" || pathname === "/zh/" ? "/" : pathname.startsWith("/zh/") ? pathname.slice(3) : pathname;
  return localePath(locale, base);
}

const categories: Record<ProjectCategory, { en: string; zh: string }> = {
  Research: { en: "Research", zh: "科研" },
  "Agent systems": { en: "AI workflows", zh: "AI 工作流" },
  "Desktop software": { en: "Desktop software", zh: "桌面软件" },
};

export function categoryLabel(category: ProjectCategory, locale: Locale): string { return categories[category][locale]; }

const evidenceKinds: Record<EvidenceItem["kind"], { en: string; zh: string }> = {
  publication: { en: "Publication", zh: "论文与技术文档" },
  implementation: { en: "Implementation", zh: "实现" },
  validation: { en: "Project record", zh: "项目记录" },
  "case-study": { en: "Case study", zh: "实践案例" },
};

export function evidenceKindLabel(kind: EvidenceItem["kind"], locale: Locale): string { return evidenceKinds[kind][locale]; }

import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { getProfile, getProjects } from "@/content/localized";
import { localePath } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function ResumePage({ locale }: { locale: Locale }) {
  const profile = getProfile(locale);
  const projects = getProjects(locale);
  const zh = locale === "zh";
  return <main id="main" className="container resume-shell"><div className="resume-heading"><div><p className="eyebrow">{zh ? "简历 / 2026 年 10 月" : "Resume / October 2026"}</p><h1>{profile.name}</h1><p>{profile.location} / <a href={`mailto:${profile.email}`}>{profile.email}</a> / <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></p></div><PrintButton locale={locale} /></div>
    <section className="resume-section"><h2>{zh ? "个人简介" : "Profile"}</h2><div className="resume-item"><p>{profile.introduction}</p></div></section>
    <section className="resume-section"><h2>{zh ? "教育经历" : "Education"}</h2>{profile.education.map(item => <article className="resume-item" key={item.institution}><h3>{item.institution}</h3><p className="resume-meta">{item.period}</p><p>{item.degree}{item.detail ? ` / ${item.detail}` : ""}</p></article>)}</section>
    <section className="resume-section"><h2>{zh ? "科研与独立技术实践" : "Research & independent technical work"}</h2>{projects.filter(item => item.category !== "Desktop software").map(project => <article className="resume-item" key={project.id}><h3><Link href={localePath(locale, `/work/${project.id}/`)}>{project.title}</Link></h3><p className="resume-meta">{project.role} / {project.timeframe}</p><p>{project.summary}</p><ul>{project.highlights.map(item => <li key={item.title}>{item.body}</li>)}</ul></article>)}</section>
    <section className="resume-section"><h2>{zh ? "软件项目" : "Software projects"}</h2>{projects.filter(item => item.category === "Desktop software").map(project => <article className="resume-item" key={project.id}><h3><Link href={localePath(locale, `/work/${project.id}/`)}>{project.title}</Link></h3><p className="resume-meta">{project.timeframe} / {project.status}</p><p>{project.tags.join(" / ")}</p><ul>{project.highlights.map(item => <li key={item.title}>{item.body}</li>)}</ul></article>)}</section>
    <section className="resume-section"><h2>{zh ? "技术能力" : "Technical skills"}</h2>{profile.skills.map(group => <article className="resume-item" key={group.label}><h3>{group.label}</h3><p>{group.items.join(zh ? "、" : ", ")}</p></article>)}</section>
  </main>;
}

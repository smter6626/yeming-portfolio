"use client";

import { useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project, ProjectCategory, Locale } from "@/lib/types";
import { categoryLabel, localePath } from "@/lib/i18n";
import styles from "./WorkIndex.module.css";
import ArrowIcon from "@/components/ArrowIcon";

const filters: ("All" | ProjectCategory)[] = ["All", "Research", "Agent systems", "Desktop software"];

export default function WorkIndex({ projects, locale }: { projects: readonly Project[]; locale: Locale }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter(project => filter === "All" || project.category === filter);
  return <>
    <div className={styles.filters} role="group" aria-label={locale === "zh" ? "筛选代表作品" : "Filter selected work"}>{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === "All" ? (locale === "zh" ? "全部" : "All") : categoryLabel(item, locale)}</button>)}</div>
    <p className={styles.count} aria-live="polite">{locale === "zh" ? `显示 ${visible.length} 个作品，共 ${projects.length} 个` : `${visible.length} of ${projects.length} works`}</p>
    <div className={styles.list}>{visible.map(project => <Link className={styles.row} href={localePath(locale, `/work/${project.id}/`)} key={project.id} style={{ "--project-color": project.color } as CSSProperties}>
      <span className={styles.number}>{project.number}</span>
      <div className={styles.copy}><div className={styles.meta}><span>{categoryLabel(project.category, locale)}</span><span>{project.status}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className={styles.tags}>{project.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div></div>
      <div className={styles.end}>{project.image ? <img className={styles.icon} src={project.image} width="64" height="64" alt="" loading="lazy" /> : <span className={styles.symbol} aria-hidden="true">{project.id === "research" ? "∑" : project.id === "governance" ? "{ }" : "[ ]"}</span>}<span className={styles.arrow}><ArrowIcon size={22} /></span></div>
    </Link>)}</div>
  </>;
}

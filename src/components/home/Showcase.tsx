"use client";

import { useState } from "react";
import Link from "next/link";
import Atlas from "@/components/atlas/Atlas";
import ArrowIcon from "@/components/ArrowIcon";
import type { Project, ProjectId, Locale } from "@/lib/types";
import { localePath, categoryLabel } from "@/lib/i18n";
import styles from "./Showcase.module.css";

export default function Showcase({ projects, locale }: { projects: readonly Project[]; locale: Locale }) {
  const [selectedId, setSelectedId] = useState<ProjectId>("1pcloop");
  const selected = projects.find(project => project.id === selectedId) ?? projects[0];
  return <div className={styles.showcase} data-work-showcase>
    <div className={styles.heading}><span>{locale === "zh" ? "作品地图" : "WORK ATLAS"}</span><span>{locale === "zh" ? "5 个作品 / 3 个方向" : "5 works / 3 fields"}</span></div>
    <Atlas projects={projects} selectedId={selectedId} onSelect={setSelectedId} locale={locale} />
    <div className={styles.selection} aria-live="polite">
      <div className={styles.selectionCopy}><span className="eyebrow" data-preview-meta style={{ color: selected.color }}>{categoryLabel(selected.category, locale)} / {selected.status}</span><h2 data-preview-heading>{selected.shortTitle}</h2><p data-preview-summary>{selected.summary}</p></div>
      <Link href={localePath(locale, `/work/${selected.id}/`)} data-preview-link className={styles.open} aria-label={locale === "zh" ? `了解${selected.title}` : `Explore ${selected.title}`}><ArrowIcon size={22} /></Link>
    </div>
  </div>;
}

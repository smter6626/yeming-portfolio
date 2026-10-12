import type { ProjectNarrativeSection } from "@/lib/types";
import styles from "./ProjectDetail.module.css";

export default function ProjectNarrative({ sections }: { sections: readonly ProjectNarrativeSection[] }) {
  return <>{sections.map((section, index) => (
    <section key={section.id} className={styles.section} id={section.id} aria-labelledby={`${section.id}-heading`}>
      <div className={styles.sectionLead}>
        <span className={styles.sectionNumber}>{String(index + 1).padStart(2, "0")}</span>
        <h2 id={`${section.id}-heading`}>{section.title}</h2>
      </div>
      <div className={styles.narrativeCopy}>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      {Boolean(section.points?.length) && <ul className={styles.narrativePoints}>{section.points?.map(point => (
        <li key={point.title}><h3>{point.title}</h3><p>{point.body}</p></li>
      ))}</ul>}
      {Boolean(section.steps?.length) && <ol className={styles.architecture}>{section.steps?.map((step, stepIndex) => (
        <li key={step.label}>
          <div className={styles.stepRail} aria-hidden="true"><span>{String(stepIndex + 1).padStart(2, "0")}</span></div>
          <div className={styles.stepContent}><h3>{step.label}</h3><p>{step.description}</p></div>
        </li>
      ))}</ol>}
    </section>
  ))}</>;
}

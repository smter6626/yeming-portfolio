import type { CSSProperties } from "react";
import type { ProjectDetailProps } from "../../lib/types";
import { categoryLabel, evidenceKindLabel, localePath } from "../../lib/i18n";
import styles from "./ProjectDetail.module.css";

const labels = {
  en: {
    allWork: "All work", work: "WORK", role: "Role", period: "Period", status: "Status",
    resources: "resources", newTab: " (opens in a new tab)", pageNav: "On this project page",
    approach: "Question & approach", contributions: "Contributions", architecture: "Architecture",
    evidence: "Results & resources", question: "The question", method: "The approach",
    myContributions: "My contributions", tools: "Tools & methods", fits: "How the work fits together",
    inspect: "Publications, code & project records",
    source: "View source", limits: "Project notes", related: "Continue exploring",
    relatedNav: "Related projects",
  },
  zh: {
    allWork: "全部项目", work: "项目", role: "职责", period: "时间", status: "状态",
    resources: "相关资源", newTab: " (在新标签页打开)", pageNav: "项目页目录",
    approach: "问题与方法", contributions: "项目贡献", architecture: "架构", evidence: "成果与资源",
    question: "要解决的问题", method: "采用的方法", myContributions: "我的贡献", tools: "工具与方法",
    fits: "各部分如何协同", inspect: "论文、源码与项目记录",
    source: "查看来源", limits: "项目说明", related: "继续探索", relatedNav: "相关项目",
  },
};

function OutboundMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={styles.outboundMark}>
      <path d="M4 12 12 4M4.5 4H12v7.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function ProjectDetail({ project, allProjects, locale }: ProjectDetailProps) {
  const text = labels[locale];
  const recordCount = locale === "zh" ? `${project.evidence.length} 项资源` : `${project.evidence.length} ${project.evidence.length === 1 ? "resource" : "resources"}`;
  const noteCount = locale === "zh" ? `${project.limitations.length} 条说明` : `${project.limitations.length} ${project.limitations.length === 1 ? "note" : "notes"}`;
  const relatedProjects = project.related.flatMap((id) => {
    const related = allProjects.find((item) => item.id === id);
    return related ? [related] : [];
  });
  const projectStyle = { "--project-color": project.color } as CSSProperties;

  return (
    <article className={styles.project} style={projectStyle} aria-labelledby="project-title">
      <div className={styles.topline}>
        <a className={styles.backLink} href={localePath(locale, "/")}>&lt;- {text.allWork}</a>
        <span className={styles.projectIndex}>{text.work} / {project.number}</span>
      </div>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{categoryLabel(project.category, locale)}</p>
          <h1 id="project-title">{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>
        {project.image && (
          <div className={styles.projectArtwork}>
            <img src={project.image} alt="" width={112} height={112} />
          </div>
        )}
      </header>

      <dl className={styles.metadata}>
        <div><dt>{text.role}</dt><dd>{project.role}</dd></div>
        <div><dt>{text.period}</dt><dd>{project.timeframe}</dd></div>
        <div><dt>{text.status}</dt><dd>{project.status}</dd></div>
      </dl>

      <div className={styles.introduction}>
        <p className={styles.summary}>{project.summary}</p>
        {project.links.length > 0 && (
          <nav className={styles.primaryLinks} aria-label={`${project.shortTitle} ${text.resources}`}>
            {project.links.map((link) => (
              <a key={`${link.kind}-${link.href}`} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}<OutboundMark /><span className={styles.srOnly}>{text.newTab}</span>
              </a>
            ))}
          </nav>
        )}
      </div>

      <nav className={styles.sectionNav} aria-label={text.pageNav}>
        <a href="#approach">{text.approach}</a>
        <a href="#contributions">{text.contributions}</a>
        <a href="#architecture">{text.architecture}</a>
        <a href="#evidence">{text.evidence}</a>
      </nav>

      <section className={styles.questionSection} id="approach" aria-labelledby="approach-heading">
        <div className={styles.sectionLead}>
          <span className={styles.sectionNumber}>01</span>
          <h2 id="approach-heading">{text.approach}</h2>
        </div>
        <div className={styles.questionGrid}>
          <div>
            <h3 className={styles.smallHeading}>{text.question}</h3>
            <p className={styles.question}>{project.question}</p>
          </div>
          <div>
            <h3 className={styles.smallHeading}>{text.method}</h3>
            <p className={styles.body}>{project.approach}</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="contributions" aria-labelledby="contributions-heading">
        <div className={styles.sectionLead}>
          <span className={styles.sectionNumber}>02</span>
          <h2 id="contributions-heading">{text.myContributions}</h2>
        </div>
        <ol className={styles.contributions}>
          {project.highlights.map((highlight, index) => (
            <li key={highlight.title}>
              <span className={styles.contributionIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.body}</p>
            </li>
          ))}
        </ol>
        {project.tags.length > 0 && (
          <div className={styles.tools}>
            <h3 className={styles.smallHeading}>{text.tools}</h3>
            <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </div>
        )}
      </section>

      <section className={styles.section} id="architecture" aria-labelledby="architecture-heading">
        <div className={styles.sectionLead}>
          <span className={styles.sectionNumber}>03</span>
          <h2 id="architecture-heading">{text.fits}</h2>
        </div>
        <ol className={styles.architecture}>
          {project.architecture.map((step, index) => (
            <li key={step.label}>
              <div className={styles.stepRail} aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className={styles.stepContent}><h3>{step.label}</h3><p>{step.description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} id="evidence" aria-labelledby="evidence-heading">
        <div className={styles.sectionLead}>
          <span className={styles.sectionNumber}>04</span>
          <h2 id="evidence-heading">{text.evidence}</h2>
        </div>
        {project.metrics.length > 0 && (
          <dl className={styles.metrics}>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd className={styles.metricValue}>{metric.value}</dd>
                <dd className={styles.metricScope}>{metric.scope}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className={styles.disclosures}>
          {project.evidence.length > 0 && <details>
            <summary><span>{text.inspect}</span><span className={styles.detailCount}>{recordCount}</span></summary>
            <div className={styles.disclosureBody}>
              <ul className={styles.evidenceList}>
                {project.evidence.map((item) => (
                  <li key={item.title}>
                    <span className={styles.evidenceKind}>{evidenceKindLabel(item.kind, locale)}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.scope && <p className={styles.evidenceScope}>{item.scope}</p>}
                    {item.href && (
                      <a className={styles.evidenceLink} href={item.href} target="_blank" rel="noopener noreferrer">
                        {text.source}<OutboundMark /><span className={styles.srOnly}>{text.newTab}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </details>}
          {project.limitations.length > 0 && <details>
            <summary><span>{text.limits}</span><span className={styles.detailCount}>{noteCount}</span></summary>
            <div className={styles.disclosureBody}>
              <ul className={styles.limitations}>{project.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
            </div>
          </details>}
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <aside className={styles.related} aria-labelledby="related-heading">
          <h2 id="related-heading">{text.related}</h2>
          <nav className={styles.relatedLinks} aria-label={text.relatedNav}>
            {relatedProjects.map((related) => (
              <a key={related.id} href={localePath(locale, `/work/${related.id}/`)}>
                <span className={styles.relatedCategory}>{categoryLabel(related.category, locale)} / {related.number}</span>
                <span className={styles.relatedTitle}>{related.shortTitle}<span aria-hidden="true">-&gt;</span></span>
                <span className={styles.relatedSubtitle}>{related.subtitle}</span>
              </a>
            ))}
          </nav>
        </aside>
      )}
    </article>
  );
}

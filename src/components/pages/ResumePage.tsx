import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { getProfile } from "@/content/localized";
import { getResume, resumeLinks, resumePdf, resumeSkills } from "@/content/resume";
import { localePath } from "@/lib/i18n";
import { sitePath } from "@/lib/site-path";
import type { Locale } from "@/lib/types";
import styles from "./ResumePage.module.css";

export default function ResumePage({ locale }: { locale: Locale }) {
  const profile = getProfile(locale);
  const cv = getResume(locale);
  const zh = locale === "zh";
  const sections = [
    { heading: zh ? "科研经历" : "Research experience", item: cv.research, id: "research" },
    { heading: zh ? "独立系统工作" : "Independent systems work", item: cv.independent, id: "governance" },
  ];

  return <main id="main" className="container resume-shell">
    <div className={`resume-heading ${styles.heading}`}>
      <div><p className="eyebrow">{cv.date}</p><h1>{profile.name}</h1>
        <p>{profile.location} / <a href={`mailto:${profile.email}`}>{profile.email}</a> / <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a> / <a href="https://smter6626.github.io/yeming-portfolio/">{zh ? "个人网页" : "Personal website"}</a></p>
      </div>
      <div className={styles.actions}>
        <a className="button-primary" href={sitePath(resumePdf)} download="Yeming_Dai_CV_2026-10-23.pdf">{zh ? "下载英文 CV（PDF）" : "Download CV (PDF)"}</a>
        <PrintButton locale={locale} />
      </div>
    </div>
    <section className="resume-section"><h2>{zh ? "研究兴趣" : "Research interests"}</h2><div className="resume-item"><p>{cv.interests}</p></div></section>
    <section className="resume-section"><h2>{zh ? "教育经历" : "Education"}</h2>{cv.education.map(item => <article className="resume-item" key={item.institution}><h3>{item.institution}</h3><p className="resume-meta">{item.period}</p><p>{item.detail}</p></article>)}</section>
    <section className="resume-section"><h2>{zh ? "论文与在审稿件" : "Publications and manuscripts"}</h2><article className="resume-item">
      <p>Adrian Ciotinga, Yeming Dai, and YooJung Choi. <a href="https://arxiv.org/abs/2607.07671" target="_blank" rel="noopener noreferrer">PeTeR: Post-Training Robustification of Probabilistic Circuits.</a></p>
      <p>{cv.publicationStatus}</p>
    </article></section>
    {sections.map(({ heading, item, id }) => <section className="resume-section" key={id}><h2>{heading}</h2><article className="resume-item">
      <h3><Link href={localePath(locale, `/work/${id}/`)}>{item.title}</Link></h3><p className="resume-meta">{item.meta}</p>
      {"context" in item && typeof item.context === "string" && <p>{item.context}</p>}
      {id === "governance" && <p className={styles.resources}>{resumeLinks.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link[locale]}</a>)}</p>}
      <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
    </article></section>)}
    <section className="resume-section"><h2>{zh ? "技术项目选集" : "Selected technical projects"}</h2>{[
      { item: cv.transcriber, id: "transcriber", href: "https://github.com/smter6626/live_subtitle_generator" },
      { item: cv.audioshifter, id: "audioshifter", href: "https://github.com/smter6626/AudioShifter" },
    ].map(({ item, id, href }) => <article className="resume-item" key={id}>
      <h3><Link href={localePath(locale, `/work/${id}/`)}>{item.title}</Link></h3><p className="resume-meta">{item.meta} / <a href={href} target="_blank" rel="noopener noreferrer">{zh ? "源码" : "Repository"}</a></p>
      <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
    </article>)}</section>
    <section className="resume-section"><h2>{zh ? "荣誉与奖学金" : "Honors and scholarships"}</h2><div className="resume-item">{cv.honors.map(honor => <p key={honor}>{honor}</p>)}</div></section>
    <section className="resume-section"><h2>{zh ? "技术能力" : "Technical skills"}</h2>{resumeSkills.map((skills, index) => <article className="resume-item" key={cv.skillLabels[index]}><h3>{cv.skillLabels[index]}</h3><p>{skills}</p></article>)}</section>
  </main>;
}

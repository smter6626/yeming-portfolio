import Link from "next/link";
import Showcase from "@/components/home/Showcase";
import WorkIndex from "@/components/home/WorkIndex";
import { getProjects, getProfile } from "@/content/localized";
import { resumeDownloadName, resumePdf } from "@/content/resume";
import { localePath } from "@/lib/i18n";
import { sitePath } from "@/lib/site-path";
import type { Locale } from "@/lib/types";
import styles from "./HomePage.module.css";

export default function HomePage({ locale }: { locale: Locale }) {
  const projects = getProjects(locale);
  const profile = getProfile(locale);
  const education = profile.education[0];
  const zh = locale === "zh";
  const projectLink = (id: string, fragment = "") => localePath(locale, `/work/${id}/${fragment ? `#${fragment}` : ""}`);
  const strengths = zh ? [
    { title: "机器学习研究", body: "概率模型稳健性与分布变化。", link: "阅读研究经历", id: "research" },
    { title: "工作流设计", body: "LLM 协作、上下文交接与独立审查。", link: "了解方法如何形成", id: "governance" },
    { title: "工程实践", body: "可恢复的执行、桌面工具与发布检查。", link: "查看编程系统", id: "1pcloop" },
  ] : [
    { title: "Machine learning research", body: "Probabilistic circuits and distribution shift.", link: "Explore the research", id: "research" },
    { title: "Workflow design", body: "LLM collaboration, context handoff, and independent review.", link: "How the method developed", id: "governance" },
    { title: "Engineering practice", body: "Recoverable execution, local tools, and release checks.", link: "Explore the coding system", id: "1pcloop" },
  ];
  const evolution = zh ? [
    { title: "单份计划的局限", body: "反复中断与恢复，使原有计划和约束容易被遗忘；历史、当前状态与不确定的未来步骤又混在一起。" },
    { title: "拆分后继续改进", body: "按更新频率分开文档改善了接手，再进一步区分已验收结果、当前任务、未解决阻碍和条件性后续计划。" },
    { title: "研究任务放大问题", body: "结构复用于研究实验后，合理的完成报告仍不能替代我来不及逐次做的独立验证。" },
    { title: "为验收加入关口", body: "从实际证据、独立审查到人工判断，逐步形成接受智能体结果的规则。" },
  ] : [
    { title: "One plan reaches its limits", body: "Interruptions made the original plan and constraints easier to forget. History, current state, and uncertain future steps were mixed together." },
    { title: "Split, then refine", body: "Separating records helped handoff. I then distinguished accepted results, the active task, unresolved blockers, and conditional next steps." },
    { title: "Research raises the stakes", body: "Reusing the structure for experiments made a gap clearer: plausible completion reports could outpace my independent checking." },
    { title: "Gate acceptance", body: "Checks of actual evidence, independent review, and human decisions became rules for accepting an agent's work." },
  ];

  return <main id="main" className="container">
    <section className={styles.intro} aria-labelledby="intro-title">
      <div>
        <p className="eyebrow">{zh ? "Yeming Dai / 计算机科学本科生" : "Yeming Dai / Computer science undergraduate"}</p>
        <h1 id="intro-title" className={styles.title}>{zh ? <>研究 AI 可靠性，<br /><em>构建可用的系统。</em></> : <>Researching reliability.<br /><em>Building useful systems.</em></>}</h1>
        <p className={styles.description}>{zh ? "我研究概率模型的稳健性，设计 LLM 智能体的审查与协作流程，并将方法用于软件与实验工作。" : "I study probabilistic-model robustness and design review workflows for LLM agents, applying the methods to software and experiment work."}</p>
        <div className={styles.academic}>
          <p className={styles.institution}>{education.institution}</p>
          <p>{education.degree} <span aria-hidden="true">/</span> GPA {education.gpa}</p>
          <p className={styles.period}>{education.period}</p>
        </div>
        <Link className={styles.publication} href={projectLink("research")}>
          <span className={styles.publicationMark}>PeTeR</span>
          <span>{zh ? "共同作者 / UAI 2026 可处理概率建模研讨会" : "Co-author / UAI 2026 Workshop on Tractable Probabilistic Modeling"}</span>
          <span aria-hidden="true">-&gt;</span>
        </Link>
        <div className="hero-actions">
          <a className="button-primary" href="#work">{zh ? "浏览作品" : "Explore my work"} <span aria-hidden="true">-&gt;</span></a>
          <a className="text-link" href={sitePath(resumePdf)} download={resumeDownloadName}>{zh ? "下载英文简历文件" : "Download my resume file"}</a>
        </div>
      </div>
      <div className={styles.strengths} aria-label={zh ? "研究、设计与工程实践" : "Research, design, and engineering"}>
        {strengths.map((strength, index) => <article className={styles.strength} key={strength.id}>
          <span className={styles.index} aria-hidden="true">0{index + 1}</span>
          <div><h2>{strength.title}</h2><p>{strength.body}</p><Link href={projectLink(strength.id)}>{strength.link} <span aria-hidden="true">-&gt;</span></Link></div>
        </article>)}
      </div>
    </section>

    <section className="section" id="evolution" aria-labelledby="evolution-title">
      <div className="section-top"><div><p className="eyebrow">{zh ? "01 / 一条设计演化线" : "01 / From practice to a reusable method"}</p><h2 id="evolution-title">{zh ? "开发中的问题，如何推动方法演化。" : "How development problems shaped the method."}</h2></div></div>
      <p className={styles.storyLead}>{zh ? "从课堂转写器到研究实验，每次改进都解决一部分问题，也暴露下一层需要检查的东西。" : "From transcriber development to research experiments, each change addressed a problem and exposed another layer that needed checking."}</p>
      <ol className={styles.evolution}>{evolution.map((step, index) => <li key={step.title}>
        <span className={styles.index}>0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p>
      </li>)}</ol>
      <div className={styles.storyLinks}>
        <Link href={projectLink("governance", "approach")}>{zh ? "审查方法如何演化" : "How the review method evolved"} <span aria-hidden="true">-&gt;</span></Link>
        <Link href={projectLink("1pcloop", "practice")}>{zh ? "编程流程的实际运行" : "The coding workflow in practice"} <span aria-hidden="true">-&gt;</span></Link>
      </div>
      <aside className={styles.releaseCase} aria-label={zh ? "工程实践案例" : "Engineering case"}>
        <p className="eyebrow">{zh ? "同一方法的发布实践 / AudioShifter" : "Release engineering with the method / AudioShifter"}</p>
        <p>{zh ? "用测试、应用包审计、版本源码与下载核对，把发布决定对应到实际文件。" : "Tests, package audits, tagged source, and download checks connected the release decision to the actual files."}</p>
        <Link href={projectLink("governance", "audioshifter-release")}>{zh ? "查看发布工程案例" : "Explore the release case"} <span aria-hidden="true">-&gt;</span></Link>
      </aside>
    </section>

    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section-top"><div><p className="eyebrow">{zh ? "02 / 代表作品" : "02 / Selected work"}</p><h2 id="work-title">{zh ? "科研、系统与软件。" : "Research, systems, and software."}</h2></div></div>
      <WorkIndex projects={projects} locale={locale} />
      <details className={styles.optionalMap}>
        <summary>{zh ? "也可以通过作品地图浏览" : "Explore through the project map"}</summary>
        <Showcase projects={projects} locale={locale} />
      </details>
    </section>

    <section className="section" id="about" aria-labelledby="about-title">
      <div className="section-top"><div><p className="eyebrow">{zh ? "03 / 关于我" : "03 / About me"}</p><h2 id="about-title">{zh ? "研究兴趣与联系。" : "Research interests & contact."}</h2></div></div>
      <div className="about-grid"><div>
        <p className="about-copy">{profile.introduction}</p>
        <p className={styles.location}>{profile.location}</p>
        <div className="hero-actions"><a href={`mailto:${profile.email}`} className="text-link">{zh ? "联系我" : "Get in touch"} <span aria-hidden="true">-&gt;</span></a><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></div>
      </div><div>{profile.skills.map(group => <article className="skill-group" key={group.label}><h3>{group.label}</h3><p>{group.items.join(" / ")}</p></article>)}</div></div>
    </section>
  </main>;
}

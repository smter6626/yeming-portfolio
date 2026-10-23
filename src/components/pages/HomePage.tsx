import Link from "next/link";
import Showcase from "@/components/home/Showcase";
import WorkIndex from "@/components/home/WorkIndex";
import { getProjects, getProfile } from "@/content/localized";
import { localePath } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import styles from "./HomePage.module.css";

export default function HomePage({ locale }: { locale: Locale }) {
  const projects = getProjects(locale);
  const profile = getProfile(locale);
  const education = profile.education[0];
  const zh = locale === "zh";
  const projectLink = (id: string) => localePath(locale, `/work/${id}/`);
  const strengths = zh ? [
    { title: "机器学习研究", body: "研究概率模型在分布变化下的稳健性，参与 PeTeR 合作研究与实验。", link: "阅读研究经历", id: "research" },
    { title: "系统设计判断", body: "从目标稳定、执行路线多变的任务中，发展可交接、可独立审查的 LLM 工作方法。", link: "了解方法如何形成", id: "governance" },
    { title: "工程实践", body: "把方法落实为可恢复的编程流程，并在桌面应用的开发、测试与发布中使用。", link: "查看编程系统", id: "1pcloop" },
  ] : [
    { title: "Machine learning research", body: "Studying probabilistic-model robustness under distribution shift, with collaborative research and experiments for PeTeR.", link: "Explore the research", id: "research" },
    { title: "System design judgment", body: "Turning changing project plans and stable goals into LLM workflows that another session can resume and review.", link: "How the method developed", id: "governance" },
    { title: "Engineering practice", body: "Implementing a recoverable coding workflow and applying the method to desktop software development, testing, and release.", link: "Explore the coding system", id: "1pcloop" },
  ];
  const evolution = zh ? [
    { title: "实际开发暴露问题", project: "课堂转写器", id: "transcriber", body: "单份计划能记录过去，却无法预写不断变化的实现路线；其他会话也需要找回当前任务。" },
    { title: "按职责抽象方法", project: "独立审查与验收", id: "governance", body: "将稳定约束与实时状态分开，使新会话能接手，再把实现与验收交给不同角色。" },
    { title: "把规则变为执行机制", project: "可恢复的 AI 编程流程", id: "1pcloop", body: "Python 调度编程与审查，核对提交和证据身份，在需要人决定时暂停。" },
    { title: "回到实际任务检验", project: "转写器中的多语言开发", id: "transcriber", body: "流程经历实现、文档补充与最终确认，再由我检查日语和法语的真实音频转写。" },
  ] : [
    { title: "A real task exposes the problem", project: "Classroom Live Transcriber", id: "transcriber", body: "One plan recorded the past but could not predict a changing implementation route. New sessions also needed to recover the current task." },
    { title: "Separate responsibilities", project: "Independent review & acceptance", id: "governance", body: "Separate stable requirements from current state for handoff, then give implementation and acceptance different roles." },
    { title: "Make the method executable", project: "Recoverable AI coding workflow", id: "1pcloop", body: "Python routes coding and review, checks commit and evidence identity, and pauses for decisions that need a person." },
    { title: "Apply it back to a real task", project: "Multilingual transcriber development", id: "transcriber", body: "The workflow handled implementation, a documentation follow-up, and final confirmation, followed by my checks with live Japanese and French audio." },
  ];

  return <main id="main" className="container">
    <section className={styles.intro} aria-labelledby="intro-title">
      <div>
        <p className="eyebrow">{zh ? "Yeming Dai / 计算机科学本科生" : "Yeming Dai / Computer science undergraduate"}</p>
        <h1 id="intro-title" className={styles.title}>{zh ? <>研究 AI 可靠性，<br /><em>构建可用的系统。</em></> : <>Researching reliability.<br /><em>Building useful systems.</em></>}</h1>
        <p className={styles.description}>{zh ? "我研究概率模型的稳健性，设计 LLM 智能体的审查与协作流程，也开发本地软件。我关注如何从实际问题中形成方法，再通过实现与检查不断改进。" : "I study probabilistic-model robustness, design review and collaboration workflows for LLM agents, and build local software. My work develops from practical problems into methods that I implement, inspect, and refine."}</p>
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
          <Link className="text-link" href={localePath(locale, "/resume/")}>{zh ? "查看简历" : "Read my resume"}</Link>
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
      <div className="section-top"><div><p className="eyebrow">{zh ? "01 / 一条设计演化线" : "01 / From practice to a reusable method"}</p><h2 id="evolution-title">{zh ? "问题如何变成方法，再回到实践。" : "A problem becomes a method, then returns to practice."}</h2></div></div>
      <p className={styles.storyLead}>{zh ? "课堂转写器开发中，目标保持稳定，执行路线却随新问题改变。这促使我拆分约束与状态；外置的上下文随后支持了跨会话接手与独立检查。" : "While building the transcriber, the goal stayed stable as the route changed with new obstacles. Separating requirements from current state made the work transferable, which then enabled independent review across sessions."}</p>
      <ol className={styles.evolution}>{evolution.map((step, index) => <li key={`${step.id}-${index}`}>
        <span className={styles.index}>0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p><Link href={projectLink(step.id)}>{step.project} <span aria-hidden="true">-&gt;</span></Link>
      </li>)}</ol>
      <aside className={styles.releaseCase} aria-label={zh ? "工程实践案例" : "Engineering case"}>
        <p className="eyebrow">{zh ? "同一方法的发布实践 / AudioShifter" : "Release engineering with the method / AudioShifter"}</p>
        <p>{zh ? "AudioShifter 的发布把这套方法用在一个更集中的工程问题上：让测试、应用包、源码版本和公开下载文件对应起来。它展示了如何根据任务风险选择需要的检查与人工决定。" : "AudioShifter applied the method to a focused engineering problem: connecting tests, the app package, tagged source, and downloadable release files. The case shows how review and human decisions can follow a task's specific risks."}</p>
        <Link href={projectLink("audioshifter")}>{zh ? "查看发布工程案例" : "Explore the release case"} <span aria-hidden="true">-&gt;</span></Link>
      </aside>
    </section>

    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section-top"><div><p className="eyebrow">{zh ? "02 / 代表作品" : "02 / Selected work"}</p><h2 id="work-title">{zh ? "科研、系统与软件。" : "Research, systems, and software."}</h2></div><p className="section-description">{zh ? "概率模型研究提供学术背景；方法、编程流程与转写器形成实践演化线；AudioShifter 展示发布工程中的应用。" : "Probabilistic-model research anchors my academic work. The method, coding workflow, and transcriber form a development story; AudioShifter adds a release-engineering case."}</p></div>
      <WorkIndex projects={projects} locale={locale} />
      <details className={styles.optionalMap}>
        <summary>{zh ? "也可以通过作品地图浏览" : "Explore through the project map"}</summary>
        <Showcase projects={projects} locale={locale} />
      </details>
    </section>

    <section className="section" id="about" aria-labelledby="about-title">
      <div className="section-top"><div><p className="eyebrow">{zh ? "03 / 关于我" : "03 / About me"}</p><h2 id="about-title">{zh ? "研究兴趣与工作方式。" : "Research interests and how I work."}</h2></div></div>
      <div className="about-grid"><div>
        <p className="about-copy">{profile.introduction}</p>
        <div className="education">{profile.education.map(item => <article key={item.institution}><h3>{item.institution}</h3><p>{item.degree}{item.gpa ? ` / GPA ${item.gpa}` : ""}</p><small>{item.period}{item.detail ? ` / ${item.detail}` : ""}</small></article>)}</div>
        <div className="hero-actions"><a href={`mailto:${profile.email}`} className="text-link">{zh ? "联系我" : "Get in touch"} <span aria-hidden="true">-&gt;</span></a><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></div>
      </div><div>{profile.skills.map(group => <article className="skill-group" key={group.label}><h3>{group.label}</h3><p>{group.items.join(" / ")}</p></article>)}</div></div>
    </section>
  </main>;
}

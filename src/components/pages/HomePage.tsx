import Link from "next/link";
import Showcase from "@/components/home/Showcase";
import WorkIndex from "@/components/home/WorkIndex";
import { getProjects, getProfile } from "@/content/localized";
import { localePath } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function HomePage({ locale }: { locale: Locale }) {
  const projects = getProjects(locale);
  const profile = getProfile(locale);
  const zh = locale === "zh";
  return <main id="main" className="container">
    <section className="hero" aria-labelledby="intro-title">
      <div className="hero-copy"><p className="eyebrow">{zh ? "计算机科学 / 亚利桑那州立大学" : "Computer science / Arizona State University"}</p>
        <h1 id="intro-title">{zh ? <>让复杂系统<br /><em>真正有用。</em></> : <>Making complex<br />systems <em>useful.</em></>}</h1>
        <p className="hero-description">{zh ? "我是 Yeming，关注 AI 系统的可靠性。我研究概率模型的稳健性，设计独立审查与验收方法，并开发可追溯的编程流程和本地学习工具。" : "I'm Yeming. I work on AI reliability through probabilistic-model robustness, independent review and acceptance, and inspectable coding workflows. I also build local tools for learning."}</p>
        <div className="hero-actions"><a className="button-primary" href="#work">{zh ? "浏览作品" : "Explore my work"} <span aria-hidden="true">-&gt;</span></a><Link className="text-link" href={localePath(locale, "/resume/")}>{zh ? "查看简历" : "Read my resume"}</Link></div>
        <p className="hero-note">{zh ? "美国亚利桑那州坦佩 / 计算机科学学士，预计 2026 年 12 月毕业" : "Tempe, Arizona / B.S. Computer Science, Dec 2026"}</p>
      </div><Showcase projects={projects} locale={locale} />
    </section>
    <section className="section" id="work" aria-labelledby="work-title"><div className="section-top"><div><p className="eyebrow">{zh ? "01 / 代表作品" : "01 / Selected work"}</p><h2 id="work-title">{zh ? <>不同的问题。<br />同样细致的实践。</> : <>Different questions.<br />A shared care for detail.</>}</h2></div><p className="section-description">{zh ? "了解每个项目的设计思路、技术实现与成果。" : "Explore the ideas, implementation, and results behind each project."}</p></div><WorkIndex projects={projects} locale={locale} /></section>
    <section className="section" id="about" aria-labelledby="about-title"><div className="section-top"><div><p className="eyebrow">{zh ? "02 / 关于我" : "02 / A little context"}</p><h2 id="about-title">{zh ? "抽象问题，构建自动化。" : "Turning patterns into automation."}</h2></div></div><div className="about-grid"><div><p className="about-copy">{profile.introduction}</p><div className="education">{profile.education.map(item => <article key={item.institution}><h3>{item.institution}</h3><p>{item.degree}</p><small>{item.period}{item.detail ? ` / ${item.detail}` : ""}</small></article>)}</div><div className="hero-actions"><a href={`mailto:${profile.email}`} className="text-link">{zh ? "联系我" : "Get in touch"} <span aria-hidden="true">-&gt;</span></a><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></div></div><div>{profile.skills.map(group => <article className="skill-group" key={group.label}><h3>{group.label}</h3><p>{group.items.join(" / ")}</p></article>)}</div></div></section>
  </main>;
}

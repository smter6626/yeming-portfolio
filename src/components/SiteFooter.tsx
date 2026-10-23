import { getProfile } from "@/content/localized";
import { localePath } from "@/lib/i18n";
import { sitePath } from "@/lib/site-path";
import type { Locale } from "@/lib/types";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const profile = getProfile(locale);
  return <footer className="site-footer"><div className="container footer-inner">
    <p>Yeming Dai / {profile.location}<br />{locale === "zh" ? "科研、软件，以及连接它们的实践。" : "Research, software, and the work between."}</p>
    <div className="footer-links"><a href={`mailto:${profile.email}`}>{locale === "zh" ? "邮件" : "Email"}</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={sitePath(localePath(locale, "/#work"))}>{locale === "zh" ? "返回作品" : "Back to work"}</a></div>
  </div></footer>;
}

import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import LanguageSwitch from "./LanguageSwitch";
import { localePath } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function SiteHeader({ locale }: { locale: Locale }) {
  return <header className="site-header">
    <div className="container header-inner">
      <Link href={localePath(locale)} className="brand" aria-label={locale === "zh" ? "Yeming Dai 主页" : "Yeming Dai home"}><span className="brand-mark" aria-hidden="true">YD</span>Yeming Dai</Link>
      <div className="header-tools"><nav className="site-nav" aria-label={locale === "zh" ? "主导航" : "Main navigation"}>
        <Link href={localePath(locale, "/#work")}>{locale === "zh" ? "作品" : "Work"}</Link>
        <Link className="nav-about" href={localePath(locale, "/#about")}>{locale === "zh" ? "关于我" : "About"}</Link>
        <Link className="nav-resume" href={localePath(locale, "/resume/")}>{locale === "zh" ? "简历" : "Resume"} <ArrowIcon size={14} /></Link>
      </nav><LanguageSwitch locale={locale} /></div>
    </div>
  </header>;
}

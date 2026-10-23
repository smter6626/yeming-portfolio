"use client";

import { usePathname } from "next/navigation";
import { switchLocalePath } from "@/lib/i18n";
import { sitePath } from "@/lib/site-path";
import type { Locale } from "@/lib/types";

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  function selectLanguage(next: Locale) {
    if (next === locale) return;
    window.location.assign(sitePath(switchLocalePath(pathname, next)) + window.location.search + window.location.hash);
  }
  return <div className="language-switch" role="group" aria-label={locale === "zh" ? "选择语言" : "Choose language"}>
    <button type="button" lang="en" aria-pressed={locale === "en"} onClick={() => selectLanguage("en")} aria-label="Switch to English">EN</button>
    <button type="button" lang="zh-Hans" aria-pressed={locale === "zh"} onClick={() => selectLanguage("zh")} aria-label="切换为中文">中文</button>
    <noscript><a href={sitePath(switchLocalePath(pathname, locale === "en" ? "zh" : "en"))}>{locale === "en" ? "中文" : "English"}</a></noscript>
  </div>;
}

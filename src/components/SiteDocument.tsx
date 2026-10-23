import type { Metadata, Viewport } from "next";
import type { Locale } from "@/lib/types";
import { sitePath } from "@/lib/site-path";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#101411" };
export function siteMetadata(locale: Locale): Metadata {
  return {
    title: { default: locale === "zh" ? "Yeming Dai | 科研与软件" : "Yeming Dai | Research & Software", template: "%s | Yeming Dai" },
    description: locale === "zh" ? "概率机器学习研究、AI 编程流程和本地桌面软件。了解 Yeming Dai 的项目、技术实现与研究成果。" : "Probabilistic machine learning, AI coding workflows, and local desktop software. Explore Yeming Dai's projects, implementation, and research.",
    icons: { icon: sitePath("/favicon.svg") },
  };
}

export default function SiteDocument({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return <html lang={locale === "zh" ? "zh-Hans" : "en"}><body><a className="skip-link" href="#main">{locale === "zh" ? "跳至正文" : "Skip to content"}</a><SiteHeader locale={locale} />{children}<SiteFooter locale={locale} /></body></html>;
}

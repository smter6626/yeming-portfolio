import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Page not found / 页面未找到" };
export default function GlobalNotFound() {
  return <html lang="en"><body><main className="container not-found"><p className="eyebrow">404</p><h1>Page not found <span lang="zh-Hans">/ 页面未找到</span></h1><p>Explore the work from the homepage. <span lang="zh-Hans">请从主页继续浏览作品。</span></p><div className="hero-actions"><a href="/" className="button-primary">English homepage</a><a href="/zh/" className="button-primary" lang="zh-Hans">中文主页</a></div></main></body></html>;
}

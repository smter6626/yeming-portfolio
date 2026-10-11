import Link from "next/link";
export default function NotFound() { return <main id="main" className="container not-found"><p className="eyebrow">404 / 页面未找到</p><h1>这里没有这个页面。</h1><p>请从主页继续浏览作品。</p><div><Link href="/zh/" className="button-primary">返回主页</Link></div></main>; }

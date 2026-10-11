import SiteDocument, { siteMetadata, viewport } from "@/components/SiteDocument";
import "@/app/globals.css";

export const metadata = siteMetadata("zh");
export { viewport };
export default function ChineseLayout({ children }: { children: React.ReactNode }) { return <SiteDocument locale="zh">{children}</SiteDocument>; }

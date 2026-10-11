import SiteDocument, { siteMetadata, viewport } from "@/components/SiteDocument";
import "@/app/globals.css";

export const metadata = siteMetadata("en");
export { viewport };
export default function EnglishLayout({ children }: { children: React.ReactNode }) { return <SiteDocument locale="en">{children}</SiteDocument>; }

import type { Metadata } from "next";
import ResumePage from "@/components/pages/ResumePage";
export const metadata: Metadata = { title: "下载简历", description: "下载 Yeming Dai 的两页英文 PDF 简历。" };
export default function Page() { return <ResumePage locale="zh" />; }

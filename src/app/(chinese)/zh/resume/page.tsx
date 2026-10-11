import type { Metadata } from "next";
import ResumePage from "@/components/pages/ResumePage";
export const metadata: Metadata = { title: "简历", description: "Yeming Dai 的科研、教育、技术能力与代表软件项目。" };
export default function Page() { return <ResumePage locale="zh" />; }

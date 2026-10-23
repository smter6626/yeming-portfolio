import type { Metadata } from "next";
import ResumePage from "@/components/pages/ResumePage";
export const metadata: Metadata = { title: "Download resume", description: "Download Yeming Dai's two-page English CV as a PDF." };
export default function Page() { return <ResumePage locale="en" />; }

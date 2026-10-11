import type { Metadata } from "next";
import ResumePage from "@/components/pages/ResumePage";
export const metadata: Metadata = { title: "Resume", description: "Yeming Dai's research, education, technical skills, and selected software projects." };
export default function Page() { return <ResumePage locale="en" />; }

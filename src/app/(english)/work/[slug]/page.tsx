import WorkPage, { workStaticParams, workMetadata, type WorkParams } from "@/components/pages/WorkPage";
export const dynamicParams = false;
export function generateStaticParams() { return workStaticParams("en"); }
export function generateMetadata({ params }: { params: WorkParams }) { return workMetadata("en", params); }
export default function Page({ params }: { params: WorkParams }) { return <WorkPage locale="en" params={params} />; }

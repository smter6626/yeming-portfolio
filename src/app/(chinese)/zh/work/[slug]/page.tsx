import WorkPage, { workStaticParams, workMetadata, type WorkParams } from "@/components/pages/WorkPage";
export const dynamicParams = false;
export function generateStaticParams() { return workStaticParams("zh"); }
export function generateMetadata({ params }: { params: WorkParams }) { return workMetadata("zh", params); }
export default function Page({ params }: { params: WorkParams }) { return <WorkPage locale="zh" params={params} />; }

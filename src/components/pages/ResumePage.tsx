import { resumeDownloadName, resumePdf } from "@/content/resume";
import { sitePath } from "@/lib/site-path";
import type { Locale } from "@/lib/types";
import styles from "./ResumePage.module.css";

// Keep existing bookmarked routes as download entries, not a second CV representation.
export default function ResumePage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return <main id="main" className={`container ${styles.download}`}>
    <p className="eyebrow">Yeming Dai / CV</p>
    <h1>{zh ? "简历下载" : "Resume download"}</h1>
    <p>{zh ? "英文 PDF，2 页。" : "English PDF, 2 pages."}</p>
    <a className="button-primary" href={sitePath(resumePdf)} download={resumeDownloadName}>
      {zh ? "下载英文简历文件" : "Download my resume file"}
    </a>
  </main>;
}

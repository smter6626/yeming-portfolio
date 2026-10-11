"use client";
import type { Locale } from "@/lib/types";

export default function PrintButton({ locale }: { locale: Locale }) {
  return <button className="button-primary print-button" type="button" onClick={() => window.print()}>{locale === "zh" ? "打印 / 保存为 PDF" : "Print / save as PDF"}</button>;
}

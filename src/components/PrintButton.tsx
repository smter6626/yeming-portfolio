"use client";
import type { Locale } from "@/lib/types";

export default function PrintButton({ locale }: { locale: Locale }) {
  return <button className="button-primary print-button" type="button" onClick={() => window.print()}>{locale === "zh" ? "打印网页" : "Print webpage"}</button>;
}

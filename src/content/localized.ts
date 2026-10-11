import { projects } from "./projects";
import { projectsZh } from "./projects.zh";
import { profile } from "./profile";
import { profileZh } from "./profile.zh";
import type { Locale } from "@/lib/types";

export function getProjects(locale: Locale) { return locale === "zh" ? projectsZh : projects; }
export function getProfile(locale: Locale) { return locale === "zh" ? profileZh : profile; }

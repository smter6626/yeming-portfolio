export type Locale = "en" | "zh";
export type ProjectId = "research" | "governance" | "1pcloop" | "transcriber" | "audioshifter";
export type ProjectCategory = "Research" | "Agent systems" | "Desktop software";

export interface ResourceLink {
  label: string;
  href: string;
  kind: "source" | "paper" | "release" | "publication";
}

export interface EvidenceItem {
  title: string;
  description: string;
  kind: "publication" | "implementation" | "validation" | "case-study";
  scope: string;
  href?: string;
}

export interface ProjectNarrativeSection {
  id: string;
  title: string;
  navLabel: string;
  paragraphs: string[];
  points?: { id?: string; title: string; body: string }[];
  steps?: { label: string; description: string }[];
}

export interface Project {
  id: ProjectId;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  summary: string;
  category: ProjectCategory;
  role: string;
  timeframe: string;
  status: string;
  color: string;
  tags: string[];
  image?: string;
  question: string;
  approach: string;
  narrative?: ProjectNarrativeSection[];
  highlights: { title: string; body: string }[];
  resumeHighlights?: string[];
  architecture: { label: string; description: string }[];
  metrics: { value: string; label: string; scope: string }[];
  evidence: EvidenceItem[];
  limitations: string[];
  links: ResourceLink[];
  related: ProjectId[];
}

export interface Profile {
  name: string;
  initials: string;
  location: string;
  email: string;
  github: string;
  headline: string;
  introduction: string;
  resumeSummary?: string;
  education: { institution: string; degree: string; period: string; gpa?: string; detail?: string }[];
  skills: { label: string; items: string[] }[];
}

export interface AtlasProps {
  locale: Locale;
  projects: readonly Project[];
  selectedId: ProjectId;
  onSelect: (id: ProjectId) => void;
}

export interface ProjectDetailProps {
  locale: Locale;
  project: Project;
  allProjects: readonly Project[];
}

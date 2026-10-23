import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Yeming Dai",
  initials: "YD",
  location: "Tempe, Arizona",
  email: "ydai65@asu.edu",
  github: "https://github.com/smter6626",
  headline: "Abstract thinking. Workflow design. Automation.",
  introduction:
    "I enjoy turning repetitive work into reusable systems. I start by separating what must stay fixed from what new evidence can change, and which decisions a system can make from those that need a person. I apply that thinking to AI review workflows and local software, from preserving original transcripts to recovering interrupted work. My research interests center on AI reliability and trustworthy automation.",
  resumeSummary: "Computer science undergraduate interested in AI reliability and trustworthy LLM agents, with experience in probabilistic-model research, workflow design, and desktop application engineering.",
  education: [
    {
      institution: "Arizona State University",
      degree: "B.S. in Computer Science",
      period: "Jan 2024 - expected Dec 2026",
      gpa: "4.0/4.0",
      detail: "Dean's List: Spring 2024, Fall 2024, Spring 2025, Fall 2025.",
    },
  ],
  skills: [
    { label: "Languages", items: ["Python", "Java", "JavaScript", "C/C++", "HTML/CSS", "Bash"] },
    { label: "Research", items: ["PyTorch", "CUDA", "Triton", "PyJuice", "NumPy", "Slurm"] },
    { label: "Desktop and audio", items: ["PySide6", "Tkinter", "whisper.cpp", "Metal", "FFmpeg", "Rubber Band", "PyInstaller"] },
    { label: "Verification", items: ["Git", "pytest", "JSON Schema", "Linux", "macOS", "Apple Silicon"] },
  ],
};

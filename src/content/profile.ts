import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Yeming Dai",
  initials: "YD",
  location: "Tempe, Arizona",
  email: "ydai65@asu.edu",
  github: "https://github.com/smter6626",
  headline: "Abstract thinking. Workflow design. Automation.",
  introduction:
    "My research interests are AI reliability and trustworthy LLM agents. I want to understand how an AI system's outputs can remain open to inspection as tasks, evidence, and sessions change. I also develop local tools for classroom and music learning.",
  resumeSummary: "Computer science undergraduate interested in AI reliability and trustworthy LLM agents, with experience in probabilistic-model research, workflow design, and desktop application engineering.",
  education: [
    {
      institution: "Arizona State University",
      degree: "B.S. in Computer Science (Software Engineering)",
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

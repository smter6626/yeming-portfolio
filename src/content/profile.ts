import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Yeming Dai",
  initials: "YD",
  location: "Tempe, Arizona",
  email: "ydai65@asu.edu",
  github: "https://github.com/smter6626",
  headline: "Abstract thinking. Workflow design. Automation.",
  introduction:
    "I'm good at finding patterns in complex problems and turning repetitive tasks into clear, reusable workflows. I enjoy building automation that handles tedious steps and makes more room for judgment and creative work.",
  education: [
    {
      institution: "Arizona State University",
      degree: "B.S. in Computer Science",
      period: "Expected December 2026",
      detail: "GPA 4.0/4.0. Dean's List: Spring 2024, Fall 2024, Spring 2025, Fall 2025.",
    },
  ],
  skills: [
    { label: "Languages", items: ["Python", "Java", "JavaScript", "C/C++", "HTML/CSS", "Bash"] },
    { label: "Research", items: ["PyTorch", "CUDA", "Triton", "PyJuice", "NumPy", "Slurm"] },
    { label: "Desktop and audio", items: ["PySide6", "Tkinter", "whisper.cpp", "Metal", "FFmpeg", "Rubber Band", "PyInstaller"] },
    { label: "Verification", items: ["Git", "pytest", "JSON Schema", "Linux", "macOS", "Apple Silicon"] },
  ],
};

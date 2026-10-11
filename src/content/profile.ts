import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Yeming Dai",
  initials: "YD",
  location: "Tempe, Arizona",
  email: "ydai65@asu.edu",
  github: "https://github.com/smter6626",
  headline: "Machine learning research. Reliable AI workflows. Software people can use.",
  introduction:
    "I'm a Computer Science undergraduate at Arizona State University. I run reproducible machine learning experiments, build AI coding workflows that can be reviewed and resumed, and create desktop tools for learning. I carry ideas through implementation, testing, and public release.",
  education: [
    {
      institution: "Arizona State University",
      degree: "B.S. in Computer Science",
      period: "Expected December 2026",
      detail: "GPA 4.0/4.0. Dean's List: Spring 2024, Fall 2024, Spring 2025, Fall 2025.",
    },
    {
      institution: "Anhui University of Science and Technology",
      degree: "Undergraduate studies in Software Engineering",
      period: "September 2021 - June 2023",
    },
  ],
  skills: [
    { label: "Languages", items: ["Python", "Java", "JavaScript", "C/C++", "HTML/CSS", "Bash"] },
    { label: "Research", items: ["PyTorch", "CUDA", "Triton", "PyJuice", "NumPy", "Slurm"] },
    { label: "Desktop and audio", items: ["PySide6", "Tkinter", "whisper.cpp", "Metal", "FFmpeg", "Rubber Band", "PyInstaller"] },
    { label: "Verification", items: ["Git", "pytest", "JSON Schema", "Linux", "macOS", "Apple Silicon"] },
  ],
};

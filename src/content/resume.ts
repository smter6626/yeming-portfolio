import type { Locale } from "@/lib/types";

export const resumePdf = "/cv/Yeming_Dai_CV_2026-10-23.pdf";

const content = {
  en: {
    date: "CV / October 23, 2026",
    interests: "Reliable LLM agents; verification and evaluation; human oversight and state tracking in long-running agent workflows; robust machine learning.",
    education: [
      { institution: "Arizona State University", period: "Jan 2024-Dec 2026 (expected)", detail: "B.S. in Computer Science (Software Engineering) | GPA: 4.0/4.0" },
      { institution: "Northern Arizona University", period: "Dec 2025-Jan 2026", detail: "Non-degree physics coursework" },
      { institution: "Anhui University of Science and Technology", period: "Sep 2021-Jul 2023", detail: "Software Engineering undergraduate studies; no degree awarded" },
    ],
    publicationStatus: "Workshop paper: UAI 2026 Workshop on Tractable Probabilistic Modeling (published). Extended manuscript: AISTATS 2027 (under review).",
    research: {
      title: "Undergraduate Researcher in Probabilistic Models", meta: "Arizona State University | Mar 2026-Present", context: "Research on post-training robustness of probabilistic circuits under distribution shift.",
      bullets: [
        "Identified probability-normalization drift under direct optimizer updates; validated post-update clamping and renormalization while preserving gradient propagation.",
        "Investigated a label-alignment confound in random-embedding evaluation; repeated the analysis with fixed labels and ruled out label mismatch as the cause of poor clustering.",
        "Executed and audited a PeTeR sweep covering 3,360 hyperparameter configurations, recording numerical failures at high learning rates.",
        "Ran and audited GPU experiments across 28 datasets; reconstructed the CUDA/PyTorch/Triton/PyJuice runtime and selected concurrency from measured GPU usage.",
        "Connected training and evaluation across two codebases through compatible model serialization; built a reviewer-facing runner with packaged datasets and CSV export.",
      ],
    },
    independent: {
      title: "LLM Agent Workflows and Independent Review", meta: "Independent project | 2026",
      bullets: [
        "Separated stable requirements from changing task state, but found that future plans still depended on execution results. Distinguished accepted results, the current task, and conditional next steps so plans could be revised as evidence changed.",
        "Built a runnable two-agent prototype with separate execution and review contexts, evidence-linked decisions, checkpoint/resume support, and human approval before final acceptance.",
        "Applied the prototype to multilingual support in an existing transcription application, producing traceable commits and a reviewed handoff for live Japanese and French transcription checks.",
        "In a packaging task, independent agent review caught a symbolic-link loophole missed by passing tests and required corrected directory checks.",
        "Compared candidate claims with prior work and narrowed subsequent questions to verification behavior and human decision boundaries.",
      ],
    },
    transcriber: {
      title: "Classroom Live Transcriber", meta: "Independent developer | May-Aug 2026",
      bullets: [
        "Built and released an on-device Apple Silicon lecture-transcription application using Metal-accelerated whisper.cpp, overlapping audio chunks, resampling, and asynchronous workers.",
        "Preserved raw and cleaned transcripts, logs, and session configuration; implemented model size/SHA-256 verification, atomic publication, retries, and failure-safe downloads.",
        "Validated the packaged application across multiple Macs through model setup, real transcription, and Stop/Restart workflows; observed over one hour of classroom use without crashes or sustained backlog.",
      ],
    },
    audioshifter: {
      title: "AudioShifter", meta: "Independent developer | Mar 2025-Aug 2026",
      bullets: [
        "Independently developed the original Windows application and an Apple Silicon macOS version; delivered the tested, packaged macOS pre-release within 3 days in August 2026.",
        "Implemented a modular architecture with background processing, cancellation, child-process cleanup, and source-file protection.",
        "Verified the pre-release with 165 automated tests, including fault injection, real audio pipelines, packaged execution, and GUI behavior; recorded no failures or skips.",
        "Audited 75 native binaries and 324 dynamic-library references, then validated the packaged application on a separate non-development Mac.",
      ],
    },
    honors: ["New American University Transfer Scholarship, ASU (four semesters).", "Dean's List, ASU: Spring 2024, Fall 2024, Spring 2025, Fall 2025."],
    skillLabels: ["Programming", "ML and research computing", "Systems and tooling"],
  },
  zh: {
    date: "简历 / 2026 年 10 月 23 日",
    interests: "可靠 LLM 智能体；验证与评价；长期智能体工作流中的人工监督与状态跟踪；稳健机器学习。",
    education: [
      { institution: "亚利桑那州立大学", period: "2024 年 1 月至 2026 年 12 月（预计）", detail: "计算机科学理学学士（软件工程方向） | GPA: 4.0/4.0" },
      { institution: "北亚利桑那大学", period: "2025 年 12 月至 2026 年 1 月", detail: "非学位物理课程" },
      { institution: "安徽理工大学", period: "2021 年 9 月至 2023 年 7 月", detail: "软件工程本科学习，未取得学位" },
    ],
    publicationStatus: "研讨会论文：UAI 2026 可处理概率建模研讨会（已发表）。扩展稿：AISTATS 2027（审稿中）。",
    research: {
      title: "概率模型本科科研经历", meta: "亚利桑那州立大学 | 2026 年 3 月至今", context: "研究分布变化下概率电路的训练后稳健性。",
      bullets: [
        "发现优化器直接更新造成概率归一化漂移；验证更新后的截断与重新归一化能够恢复约束，同时保留梯度传播。",
        "排查随机嵌入评价中的标签对齐混杂因素；使用固定标签重复分析，排除标签错位是聚类表现差的原因。",
        "执行并审计覆盖 3,360 个超参数配置的 PeTeR 扫描，记录高学习率下的数值失败。",
        "执行并审计覆盖 28 个数据集的 GPU 实验；重建 CUDA/PyTorch/Triton/PyJuice 运行环境，依据实测 GPU 使用情况选择并发度。",
        "利用兼容的模型序列化连接两个代码库的训练与评价；构建面向审稿人的运行入口，配套数据集与 CSV 导出。",
      ],
    },
    independent: {
      title: "LLM 智能体工作流与独立审查", meta: "独立项目 | 2026 年",
      bullets: [
        "将稳定要求与动态任务状态分开后，发现未来计划仍依赖实际执行结果，因此进一步区分已验收结果、当前任务和条件性后续步骤，使计划随证据变化而修订。",
        "构建可运行的双智能体原型，使用分开的执行与审查上下文、关联证据的决定、检查点与恢复机制，并在最终验收前保留人工批准。",
        "将原型用于已有转录应用的多语言支持，产生可追溯提交与经过审查的交接，再进行日语、法语现场转录检查。",
        "在打包任务中，独立智能体审查发现通过测试仍遗漏的符号链接漏洞，并要求修正目录检查。",
        "对照已有研究审查候选主张，将后续问题收窄到验证行为与人类决策边界。",
      ],
    },
    transcriber: {
      title: "Classroom Live Transcriber", meta: "独立开发者 | 2026 年 5 月至 8 月",
      bullets: [
        "开发并发布 Apple Silicon 本地课堂转录应用，使用 Metal 加速的 whisper.cpp、重叠音频块、重采样与异步工作线程。",
        "保留原始与清理后的转录、日志和会话配置；实现模型大小/SHA-256 校验、原子发布、重试及失败安全下载。",
        "在多台 Mac 上验证打包应用的模型配置、真实转录及停止/重启流程；观察到超过一小时的课堂使用，无崩溃或持续积压。",
      ],
    },
    audioshifter: {
      title: "AudioShifter", meta: "独立开发者 | 2025 年 3 月至 2026 年 8 月",
      bullets: [
        "独立开发原 Windows 应用与 Apple Silicon macOS 版本；在 2026 年 8 月的 3 天内交付经过测试和打包的 macOS 预发布版。",
        "实现模块化架构、后台处理、取消、子进程清理与源文件保护。",
        "以 165 项自动化测试验证预发布版，涵盖故障注入、真实音频流水线、打包后运行及界面行为，无失败或跳过。",
        "审计 75 个原生二进制文件与 324 条动态库引用，再在另一台非开发 Mac 上验证打包应用。",
      ],
    },
    honors: ["ASU New American University Transfer Scholarship，四个学期。", "ASU 院长荣誉名单：2024 年春季、2024 年秋季、2025 年春季、2025 年秋季。"],
    skillLabels: ["编程", "机器学习与科研计算", "系统与工具"],
  },
};

export const resumeLinks = [
  { en: "Method", zh: "方法文档", href: "https://github.com/smter6626/structured-llm-execution-framework" },
  { en: "Prototype", zh: "原型源码", href: "https://github.com/smter6626/framework-loop/tree/main/1PCloop" },
  { en: "Technical note (non-peer-reviewed)", zh: "技术说明（非同行评审）", href: "https://doi.org/10.5281/zenodo.21911982" },
];

export const resumeSkills = [
  "Python, Java, JavaScript, C/C++, Bash/Shell",
  "PyTorch, CUDA, Triton, PyJuice, NumPy, Slurm",
  "Linux, macOS, Git, pytest, Metal, whisper.cpp, PySide6, FFmpeg, PyInstaller",
];

export function getResume(locale: Locale) {
  return content[locale];
}

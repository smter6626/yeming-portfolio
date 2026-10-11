import type { Profile } from "@/lib/types";
import { profile } from "./profile";

export const profileZh: Profile = {
  ...profile,
  name: "Yeming Dai",
  location: "美国亚利桑那州坦佩",
  headline: "机器学习研究、可靠的 AI 工作流，以及能实际使用的软件。",
  introduction: "我是亚利桑那州立大学的计算机科学本科生，主要开展可复现的机器学习实验，构建可审查、可恢复的 AI 编程流程，并开发用于学习的桌面工具。我将想法落实到实现、测试与公开发布。",
  education: [
    {
      institution: "亚利桑那州立大学",
      degree: "计算机科学理学学士",
      period: "预计 2026 年 12 月毕业",
      detail: "GPA 4.0/4.0。院长荣誉名单：2024 年春季、2024 年秋季、2025 年春季、2025 年秋季。",
    },
    {
      institution: "安徽理工大学",
      degree: "软件工程本科阶段学习",
      period: "2021 年 9 月至 2023 年 6 月",
    },
  ],
  skills: profile.skills.map((skill, index) => ({
    ...skill,
    label: ["编程语言", "研究工具", "桌面与音频", "验证工具"][index],
  })),
};

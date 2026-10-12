import type { Profile } from "@/lib/types";
import { profile } from "./profile";

export const profileZh: Profile = {
  ...profile,
  name: "Yeming Dai",
  location: "美国亚利桑那州坦佩",
  headline: "抽象思维、工作流设计与自动化开发。",
  introduction: "我擅长从复杂问题中提炼共性，将重复性的操作抽象成清晰、可复用的工作流。我热爱开发自动化工具，让繁琐的步骤由系统完成，把精力留给需要判断和创造的工作。",
  education: [
    {
      institution: "亚利桑那州立大学",
      degree: "计算机科学理学学士",
      period: "预计 2026 年 12 月毕业",
      detail: "GPA 4.0/4.0。院长荣誉名单：2024 年春季、2024 年秋季、2025 年春季、2025 年秋季。",
    },
  ],
  skills: profile.skills.map((skill, index) => ({
    ...skill,
    label: ["编程语言", "研究工具", "桌面与音频", "验证工具"][index],
  })),
};

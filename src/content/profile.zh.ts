import type { Profile } from "@/lib/types";
import { profile } from "./profile";

export const profileZh: Profile = {
  ...profile,
  name: "Yeming Dai",
  location: "美国亚利桑那州坦佩",
  headline: "抽象思维、工作流设计与自动化开发。",
  introduction: "我喜欢把重复性工作抽象成可复用的系统。设计时，我会先区分哪些要求需要保持稳定、哪些结论应随新证据更新，以及哪些决定可以自动处理、哪些需要人判断。我将这种思考用于 AI 审查流程和本地软件，从保留转写原文到恢复中断任务。我的研究兴趣是 AI 可靠性与可信自动化。",
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

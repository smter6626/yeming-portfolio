import type { Profile } from "@/lib/types";
import { profile } from "./profile";

export const profileZh: Profile = {
  ...profile,
  name: "Yeming Dai",
  location: "美国亚利桑那州坦佩",
  headline: "抽象思维、工作流设计与自动化开发。",
  introduction: "我的研究兴趣是 AI 可靠性与可信 LLM 智能体。我希望理解：任务、证据和会话不断变化时，怎样让 AI 的产出持续接受检查。我也开发用于课堂和音乐学习的本地工具。",
  resumeSummary: "计算机科学本科生，关注 AI 可靠性与可信 LLM 智能体，具有概率模型研究、工作流设计和桌面应用工程经验。",
  education: [
    {
      institution: "亚利桑那州立大学",
      degree: "计算机科学理学学士（软件工程方向）",
      period: "2024 年 1 月入学，预计 2026 年 12 月毕业",
      gpa: "4.0/4.0",
      detail: "院长荣誉名单：2024 年春季、2024 年秋季、2025 年春季、2025 年秋季。",
    },
  ],
  skills: profile.skills.map((skill, index) => ({
    ...skill,
    label: ["编程语言", "研究工具", "桌面与音频", "验证工具"][index],
  })),
};

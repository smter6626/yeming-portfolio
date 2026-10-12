import type { Project } from "@/lib/types";
import { projects } from "./projects";

// Share stable identity, public URLs, and factual values with the English data.
const [research, governance, coding, transcriber, audioshifter] = projects;

export const projectsZh: Project[] = [
  {
    ...research,
    title: "概率电路与最优传输",
    shortTitle: "稳健机器学习",
    subtitle: "概率模型稳健性与可复现的 GPU 实验",
    summary: "我参与研究概率模型在数据分布变化下的稳健性，重点负责可复现的 GPU 实验、结果验证，以及供论文使用的研究材料。",
    role: "本科研究人员、PeTeR 共同作者",
    timeframe: "2026 年 3 月至今",
    status: "研究进行中",
    tags: ["概率电路", "最优传输", "PyTorch", "CUDA", "Slurm"],
    question: "数据分布发生变化时，概率模型怎样保持稳健？怎样通过可复现的实验研究这些问题？",
    approach: "研究探索结构化最优传输目标，以及训练后提升模型稳健性的方法。我负责执行实验、恢复 GPU 环境、验证结果、诊断失败原因和整理发表材料。",
    highlights: [
      { title: "共同发表研究成果", body: "我共同署名的 PeTeR 论文研究概率电路的训练后稳健化，已被 UAI 2026 可处理概率建模研讨会接收。我的工作包括实验执行、结果验证、工程支持和论文所需材料。" },
      { title: "可复现的 GPU 研究环境", body: "我在亚利桑那州立大学的 GPU 集群上恢复了 Python 3.11、PyTorch/CUDA、Triton 和 PyJuice 研究环境，解决了因缺少 Python 开发头文件而阻塞的本地编译问题。" },
      { title: "诊断实验失败原因", body: "我检查结果覆盖情况，并保留失败运行的诊断材料，包括数值不稳定、无效概率、调度配置不匹配，以及特定数据集上的失败。" },
      { title: "依据实测安排资源", body: "我根据内存与运行时间观测调整 GPU 并发执行，并在可复用的基准工作流中验证导出与重新加载、校验和、采样及可视化。" },
    ],
    architecture: [
      { label: "研究目标", description: "概率电路、数据分布变化和结构化最优传输。" },
      { label: "复现环境", description: "隔离依赖，配置 CUDA 工具、本地编译和 GPU Slurm 作业。" },
      { label: "执行实验", description: "配置组合、经过测量的并发设置、运行状态观测，以及保留的失败日志。" },
      { label: "检查研究产物", description: "结果覆盖检查、序列化与重新加载、失败分类和分批交付。" },
    ],
    metrics: [
      { ...research.metrics[0], label: "实验配置组合", scope: "完整篇幅后续研究中的配置组合。" },
      { ...research.metrics[1], label: "基准数据集", scope: "后续研究覆盖 28 个数据集，均产出完整的 JSON 结果。" },
      { ...research.metrics[2], label: "L40S 并发运行数", scope: "对应研究工作负载的并发执行，峰值内存约为 12 GiB。" },
    ],
    evidence: [
      { ...research.evidence[0], title: "PeTeR 论文", description: "PeTeR: Post-Training Robustification of Probabilistic Circuits，作者为 Adrian Ciotinga、Yeming Dai 和 YooJung Choi。", scope: "UAI 2026 可处理概率建模研讨会；arXiv:2607.07671。" },
    ],
    limitations: [],
    links: research.links.map((link) => ({ ...link, label: "阅读 PeTeR 论文" })),
  },
  {
    ...governance,
    title: "长期 AI 任务的规则与进度管理",
    shortTitle: "AI 任务管理方法",
    subtitle: "独立审查、证据与可追溯的验收决定",
    summary: "我设计了一套让 AI 工作可检查、可追溯的方法：分离生成与验收，独立审查实际产物，并保存当前结论所依据的证据。",
    role: "方法作者",
    timeframe: "v1.2 于 2026 年 8 月发布",
    status: "已发布中英文方法文档",
    tags: ["项目规则", "进度管理", "独立审查", "Git"],
    question: "当 AI 生成内容的速度超过人工验证的能力时，怎样让验收建立在充分证据之上，并避免错误被后续任务不断继承？",
    approach: "我分离生成与验收职责，将任务约束、已验收状态和决策历史保存在仓库中。独立审查者直接检查实际产物，形成自己的结论，并判断执行者选择的验证方式是否足够。审查强度与任务风险匹配；涉及真实意图、敏感事实或不可逆操作的判断交由人处理。新证据推翻旧验收时，明确记录结论失效，使后续会话依据当前有效的结论继续工作。",
    narrative: [
      {
        "id": "approach",
        "title": "生成越来越快，如何判断结果值得信任？",
        "navLabel": "信任问题",
        "paragraphs": [
          "当 AI 生成内容的速度超过人工逐项验证的能力时，怎样判断哪些结果可以接受？我围绕这个问题设计方法，将重点放在每次验收所依据的证据与决定权限上。"
        ],
        "points": [
          {
            "title": "自检可能继承实现中的盲区",
            "body": "智能体可以认真运行测试，却选择了发现不了缺陷的验证方式。验收需要判断这些检查是否真正能够挑战结果的正确性。"
          },
          {
            "title": "旧的通过结论可能变成新的默认事实",
            "body": "后续会话可能把排版完善的产物或早期验收当成既定事实。长期任务需要明确记录哪些结论仍有效，哪些已经被新证据推翻。"
          }
        ]
      },
      {
        "id": "contributions",
        "title": "让验收可检查，让决定可追溯。",
        "navLabel": "方法设计",
        "paragraphs": [
          "我分离实现与验收职责，按信息职责、更新频率和修改权限组织仓库记录，使每个已接受的结果都能关联到审查者可以直接检查的证据。"
        ],
        "points": [
          {
            "title": "独立访问、独立判断、质疑证据是否充分",
            "body": "审查者直接检查实际产物，形成自己的验收结论，并判断验证是否充分。当已有检查不能解决疑问时，可以要求另一条测试或文本提取路径。"
          },
          {
            "title": "稳定约束与已验收状态分别管理",
            "body": "稳定约束保存负责人的目标与边界，当前状态记录已验收工作、未解决问题和支持证据。每次实现只获得明确的当前目标和允许修改的范围。"
          },
          {
            "title": "新证据可以推翻旧验收",
            "body": "我保留历史记录，同时明确标记旧结论失效，使后续会话能够追溯过程并依据当前结论继续。真实意图、敏感事实和不可逆操作中的判断交由人处理。"
          }
        ]
      },
      {
        "id": "architecture",
        "title": "从实际问题中形成方法。",
        "navLabel": "实际案例",
        "paragraphs": [
          "这套方法来自实际的产物制作与软件发布。案例既收紧了独立审查的定义，也帮助我判断不同任务需要多强的流程。"
        ],
        "points": [
          {
            "title": "自检通过的 PDF，被独立检查发现缺陷",
            "body": "PDF 的视觉布局正确，执行者选用的文本提取检查也通过了；另一条提取路径却发现正文段落出现在签名之后。独立审查推翻旧验收，修复渲染器后，再通过多种提取方式检查替代产物。"
          },
          {
            "title": "把音频应用的发布与实际应用包对应起来",
            "body": "AudioShifter 的审查围绕应用包与发布文件的身份展开：测试、本地依赖、版本源码、校验和、另一台 Mac 和公开下载文件。流程强度随发布风险配置。"
          }
        ]
      }
    ],
    highlights: [
      { title: "明确每类记录的职责", body: "我依据稳定性、修改权限和时间跨度区分项目规则、当前进度与历史记录，保持唯一的当前执行步骤，并在任务结束后冻结其记录。" },
      { title: "独立检查实际证据", body: "我将独立审查建立在直接访问产物、独立形成验收结论，以及判断验证是否充分的基础上。审查者可以质疑已有测试，并要求采用另一条验证路径。" },
      { title: "明确记录结论失效", body: "我规定新证据推翻已接受结果时，应保留历史并明确标记旧结论失效，防止后续会话悄然恢复旧的通过状态。" },
      { title: "按任务风险选择审查强度", body: "我记录了持续的求职准备和 AudioShifter 发布案例，说明审查与记录要求如何随任务风险调整。" },
    ],
    architecture: [
      { label: "项目规则", description: "任务目标、必须遵守的约束、修改权限、稳定输入和验收标准。" },
      { label: "当前进度", description: "唯一的当前步骤、阻塞问题、证据位置，以及明确失效的旧结论。" },
      { label: "执行与独立审查", description: "执行智能体在限定范围内产生结果；审查智能体检查证据并作出验收判断。" },
      { label: "推进或人工确认", description: "继续下一步、保留待办问题、修复结果，或将只有负责人有权决定的事项交由人工确认。" },
    ],
    metrics: [
      { ...governance.metrics[0], label: "有版本记录的公开文档", scope: "中英文方法文档，以对应版本的 Zenodo DOI 归档。" },
      { ...governance.metrics[1], label: "已记录案例", scope: "求职准备和 AudioShifter 发布工程。" },
    ],
    evidence: [
      { ...governance.evidence[0], title: "中英文文档与引用信息", description: "v1.2 包含中英文原稿、PDF、可供程序读取的引用信息和发布校验和。", scope: "版本 DOI 为 10.5281/zenodo.21911982，发布于 2026 年 8 月 13 日。" },
      { ...governance.evidence[1], title: "独立审查推翻自检结论", description: "PDF 案例中，独立文本提取检查发现了自检遗漏的阅读顺序问题。修复渲染器后，通过多种文本提取方式完成复查。", scope: "v1.2 文档中的 PDF 制作案例。" },
      { ...governance.evidence[2], title: "软件发布的证据链", description: "AudioShifter 案例连接了测试、应用包审计、带版本标签的源码、校验和、非开发机验收，以及重新下载的发布文件。", scope: "AudioShifter alpha.3 发布工程。" },
    ],
    limitations: [],
    links: governance.links.map((link, index) => ({ ...link, label: ["查看方法仓库", "阅读 v1.2 文档"][index] })),
  },
  {
    ...coding,
    title: "可恢复的 AI 编程流程",
    shortTitle: "AI 编程流程",
    subtitle: "让验收建立在独立审查与实际证据之上",
    summary: "我用 Python 实现了一套将代码生成与验收分离的流程，把审查结论与代码、测试和产物关联起来，并在跨会话执行中保留已验收状态。",
    role: "系统设计与实现负责人",
    timeframe: "2026 年 9 月至 10 月",
    status: "已有可运行的工程实现",
    tags: ["Python", "Codex CLI", "JSON Schema", "Git", "恢复检查点", "终端界面"],
    question: "当 AI 生成代码和产物的速度超过人工逐项验证的能力时，怎样判断哪些结果可以接受，并避免未经充分验证的结论被后续步骤当成事实？",
    approach: "我将框架中的独立审查与验收方法落实为 Python 编程流程。任务约束和验收标准分别指导编程与审查智能体：前者提交代码、测试和产物，后者直接检查这些材料，判断证据是否足以支持验收，并可要求补充验证或修复。调度程序核对提交身份、文件哈希与结构化结论，在审查通过且获授权后记录已验收状态；证据问题未解决、状态冲突或需要人的判断时暂停。检查点保留审查上下文与已验收状态，供后续会话继续使用。",
    narrative: [
      {
        "id": "approach",
        "title": "当 AI 生成速度超过人工验证能力。",
        "navLabel": "信任问题",
        "paragraphs": [
          "当 AI 生成代码和产物的速度超过人工逐项验证的能力时，怎样判断哪些结果可以接受，并避免未经充分验证的结论被后续步骤当成事实？",
          "我实现这套流程，将框架中的独立审查与验收方法变成可执行的编程过程，为实现、审查和人工判断分别设定职责。"
        ]
      },
      {
        "id": "contributions",
        "title": "将生成与验收分开。",
        "navLabel": "审查流程",
        "paragraphs": [
          "任务约束和验收标准贯穿整个循环。编程智能体产生结果，独立审查智能体直接检查实际产物，判断证据是否足以支持验收。"
        ],
        "steps": [
          {
            "label": "明确当前任务",
            "description": "审查者读取项目约束与当前状态，给出限定范围的指令、允许的修改和需要提交的证据。"
          },
          {
            "label": "实现并提交证据",
            "description": "新的编程会话修改目标项目、运行测试，形成代码提交和可供检查的输出。"
          },
          {
            "label": "判断结果与验证是否充分",
            "description": "审查者依据验收标准直接检查代码、测试和产物，可以要求补充验证，或给出修复指令。"
          },
          {
            "label": "记录验收或暂停",
            "description": "Python 核对结构化结论与证据身份，再记录获授权的验收结果。证据问题未解决或需要人的判断时，流程暂停。"
          }
        ]
      },
      {
        "id": "architecture",
        "title": "让已验收状态跨会话保留。",
        "navLabel": "状态与恢复",
        "paragraphs": [
          "我将任务约束和当前进度保存在仓库记录中，以检查点保存执行与恢复状态。新的会话可以结合这些记录与实际项目，重建当前任务。"
        ],
        "points": [
          {
            "title": "将结论绑定到经过审查的具体产物",
            "body": "状态更新前，我核对分支、提交关系、允许修改的路径、项目规则哈希和证据 SHA-256，将验收结论与实际版本对应起来。"
          },
          {
            "title": "在恢复过程中明确处理不确定性",
            "body": "检查点保留智能体轮次身份、审查上下文和状态变更。恢复时核对中断前后的工作，避免重复已完成的轮次；无法解释的状态变化交由人工检查。"
          }
        ]
      },
      {
        "id": "practice",
        "title": "在真实项目中运行审查循环。",
        "navLabel": "实际运行",
        "paragraphs": [
          "多语言课堂转写任务经过了 3 轮审查循环、7 次智能体会话轮次和 2 次项目提交。独立审查与人工检查覆盖了日语、法语的实时转写。",
          "我还开发了只读终端界面，分别显示任务结论、进度更新和支持材料发布状态，让当前结果与等待人工处理的决定清晰可见。"
        ]
      }
    ],
    highlights: [
      { title: "分离生成与验收职责", body: "我让新的编程会话负责实现和测试，让持续保留上下文的审查会话依据验收标准直接检查产物，并可要求补充验证。" },
      { title: "将验收绑定到实际产物", body: "我验证数据结构、分支与提交关系、项目规则哈希、允许修改的文件范围及证据 SHA-256；只有满足检查且明确启用时，才允许更新当前进度。" },
      { title: "恢复中断，避免盲目重做", body: "我加入原子保存的检查点、中断进度核对，以及同一审查会话最多两次的结论修正，不要求已完成工作的编程智能体重新执行。" },
      { title: "清晰呈现任务状态", body: "我实现结构化进度日志、操作命令和只读终端界面，分别显示任务结论、进度更新与支持材料的发布状态。" },
    ],
    architecture: [
      { label: "加载规则与进度", description: "读取方法和任务的项目规则、当前状态、目标身份及信息新旧程度。" },
      { label: "独立审查给出指令", description: "把当前步骤转化为允许的修改范围和需要提交的证据。" },
      { label: "新的编程会话", description: "在独立目标仓库中实现和测试，产生接续已有历史的普通 Git 提交。" },
      { label: "审查并记录验收", description: "依据验收标准判断证据，核对产物身份后记录获授权的结果、要求修复，或暂停等待人工判断。" },
    ],
    metrics: [
      { ...coding.metrics[0], value: "3 轮", label: "真实外部项目任务", scope: "多语言课堂转写任务，共 7 次智能体会话轮次和 2 次项目提交。" },
      { ...coding.metrics[1], value: "3 类", label: "分别报告的结果", scope: "分别报告任务结论、进度更新和支持材料的发布状态。" },
    ],
    evidence: [
      { ...coding.evidence[0], title: "可执行的流程实现", description: "仓库包含任务调度、项目规则、运行时结构验证、检查点恢复、操作命令和只读终端界面。", scope: "本地 macOS 实现，使用两个隔离的 Codex 角色运行环境，同时只允许一个工作循环和一个目标仓库写入者。" },
      { ...coding.evidence[1], title: "外部仓库中的实际任务", description: "一次真实的课堂转写修改经过多轮执行、独立审查和人工确认。日语与法语的实时转写经过人工检查；其余路径依赖测试和实现证据。", scope: "多语言课堂转写任务。" },
      { ...coding.evidence[2], title: "真实智能体集成测试", description: "测试记录覆盖独立审查给出指令、编程智能体执行和再次审查的完整流程，以及一次进度更新、支持材料发布和终端界面检查。", scope: "真实智能体集成测试，2026 年 9 月 18 日。" },
    ],
    limitations: [
      "在 macOS 上本地运行，同一时刻由一个编程智能体修改项目，集成和发布由人工确认。",
    ],
    links: coding.links.map((link) => ({ ...link, label: "查看 AI 编程流程源码" })),
  },
  {
    ...transcriber,
    title: "课堂实时转写器",
    shortTitle: "课堂转写器",
    subtitle: "在 Apple Silicon 上本地转写课堂讲授",
    summary: "我开发了一款近实时 macOS 转写应用，在本机使用 Metal 加速推理，并保存课堂转写原文与去重后的文本。",
    role: "应用开发与发布工程",
    timeframe: "2026 年 5 月至 10 月",
    status: "已公开发布 1.1.0",
    tags: ["Python", "PySide6", "whisper.cpp", "Metal", "流式音频", "PyInstaller"],
    question: "学生怎样使用设备本地转写跟上课堂讲授，而不依赖云端转写服务或事先配置的开发环境？",
    approach: "我将界面、麦克风采集、缓冲与重采样、转写引擎、本地推理后端及持久化分开实现。重叠音频片段通过 whisper.cpp 使用 Metal 加速处理，先保留原始输出，再谨慎清理重复内容。发布包包含应用运行环境，模型文件由用户管理。",
    highlights: [
      { title: "本地音频处理管线", body: "我实现异步采集与推理工作线程、重叠片段处理，以及从 48 kHz 到 16 kHz 的重采样，让界面在转写时保持响应。" },
      { title: "模型下载与管理", body: "我加入模型扫描、导入、选择和下载管理，通过精确文件大小与 SHA-256 检查、临时下载、重试处理和原子发布，避免损坏模型被当成可用文件。" },
      { title: "保留原文，也提供可用文本", body: "我同时保存后端原始输出、谨慎去重后的文本、日志和会话配置。会话工具支持增量复制、安全重命名和完整历史恢复。" },
      { title: "应用打包与发布", body: "我将 Python 与本地库打包为可独立运行的 macOS 应用，固定构建依赖，并测试应用包中的推理流程。" },
    ],
    architecture: [
      { label: "音频采集", description: "麦克风音频、缓冲、重采样和异步工作线程。" },
      { label: "本地推理", description: "将重叠片段送入上游 whisper.cpp，通过 Metal 加速推理。" },
      { label: "保存转写记录", description: "先保存原始输出，再谨慎清理片段重复，保留日志和会话信息。" },
      { label: "独立应用包", description: "PySide6 桌面界面、内置运行环境、经过验证且由用户管理的模型，以及发布文件检查。" },
    ],
    metrics: [
      { ...transcriber.metrics[0], label: "当前公开版本", scope: "于 2026 年 10 月 11 日面向 macOS Apple Silicon 发布。" },
      { ...transcriber.metrics[1], label: "音频重采样", scope: "将麦克风采集音频重采样为 Whisper 推理所需格式。" },
    ],
    evidence: [
      { ...transcriber.evidence[0], title: "可下载的当前版本", description: "下载可独立运行的 macOS Apple Silicon 应用，支持本地转写、模型管理和会话历史保存。", scope: "1.1.0 版本，发布于 2026 年 10 月 11 日。" },
      { ...transcriber.evidence[1], title: "应用架构与模型管理", description: "源码和文档说明界面、引擎与后端的分离、本地推理、模型完整性检查、会话输出和开发者打包流程。", scope: "通过 whisper.cpp 与 Metal 运行 Whisper 推理。" },
    ],
    limitations: [
      "适用于 macOS Apple Silicon。开始转写前需下载或导入 Whisper 模型，麦克风音频的推理在本机完成。",
    ],
    links: transcriber.links.map((link, index) => ({ ...link, label: ["查看应用源码", "下载 1.1.0"][index] })),
  },
  {
    ...audioshifter,
    title: "AudioShifter",
    shortTitle: "AudioShifter",
    subtitle: "面向音乐学习者的变调与变速工具",
    summary: "我开发了一款用于音乐练习的桌面音频工具，支持分别调整音高和速度、取消处理，并保护源文件，提供可独立运行的 Apple Silicon 应用。",
    role: "应用开发、测试与发布工程",
    timeframe: "2025 年 3 月至 2026 年 8 月",
    status: "已公开发布 alpha.3 预览版",
    tags: ["Python", "Tkinter", "FFmpeg", "Rubber Band", "pytest", "PyInstaller"],
    question: "不熟悉技术的音乐学习者，怎样分别调整音高与速度，同时保证原始音频不被改动？",
    approach: "我采用模块化设计，将界面和控制器与校验、文件处理、外部工具及音频管线分离。FFmpeg/FFprobe 与 Rubber Band 执行音频处理，保留共振峰，并提供可预期的输出行为。",
    highlights: [
      { title: "分别调整调性与练习速度", body: "我实现 -24 至 +24 半音的变调和 -95% 至 +400% 的变速，两项参数可独立设置，支持 MP3、M4A、WAV 和 FLAC 输入。" },
      { title: "取消后完成清理", body: "我加入后台处理、子进程组清理、不覆盖现有文件的独占输出创建、源文件保护，以及失败或取消时的残缺文件删除。" },
      { title: "主动验证失败场景", body: "我的测试覆盖参数校验、文件系统冲突、故障注入、实际音频处理、打包后执行、取消、清理、源文件保护和界面行为。" },
      { title: "可以分发的预览版", body: "我将 Python 与音频工具打包，审计本地二进制和库引用，在另一台非开发 Mac 上验证，并准备许可证、对应源码、校验和及公开预览版。" },
    ],
    architecture: [
      { label: "界面与控制器", description: "Tkinter 参数输入、校验、状态显示和后台任务协调。" },
      { label: "音频处理管线", description: "FFprobe 检查与 FFmpeg/Rubber Band 处理，支持独立变调和变速。" },
      { label: "保护文件", description: "独占创建输出、确定的命名规则、保留源文件，以及取消后的清理。" },
      { label: "发布验证", description: "内置依赖、本地库审计、打包后的真实处理、校验和与对应源码。" },
    ],
    metrics: [
      { ...audioshifter.metrics[0], label: "通过的测试", scope: "alpha.3 发布验证：165 项通过，0 项失败，0 项跳过。" },
      { ...audioshifter.metrics[1], label: "已审计的本地二进制", scope: "alpha.3 应用包审计：75 个 arm64 Mach-O 文件和 324 条动态库引用。" },
      { ...audioshifter.metrics[2], label: "输入音频格式", scope: "MP3、M4A、WAV 和 FLAC；固定输出 44.1 kHz、双声道、320 kbps MP3。" },
    ],
    evidence: [
      { ...audioshifter.evidence[0], title: "alpha.3 发布验证", description: "记录包含测试、本地二进制审计、打包后的真实音频处理、取消、源文件保护，以及重新下载发布文件的检查。", scope: "v0.1.0-alpha.3 发布版本。" },
      { ...audioshifter.evidence[1], title: "公开预览版与源码", description: "发布包含 Apple Silicon 应用、对应源码和校验和。GPL-3.0-or-later 发布材料包含第三方声明与应用内许可证查看窗口。", scope: "GitHub 发布版本 v0.1.0-alpha.3。" },
    ],
    limitations: [
      "当前 alpha 预览版适用于 macOS Apple Silicon。",
    ],
    links: audioshifter.links.map((link, index) => ({ ...link, label: ["查看 AudioShifter 源码", "下载 alpha.3 预览版"][index] })),
  },
];

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
    summary: "我研究概率机器学习中的稳健性，参与方法研究，并负责实验执行、失败分析和可复现的 GPU 工作流。",
    role: "本科研究人员、PeTeR 共同作者",
    timeframe: "2026 年 3 月至今",
    status: "研究进行中",
    tags: ["概率电路", "最优传输", "PyTorch", "CUDA", "Slurm"],
    question: "已经训练的概率电路遇到数据分布变化时，能否在不使用原始训练数据、不从头训练的情况下提高稳健性？",
    approach: "PeTeR 通过训练后稳健化研究这个问题。作为共同作者，我参与实验执行、结果验证、工程支持和补充实验材料准备。在后续工作中，我执行超参数扫描与 GPU 学习实验，核对结果覆盖，并保留失败记录用于数值稳定性分析。",
    resumeHighlights: [
      "共同署名的 PeTeR 获 UAI 2026 可处理概率建模研讨会接收，参与实验执行、结果验证和补充实验材料准备。",
      "审计后续研究的 3,360 个扫描配置，保留预期的高学习率数值失败；另开展覆盖 28 个数据集的学习实验。",
      "依据预热与显存观测选择并发配置，K=3 使用 L40S，显存需求更高的 K=5 使用 A100 80GB。"
    ],
    highlights: [
      {
        "title": "PeTeR 与可检查的实验材料",
        "body": "我共同署名的 PeTeR 论文已被 UAI 2026 可处理概率建模研讨会接收。我也准备了配有简短说明、基准数据和 CSV 表格输出的补充实验入口，使实验流程更容易检查。"
      },
      {
        "title": "保留失败结果的超参数扫描",
        "body": "我在 K=1、3、5 下各执行并审计 1,120 个配置，共 3,360 个。部分高学习率配置产生无效概率；我保留错误记录并与 Adrian Ciotinga 确认处理方式，将这些预期的数值失败与其他结果一同交付。"
      },
      {
        "title": "依据工作负载选择 GPU 配置",
        "body": "在另一项覆盖 28 个数据集的学习实验中，我通过预热与显存观测安排并发。K=3 在 L40S 上八路并发，显存需求更高的 K=5 使用 A100 80GB。每批交付前，我核对调度状态、错误输出、结果文件和仓库变更。"
      },
      {
        "title": "作业完成后，仍检查实际结果",
        "body": "监控实验时，我发现部分数据集图像混乱、数据异常，随后向 Adrian 汇报。除了核对输出文件覆盖，我也检查可视化并保留诊断日志，使已经完成的作业仍能接受结果检查。"
      }
    ],
    architecture: [
      {
        "label": "研究稳健性",
        "description": "PeTeR 探索无需原始训练数据的训练后稳健化；后续工作包含超参数扫描与独立的概率电路学习实验。"
      },
      {
        "label": "测量后安排资源",
        "description": "恢复 GPU 环境，进行预热运行，用显存观测决定硬件与并发设置。"
      },
      {
        "label": "核对覆盖与失败",
        "description": "检查作业和错误状态、预期结果文件及失败配置，保留用于数值稳定性讨论的错误记录。"
      },
      {
        "label": "交付可检查的实验",
        "description": "按验收后的批次提交结果，准备带有说明与 CSV 输出的可读补充实验入口。"
      }
    ],
    metrics: [
      {
        "value": "3,360",
        "label": "已审计的扫描配置",
        "scope": "K=1、3、5 各 1,120 个配置，包含已记录的数值失败。"
      },
      {
        "value": "28",
        "label": "学习实验的数据集",
        "scope": "另一项学习实验在 K=1、3、5 下的预期结果文件均存在且非空。"
      },
      {
        "value": "8",
        "label": "GPU 并发任务",
        "scope": "K=3 使用 L40S，显存需求更高的 K=5 使用 A100 80GB。"
      }
    ],
    evidence: [
      { ...research.evidence[0], title: "PeTeR 论文", description: "PeTeR: Post-Training Robustification of Probabilistic Circuits，作者为 Adrian Ciotinga、Yeming Dai 和 YooJung Choi。", scope: "UAI 2026 可处理概率建模研讨会；arXiv:2607.07671。" },
    ],
    limitations: [],
    links: research.links.map((link) => ({ ...link, label: "阅读 PeTeR 论文" })),
  },
  {
    ...governance,
    title: "长期 AI 工作的独立审查与验收",
    shortTitle: "AI 审查方法",
    subtitle: "独立审查、证据与可追溯的验收决定",
    summary: "我从长期项目的进度管理出发，逐步把稳定约束与实时状态分开，再发展出可跨会话接手、独立检查产物的 AI 工作方法。",
    role: "方法作者",
    timeframe: "v1.2 于 2026 年 8 月发布",
    status: "已发布中英文方法文档",
    tags: ["项目规则", "进度管理", "独立审查", "Git"],
    question: "长期 AI 项目的目标保持稳定、执行路线却不断变化时，怎样保存可交接的上下文，并让接手者检查已有结果？",
    approach: "我分离生成与验收职责，将任务约束、已验收状态和决策历史保存在仓库中。独立审查者直接检查实际产物，形成自己的结论，并判断执行者选择的验证方式是否足够。审查强度与任务风险匹配；涉及真实意图、敏感事实或不可逆操作的判断交由人处理。新证据推翻旧验收时，明确记录结论失效，使后续会话依据当前有效的结论继续工作。",
    narrative: [
      {
        "id": "approach",
        "title": "转写器开发如何演化出一套审查框架。",
        "navLabel": "开发案例",
        "paragraphs": [
          "课堂转写器刚启动时，我用一份计划文件记录已完成内容与后续步骤。开发经常中断、再恢复，我自己对完整计划和约束的记忆也会退化，而实际路线又不断随新问题改变。",
          "同一份文档混合了不同职责的信息：需要保留的历史结果、正在更新的当前状态，以及尚不确定却像已定指令一样写下的未来步骤。单纯的进度记录已经不足以指导下一次接手。"
        ]
      },
      {
        "id": "iterations",
        "title": "第一次拆分改善了交接，也暴露了新问题。",
        "navLabel": "反馈与迭代",
        "paragraphs": [
          "最初，我主要按改写频率拆分信息：背景、需求、约束和环境等相对稳定的内容保存在一份文档中；当前状态、步骤结果、阻塞和未来计划放在另一份中。两份记录加上代码，让新的 LLM 会话可以接手实现或检查。",
          "交接更顺畅后，仍有两个问题：未来计划依赖已经完成的结果和当前运行状态，几者的职责尚不清楚；智能体又总能给出看似合理的结论、汇报工作已完成，而我没有时间逐次独立复核。"
        ],
        "points": [
          {
            "title": "从改写频率，进一步区分信息职责",
            "body": "我逐步重组文档，使已验收结果、当前任务、未解决阻塞和有条件的后续方向各有明确含义。未来计划需要随着证据和当前状态变化而调整。"
          },
          {
            "id": "research-expansion",
            "title": "研究实验放大了验收的重要性",
            "body": "我把这套结构用于更多项目，包括研究实验，并继续改进。这时，我需要在自己的检查能力范围内，为接受实验产出提供依据，独立验证因此成为核心设计问题。"
          }
        ]
      },
      {
        "id": "contributions",
        "title": "在生成与验收之间加入证据和审查。",
        "navLabel": "验收关口",
        "paragraphs": [
          "框架由此逐步形成：先让上下文能够交接，再把是否接受结果变成独立的决定。这条实践路径也促使我将研究兴趣转向 LLM 智能体可靠性与可信 AI。"
        ],
        "points": [
          {
            "title": "检查实际产出及其依据",
            "body": "明确产出对应的代码、实验结果或其他文件，以及支持结论的检查。完成报告可以帮助定位证据，是否接受结果仍需要检查。"
          },
          {
            "title": "让独立审查形成自己的判断",
            "body": "另一个智能体直接检查产物，作出验收结论，也判断已有验证是否充分。需要时要求补证，或采用不同的验证路径。"
          },
          {
            "title": "明确人工决定与当前有效状态",
            "body": "证据问题未解决或需要负责人判断时暂停。将已接受结果记入当前状态，新证据推翻旧结论时明确标记失效，供后续会话接着工作。"
          }
        ]
      },
      {
        "id": "architecture",
        "title": "独立检查如何改变具体决定。",
        "navLabel": "实际案例",
        "paragraphs": [
          "后来的产物检查与软件发布，让框架的验收规则更加明确。这些案例说明证据检查如何影响决定，以及审查强度如何随任务而变化。"
        ],
        "points": [
          {
            "title": "自检通过的 PDF，被独立检查发现缺陷",
            "body": "PDF 的视觉布局正确，执行者选用的文本提取检查也通过了；另一条提取路径却发现正文段落出现在签名之后。独立审查推翻旧验收，修复渲染器后，再通过多种提取方式检查替代产物。 这次事件改变了我对独立审查的定义：审查者必须能判断验证是否充分，并能选择另一条证据检查路径。"
          },
          {
            "title": "把音频应用的发布与实际应用包对应起来",
            "body": "AudioShifter 的审查围绕应用包与发布文件的身份展开：测试、本地依赖、版本源码、校验和、另一台 Mac 和公开下载文件。流程强度随发布风险配置。",
            "id": "audioshifter-release"
          }
        ]
      }
    ],
    resumeHighlights: [
      "从长期项目发展出仓库原生工作方法，分离稳定约束、当前状态与决策历史，支持跨会话交接。",
      "定义独立产物审查与旧验收结论失效规则，在中英文 v1.2 文档中记录 PDF 验证与 AudioShifter 发布案例。"
    ],
    highlights: [
      {
        "title": "从实际项目中拆分不同职责的信息",
        "body": "我从单份计划管理进度开始，发现长期目标稳定而实现路线不断变化，于是将背景、约束与目标同实时状态、步骤结果和阻塞分开保存，使新的智能体会话能结合仓库代码接手。"
      },
      {
        "title": "独立检查实际证据",
        "body": "我将独立审查建立在直接访问产物、独立形成验收结论，以及判断验证是否充分的基础上。审查者可以质疑已有测试，并要求采用另一条验证路径。"
      },
      {
        "title": "明确记录结论失效",
        "body": "我规定新证据推翻已接受结果时，应保留历史并明确标记旧结论失效，防止后续会话悄然恢复旧的通过状态。"
      },
      {
        "title": "按任务风险选择审查强度",
        "body": "我记录了持续的求职准备和 AudioShifter 发布案例，说明审查与记录要求如何随任务风险调整。"
      }
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
      {
        "title": "方法正文与引用",
        "description": "v1.2 包含中英文原稿、PDF、可供程序读取的引用信息和发布校验和。",
        "kind": "publication",
        "scope": "版本 DOI 为 10.5281/zenodo.21911982，发布于 2026 年 8 月 13 日。",
        "href": "https://github.com/smter6626/structured-llm-execution-framework/blob/v1.2/structured-llm-execution-framework-zh.md"
      },
      {
        "title": "独立审查推翻自检结论",
        "description": "PDF 案例中，独立文本提取检查发现了自检遗漏的阅读顺序问题。修复渲染器后，通过多种文本提取方式完成复查。",
        "kind": "case-study",
        "scope": "v1.2 文档中的 PDF 制作案例。",
        "href": "https://github.com/smter6626/structured-llm-execution-framework/blob/v1.2/structured-llm-execution-framework-zh.md"
      },
      {
        "title": "软件发布的证据链",
        "description": "AudioShifter 案例连接了测试、应用包审计、带版本标签的源码、校验和、非开发机验收，以及重新下载的发布文件。",
        "kind": "case-study",
        "scope": "AudioShifter alpha.3 发布工程。",
        "href": "https://github.com/smter6626/AudioShifter/blob/main/macos/release/release_verification_v0.1.0-alpha.3.md"
      }
    ],
    limitations: [],
    links: [
      {
        "label": "阅读方法正文",
        "href": "https://github.com/smter6626/structured-llm-execution-framework/blob/v1.2/structured-llm-execution-framework-zh.md",
        "kind": "publication"
      },
      {
        "label": "查看方法仓库",
        "href": "https://github.com/smter6626/structured-llm-execution-framework",
        "kind": "source"
      },
      {
        "label": "版本 DOI",
        "href": "https://doi.org/10.5281/zenodo.21911982",
        "kind": "publication"
      }
    ],
    related: [
      "1pcloop",
      "transcriber",
      "audioshifter"
    ],
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
        "title": "把验收方法落实为可运行的系统。",
        "navLabel": "信任问题",
        "paragraphs": [
          "当 AI 生成代码的速度超过人工逐项检查的能力时，我希望知道：哪个版本经过了审查，什么证据支持验收，以及何时需要人介入。我实现这套编程流程，将这些判断落实到执行过程。",
          "系统分别处理验收判断和版本对应关系。审查者依据验收标准检查代码、测试和产物；Python 程序核对结论格式、提交关系和证据身份，使记录的决定对应到经过审查的具体版本。"
        ]
      },
      {
        "id": "contributions",
        "title": "将生成与验收分开。",
        "navLabel": "审查流程",
        "paragraphs": [
          "程序将限定范围的任务交给编程与独立审查两个角色。审查结果可以接受产物、要求修复，或暂停等待人工决定。"
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
        "title": "为什么两个角色采用不同的会话生命周期。",
        "navLabel": "设计选择",
        "paragraphs": [
          "审查会话持续保留任务的判断背景，每轮编程则从当前有界指令开始。这样，下一轮实现可以交给新的会话，而不需要继承审查者的完整对话。"
        ],
        "points": [
          {
            "title": "保留上下文，也要检查它是否过时",
            "body": "持续会话可能保留旧假设。我从项目规则、当前状态、Git 与产物重建审查所需的权威输入：进度变化时刷新当前记录，长期要求变化时重建审查会话。会话提供工作背景，仓库记录决定当前任务。"
          },
          {
            "title": "验收结论需要对应具体版本",
            "body": "分支、提交关系、路径和 SHA-256 检查将结论绑定到经过审查的文件，语义上的验收仍由审查者判断。保留审查会话的同时，也需要维护这套身份检查与刷新规则。"
          },
          {
            "title": "恢复之前，先核对什么已经完成",
            "body": "检查点保存已完成轮次和状态变更，恢复时核对中断前后的操作，无法解释的变化交由人检查。编程已经完成时，记录发布可以单独恢复。"
          }
        ]
      },
      {
        "id": "practice",
        "title": "课堂转写器任务中实际发生了什么。",
        "navLabel": "实际运行",
        "paragraphs": [
          "我在自己开发的课堂转写器仓库中运行这套流程，扩展原始音频的语言选择。成功运行之前，首次尝试已经产生代码和测试，却因工具运行权限无法创建所要求的 Git 提交。"
        ],
        "points": [
          {
            "title": "完成报告与仓库状态不一致，流程停止",
            "body": "提交失败后，HEAD 未变化，工作区仍有修改。程序检查因此停止流程。我保留恢复证据、恢复基线，修正执行配置并重新验证后，才再次运行。"
          },
          {
            "title": "审查决定增加一项文档工作",
            "body": "成功运行的第一轮中，审查者接受实现，并要求补充使用文档，说明转写语言与界面语言的区别、英语专用模型的限制。第二轮完成文档，第三轮确认无需继续修改。"
          },
          {
            "title": "最后检查真实音频转写",
            "body": "随后我用日语和法语实时音频成功完成转写，进行功能验收。整次运行包含 3 轮循环、7 次智能体调用和 2 次提交；审查结论决定何时完成实现、交给人检查。"
          }
        ]
      },
      {
        "id": "observability",
        "title": "任务验收与记录完成分别显示。",
        "navLabel": "运行观察",
        "paragraphs": [
          "终端界面分别显示任务是否通过验收、当前进度记录是否更新，以及证据摘要是否完成提交和推送。任务已经通过时，记录仍可能需要保存或发布。",
          "每轮摘要在流程仓库中保存对应版本、产物位置、哈希与检查结果。发布失败后，可以只恢复记录发布，避免重新执行已经完成的编程工作。"
        ],
        "points": []
      }
    ],
    resumeHighlights: [
      "以 Python 调度独立的编程与审查智能体，实现结构化结论、提交与证据身份检查、检查点和人工决定节点。",
      "应用于课堂转写器的多语言开发，并实现终端观察界面、进度与证据记录的独立恢复。"
    ],
    highlights: [
      {
        "title": "分离生成与验收职责",
        "body": "我让新的编程会话负责实现和测试，让持续保留上下文的审查会话依据验收标准直接检查产物，并可要求补充验证。"
      },
      {
        "title": "将验收绑定到实际产物",
        "body": "我验证数据结构、分支与提交关系、项目规则哈希、允许修改的文件范围及证据 SHA-256；只有满足检查且明确启用时，才允许更新当前进度。"
      },
      {
        "title": "恢复中断，避免盲目重做",
        "body": "我加入原子保存的检查点、中断进度核对，以及同一审查会话最多两次的结论修正，不要求已完成工作的编程智能体重新执行。"
      },
      {
        "title": "清晰呈现任务状态",
        "body": "我开发终端界面，将任务验收、进度更新与证据提交和推送分别显示，并支持在编程结束后单独恢复记录发布。"
      }
    ],
    architecture: [
      { label: "加载规则与进度", description: "读取方法和任务的项目规则、当前状态、目标身份及信息新旧程度。" },
      { label: "独立审查给出指令", description: "把当前步骤转化为允许的修改范围和需要提交的证据。" },
      { label: "新的编程会话", description: "在独立目标仓库中实现和测试，产生接续已有历史的普通 Git 提交。" },
      { label: "审查并记录验收", description: "依据验收标准判断证据，核对产物身份后记录获授权的结果、要求修复，或暂停等待人工判断。" },
    ],
    metrics: [
      {
        "value": "3 轮",
        "label": "课堂转写器开发任务",
        "scope": "实现、文档补充与最终确认，共 7 次智能体调用、2 次提交。"
      }
    ],
    evidence: [
      {
        "title": "可执行的流程实现",
        "description": "仓库包含任务调度、项目规则、运行时结构验证、检查点恢复、操作命令和只读终端界面。",
        "kind": "implementation",
        "scope": "本地 macOS 实现，使用两个隔离的 Codex 角色运行环境，同时只允许一个工作循环和一个目标仓库写入者。",
        "href": "https://github.com/smter6626/framework-loop/tree/main/1PCloop"
      },
      {
        "title": "外部仓库中的实际任务",
        "description": "任务增加原始音频语言选项与模型限制。审查提出文档补充任务，随后以日语、法语实时音频转写进行人工验收。",
        "kind": "validation",
        "scope": "多语言课堂转写任务。",
        "href": "https://github.com/smter6626/framework-loop/blob/main/1PCloop/docs/p51_medium_scale_stage_summary.md"
      },
      {
        "title": "真实智能体集成测试",
        "description": "测试记录覆盖独立审查给出指令、编程智能体执行和再次审查的完整流程，以及一次进度更新、支持材料发布和终端界面检查。",
        "kind": "validation",
        "scope": "真实智能体集成测试，2026 年 9 月 18 日。",
        "href": "https://github.com/smter6626/framework-loop/blob/main/1PCloop/evidence-summaries/f7-post-foundation-real-service-smoke-20260918.md"
      },
      {
        "title": "每轮执行与审查摘要",
        "description": "公开记录将执行与审查结论关联到具体版本、产物位置和检查结果。",
        "kind": "implementation",
        "scope": "保存在流程仓库中的整理记录。",
        "href": "https://github.com/smter6626/framework-loop/tree/main/1PCloop/evidence-summaries"
      }
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
    approach: "应用通过 whisper.cpp 与 Metal 在本机运行 Whisper。重叠音频片段保持连续采集，也可能在片段边界产生重复文本。我先保存原始输出，再谨慎清理重复，并将两个版本与会话日志、配置一同保存。采集和推理通过异步工作线程运行，使界面保持响应。",
    resumeHighlights: [
      "实现本地 whisper.cpp/Metal 转写与异步采集、推理，保存原始及清理后的文本、会话日志与配置。",
      "加入 SHA-256 模型完整性检查与模型管理，打包 Apple Silicon 应用并发布 1.1.0。"
    ],
    highlights: [
      {
        "title": "本地音频处理管线",
        "body": "我用异步工作线程处理采集与推理，让音频处理时界面保持响应。麦克风音频经过缓冲，从 48 kHz 重采样为 Whisper 使用的 16 kHz 格式。"
      },
      {
        "title": "模型下载与管理",
        "body": "我加入模型扫描、导入、选择和下载管理，通过精确文件大小与 SHA-256 检查、临时下载、重试处理和原子发布，避免损坏模型被当成可用文件。"
      },
      {
        "title": "保留原文，也提供可用文本",
        "body": "我在片段边界去重之前保存后端原始输出。用户可以将整理后的文本与原文对照，同时查看模型、语言、日志和会话配置。"
      },
      {
        "title": "应用打包与发布",
        "body": "我将 Python 与本地库打包为可独立运行的 macOS 应用，固定构建依赖，并测试应用包中的推理流程。"
      }
    ],
    architecture: [
      {
        "label": "加载经过完整性检查的模型",
        "description": "下载文件先保存在临时位置，通过大小与 SHA-256 检查后才可用，也可以导入本地模型。"
      },
      {
        "label": "转写时保持界面响应",
        "description": "音频采集与本地推理异步运行，重叠片段送入 Metal 加速的后端。"
      },
      {
        "label": "原始文本与整理文本并存",
        "description": "每个会话保存 raw.txt、clean.txt，以及 session.log 和 config.json，便于将清理后的文本与后端输出对照。"
      },
      {
        "label": "继续使用已保存的会话",
        "description": "增量复制、安全重命名与完整历史恢复都基于保留的会话输出进行。"
      }
    ],
    metrics: [
      {
        "value": "1.1.0",
        "label": "当前公开版本",
        "scope": "于 2026 年 10 月 11 日面向 macOS Apple Silicon 发布。"
      }
    ],
    evidence: [
      { ...transcriber.evidence[0], title: "可下载的当前版本", description: "下载可独立运行的 macOS Apple Silicon 应用，支持本地转写、模型管理和会话历史保存。", scope: "1.1.0 版本，发布于 2026 年 10 月 11 日。" },
      { ...transcriber.evidence[1], title: "应用架构与模型管理", description: "源码和文档说明界面、引擎与后端的分离、本地推理、模型完整性检查、会话输出和开发者打包流程。", scope: "通过 whisper.cpp 与 Metal 运行 Whisper 推理。" },
    ],
    limitations: [
      "适用于 macOS Apple Silicon。开始转写前需下载或导入 Whisper 模型，麦克风音频的推理在本机完成。",
    ],
    links: transcriber.links.map((link, index) => ({ ...link, label: ["查看应用源码", "下载 1.1.0"][index] })),
    related: [
      "governance",
      "1pcloop",
      "audioshifter"
    ],
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
    approach: "FFmpeg/FFprobe 与 Rubber Band 负责音频检查、变调和变速。我让处理在后台运行，并把取消、文件名冲突与残缺输出作为应用需要处理的正常分支。源文件保持不变，输出文件通过独占创建避免覆盖已有文件。",
    resumeHighlights: [
      "实现独立变调、变速、后台处理、取消清理及不覆盖已有文件的输出处理。",
      "将工作流方法用于 alpha.3 发布工程，完成 165 项测试、内置依赖检查、源码与校验和记录，以及另一台 Mac 的验收。"
    ],
    highlights: [
      { title: "分别调整调性与练习速度", body: "我实现 -24 至 +24 半音的变调和 -95% 至 +400% 的变速，两项参数可独立设置，支持 MP3、M4A、WAV 和 FLAC 输入。" },
      { title: "取消后完成清理", body: "我加入后台处理、子进程组清理、不覆盖现有文件的独占输出创建、源文件保护，以及失败或取消时的残缺文件删除。" },
      { title: "主动验证失败场景", body: "我的测试覆盖参数校验、文件系统冲突、故障注入、实际音频处理、打包后执行、取消、清理、源文件保护和界面行为。" },
      { title: "可以分发的预览版", body: "我将 Python 与音频工具打包，审计本地二进制和库引用，在另一台非开发 Mac 上验证，并准备许可证、对应源码、校验和及公开预览版。" },
    ],
    architecture: [
      {
        "label": "分别选择调性与练习速度",
        "description": "MP3、M4A、WAV、FLAC 输入支持 -24 至 +24 半音与 -95% 至 +400% 的速度调整。"
      },
      {
        "label": "在后台完成处理",
        "description": "FFmpeg 与 Rubber Band 执行音频处理时，界面仍保持响应。"
      },
      {
        "label": "文件冲突时保留已有内容",
        "description": "遇到已有输出时，以数字后缀分配新文件，并通过独占创建防止覆盖冲突。"
      },
      {
        "label": "取消时终止进程并清理",
        "description": "终止相关子进程组，清理残缺输出。发布检查中，源文件保持不变，也没有遗留残缺文件。"
      }
    ],
    metrics: [
      {
        "value": "165",
        "label": "通过的测试",
        "scope": "alpha.3 测试覆盖参数校验、文件冲突、取消、失败清理、源文件保护与打包后处理。"
      },
      {
        "value": "75",
        "label": "已审计的本地二进制",
        "scope": "alpha.3：检查 75 个 arm64 二进制及 324 条库引用，确认应用包的运行依赖。"
      },
      {
        "value": "4",
        "label": "输入音频格式",
        "scope": "MP3、M4A、WAV 和 FLAC；固定输出 44.1 kHz、双声道、320 kbps MP3。"
      }
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

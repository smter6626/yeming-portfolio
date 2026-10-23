import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "research",
    number: "01",
    title: "Probabilistic Circuits and Optimal Transport",
    shortTitle: "Robust ML",
    subtitle: "Probabilistic-model robustness and reproducible GPU experiments",
    summary: "I research robustness in probabilistic machine learning, combining collaborative research with experiment execution, failure analysis, and reproducible GPU workflows.",
    category: "Research",
    role: "Undergraduate researcher and PeTeR co-author",
    timeframe: "March 2026 - present",
    status: "Ongoing research",
    color: "#d4b9ef",
    tags: ["Probabilistic circuits", "Optimal transport", "PyTorch", "CUDA", "Slurm"],
    question: "Can a trained probabilistic circuit become more robust to distribution shift without its original training data or retraining from scratch?",
    approach: "PeTeR addresses this question through post-training robustification. As a co-author, I contributed experiment execution, result validation, engineering support, and supplementary experiment materials. In subsequent work, I ran a hyperparameter sweep and GPU learning experiments, auditing result coverage and retaining failures for numerical-stability analysis.",
    resumeHighlights: [
      "Co-authored PeTeR, accepted at the UAI 2026 Workshop on Tractable Probabilistic Modeling; contributed experiments, result validation, and supplementary experiment materials.",
      "Audited 3,360 follow-up sweep configurations, retaining expected high-learning-rate failures; ran separate learning experiments across 28 datasets.",
      "Selected GPU concurrency from warmup and memory measurements, using L40S for K=3 and A100 80GB for higher-memory K=5 workloads."
    ],
    highlights: [
      {
        "title": "PeTeR and reproducible experiment materials",
        "body": "I co-authored PeTeR, accepted at the UAI 2026 Workshop on Tractable Probabilistic Modeling. I also prepared a supplementary experiment entry point with a short guide, benchmark data, and CSV table outputs to make the experiment workflow easier to inspect."
      },
      {
        "title": "A sweep that retains its failures",
        "body": "I executed and audited 1,120 configurations at each of K=1, 3, and 5, totaling 3,360. Some high-learning-rate settings produced invalid probabilities. I retained their error records and confirmed the handling with Adrian Ciotinga; the expected numerical failures were delivered alongside the other results."
      },
      {
        "title": "Match GPU resources to the workload",
        "body": "In a separate learning experiment across 28 datasets, warmup runs and memory telemetry informed concurrency. K=3 ran eight concurrent jobs on L40S; the higher-memory K=5 workload used A100 80GB. I checked scheduler state, error output, result files, and repository changes before each batch delivery."
      },
      {
        "title": "Inspect results beyond job completion",
        "body": "While monitoring experiments, I noticed disordered dataset images and anomalous data and reported them to Adrian. Alongside file-coverage checks, I used visualization and preserved diagnostic logs so that a completed job was still open to examination."
      }
    ],
    architecture: [
      {
        "label": "Study robustness",
        "description": "PeTeR studies data-free post-training robustness; later work includes a hyperparameter sweep and a separate probabilistic-circuit learning experiment."
      },
      {
        "label": "Measure before scheduling",
        "description": "Reconstruct the GPU environment, run warmup workloads, and use memory telemetry to choose hardware and concurrency."
      },
      {
        "label": "Audit coverage and failures",
        "description": "Check job and error status, expected result files, and failed configurations. Retain the error records used for numerical-stability discussion."
      },
      {
        "label": "Deliver inspectable experiments",
        "description": "Submit results in reviewed batches and prepare a readable supplementary runner with instructions and CSV outputs."
      }
    ],
    metrics: [
      {
        "value": "3,360",
        "label": "Sweep configurations audited",
        "scope": "K=1, 3, and 5: 1,120 configurations each, including recorded numerical failures."
      },
      {
        "value": "28",
        "label": "Datasets in the learning experiment",
        "scope": "Separate learning runs: expected result files present and non-empty at K=1, 3, and 5."
      },
      {
        "value": "8",
        "label": "Concurrent GPU jobs",
        "scope": "K=3 on L40S; the higher-memory K=5 runs used A100 80GB."
      }
    ],
    evidence: [
      { title: "PeTeR paper", description: "PeTeR: Post-Training Robustification of Probabilistic Circuits, by Adrian Ciotinga, Yeming Dai, and YooJung Choi.", kind: "publication", scope: "UAI 2026 Workshop on Tractable Probabilistic Modeling; arXiv:2607.07671.", href: "https://arxiv.org/abs/2607.07671" },
    ],
    limitations: [],
    links: [{ label: "Read PeTeR", href: "https://arxiv.org/abs/2607.07671", kind: "paper" }],
    related: [],
  },
  {
    id: "governance",
    number: "02",
    title: "Independent Review and Acceptance for Long-Running AI Work",
    shortTitle: "AI review method",
    subtitle: "Independent review, evidence, and accountable decisions",
    summary: "I developed an AI workflow method from project progress tracking: separate stable requirements from current state, make work transferable across sessions, and review the actual artifacts independently.",
    category: "Agent systems",
    role: "Methodology author",
    timeframe: "v1.2 published August 2026",
    status: "Published technical note in English and Chinese",
    color: "#d9ed92",
    tags: ["Project rules", "Progress tracking", "Independent review", "Git"],
    question: "When a long-running AI project keeps its goal but repeatedly changes course, how can its context survive handoff and its earlier results remain open to review?",
    approach: "I separate generation from acceptance and keep task requirements, accepted state, and decision history in repository documents. An independent reviewer inspects the actual artifacts, forms its own judgment, and challenges whether the chosen checks are sufficient. Review depth follows task risk; decisions about intent, sensitive facts, or irreversible actions return to the human owner. New evidence can invalidate an earlier acceptance, with that change recorded explicitly so later sessions use the current conclusion.",
    narrative: [
      {
        "id": "approach",
        "title": "The goal stayed stable. The plan kept changing.",
        "navLabel": "How it developed",
        "paragraphs": [
          "This method grew through repeated adjustments on long-running projects. I initially needed a way to recover my place across several projects, so one plan file held both completed work and future steps. Over time, it described the past more reliably than the future: execution kept encountering new obstacles while the overall direction and final goal often stayed the same."
        ],
        "steps": [
          {
            "label": "Start with one project plan",
            "description": "Past progress and future steps lived together so work could resume later. As the route changed, obsolete implementation plans became mixed with goals and constraints that still applied."
          },
          {
            "label": "Separate information by how it changes",
            "description": "One record holds relatively stable background, constraints, the final goal, and environment. Another holds current state, small-step results, and blockers of different severity. Implementation can change course while keeping the same governing goal."
          },
          {
            "label": "Use the records for handoff and review",
            "description": "The two records and repository code gave a new LLM session a way to reconstruct the task and continue implementation or verification. In my Classroom Live Transcriber project, I then let AI take on more work and used other agents to cross-check it from the same records and code."
          }
        ]
      },
      {
        "id": "contributions",
        "title": "Make acceptance inspectable and accountable.",
        "navLabel": "The method",
        "paragraphs": [
          "Externalizing context made handoff possible, but raised another question: what should a new session rely on when accepting earlier work? The transcriber was a personal project where I could tolerate rework, so I deliberately explored how much AI could take over. A running app and the implementing agent's report still left me with questions about correctness.",
          "I began separating implementation from acceptance, then made explicit what information stays stable, who can change it, and what evidence can revise the current conclusion."
        ],
        "points": [
          {
            "title": "Independent access, judgment, and evidence challenge",
            "body": "A reviewer examines the actual artifacts, reaches its own acceptance decision, and judges whether the verification is sufficient. It can request another test or extraction path when the existing checks leave the claim unresolved."
          },
          {
            "title": "Stable requirements and current state have different jobs",
            "body": "Background, goals, and boundaries can remain valid while execution routes, step results, and blockers change with evidence. Keeping them separate gives new sessions a recorded basis for continuing work while preserving unresolved issues."
          },
          {
            "title": "New evidence can overturn an earlier acceptance",
            "body": "I preserve the earlier record and explicitly invalidate its conclusion. Later sessions can trace the history while continuing from the current decision. Human judgment remains part of decisions about intent, sensitive facts, and irreversible actions."
          }
        ]
      },
      {
        "id": "architecture",
        "title": "How cross-checking changed acceptance.",
        "navLabel": "Practical cases",
        "paragraphs": [
          "Cross-checking let verification pass to another session. Later artifact reviews sharpened the design: a reviewer needs direct access to results, its own acceptance judgment, and a judgment about whether the chosen verification is sufficient."
        ],
        "points": [
          {
            "title": "A PDF that passed self-checks but failed independent review",
            "body": "The PDF looked correct and passed the coding agent's chosen text extraction check. Another extraction path revealed body paragraphs appearing after the signature. Independent review overturned the acceptance; a renderer repair and multiple extraction checks produced the replacement artifact. This changed my definition of independent review: the reviewer must judge whether the verification is sufficient, and be able to choose another evidence path."
          },
          {
            "title": "An audio-app release tied to its actual package",
            "body": "For AudioShifter, I concentrated checks around package and release identity: tests, native dependencies, tagged source, checksums, a separate Mac, and downloaded release assets. The review structure followed the concentrated release risks."
          }
        ]
      }
    ],
    resumeHighlights: [
      "Developed a repository-native method from long-running projects: separate stable requirements, current state, and decision history for cross-session handoff.",
      "Defined independent artifact review and explicit invalidation of earlier acceptance; documented PDF verification and AudioShifter release cases in a bilingual v1.2 technical note."
    ],
    highlights: [
      {
        "title": "Separate information by its responsibility",
        "body": "I started with one project plan and found that stable goals and changing implementation routes needed different records. I separated background, constraints, and objectives from current state, step results, and blockers so a new agent session could resume from those records and repository code."
      },
      {
        "title": "Review the work directly",
        "body": "I defined independent review around direct access to artifacts, an independent acceptance decision, and judgment about whether the verification itself is sufficient. A reviewer can challenge the chosen tests and require another verification path."
      },
      {
        "title": "Replaced decisions stay replaced",
        "body": "I specified how new evidence overturns an earlier accepted result while preserving its history, so a later session cannot silently reuse an outdated approval."
      },
      {
        "title": "Match the process to the risk",
        "body": "I documented job-application preparation and an AudioShifter release to show how the amount of review and recordkeeping can reflect each task's risk."
      }
    ],
    architecture: [
      { label: "Project rules", description: "The goal, limits, editing permissions, confirmed inputs, and conditions for accepting the result." },
      { label: "Current progress", description: "One current step, blockers, links to supporting results, and clearly marked replaced decisions." },
      { label: "Work and independent review", description: "A coding agent produces the requested work; a separate review agent inspects the actual files and results." },
      { label: "Update or human approval", description: "Move forward, retain a minor issue for later, request a repair, or ask the owner to make a decision." },
    ],
    metrics: [
      { value: "v1.2", label: "Versioned publication", scope: "English and Chinese methodology documents, archived with a version-specific Zenodo DOI." },
      { value: "2", label: "Documented cases", scope: "Job-application preparation and AudioShifter release engineering." },
    ],
    evidence: [
      {
        "title": "Method article and citation",
        "description": "The v1.2 technical artifact includes English and Chinese manuscripts, PDFs, machine-readable citation metadata, and publication checksums.",
        "kind": "publication",
        "scope": "Version-specific DOI 10.5281/zenodo.21911982, published August 13, 2026.",
        "href": "https://github.com/smter6626/structured-llm-execution-framework/blob/v1.2/structured-llm-execution-framework-en.md"
      },
      {
        "title": "A successful check that missed a PDF defect",
        "description": "The coding agent's own check passed, but an independent review found that text appeared in the wrong reading order. The earlier approval was withdrawn, the renderer was repaired, and the PDF was checked through multiple extraction methods.",
        "kind": "case-study",
        "scope": "PDF preparation case documented in v1.2.",
        "href": "https://github.com/smter6626/structured-llm-execution-framework/blob/v1.2/structured-llm-execution-framework-en.md"
      },
      {
        "title": "Software-release evidence chain",
        "description": "The AudioShifter case connects tests, package audits, tagged source, checksums, non-development-machine acceptance, and downloaded release assets.",
        "kind": "case-study",
        "scope": "AudioShifter alpha.3 release engineering.",
        "href": "https://github.com/smter6626/AudioShifter/blob/main/macos/release/release_verification_v0.1.0-alpha.3.md"
      }
    ],
    limitations: [],
    links: [
      {
        "label": "Read the method",
        "href": "https://github.com/smter6626/structured-llm-execution-framework/blob/v1.2/structured-llm-execution-framework-en.md",
        "kind": "publication"
      },
      {
        "label": "Methodology repository",
        "href": "https://github.com/smter6626/structured-llm-execution-framework",
        "kind": "source"
      },
      {
        "label": "Version DOI",
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
    id: "1pcloop",
    number: "03",
    title: "Recoverable AI Coding Workflow",
    shortTitle: "AI coding workflow",
    subtitle: "Independent review and acceptance backed by evidence",
    summary: "I built a Python workflow that separates code generation from acceptance, connects review decisions to code and test artifacts, and preserves accepted state across sessions.",
    category: "Agent systems",
    role: "System designer and implementation owner",
    timeframe: "September - October 2026",
    status: "Working local implementation",
    color: "#d9ed92",
    tags: ["Python", "Codex CLI", "JSON Schema", "Git", "Checkpoints", "Terminal dashboard"],
    question: "When AI generates code and artifacts faster than people can inspect them, how can we decide what to accept and keep insufficiently checked results from becoming assumptions in later work?",
    approach: "I implemented the framework's review and acceptance method as a Python coding workflow. Task constraints and acceptance criteria guide separate coding and review agents. The reviewer directly inspects code, tests, and artifacts, judges whether the evidence supports acceptance, and can request further checks or repairs. The orchestrator validates commit identities, file hashes, and structured decisions before recording an authorized acceptance. Unresolved evidence, state conflicts, and decisions requiring human judgment pause the workflow. Checkpoints preserve review context and accepted state for subsequent sessions.",
    narrative: [
      {
        "id": "approach",
        "title": "Turn an acceptance method into a running system.",
        "navLabel": "The trust problem",
        "paragraphs": [
          "When AI generates code faster than people can inspect it, I want to know which version was reviewed, what supports acceptance, and when a human needs to intervene. I built this coding workflow to make those decisions explicit during execution.",
          "The system handles two different questions. A reviewer judges code, tests, and artifacts against acceptance criteria. Python validates the decision format, commit relationships, and evidence identity so the recorded decision refers to the version that was actually reviewed."
        ]
      },
      {
        "id": "contributions",
        "title": "Separate generation from acceptance.",
        "navLabel": "The review workflow",
        "paragraphs": [
          "The implementation routes a bounded task through coding and independent review. A review can accept the result, ask for a repair, or stop for a human decision."
        ],
        "steps": [
          {
            "label": "Define the current task",
            "description": "The reviewer reads project requirements and current state, then specifies a bounded instruction, permitted edits, and required evidence."
          },
          {
            "label": "Implement and expose the evidence",
            "description": "A fresh coding session changes the target project, runs tests, and records a commit with the outputs needed for review."
          },
          {
            "label": "Judge the result and the verification",
            "description": "The reviewer directly inspects code, tests, and artifacts against acceptance criteria. It can request further checks or send a repair instruction."
          },
          {
            "label": "Record acceptance or pause",
            "description": "Python validates the structured decision and evidence identity before recording an authorized acceptance. Unresolved evidence or decisions requiring human judgment pause the workflow."
          }
        ]
      },
      {
        "id": "architecture",
        "title": "Why the two agents use different sessions.",
        "navLabel": "Design choices",
        "paragraphs": [
          "I keep the review session across turns to retain the task's decision history. Each coding turn starts fresh from the current bounded instruction, so the implementation can be handed to another session without inheriting the reviewer's whole conversation."
        ],
        "points": [
          {
            "title": "Continuity requires freshness checks",
            "body": "A persistent reviewer can retain outdated assumptions. I reconstruct its authoritative inputs from project rules, current state, Git, and artifacts. State changes refresh those inputs; changed long-term requirements restart the review session. Session history supplies working context, while repository records determine the current task."
          },
          {
            "title": "A verdict must refer to a specific version",
            "body": "Branch, commit-ancestry, path, and SHA-256 checks bind the verdict to the reviewed files. Semantic acceptance remains the reviewer's decision. Maintaining these identity and refresh checks is part of the cost of keeping the review session."
          },
          {
            "title": "Recovery reconciles work before repeating it",
            "body": "Checkpoints record completed turns and state updates. Resume checks determine which operations completed before an interruption; unexplained changes stop for human review. Record publication can resume separately after the coding work is finished."
          }
        ]
      },
      {
        "id": "practice",
        "title": "What happened in the classroom-transcriber task.",
        "navLabel": "In practice",
        "paragraphs": [
          "I ran the workflow in my Classroom Live Transcriber repository to expand original-audio language selection. The accepted run followed an earlier attempt in which code and tests were produced, but the tool sandbox prevented the required Git commit."
        ],
        "points": [
          {
            "title": "A completion report conflicted with repository state",
            "body": "The commit failed, HEAD stayed unchanged, and the worktree contained edits. The control checks stopped the run. I retained recovery evidence, restored the baseline, corrected the execution configuration, and revalidated before retrying."
          },
          {
            "title": "Review added a documentation step",
            "body": "In the successful run, the reviewer accepted the implementation and requested a bounded documentation follow-up explaining transcription language versus UI language and English-only model restrictions. The second cycle completed the documentation; the third confirmed that no further code changes were needed."
          },
          {
            "title": "Human acceptance checked actual audio",
            "body": "I then successfully transcribed live Japanese and French audio. The run comprised three cycles, seven agent turns, and two commits, with the review decisions determining when implementation was complete and ready for this check."
          }
        ]
      },
      {
        "id": "observability",
        "title": "Show acceptance and recordkeeping separately.",
        "navLabel": "Operator view",
        "paragraphs": [
          "The terminal dashboard shows whether the task was accepted, whether the current progress record was updated, and whether the evidence summary was committed and pushed. A task can be accepted while its records still need to be saved or published.",
          "Per-turn summaries retain the reviewed versions, artifact locations, hashes, and inspection results in the workflow repository. If publication fails, the system can retry that operation without rerunning completed coding work."
        ],
        "points": []
      }
    ],
    resumeHighlights: [
      "Implemented Python orchestration for separate coding and review agents, with structured verdicts, commit/evidence identity checks, checkpoints, and human decisions.",
      "Applied the workflow to multilingual transcriber development; added a terminal dashboard and independent recovery of progress/evidence records."
    ],
    highlights: [
      {
        "title": "Separate generation from acceptance",
        "body": "I give implementation and acceptance different roles. Fresh coding sessions produce changes and tests; a persistent review session inspects the artifacts against acceptance criteria and can request further checks."
      },
      {
        "title": "Bind acceptance to the reviewed artifact",
        "body": "I validate structured responses, branches, commit ancestry, project-rule hashes, permitted file paths, and SHA-256 hashes before an explicitly authorized progress update."
      },
      {
        "title": "Resume without repeating completed work",
        "body": "I added safely written checkpoints and checks for interrupted updates. The same review session can correct at most two mechanical reporting errors without rerunning completed coding work."
      },
      {
        "title": "Show what actually succeeded",
        "body": "I built a dashboard that separates task acceptance, progress-record updates, and evidence commit/push status, with independent publication recovery after the coding work is complete."
      }
    ],
    architecture: [
      { label: "Load the current task", description: "Read the project rules, current progress, repository identity, and checks for outdated inputs." },
      { label: "Independent review agent", description: "Define the current step, permitted edits, and required supporting results." },
      { label: "Coding agent", description: "Implement and test in a separate project repository, then create a normal commit without rewriting history." },
      { label: "Review and record acceptance", description: "Judge the evidence against acceptance criteria, validate artifact identity, then record an authorized result, request a repair, or pause for human judgment." },
    ],
    metrics: [
      {
        "value": "3 cycles",
        "label": "Classroom-transcriber development task",
        "scope": "Implementation, documentation follow-up, and final confirmation; 7 agent turns and 2 commits."
      }
    ],
    evidence: [
      {
        "title": "Working implementation",
        "description": "The source includes agent routing, structured-response checks, saved progress and recovery, command-line tools, and a read-only terminal dashboard.",
        "kind": "implementation",
        "scope": "Runs locally on macOS with two isolated Codex role sessions, one active workflow, and one agent editing the project at a time.",
        "href": "https://github.com/smter6626/framework-loop/tree/main/1PCloop"
      },
      {
        "title": "A real transcription-project task",
        "description": "The task added original-language choices and model restrictions. Review requested a documentation follow-up, then human acceptance checked live Japanese and French transcription.",
        "kind": "validation",
        "scope": "Multilingual classroom transcription task.",
        "href": "https://github.com/smter6626/framework-loop/blob/main/1PCloop/docs/p51_medium_scale_stage_summary.md"
      },
      {
        "title": "Live-agent integration test",
        "description": "The record follows a review-agent instruction, coding-agent implementation, and independent review through one progress update. It also checks record publication and read-only dashboard behavior in a real terminal.",
        "kind": "validation",
        "scope": "Live-agent integration test, September 18, 2026.",
        "href": "https://github.com/smter6626/framework-loop/blob/main/1PCloop/evidence-summaries/f7-post-foundation-real-service-smoke-20260918.md"
      },
      {
        "title": "Per-turn evidence summaries",
        "description": "Public records connect implementation and review decisions to versions, artifact locations, and validation results.",
        "kind": "implementation",
        "scope": "Curated records in the workflow repository.",
        "href": "https://github.com/smter6626/framework-loop/tree/main/1PCloop/evidence-summaries"
      }
    ],
    limitations: [
      "Runs locally on macOS with one coding agent editing the project at a time. A human approves integration and release decisions.",
    ],
    links: [{ label: "Explore workflow source", href: "https://github.com/smter6626/framework-loop/tree/main/1PCloop", kind: "source" }],
    related: ["governance", "transcriber"],
  },
  {
    id: "transcriber",
    number: "04",
    title: "Classroom Live Transcriber",
    shortTitle: "Live Transcriber",
    subtitle: "Local lecture transcription on Apple Silicon",
    summary: "I built a near-real-time macOS transcription app that runs locally with Metal acceleration and saves original and cleaned lecture transcripts.",
    category: "Desktop software",
    role: "Application and release engineering",
    timeframe: "May - October 2026",
    status: "Public release 1.1.0",
    color: "#8fcbbf",
    image: "/images/transcriber.png",
    tags: ["Python", "PySide6", "whisper.cpp", "Metal", "Audio streaming", "PyInstaller"],
    question: "How can students follow live lectures using on-device transcription without a cloud transcription service or a preconfigured development environment?",
    approach: "The app runs Whisper locally through whisper.cpp and Metal. Overlapping audio chunks keep capture continuous, but can repeat words at chunk boundaries. I preserve the original output before applying conservative cleanup, then save both versions with the session log and configuration. Capture and inference run in asynchronous workers so the UI can remain responsive.",
    resumeHighlights: [
      "Built local whisper.cpp/Metal transcription with asynchronous capture and inference; retained original and cleaned transcripts with session logs and configuration.",
      "Added SHA-256-verified model management and packaged an Apple Silicon app; published release 1.1.0."
    ],
    highlights: [
      {
        "title": "A local audio pipeline",
        "body": "I built asynchronous capture and inference workers to keep the interface responsive while audio is processed. Microphone audio is buffered and resampled from 48 kHz to the 16 kHz format used by Whisper."
      },
      {
        "title": "Model downloads and management",
        "body": "I added model scanning, import, selection, and managed downloads with exact-size and SHA-256 checks, temporary staging, retry handling, and atomic publication."
      },
      {
        "title": "Original transcripts and clean text",
        "body": "I save raw backend output before boundary-overlap deduplication. Users can compare the clean transcript with the original, while the model, language, logs, and session configuration remain available for inspection."
      },
      {
        "title": "Packaging and release engineering",
        "body": "I packaged Python and native libraries into a standalone macOS app, pinned build dependencies, and tested inference in the packaged application."
      }
    ],
    architecture: [
      {
        "label": "Load a verified model",
        "description": "Downloads remain temporary until exact-size and SHA-256 checks pass. Users can also import a local model."
      },
      {
        "label": "Transcribe while keeping the UI responsive",
        "description": "Audio capture and local inference run asynchronously. Overlapping chunks feed the Metal-enabled backend."
      },
      {
        "label": "Keep the original beside the cleaned text",
        "description": "Each session saves raw.txt and clean.txt plus session.log and config.json, so cleaned output can be checked against what the backend produced."
      },
      {
        "label": "Continue working with saved sessions",
        "description": "Incremental copying, safe renaming, and full-history recovery operate on the retained session outputs."
      }
    ],
    metrics: [
      {
        "value": "1.1.0",
        "label": "Current public release",
        "scope": "Published October 11, 2026 for macOS on Apple Silicon."
      }
    ],
    evidence: [
      { title: "Current downloadable release", description: "Download the standalone macOS Apple Silicon app with local transcription, model management, and saved session history.", kind: "validation", scope: "Release 1.1.0, October 11, 2026.", href: "https://github.com/smter6626/live_subtitle_generator/releases/tag/1.1.0" },
      { title: "Application architecture and model management", description: "Source and documentation describe UI/engine/backend separation, local inference, model-integrity checks, session outputs, and developer packaging.", kind: "implementation", scope: "Whisper inference powered by whisper.cpp and Metal.", href: "https://github.com/smter6626/live_subtitle_generator" },
    ],
    limitations: [
      "For macOS on Apple Silicon. Download or import a Whisper model before starting; microphone inference runs locally.",
    ],
    links: [
      { label: "Application source", href: "https://github.com/smter6626/live_subtitle_generator", kind: "source" },
      { label: "Download release 1.1.0", href: "https://github.com/smter6626/live_subtitle_generator/releases/tag/1.1.0", kind: "release" },
    ],
    related: [
      "governance",
      "1pcloop",
      "audioshifter"
    ],
  },
  {
    id: "audioshifter",
    number: "05",
    title: "AudioShifter",
    shortTitle: "AudioShifter",
    subtitle: "Pitch and tempo tools for music learners",
    summary: "I developed a desktop audio tool for music practice with independent pitch and tempo controls, cancellation, and source-file protection, packaged as a standalone Apple Silicon app.",
    category: "Desktop software",
    role: "Application, testing, and release engineering",
    timeframe: "March 2025 - August 2026",
    status: "Public alpha.3 pre-release",
    color: "#8fcbbf",
    image: "/images/audioshifter.png",
    tags: ["Python", "Tkinter", "FFmpeg", "Rubber Band", "pytest", "PyInstaller"],
    question: "How can non-technical music learners adjust pitch and speed independently while keeping their original audio safe?",
    approach: "FFmpeg/FFprobe and Rubber Band handle audio inspection, pitch, and tempo processing. I run that work in the background and treat cancellation, filename conflicts, and partial outputs as normal paths the app must handle. Source files stay unchanged, and output creation is exclusive to avoid overwriting an existing file.",
    resumeHighlights: [
      "Built independent pitch and tempo controls with background processing, cancellation cleanup, and non-overwriting output handling.",
      "Applied the workflow method to alpha.3 release engineering: 165 passing tests, bundled-dependency checks, source/checksum records, and acceptance on a separate Mac."
    ],
    highlights: [
      { title: "Independent learning controls", body: "I implemented independently configurable pitch changes from -24 to +24 semitones and speed changes from -95% to +400%, with MP3, M4A, WAV, and FLAC inputs." },
      { title: "Cancellation with cleanup", body: "I added background processing, child-process-group cleanup, exclusive non-overwriting output creation, source-file protection, and partial-file removal on failures or cancellation." },
      { title: "Tests that challenge failure behavior", body: "I covered validation, filesystem conflicts, fault injection, real processing, packaged execution, cancellation, cleanup, source protection, and GUI behavior." },
      { title: "A distributable release", body: "I bundled Python and audio tools, audited native binaries and library references, validated on a separate non-development Mac, and prepared licensing, corresponding source, checksums, and a public pre-release." },
    ],
    architecture: [
      {
        "label": "Choose pitch and practice speed independently",
        "description": "Set -24 to +24 semitones and -95% to +400% speed change for MP3, M4A, WAV, or FLAC input."
      },
      {
        "label": "Process in the background",
        "description": "The interface remains responsive while FFmpeg and Rubber Band perform the audio work."
      },
      {
        "label": "Resolve output conflicts without overwriting",
        "description": "Existing files retain their contents; numbered suffixes allocate a new output, with exclusive creation protecting against conflicts."
      },
      {
        "label": "Cancel and clean up",
        "description": "Cancellation terminates the related process group and removes partial output. Release checks observed the source file unchanged and no leftover partial files."
      }
    ],
    metrics: [
      {
        "value": "165",
        "label": "Tests passed",
        "scope": "alpha.3 tests cover validation, conflicts, cancellation, failure cleanup, source preservation, and packaged processing."
      },
      {
        "value": "75",
        "label": "Native binaries audited",
        "scope": "alpha.3: 75 arm64 binaries and 324 library references checked for dependencies on the development environment."
      },
      {
        "value": "4",
        "label": "Input audio formats",
        "scope": "MP3, M4A, WAV, and FLAC; fixed 44.1 kHz stereo 320 kbps MP3 output."
      }
    ],
    evidence: [
      { title: "Alpha.3 release verification", description: "The record documents tests, native-binary audits, packaged real-audio processing, cancellation, source preservation, and download-back checks.", kind: "validation", scope: "Release v0.1.0-alpha.3.", href: "https://github.com/smter6626/AudioShifter/blob/main/macos/release/release_verification_v0.1.0-alpha.3.md" },
      { title: "Public pre-release and source", description: "The release includes the Apple Silicon application, corresponding source, and checksums. GPL-3.0-or-later release materials include third-party notices and an in-app license viewer.", kind: "implementation", scope: "GitHub release v0.1.0-alpha.3.", href: "https://github.com/smter6626/AudioShifter/releases/tag/v0.1.0-alpha.3" },
    ],
    limitations: [
      "The current alpha release is built for macOS on Apple Silicon.",
    ],
    links: [
      { label: "AudioShifter source", href: "https://github.com/smter6626/AudioShifter", kind: "source" },
      { label: "Download alpha.3", href: "https://github.com/smter6626/AudioShifter/releases/tag/v0.1.0-alpha.3", kind: "release" },
    ],
    related: ["transcriber", "governance"],
  },
];

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "research",
    number: "01",
    title: "Probabilistic Circuits and Optimal Transport",
    shortTitle: "Robust ML",
    subtitle: "Probabilistic-model robustness and reproducible GPU experiments",
    summary: "I study how probabilistic models handle changing data, and support that research with reproducible GPU experiments, validated results, and publication materials.",
    category: "Research",
    role: "Undergraduate researcher and PeTeR co-author",
    timeframe: "March 2026 - present",
    status: "Ongoing research",
    color: "#d4b9ef",
    tags: ["Probabilistic circuits", "Optimal transport", "PyTorch", "CUDA", "Slurm"],
    question: "How can probabilistic models remain robust under distribution shift, and how can we build reproducible experiments to study them?",
    approach: "The research investigates structured optimal-transport objectives and post-training robustification. I execute experiments, rebuild GPU environments, validate results, diagnose failures, and prepare materials for publication.",
    highlights: [
      { title: "A published collaboration", body: "I co-authored PeTeR: Post-Training Robustification of Probabilistic Circuits, accepted at the UAI 2026 Workshop on Tractable Probabilistic Modeling. My contribution included experiment execution, result validation, engineering support, and paper-facing artifacts." },
      { title: "Reproducible GPU workflows", body: "I rebuilt a Python 3.11 research environment with PyTorch/CUDA, Triton, and PyJuice on an ASU GPU cluster, including resolving a native-compilation blocker caused by missing Python development headers." },
      { title: "Diagnosing experiment failures", body: "I audited result coverage and preserved failed runs with diagnostic evidence, including numerical instability, invalid probabilities, scheduler mismatches, and dataset-specific failures." },
      { title: "Measured resource planning", body: "I used memory and execution-time measurements to tune concurrent GPU execution, and validated export/reload, checksums, sampling, and visualization in reusable benchmark workflows." },
    ],
    architecture: [
      { label: "Research objective", description: "Probabilistic circuits, distribution shift, and structured optimal transport." },
      { label: "Reproducible environment", description: "Isolated dependencies, CUDA tooling, native compilation, and GPU Slurm jobs." },
      { label: "Experiment execution", description: "Experiment configurations, measured concurrency, execution-time measurements, and preserved failure logs." },
      { label: "Result verification", description: "Result coverage checks, serialization/reload, failure classification, and incremental delivery." },
    ],
    metrics: [
      { value: "3,360", label: "Experiment configurations", scope: "Configurations in the full-length follow-up study." },
      { value: "28", label: "Benchmark datasets", scope: "Follow-up study with complete JSON outputs across 28 datasets." },
      { value: "8", label: "Concurrent L40S runs", scope: "Concurrent execution for the research workload, with approximately 12 GiB peak memory." },
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
    title: "Keeping Long-Running AI Work on Track",
    shortTitle: "AI workflow method",
    subtitle: "Independent review, evidence, and accountable decisions",
    summary: "I designed a method for making AI work inspectable: separate generation from acceptance, review actual artifacts, and preserve the evidence behind current decisions.",
    category: "Agent systems",
    role: "Methodology author",
    timeframe: "v1.2 published August 2026",
    status: "Bilingual methodology publication",
    color: "#d9ed92",
    tags: ["Project rules", "Progress tracking", "Independent review", "Git"],
    question: "When AI produces work faster than people can verify it, how can acceptance rest on sufficient evidence, and how can errors be kept from propagating through later tasks?",
    approach: "I separate generation from acceptance and keep task requirements, accepted state, and decision history in repository documents. An independent reviewer inspects the actual artifacts, forms its own judgment, and challenges whether the chosen checks are sufficient. Review depth follows task risk; decisions about intent, sensitive facts, or irreversible actions return to the human owner. New evidence can invalidate an earlier acceptance, with that change recorded explicitly so later sessions use the current conclusion.",
    narrative: [
      {
        "id": "approach",
        "title": "Generation scales. Verification needs structure.",
        "navLabel": "The trust problem",
        "paragraphs": [
          "When AI produces work faster than people can verify it, how can we decide which results deserve acceptance? I developed this method around that question, focusing on the evidence and authority behind each decision."
        ],
        "points": [
          {
            "title": "Self-checks can share the implementation's blind spots",
            "body": "An agent can run tests honestly and still choose a verification path that misses the defect. Acceptance requires judgment about whether those checks actually challenge the result."
          },
          {
            "title": "An old approval can become a new assumption",
            "body": "Later sessions can inherit a polished artifact or an earlier approval as established fact. Long-running work needs an explicit record of which conclusions remain valid and which have been overturned."
          }
        ]
      },
      {
        "id": "contributions",
        "title": "Make acceptance inspectable and accountable.",
        "navLabel": "The method",
        "paragraphs": [
          "I separate implementation from acceptance, and organize repository records by their responsibilities, update frequency, and editing authority. The method connects each accepted result to evidence a reviewer can inspect."
        ],
        "points": [
          {
            "title": "Independent access, judgment, and evidence challenge",
            "body": "A reviewer examines the actual artifacts, reaches its own acceptance decision, and judges whether the verification is sufficient. It can request another test or extraction path when the existing checks leave the claim unresolved."
          },
          {
            "title": "Requirements and accepted state have different owners",
            "body": "Stable requirements preserve the owner's intent and constraints. Current state records accepted work, open issues, and supporting evidence. An implementation step receives a bounded objective and permitted changes."
          },
          {
            "title": "New evidence can overturn an earlier acceptance",
            "body": "I preserve the earlier record and explicitly invalidate its conclusion. Later sessions can trace the history while continuing from the current decision. Human judgment remains part of decisions about intent, sensitive facts, and irreversible actions."
          }
        ]
      },
      {
        "id": "architecture",
        "title": "Cases that shaped the method.",
        "navLabel": "Practical cases",
        "paragraphs": [
          "The method developed through real artifact production and release work. These cases shaped both the definition of independent review and how much process a task needs."
        ],
        "points": [
          {
            "title": "A PDF that passed self-checks but failed independent review",
            "body": "The PDF looked correct and passed the coding agent's chosen text extraction check. Another extraction path revealed body paragraphs appearing after the signature. Independent review overturned the acceptance; a renderer repair and multiple extraction checks produced the replacement artifact."
          },
          {
            "title": "An audio-app release tied to its actual package",
            "body": "For AudioShifter, I concentrated checks around package and release identity: tests, native dependencies, tagged source, checksums, a separate Mac, and downloaded release assets. The review structure followed the concentrated release risks."
          }
        ]
      }
    ],
    highlights: [
      { title: "Rules and progress stay separate", body: "I separated stable project requirements from current progress and decision history. Each task has one current step, and closed task records are preserved rather than overwritten by new work." },
      { title: "Review the work directly", body: "I defined independent review around direct access to artifacts, an independent acceptance decision, and judgment about whether the verification itself is sufficient. A reviewer can challenge the chosen tests and require another verification path." },
      { title: "Replaced decisions stay replaced", body: "I specified how new evidence overturns an earlier accepted result while preserving its history, so a later session cannot silently reuse an outdated approval." },
      { title: "Match the process to the risk", body: "I documented job-application preparation and an AudioShifter release to show how the amount of review and recordkeeping can reflect each task's risk." },
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
      { title: "Bilingual publication and citation", description: "The v1.2 technical artifact includes English and Chinese manuscripts, PDFs, machine-readable citation metadata, and publication checksums.", kind: "publication", scope: "Version-specific DOI 10.5281/zenodo.21911982, published August 13, 2026.", href: "https://doi.org/10.5281/zenodo.21911982" },
      { title: "A successful check that missed a PDF defect", description: "The coding agent's own check passed, but an independent review found that text appeared in the wrong reading order. The earlier approval was withdrawn, the renderer was repaired, and the PDF was checked through multiple extraction methods.", kind: "case-study", scope: "PDF preparation case documented in v1.2.", href: "https://github.com/smter6626/structured-llm-execution-framework" },
      { title: "Software-release evidence chain", description: "The AudioShifter case connects tests, package audits, tagged source, checksums, non-development-machine acceptance, and downloaded release assets.", kind: "case-study", scope: "AudioShifter alpha.3 release engineering.", href: "https://github.com/smter6626/AudioShifter/blob/main/macos/release/release_verification_v0.1.0-alpha.3.md" },
    ],
    limitations: [],
    links: [
      { label: "Methodology repository", href: "https://github.com/smter6626/structured-llm-execution-framework", kind: "source" },
      { label: "Read v1.2 publication", href: "https://doi.org/10.5281/zenodo.21911982", kind: "publication" },
    ],
    related: ["1pcloop", "audioshifter"],
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
        "title": "When generation outpaces human review.",
        "navLabel": "The trust problem",
        "paragraphs": [
          "When AI generates code and artifacts faster than people can inspect them, how can we decide what to accept and keep insufficiently checked results from becoming assumptions in later work?",
          "I built this workflow to turn the framework's review and acceptance method into an executable coding process. It gives implementation, independent review, and human decisions explicit roles."
        ]
      },
      {
        "id": "contributions",
        "title": "Separate generation from acceptance.",
        "navLabel": "The review workflow",
        "paragraphs": [
          "Task constraints and acceptance criteria govern the cycle. A coding agent produces the work; an independent review agent examines the artifacts and judges whether the evidence supports acceptance."
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
        "title": "Carry accepted state across sessions.",
        "navLabel": "State & recovery",
        "paragraphs": [
          "I keep task requirements and current progress in repository records, with checkpoints for execution and recovery. New sessions can reconstruct the task from those records and the actual project."
        ],
        "points": [
          {
            "title": "Bind the decision to the reviewed artifact",
            "body": "I check branches, commit ancestry, permitted paths, project-rule hashes, and evidence SHA-256 values before a state update. These checks connect the review decision to a specific version of the work."
          },
          {
            "title": "Recover with explicit uncertainty handling",
            "body": "Checkpoints retain agent-turn identity, review context, and state updates. Resume checks reconcile interrupted work and avoid repeating completed turns. Unexplained drift stops for human review."
          }
        ]
      },
      {
        "id": "practice",
        "title": "Run the review cycle on a real project.",
        "navLabel": "In practice",
        "paragraphs": [
          "A multilingual classroom-transcription task ran through three review cycles, seven agent turns, and two project commits. Independent review and human checks included live Japanese and French transcription.",
          "I also built a read-only terminal dashboard that shows the task verdict, progress update, and publication of supporting records separately. It makes the current result and any decision awaiting a human visible."
        ]
      }
    ],
    highlights: [
      { title: "Separate generation from acceptance", body: "I give implementation and acceptance different roles. Fresh coding sessions produce changes and tests; a persistent review session inspects the artifacts against acceptance criteria and can request further checks." },
      { title: "Bind acceptance to the reviewed artifact", body: "I validate structured responses, branches, commit ancestry, project-rule hashes, permitted file paths, and SHA-256 hashes before an explicitly authorized progress update." },
      { title: "Resume without repeating completed work", body: "I added safely written checkpoints and checks for interrupted updates. The same review session can correct at most two mechanical reporting errors without rerunning completed coding work." },
      { title: "Show what actually succeeded", body: "I built a progress log, command-line tools, and a read-only terminal dashboard that separately show task outcome, progress-record updates, and publication of the supporting records." },
    ],
    architecture: [
      { label: "Load the current task", description: "Read the project rules, current progress, repository identity, and checks for outdated inputs." },
      { label: "Independent review agent", description: "Define the current step, permitted edits, and required supporting results." },
      { label: "Coding agent", description: "Implement and test in a separate project repository, then create a normal commit without rewriting history." },
      { label: "Review and record acceptance", description: "Judge the evidence against acceptance criteria, validate artifact identity, then record an authorized result, request a repair, or pause for human judgment." },
    ],
    metrics: [
      { value: "3 cycles", label: "Real project task", scope: "Multilingual transcriber task spanning 7 agent turns and 2 project commits." },
      { value: "3 states", label: "Separate outcomes", scope: "Task outcome, progress updates, and publication of supporting records." },
    ],
    evidence: [
      { title: "Working implementation", description: "The source includes agent routing, structured-response checks, saved progress and recovery, command-line tools, and a read-only terminal dashboard.", kind: "implementation", scope: "Runs locally on macOS with two isolated Codex role sessions, one active workflow, and one agent editing the project at a time.", href: "https://github.com/smter6626/framework-loop/tree/main/1PCloop" },
      { title: "A real transcription-project task", description: "A transcriber change went through multiple cycles, independent review, and human approval. Japanese and French live transcription were manually checked; other paths were supported by tests and code review.", kind: "validation", scope: "Multilingual classroom transcription task.", href: "https://github.com/smter6626/framework-loop/blob/main/1PCloop/docs/p51_medium_scale_stage_summary.md" },
      { title: "Live-agent integration test", description: "The record follows a review-agent instruction, coding-agent implementation, and independent review through one progress update. It also checks record publication and read-only dashboard behavior in a real terminal.", kind: "validation", scope: "Live-agent integration test, September 18, 2026.", href: "https://github.com/smter6626/framework-loop/blob/main/1PCloop/evidence-summaries/f7-post-foundation-real-service-smoke-20260918.md" },
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
    approach: "I separate the UI, microphone capture, buffering and resampling, transcription engine, local inference backend, and persistence. Overlapping audio chunks run through whisper.cpp with Metal acceleration; raw output is preserved before conservative cleanup, and packaged releases include Python and the required libraries while models remain user-managed.",
    highlights: [
      { title: "A local audio pipeline", body: "I built asynchronous capture and inference workers, overlapping chunk processing, and 48 kHz-to-16 kHz resampling to keep the interface responsive during transcription." },
      { title: "Model downloads and management", body: "I added model scanning, import, selection, and managed downloads with exact-size and SHA-256 checks, temporary staging, retry handling, and atomic publication." },
      { title: "Original transcripts and clean text", body: "I preserve backend output alongside conservatively deduplicated text, logs, and session configuration. Session tools support incremental copying, safe renaming, and full-history recovery." },
      { title: "Packaging and release engineering", body: "I packaged Python and native libraries into a standalone macOS app, pinned build dependencies, and tested inference in the packaged application." },
    ],
    architecture: [
      { label: "Capture", description: "Microphone audio, buffering, resampling, and asynchronous workers." },
      { label: "Local inference", description: "Overlapping chunks passed to upstream whisper.cpp with Metal acceleration." },
      { label: "Transcript persistence", description: "Raw output first, conservative overlap cleanup, logs, and session metadata." },
      { label: "Packaged application", description: "PySide6 desktop UI, bundled Python and libraries, verified user-managed models, and release-file checks." },
    ],
    metrics: [
      { value: "1.1.0", label: "Current public release", scope: "Published October 11, 2026 for macOS on Apple Silicon." },
      { value: "48 -> 16 kHz", label: "Audio resampling", scope: "Microphone capture resampled for Whisper inference." },
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
    related: ["1pcloop", "audioshifter"],
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
    approach: "I designed a modular local macOS application, separating the UI and controller from validation, file handling, external tools, and the processing pipeline. FFmpeg/FFprobe and Rubber Band perform the audio processing, with formant preservation and predictable output behavior.",
    highlights: [
      { title: "Independent learning controls", body: "I implemented independently configurable pitch changes from -24 to +24 semitones and speed changes from -95% to +400%, with MP3, M4A, WAV, and FLAC inputs." },
      { title: "Cancellation with cleanup", body: "I added background processing, child-process-group cleanup, exclusive non-overwriting output creation, source-file protection, and partial-file removal on failures or cancellation." },
      { title: "Tests that challenge failure behavior", body: "I covered validation, filesystem conflicts, fault injection, real processing, packaged execution, cancellation, cleanup, source protection, and GUI behavior." },
      { title: "A distributable release", body: "I bundled Python and audio tools, audited native binaries and library references, validated on a separate non-development Mac, and prepared licensing, corresponding source, checksums, and a public pre-release." },
    ],
    architecture: [
      { label: "UI and controller", description: "Tkinter inputs, validation, status, and background-job coordination." },
      { label: "Audio pipeline", description: "FFprobe inspection and FFmpeg/Rubber Band processing with independent pitch and speed." },
      { label: "Protected file handling", description: "Exclusive output creation, deterministic names, source preservation, and cancellation cleanup." },
      { label: "Release verification", description: "Bundled dependencies, native-library audits, real packaged processing, checksums, and corresponding source." },
    ],
    metrics: [
      { value: "165", label: "Tests passed", scope: "alpha.3 release verification: 165 passed, 0 failed, 0 skipped." },
      { value: "75", label: "Native binaries audited", scope: "alpha.3 package audit: 75 arm64 Mach-O files and 324 dynamic library references." },
      { value: "4", label: "Input audio formats", scope: "MP3, M4A, WAV, and FLAC; fixed 44.1 kHz stereo 320 kbps MP3 output." },
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

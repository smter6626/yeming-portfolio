"use client";

import { useId, type CSSProperties } from "react";
import type { AtlasProps, ProjectId } from "../../lib/types";
import { categoryLabel } from "../../lib/i18n";
import styles from "./Atlas.module.css";

const labels = {
  en: {
    title: "Explore all five works",
    description: "Explore research, AI workflows, and desktop software. Connections show how the workflow method informed the coding system and transcriber development.",
    select: "Select a work to preview", preview: "Preview this work.", selected: "Selected", explore: "Explore",
    relation: "Method -> Coding workflow -> Transcriber", hint: "Select a node",
  },
  zh: {
    title: "探索全部五个项目",
    description: "探索科研、AI 工作流与桌面软件。连线展示工作流方法、编程系统和课堂转写开发之间的联系。",
    select: "选择要预览的项目", preview: "预览此项目。", selected: "已选中", explore: "探索",
    relation: "方法 -> 编程流程 -> 课堂转写", hint: "选择一个节点",
  },
};

// The SVG anchors and HTML buttons share these normalized coordinates.
const coordinates: Record<ProjectId, { x: number; y: number }> = {
  research: { x: 185, y: 395 },
  governance: { x: 230, y: 160 },
  "1pcloop": { x: 540, y: 280 },
  transcriber: { x: 905, y: 150 },
  audioshifter: { x: 935, y: 410 },
};

const relation: ProjectId[] = ["governance", "1pcloop", "transcriber"];

type NodeStyle = CSSProperties & {
  "--node-x": string;
  "--node-y": string;
  "--node-color": string;
};

export default function Atlas({ projects, selectedId, onSelect, locale }: AtlasProps) {
  const text = labels[locale];
  const uid = useId();
  const selected = coordinates[selectedId];

  return (
    <section className={styles.atlas} aria-labelledby={`${uid}-title`} aria-describedby={`${uid}-description`}>
      <h2 id={`${uid}-title`} className={styles.srOnly}>{text.title}</h2>
      <p id={`${uid}-description`} className={styles.srOnly}>
        {text.description}
      </p>

      <div className={styles.frame}>
        <div className={styles.diagram}>
          <svg
            className={styles.background}
            viewBox="0 0 1200 560"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g className={styles.orbits}>
              <ellipse cx="565" cy="286" rx="475" ry="224" />
              <ellipse cx="565" cy="286" rx="320" ry="175" />
              <path d="M38 280H1162 M600 34V526" />
              <path d="M66 66h16m-8-8v16 M1124 490h16m-8-8v16 M1100 65h16m-8-8v16 M70 483h16m-8-8v16" />
            </g>
            <g className={styles.relationships}>
              {relation.slice(0, -1).map((id, index) => {
                const from = coordinates[id];
                const to = coordinates[relation[index + 1]];
                const linked = selectedId === id || selectedId === relation[index + 1];
                return (
                  <path
                    key={id}
                    className={linked ? styles.activeConnection : undefined}
                    d={`M${from.x} ${from.y} L${to.x} ${to.y}`}
                  />
                );
              })}
            </g>
            <g className={styles.mapPoints}>
              {projects.map((project) => {
                const point = coordinates[project.id];
                return <circle key={project.id} cx={point.x} cy={point.y} r="5" />;
              })}
            </g>
            <circle
              className={styles.selectedOrbit}
              cx={selected.x}
              cy={selected.y}
              r="108"
            />
          </svg>

          <div className={styles.nodes} role="group" aria-label={text.select}>
            {projects.map((project) => {
              const point = coordinates[project.id];
              const isSelected = project.id === selectedId;
              const nodeStyle: NodeStyle = {
                "--node-x": `${(point.x / 1200) * 100}%`,
                "--node-y": `${(point.y / 560) * 100}%`,
                "--node-color": project.color,
              };

              return (
                <button
                  key={project.id}
                  type="button"
                  style={nodeStyle}
                  className={`${styles.node} ${isSelected ? styles.selected : ""} ${relation.includes(project.id) ? styles.relatedNode : ""}`}
                  data-project={project.id}
                  aria-pressed={isSelected}
                  aria-label={`${project.title}, ${categoryLabel(project.category, locale)}. ${text.preview}`}
                  onClick={() => onSelect(project.id)}
                >
                  <span className={styles.nodeTop}>
                    <span className={styles.number}>{project.number}</span>
                    <span className={styles.indicator} aria-hidden="true" />
                    <span className={styles.selectedLabel}>{isSelected ? text.selected : text.explore}</span>
                  </span>
                  <span className={styles.nodeTitle}>{project.shortTitle}</span>
                  <span className={styles.category}>{categoryLabel(project.category, locale)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.legend}>
          <p><span className={styles.legendLine} aria-hidden="true" />{text.relation}</p>
          <span className={styles.hint}>{text.hint}</span>
        </div>
      </div>
    </section>
  );
}

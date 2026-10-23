"use client";

import { useId, type CSSProperties } from "react";
import type { AtlasProps, ProjectId } from "../../lib/types";
import { categoryLabel, localePath } from "../../lib/i18n";
import styles from "./Atlas.module.css";

const labels = {
  en: {
    title: "Explore all five works",
    description: "Explore research, AI workflows, and desktop software. The transcriber was a setting for the method to develop; the method later informed a coding workflow used on that project.",
    select: "Project links", preview: "Open project.", selected: "Preview", explore: "Read",
    relation: "Method / Coding workflow / Transcriber", hint: "Open a project",
  },
  zh: {
    title: "探索全部五个项目",
    description: "探索科研、AI 工作流与桌面软件。课堂转写器是方法演化的实践项目，方法后来又用于编程流程，并在转写器开发中应用。",
    select: "项目链接", preview: "打开项目。", selected: "预览中", explore: "阅读",
    relation: "方法 / 编程流程 / 转写实践", hint: "点击项目即可进入",
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
                    data-connection-from={id}
                    data-connection-to={relation[index + 1]}
                    data-active-class={styles.activeConnection}
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
              data-selection-orbit
              cx={selected.x}
              cy={selected.y}
              r="108"
            />
          </svg>

          <div className={styles.nodes} role="group" aria-label={text.select} data-atlas-nodes data-selected-class={styles.selected} data-selected-label={text.selected} data-explore-label={text.explore}>
            {projects.map((project) => {
              const point = coordinates[project.id];
              const isSelected = project.id === selectedId;
              const nodeStyle: NodeStyle = {
                "--node-x": `${(point.x / 1200) * 100}%`,
                "--node-y": `${(point.y / 560) * 100}%`,
                "--node-color": project.color,
              };

              return (
                <a
                  key={project.id}
                  href={localePath(locale, `/work/${project.id}/`)}
                  style={nodeStyle}
                  className={`${styles.node} ${isSelected ? styles.selected : ""} ${relation.includes(project.id) ? styles.relatedNode : ""}`}
                  data-project={project.id}
                  data-x={point.x}
                  data-y={point.y}
                  data-selected={isSelected}
                  aria-label={`${project.title}, ${categoryLabel(project.category, locale)}. ${text.preview}`}
                  onFocus={() => onSelect(project.id)}
                  onMouseEnter={() => onSelect(project.id)}
                >
                  <span className={styles.nodeTop}>
                    <span className={styles.number}>{project.number}</span>
                    <span className={styles.indicator} aria-hidden="true" />
                    <span className={styles.selectedLabel} data-selection-label>{isSelected ? text.selected : text.explore}</span>
                  </span>
                  <span className={styles.nodeTitle}>{project.shortTitle}</span>
                  <span className={styles.category}>{categoryLabel(project.category, locale)}</span>
                </a>
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

"use client";
import { useState } from "react";
import type {
  CapabilityStage,
  ResolvedSkill,
  WorkflowStage,
} from "@/types/skills";
import { CapabilityStageRail } from "./capability-stage-rail";
import { SkillConnections } from "./skill-connections";
import { SkillContext } from "./skill-context";
export function CapabilityMatrix({
  skills,
  stages,
  projectIds,
  title,
  instructions,
  legend,
  domain,
}: {
  skills: ResolvedSkill[];
  stages: WorkflowStage[];
  projectIds: string[];
  title: string;
  instructions: string;
  legend: string;
  domain: string;
}) {
  const [filter, setFilter] = useState<CapabilityStage | "all">("all");
  const [selected, setSelected] = useState(skills[0].id);
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const active =
    skills.find((skill) => skill.id === (hovered ?? focused ?? selected)) ??
    skills[0];
  const selectedSkill =
    skills.find((skill) => skill.id === selected) ?? skills[0];
  const visible = skills.filter(
    (skill) => filter === "all" || skill.stages.includes(filter),
  );
  const groups = stages.filter((stage) =>
    visible.some((skill) => skill.placement === stage.id),
  );
  const applyFilter = (next: CapabilityStage | "all") => {
    setFilter(next);
    setHovered(null);
    setFocused(null);
    if (next !== "all" && !selectedSkill.stages.includes(next)) {
      const first = skills.find((skill) => skill.stages.includes(next));
      if (first) setSelected(first.id);
    }
  };
  const choose = (id: string) => {
    setSelected(id);
    setHovered(null);
    setFocused(null);
  };
  return (
    <div className="capability-matrix">
      <div className="capability-heading">
        <h3>{title}</h3>
        <p>
          <span>Current domain</span>
          {domain}
        </p>
      </div>
      <p className="capability-instructions">{instructions}</p>
      <CapabilityStageRail
        stages={stages}
        filter={filter}
        activeStages={active.stages}
        onFilter={applyFilter}
      />
      <div className="capability-trace">
        <span>{active.label} / workflow connections</span>
        <SkillConnections stages={stages} active={active.stages} />
      </div>
      <div
        className="capability-tools"
        data-filter={filter}
        onMouseLeave={() => setHovered(null)}
      >
        {groups.map((stage) => (
          <div key={stage.id} className="capability-group">
            <h4>
              {stage.label}
              <span>{stage.description}</span>
            </h4>
            <div>
              {visible
                .filter((skill) => skill.placement === stage.id)
                .map((skill) => (
                  <button
                    key={skill.id}
                    type="button"
                    className="skill-item"
                    data-skill-id={skill.id}
                    data-active={active.id === skill.id}
                    data-usage={skill.usage}
                    aria-pressed={selected === skill.id}
                    aria-controls="capability-context"
                    onPointerEnter={(event) => {
                      if (event.pointerType === "mouse") setHovered(skill.id);
                    }}
                    onFocus={() => setFocused(skill.id)}
                    onBlur={() => setFocused(null)}
                    onClick={() => choose(skill.id)}
                  >
                    <span>{skill.label}</span>
                    <span className="skill-item-marker" aria-hidden="true">
                      {selected === skill.id
                        ? "↗"
                        : skill.usage === "Core"
                          ? "·"
                          : ""}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="capability-caption">
        <p>{legend}</p>
        <a
          className="action action-text"
          href="#capability-context"
          onFocus={() => {
            setHovered(null);
            setFocused(null);
          }}
        >
          Read selected tool details <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div
        id="capability-context"
        tabIndex={-1}
        className="capability-context"
        role="region"
        aria-label="Selected technology details"
      >
        <SkillContext skill={active} stages={stages} projectIds={projectIds} />
      </div>
      <p
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {selectedSkill.label} selected. Used in {selectedSkill.projects.length}{" "}
        listed projects.{" "}
        {filter === "all" ? "All workflow stages" : `${filter} stage`},{" "}
        {visible.length} tools shown.
      </p>
    </div>
  );
}

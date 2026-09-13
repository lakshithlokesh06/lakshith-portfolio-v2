import type { ReactNode } from "react";
import type { Project } from "@/types/project";
import { ArrowDownRight, Minus, Plus } from "lucide-react";
import { observatoryCopy } from "@/data/projects";

interface ProjectRowProps {
  project: Project;
  selected: boolean;
  expanded: boolean;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
  onInspect: (id: string | null) => void;
  visual: ReactNode;
  detail: ReactNode;
}
export function ProjectRow({
  project,
  selected,
  expanded,
  onSelect,
  onToggle,
  onInspect,
  visual,
  detail,
}: ProjectRowProps) {
  return (
    <article
      id={`project-${project.id}`}
      className={`project-row ${project.flagship ? "project-flagship" : ""}`}
      data-project-id={project.id}
      data-selected={selected}
      onMouseEnter={() => onInspect(project.id)}
      onMouseLeave={() => onInspect(null)}
      onFocusCapture={() => onInspect(project.id)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onInspect(null);
      }}
    >
      <div className="project-summary">
        <div className="project-meta">
          <span className="project-number">
            {String(project.index).padStart(2, "0")}
          </span>
          <span>{project.classification}</span>
          {project.flagship && (
            <span className="flagship-label">FLAGSHIP / 01</span>
          )}
        </div>
        <h3>
          <button
            type="button"
            className="project-title-button"
            aria-pressed={selected}
            aria-label={`Select ${project.title}`}
            onClick={() => onSelect(project.id)}
          >
            {project.title}
            <ArrowDownRight size={22} aria-hidden="true" />
          </button>
        </h3>
        <p className="project-description">{project.description}</p>
        {project.technologySummary.length > 0 && (
          <p className="project-stack">
            {project.technologySummary.join(" / ")}
          </p>
        )}
        <p className="project-inspection">
          <span>Focus</span>
          {project.focus.join(" · ")}
        </p>
        <p className="project-hover-note" aria-hidden="true">
          ↗ {project.functionality[0]}
        </p>
        <div className="project-actions">
          <button
            type="button"
            className="project-expand action action-text"
            aria-expanded={expanded}
            aria-controls={`notes-${project.id}`}
            onClick={() => onToggle(project.id)}
          >
            {expanded ? observatoryCopy.collapse : observatoryCopy.explore}
            {expanded ? (
              <Minus size={16} aria-hidden="true" />
            ) : (
              <Plus size={16} aria-hidden="true" />
            )}
          </button>
          {project.deployment && (
            <span className="project-maturity">{project.deployment}</span>
          )}
          <span className="project-selection" aria-hidden="true">
            {selected ? "Selected" : ""}
          </span>
        </div>
      </div>
      <div className="project-preview">
        <button
          type="button"
          className="preview-select"
          aria-label={`Select ${project.title} preview`}
          aria-pressed={selected}
          onClick={() => onSelect(project.id)}
        />
        {visual}
      </div>
      <div
        id={`notes-${project.id}`}
        className="project-detail"
        hidden={!expanded}
        role="region"
        aria-label={`${project.title} technical notes`}
      >
        {detail}
      </div>
    </article>
  );
}

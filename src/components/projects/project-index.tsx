import type { Project } from "@/types/project";
import { observatoryCopy } from "@/data/projects";

export function ProjectIndex({
  projects,
  selected,
  visible,
  onSelect,
}: {
  projects: Project[];
  selected: string;
  visible: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav className="project-index" aria-label={observatoryCopy.indexLabel}>
      {projects.map((project) => (
        <a
          key={project.id}
          href={`#project-${project.id}`}
          onClick={() => onSelect(project.id)}
          aria-current={visible === project.id ? "location" : undefined}
          data-selected={selected === project.id}
          aria-label={`${String(project.index).padStart(2, "0")} ${project.title}${selected === project.id ? ", selected" : ""}`}
        >
          <span>{String(project.index).padStart(2, "0")}</span>
          <span className="index-classification">{project.classification}</span>
          <span className="index-marker" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}

"use client";
import { useRef, useState, type ReactNode } from "react";
import type { Project } from "@/types/project";
import { ProjectIndex } from "./project-index";
import { ProjectRow } from "./project-row";
import { useVisibleProject } from "@/hooks/use-visible-project";

export function ProjectObservatory({
  projects,
  visuals,
  details,
}: {
  projects: Project[];
  visuals: ReactNode[];
  details: ReactNode[];
}) {
  const [selected, setSelected] = useState(projects[0]?.id ?? "");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [inspected, setInspected] = useState<string | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const visible = useVisibleProject(container, projects[0]?.id ?? "");
  const select = (id: string) => {
    setSelected(id);
    if (expanded && expanded !== id) setExpanded(null);
  };
  const toggle = (id: string) => {
    setSelected(id);
    setExpanded((current) => (current === id ? null : id));
  };
  return (
    <div
      className="project-observatory"
      ref={container}
      data-inspecting={inspected ?? undefined}
    >
      <ProjectIndex
        projects={projects}
        selected={selected}
        visible={visible}
        onSelect={select}
      />
      <div className="observatory-reading">
        <span>SELECT A PROJECT / OPEN THE NOTES</span>
        <span>
          IN VIEW{" "}
          {String(
            projects.find((project) => project.id === visible)?.index ?? 1,
          ).padStart(2, "0")}{" "}
          / 06
        </span>
      </div>
      <div className="project-rows">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-entry"
            data-muted={Boolean(inspected && inspected !== project.id)}
          >
            <ProjectRow
              project={project}
              selected={selected === project.id}
              expanded={expanded === project.id}
              onSelect={select}
              onToggle={toggle}
              onInspect={setInspected}
              visual={visuals[i]}
              detail={details[i]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

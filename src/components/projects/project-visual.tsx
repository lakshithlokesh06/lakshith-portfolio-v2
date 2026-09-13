import Image from "next/image";
import type { Project } from "@/types/project";
import { observatoryCopy } from "@/data/projects";
import { InterfaceVisual } from "./interface-visuals";

export function ProjectVisual({ project }: { project: Project }) {
  const screenshot = project.visual.screenshot;
  return (
    <figure className={`project-visual visual-${project.visual.kind}`}>
      {screenshot ? (
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          sizes="(max-width: 767px) 100vw, 50vw"
          className="project-screenshot"
        />
      ) : (
        <div aria-hidden="true" className="interface-illustration">
          <InterfaceVisual kind={project.visual.kind} />
        </div>
      )}
      <figcaption>
        <span>{project.visual.caption}</span>
        {!screenshot && (
          <span className="illustration-note">
            {observatoryCopy.illustration}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

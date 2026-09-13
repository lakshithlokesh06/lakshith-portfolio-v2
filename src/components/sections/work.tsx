import { projects, observatoryCopy } from "@/data/projects";
import { Section } from "@/components/ui/section";
import { ProjectObservatory } from "@/components/projects/project-observatory";
import { ProjectVisual } from "@/components/projects/project-visual";
import { ProjectDetail } from "@/components/projects/project-detail";
import "@/components/projects/projects.css";

export function Work() {
  return (
    <Section id="work" {...observatoryCopy.heading}>
      <ProjectObservatory
        projects={projects}
        visuals={projects.map((project) => (
          <ProjectVisual key={project.id} project={project} />
        ))}
        details={projects.map((project) => (
          <ProjectDetail key={project.id} project={project} />
        ))}
      />
    </Section>
  );
}

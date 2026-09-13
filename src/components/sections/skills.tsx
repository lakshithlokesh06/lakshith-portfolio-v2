import { Section } from "@/components/ui/section";
import { CapabilityMatrix } from "@/components/skills/capability-matrix";
import { skills, workflowStages, capabilityCopy } from "@/data/skills";
import { projects } from "@/data/projects";
import { education, educationPeriod } from "@/data/education";
import { resolveCapabilities } from "@/lib/capabilities";
import "@/components/skills/capabilities.css";
export function Skills() {
  return (
    <Section id="skills" {...capabilityCopy.heading}>
      <CapabilityMatrix
        skills={resolveCapabilities(skills, projects)}
        stages={workflowStages}
        projectIds={projects.map((project) => project.id)}
        title={capabilityCopy.title}
        instructions={capabilityCopy.instructions}
        legend={capabilityCopy.legend}
        domain={`${education.msc.program} · ${educationPeriod(education.msc)}`}
      />
    </Section>
  );
}

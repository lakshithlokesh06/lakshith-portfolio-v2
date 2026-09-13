import type { Project } from "@/types/project";
import type { ResolvedSkill, Skill } from "@/types/skills";
const normalized = (name: string) => name.trim().toLowerCase();
export function resolveCapabilities(
  skills: Skill[],
  projects: Project[],
): ResolvedSkill[] {
  const projectSets = projects.map((project) => ({
    project,
    technologies: new Set(project.technologies.map(normalized)),
  }));
  return skills.map((skill) => {
    const matches = projectSets
      .filter(({ technologies }) =>
        skill.projectTechnologies.some((name) =>
          technologies.has(normalized(name)),
        ),
      )
      .map(({ project }) => ({ id: project.id, title: project.title }));
    return {
      ...skill,
      projects: matches,
      usage:
        matches.length >= 2
          ? "Core"
          : matches.length === 1
            ? "Used"
            : "Workflow",
    };
  });
}

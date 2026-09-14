import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

export const projectStudies = projects.flatMap((project) => {
  const study = caseStudies[project.id];
  if (!project.caseStudy || !study) return [];
  return [{ project, study, slug: project.caseStudy.split("/").at(-1)! }];
});
export function getProjectStudy(slug: string) {
  return projectStudies.find((entry) => entry.slug === slug);
}

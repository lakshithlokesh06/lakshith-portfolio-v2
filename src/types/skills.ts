export type CapabilityStage = "data" | "analyze" | "model" | "build" | "ship";
export type SkillGroup =
  | "Programming"
  | "Data & Analytics"
  | "Machine Learning"
  | "AI Systems"
  | "Web & Application"
  | "Databases"
  | "Tools & Platforms";
export interface Skill {
  id: string;
  label: string;
  group: SkillGroup;
  placement: CapabilityStage;
  stages: CapabilityStage[];
  role: string;
  usedFor: string[];
  /** Exact technology names in project records; no substring matching. */
  projectTechnologies: string[];
  repositoryEvidence?: string;
}
export interface ResolvedSkill extends Skill {
  projects: { id: string; title: string }[];
  usage: "Core" | "Used" | "Workflow";
}
export interface WorkflowStage {
  id: CapabilityStage;
  label: string;
  description: string;
}

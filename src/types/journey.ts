export type EducationId = "puc" | "bca" | "msc";
export interface Education {
  id: EducationId;
  institution: string;
  program: string;
  shortProgram: string;
  specialization?: string;
  subjects?: string[];
  location?: string;
  status: "Completed" | "Current";
  startYear?: number;
  endYear?: number;
  cgpa?: string;
}
export interface JourneyStage {
  id: string;
  index: number;
  title: string;
  shortTitle: string;
  category: string;
  educationId?: EducationId;
  summary: string;
  transition: string;
  focus: string[];
  projectIds: string[];
  position: { x: number; y: number };
}

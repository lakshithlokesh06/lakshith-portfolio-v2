export type ProjectVisualKind =
  "travel" | "dataset" | "market" | "career" | "commerce" | "score";
export type ProjectClassification =
  "AI SYSTEM" | "DATA PRODUCT" | "ANALYTICS" | "MACHINE LEARNING";
export type ProjectUrl = `https://${string}`;
export interface Project {
  id: string;
  index: number;
  title: string;
  shortTitle: string;
  classification: ProjectClassification;
  description: string;
  problem: string;
  system: string;
  focus: string[];
  technologies: string[];
  technologySummary: string[];
  functionality: string[];
  deployment?: "Live application";
  flagship?: boolean;
  github?: ProjectUrl;
  live?: ProjectUrl;
  caseStudy?: `/${string}`;
  visual: {
    kind: ProjectVisualKind;
    caption: string;
    screenshot?: { src: string; alt: string; width: number; height: number };
  };
}

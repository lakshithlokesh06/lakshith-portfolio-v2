export interface ProjectMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}
export interface ArchitectureLayer {
  id: string;
  label: string;
  description: string;
  technologies: string[];
}
export interface CaseStudy {
  depth: "deep" | "compact";
  overview: string;
  approach: string;
  workflow: { label: string; description: string }[];
  architecture?: {
    description: string;
    layers: ArchitectureLayer[];
    relationships: string[];
  };
  notes: { title: string; body: string }[];
  outcome: string;
  reflection: string;
  media?: ProjectMedia[];
}

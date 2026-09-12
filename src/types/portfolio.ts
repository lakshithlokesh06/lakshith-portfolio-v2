export type SectionId =
  "home" | "about" | "work" | "skills" | "journey" | "contact";
export interface NavigationItem {
  id: SectionId;
  label: string;
}
export interface SocialLink {
  label: "GitHub" | "LinkedIn";
  url: `https://${string}` | null;
}
export interface Project {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  url?: string;
}
export interface SkillGroup {
  title: string;
  description: string;
  technologies: string[];
}
export interface JourneyEntry {
  id: string;
  title: string;
  kind: "education" | "experience";
  organization?: string;
  period?: string;
  description: string;
}
export interface Portfolio {
  person: {
    name: string;
    initials: string;
    location: string;
    status: string;
    disciplines: string[];
    introduction: string;
    about: string;
  };
  navigation: NavigationItem[];
  socials: SocialLink[];
  projects: Project[];
  skills: SkillGroup[];
  journey: JourneyEntry[];
}

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
export interface Portfolio {
  person: {
    name: string;
    initials: string;
    location: string;
    status: string;
    disciplines: string[];
    introduction: string;
  };
  navigation: NavigationItem[];
  socials: SocialLink[];
}

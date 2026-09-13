import type { Portfolio } from "@/types/portfolio";
export const portfolio: Portfolio = {
  person: {
    name: "Lakshith S Lokesh",
    initials: "LSL",
    location: "Bengaluru",
    status: "MSc Data Science",
    disciplines: ["Data Science", "Machine Learning", "Data Analytics"],
    introduction:
      "I build data-driven applications, ML systems, and analytics platforms — connecting data with useful, intelligent software.",
  },
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "journey", label: "Journey" },
    { id: "contact", label: "Contact" },
  ],
  socials: [
    { label: "GitHub", url: null },
    { label: "LinkedIn", url: null },
  ],
};
export const sectionContent = {
  contact: {
    index: "05",
    eyebrow: "Contact",
    title: "Good work starts with a conversation.",
  },
};

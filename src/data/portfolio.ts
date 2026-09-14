import type { Portfolio } from "@/types/portfolio";
export const portfolio: Portfolio = {
  person: {
    name: "Lakshith S Lokesh",
    initials: "LSL",
    location: "Bengaluru, India",
    status: "MSc Data Science",
    disciplines: ["Data Science", "Machine Learning", "Data Analytics"],
    introduction:
      "I build data-driven applications, ML systems, and analytics platforms — connecting data with useful, intelligent software.",
  },
  navigation: [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
};

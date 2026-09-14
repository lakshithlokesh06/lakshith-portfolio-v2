import type { ContactRoute } from "@/types/contact";

// Verified from this portfolio's origin remote. Add other routes only when supplied.
export const contactRoutes: ContactRoute[] = [
  {
    id: "github",
    label: "GitHub",
    value: "github.com/lakshithlokesh06",
    href: "https://github.com/lakshithlokesh06",
    type: "github",
    description: "Projects · source code · technical work",
    external: true,
  },
];

export const contactCopy = {
  index: "05",
  eyebrow: "Contact / Connection Layer",
  title: "Something worth building, analysing, or discussing?",
  introduction:
    "Let’s connect around data, machine learning, and useful software.",
  areas: [
    "Data Science",
    "Machine Learning",
    "Analytics",
    "AI Applications",
    "Technical Projects",
  ],
  closing: "Built around data, systems, and continuous learning.",
};

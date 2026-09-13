import type { Project } from "@/types/project";

// Only supplied project facts are included. Add verified URLs when available.
export const projects: Project[] = [
  {
    id: "ai-travel-planner",
    index: 1,
    title: "AI Smart Travel Planner",
    shortTitle: "Travel Planner",
    classification: "AI SYSTEM",
    flagship: true,
    description:
      "Personalized itineraries, built around the way you want to travel. A full-stack planning system powered by a multi-agent architecture.",
    problem:
      "Trip planning brings together personal preferences and many connected decisions.",
    system:
      "A multi-agent application that turns travel preferences into itineraries, with authentication, persistent trips, and PDF export.",
    focus: [
      "AI orchestration",
      "Preference-driven planning",
      "Full-stack architecture",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "Tailwind CSS",
    ],
    technologySummary: ["Next.js", "FastAPI", "PostgreSQL", "LangGraph"],
    functionality: [
      "Multi-agent itinerary generation",
      "Preference-driven planning",
      "Authentication",
      "Persistent and saved trips",
      "PDF export",
      "Optional travel provider integrations",
    ],
    visual: { kind: "travel", caption: "Preferences → itinerary → saved trip" },
  },
  {
    id: "autoinsight",
    index: 2,
    title: "AutoInsight — Intelligent Dataset Analyzer",
    shortTitle: "AutoInsight",
    classification: "DATA PRODUCT",
    deployment: "Live application",
    description:
      "From an uploaded dataset to a clearer starting point: automated profiling, quality analysis, visualizations, and model recommendations.",
    problem:
      "Understanding a new dataset means examining its structure, quality, and patterns before choosing a modelling approach.",
    system:
      "A Streamlit analysis platform that profiles uploaded datasets and produces interactive visualizations, machine-learning recommendations, and reports.",
    focus: ["Dataset profiling", "Data quality", "Analysis workflows"],
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "Scikit-learn",
      "ReportLab",
    ],
    technologySummary: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    functionality: [
      "Uploaded dataset profiling",
      "Data-quality analysis",
      "Interactive visualizations",
      "Machine-learning recommendations",
      "Report generation",
    ],
    visual: {
      kind: "dataset",
      caption: "Inspect the structure. Surface the patterns.",
    },
  },
  {
    id: "job-market",
    index: 3,
    title: "Job Market Analytics Portal",
    shortTitle: "Job Market",
    classification: "ANALYTICS",
    description:
      "An analytical view of job-market datasets, connecting roles, skills, employment, and market insights.",
    problem:
      "Job-market datasets contain connected signals about employment, roles, and skills that need to be explored together.",
    system:
      "A data analytics portal for exploring job-market datasets and extracting employment, skills, role, and market insights.",
    focus: ["Employment insights", "Role exploration", "Skill signals"],
    technologies: [],
    technologySummary: [],
    functionality: [
      "Job-market dataset exploration",
      "Employment and role insights",
      "Skills and market analysis",
    ],
    visual: { kind: "market", caption: "Roles and skills, seen in relation." },
  },
  {
    id: "career-recommendation",
    index: 4,
    title: "Career Recommendation System",
    shortTitle: "Career Paths",
    classification: "MACHINE LEARNING",
    deployment: "Live application",
    description:
      "A machine-learning application that connects skills and interests with potential career paths.",
    problem:
      "Exploring potential career directions requires connecting what someone can do with what interests them.",
    system:
      "A Python and Scikit-learn recommendation application presented through Streamlit.",
    focus: [
      "Skills and interests",
      "Career recommendations",
      "Applied machine learning",
    ],
    technologies: ["Python", "Scikit-learn", "Streamlit"],
    technologySummary: ["Python", "Scikit-learn", "Streamlit"],
    functionality: [
      "Skills and interests as input",
      "Potential career-path recommendations",
    ],
    visual: {
      kind: "career",
      caption: "Personal signals → possible directions",
    },
  },
  {
    id: "commerce-insights",
    index: 5,
    title: "Commerce Data Insights Dashboard",
    shortTitle: "Commerce Insights",
    classification: "ANALYTICS",
    deployment: "Live application",
    description:
      "Interactive e-commerce analysis and demand forecasting, bringing historical patterns and future demand into one application.",
    problem:
      "Understanding commerce data involves examining past activity alongside potential demand.",
    system:
      "An interactive analytics and demand-forecasting application built with Python, Streamlit, and SQLite.",
    focus: [
      "E-commerce analytics",
      "Demand forecasting",
      "Interactive exploration",
    ],
    technologies: ["Python", "Streamlit", "SQLite", "Machine Learning"],
    technologySummary: ["Python", "Streamlit", "SQLite"],
    functionality: ["Interactive e-commerce analytics", "Demand forecasting"],
    visual: { kind: "commerce", caption: "Past patterns. A view of demand." },
  },
  {
    id: "student-score",
    index: 6,
    title: "Student Score Predictor",
    shortTitle: "Score Predictor",
    classification: "MACHINE LEARNING",
    deployment: "Live application",
    description:
      "A machine-learning application that uses student-related features to predict academic performance.",
    problem:
      "Exploring how student-related features can inform estimates of academic performance.",
    system:
      "A Python prediction application using Pandas and Scikit-learn to work with student-related features.",
    focus: [
      "Feature-based prediction",
      "Academic performance",
      "Applied modelling",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn"],
    technologySummary: ["Python", "Pandas", "Scikit-learn"],
    functionality: [
      "Student-related feature inputs",
      "Academic performance prediction",
    ],
    visual: {
      kind: "score",
      caption: "Student features → model → estimated outcome",
    },
  },
];

export const observatoryCopy = {
  indexLabel: "Project index",
  selectionLabel: "Selected",
  visibleLabel: "In view",
  explore: "Explore Project",
  collapse: "Close project notes",
  illustration: "Illustrative interface · not project results",
  heading: {
    index: "01",
    eyebrow: "Selected work / Project Observatory",
    title: "Six projects. Different questions.",
    description:
      "A collection of AI systems, analytical tools, and machine-learning applications. Select a project, then open the notes behind it.",
  },
};

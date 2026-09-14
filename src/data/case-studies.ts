import type { CaseStudy } from "@/types/case-study";

// Editorial explanations of recorded functionality, not claims about uninspected source code.
export const caseStudies: Record<string, CaseStudy> = {
  "ai-travel-planner": {
    depth: "deep",
    overview:
      "The travel planner connects an AI planning workflow with the application features needed to keep using its output: authentication, saved trips, persistence, and PDF export. Preferences shape the itinerary, while the full-stack application supports reviewing and retaining it.",
    approach:
      "The system can be understood through five responsibilities: interface, application API, planning orchestration, persistence, and AI services. Keeping those responsibilities distinct in the architectural view makes the itinerary-generation flow readable without treating storage as part of an agent’s reasoning.",
    workflow: [
      {
        label: "Preferences",
        description: "Travel choices provide the context for planning.",
      },
      {
        label: "Planning request",
        description: "The application receives the preference-driven request.",
      },
      {
        label: "Agent orchestration",
        description:
          "Multiple planning responsibilities contribute to itinerary generation.",
      },
      {
        label: "Itinerary",
        description: "The planning output becomes a trip to review.",
      },
      {
        label: "Review / save / export",
        description: "Saved trips and PDF export make the result reusable.",
      },
    ],
    architecture: {
      description:
        "A responsibility map based on the recorded stack and features. The connections describe application-level roles, not a verified request trace or exact agent topology.",
      layers: [
        {
          id: "interface",
          label: "User interface",
          description:
            "The web application presents the planning experience and trip output.",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          id: "application",
          label: "Application / API",
          description:
            "The backend supports the application workflow, including authentication and saved-trip capabilities.",
          technologies: ["FastAPI", "Python"],
        },
        {
          id: "orchestration",
          label: "Planning orchestration",
          description:
            "Multi-agent planning uses travel preferences to generate itineraries.",
          technologies: ["LangGraph", "LangChain"],
        },
        {
          id: "persistence",
          label: "Trip persistence",
          description:
            "Relational storage supports persistent and saved trips as an application responsibility.",
          technologies: ["PostgreSQL", "SQLAlchemy"],
        },
        {
          id: "services",
          label: "External AI services",
          description:
            "OpenAI is the recorded AI provider. Travel-provider integration support is optional; no additional provider is named.",
          technologies: ["OpenAI"],
        },
      ],
      relationships: [
        "Interface ↔ application API: planning input and trip output.",
        "Application API ↔ planning orchestration: itinerary-generation responsibilities.",
        "Application API ↔ persistence: saved-trip data, separate from the AI service layer.",
        "Planning orchestration ↔ external AI services: model-backed planning.",
      ],
    },
    notes: [
      {
        title: "Generation is one part of the product",
        body: "Authentication, persistence, and PDF export extend the experience beyond generating an itinerary once. Each supports a different part of the trip’s lifecycle.",
      },
      {
        title: "Optional services stay optional",
        body: "Travel-provider integration support is recorded as optional. It is not presented as a required dependency or a confirmed live booking capability.",
      },
      {
        title: "Architecture without invented internals",
        body: "The available project record identifies the stack and multi-agent approach. It does not specify agent names, authentication mechanisms, database schemas, or retry policies.",
      },
    ],
    outcome:
      "A full-stack, preference-driven travel planning application with multi-agent itinerary generation, authentication, saved trips, and PDF export.",
    reflection:
      "The project brings AI orchestration and conventional application responsibilities into the same product. Its technical scope is as much about retaining and presenting a useful itinerary as it is about generating one.",
  },
  autoinsight: {
    depth: "deep",
    overview:
      "AutoInsight makes the first pass through an unfamiliar dataset more structured. It combines profiling, quality analysis, interactive visual exploration, machine-learning recommendations, and reporting in one application.",
    approach:
      "The analytical story begins with the uploaded dataset, examines its structure and quality, and carries those findings into visualization, model guidance, and reports. These are complementary views of the same data, rather than evidence that a recommended model has already been trained.",
    workflow: [
      {
        label: "Dataset upload",
        description: "Bring a dataset into the analysis application.",
      },
      {
        label: "Profiling",
        description: "Explore its structure and analytical starting points.",
      },
      {
        label: "Quality + exploration",
        description:
          "Inspect data quality and patterns through interactive views.",
      },
      {
        label: "ML guidance",
        description:
          "Receive model recommendations, not claimed training results.",
      },
      {
        label: "Report",
        description: "Collect analysis into a report that can be revisited.",
      },
    ],
    architecture: {
      description:
        "A functional pipeline for the documented analysis capabilities. This describes how the tools contribute, without asserting an internal execution order.",
      layers: [
        {
          id: "interface",
          label: "Analysis interface",
          description:
            "The interactive workspace brings uploaded data and analysis outputs together.",
          technologies: ["Streamlit"],
        },
        {
          id: "processing",
          label: "Dataset processing",
          description:
            "Dataframe-based processing supports profiling and quality analysis.",
          technologies: ["Python", "Pandas"],
        },
        {
          id: "visualization",
          label: "Visual exploration",
          description:
            "Interactive plots communicate patterns found in the data.",
          technologies: ["Plotly"],
        },
        {
          id: "guidance",
          label: "Machine-learning guidance",
          description:
            "The recorded capability is model recommendations; automated model training is not claimed.",
          technologies: ["Scikit-learn"],
        },
        {
          id: "reporting",
          label: "Report output",
          description:
            "Report generation carries findings beyond the interactive session.",
          technologies: ["ReportLab"],
        },
      ],
      relationships: [
        "Uploaded dataset → profiling and data-quality analysis.",
        "Analytical findings → interactive visualization and machine-learning guidance.",
        "Analysis outputs → report generation.",
      ],
    },
    notes: [
      {
        title: "Understand before modelling",
        body: "Profiling and quality assessment help establish what a dataset contains before a modelling approach is considered. Recommendations are guidance, not performance evidence.",
      },
      {
        title: "Explore and communicate",
        body: "Interactive visualizations support exploration, while report generation provides a separate way to communicate the findings.",
      },
    ],
    outcome:
      "A live data-analysis application combining automated exploration, quality analysis, visualization, ML recommendations, and reporting.",
    reflection:
      "AutoInsight focuses on the work between receiving data and deciding what to do with it: making structure, quality, and patterns easier to inspect together.",
  },
  "job-market": {
    depth: "deep",
    overview:
      "The portal treats job-market data as a set of connected analytical signals. Roles, employment, and skills provide different ways to explore the market rather than isolated lists of observations.",
    approach:
      "The portal connects dataset exploration with two complementary analytical lenses: employment and roles, and skills and market patterns. Together they frame the questions asked of job-market data and the insights communicated through the portal.",
    workflow: [
      {
        label: "Job-market dataset",
        description: "The source material for exploration.",
      },
      {
        label: "Employment + roles",
        description: "Examine employment and role-related signals.",
      },
      {
        label: "Skills + market",
        description: "Explore skills alongside wider market patterns.",
      },
      {
        label: "Analytical insights",
        description: "Communicate a connected view of the recorded signals.",
      },
    ],
    architecture: {
      description:
        "An analytical responsibility map, not a deployment diagram. The project record describes capabilities but does not identify frameworks, storage, or ingestion infrastructure.",
      layers: [
        {
          id: "data",
          label: "Dataset exploration",
          description: "Inspect job-market data as the basis for analysis.",
          technologies: [],
        },
        {
          id: "roles",
          label: "Employment / role lens",
          description:
            "Explore employment and roles as related market signals.",
          technologies: [],
        },
        {
          id: "skills",
          label: "Skills / market lens",
          description:
            "Examine the skills represented in the data and their market context.",
          technologies: [],
        },
        {
          id: "insights",
          label: "Insight communication",
          description:
            "Bring the analytical lenses together in a portal experience.",
          technologies: [],
        },
      ],
      relationships: [
        "Job-market datasets support both the employment/role and skills/market lenses.",
        "These lenses contribute complementary context to the portal’s analytical insights.",
      ],
    },
    notes: [
      {
        title: "Connected analytical questions",
        body: "Employment, role, and skill signals answer different questions. The portal’s scope brings them into a shared analytical view so they can be considered together.",
      },
      {
        title: "Dataset analysis, not live-market coverage",
        body: "The recorded scope is job-market dataset exploration. It does not establish scraping, live job APIs, salary forecasting, or geographic coverage.",
      },
      {
        title: "Technology claims follow evidence",
        body: "No technology list is recorded for this project. The diagrams therefore describe analytical responsibilities without assigning implementation tools.",
      },
    ],
    outcome:
      "A job-market analytics portal for dataset exploration and employment, role, skills, and market insights.",
    reflection:
      "The project demonstrates an analytical way of framing market information: connect the questions asked of the dataset before presenting the resulting insights.",
  },
  "career-recommendation": {
    depth: "compact",
    overview:
      "This application connects a person’s skills and interests with possible career paths. The result is framed as a recommendation for exploration rather than a guaranteed career outcome.",
    approach:
      "A Streamlit interface presents a Python and Scikit-learn recommendation application. Skills and interests supply the input; potential career directions are the output.",
    workflow: [
      {
        label: "Skills + interests",
        description: "Personal signals supplied to the application.",
      },
      {
        label: "Recommendation",
        description: "Machine-learning logic relates inputs to possible paths.",
      },
      {
        label: "Career directions",
        description: "Potential paths to explore further.",
      },
    ],
    notes: [
      {
        title: "Recommendations retain context",
        body: "The documented scope concerns potential paths based on skills and interests. It does not establish placement outcomes or a particular model’s accuracy.",
      },
    ],
    outcome:
      "A live machine-learning recommendation application delivered through an interactive Streamlit interface.",
    reflection:
      "The project connects an applied model with a user-facing question: which career directions might be relevant to this combination of skills and interests?",
  },
  "commerce-insights": {
    depth: "compact",
    overview:
      "The dashboard combines interactive e-commerce analysis with demand forecasting. It brings historical activity and an estimate of demand into the same analytical application.",
    approach:
      "Python provides the application logic, Streamlit the interactive interface, and SQLite the recorded data-storage technology. Machine learning supports the demand-oriented modelling described in the project record.",
    workflow: [
      {
        label: "Commerce data",
        description: "Historical activity provides the analytical context.",
      },
      {
        label: "Interactive exploration",
        description: "Inspect e-commerce patterns through the dashboard.",
      },
      {
        label: "Demand analysis",
        description: "Forecasting adds a forward-looking view.",
      },
    ],
    notes: [
      {
        title: "History and forecast serve different purposes",
        body: "Historical analysis describes the available activity; forecasting estimates demand. No forecast horizon, algorithm, or measured forecasting performance is recorded.",
      },
    ],
    outcome:
      "A live interactive analytics and demand-forecasting application built with Python, Streamlit, and SQLite.",
    reflection:
      "The project combines exploration and modelling within one commerce-focused tool, keeping the distinction between observed activity and estimated demand visible.",
  },
  "student-score": {
    depth: "compact",
    overview:
      "The predictor explores how student-related features can be used to estimate academic performance. It expresses a modelling task through an application with inputs and a predicted result.",
    approach:
      "Python, Pandas, and Scikit-learn support the feature-based prediction workflow. The documented inputs are student-related features; no particular feature list or model algorithm is assumed here.",
    workflow: [
      {
        label: "Student features",
        description: "Student-related inputs form the prediction context.",
      },
      {
        label: "Model",
        description: "A machine-learning workflow uses those features.",
      },
      {
        label: "Estimated performance",
        description: "The output is a prediction, not a measured result.",
      },
    ],
    notes: [
      {
        title: "Prediction is an estimate",
        body: "The application predicts academic performance. The available record does not establish model accuracy, a dataset size, or causal explanations of student outcomes.",
      },
    ],
    outcome:
      "A live academic-performance prediction application using Python, Pandas, and Scikit-learn.",
    reflection:
      "The project presents the feature-to-prediction relationship directly, linking data handling and applied modelling to a clear output.",
  },
};

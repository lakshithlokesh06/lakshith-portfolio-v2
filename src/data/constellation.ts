import type { DataEdge, DataNode, DataNodeId } from "@/types/constellation";

export const constellationNodes: readonly DataNode[] = [
  {
    id: "data-science",
    label: "Data Science",
    importance: "primary",
    position: { x: 32, y: 30 },
    compactPosition: { x: 25, y: 21 },
    description:
      "From a useful question to a tested idea: exploring data, building models, and interpreting the results.",
  },
  {
    id: "machine-learning",
    label: "Machine Learning",
    importance: "primary",
    position: { x: 67, y: 25 },
    compactPosition: { x: 75, y: 39 },
    description:
      "Predictive modelling, recommendation systems, and classification — with explainability built into the process.",
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    importance: "primary",
    position: { x: 28, y: 64 },
    compactPosition: { x: 25, y: 65 },
    description:
      "Querying and connecting data to uncover patterns, answer questions, and make findings clear.",
  },
  {
    id: "ai-systems",
    label: "AI Systems",
    importance: "primary",
    position: { x: 68, y: 70 },
    compactPosition: { x: 75, y: 83 },
    description:
      "Connecting models, APIs, and reliable data storage to turn intelligent features into usable software.",
  },
  {
    id: "python",
    label: "Python",
    importance: "secondary",
    position: { x: 12, y: 11 },
    description:
      "A shared language for exploring datasets, training models, and building application logic.",
  },
  {
    id: "sql",
    label: "SQL",
    importance: "secondary",
    position: { x: 10, y: 47 },
    description:
      "Asking precise questions of structured data through queries, joins, and aggregations.",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    importance: "secondary",
    position: { x: 88, y: 50 },
    description:
      "An API layer for serving Python logic and model outputs to the applications that use them.",
  },
  {
    id: "nextjs",
    label: "Next.js",
    importance: "secondary",
    position: { x: 88, y: 13 },
    description:
      "The application interface: presenting information and connecting people to data-driven services.",
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    importance: "secondary",
    position: { x: 85, y: 85 },
    description:
      "Relational storage that connects application data, analytical queries, and dependable systems.",
  },
  {
    id: "visualization",
    label: "Visualization",
    importance: "secondary",
    position: { x: 13, y: 83 },
    description:
      "Making relationships visible through charts and interactive views that put findings in context.",
  },
  {
    id: "explainability",
    label: "Explainability",
    importance: "supporting",
    position: { x: 55, y: 5 },
    description:
      "Inspecting model behaviour and feature contributions to understand why a prediction was made.",
  },
  {
    id: "real-time",
    label: "Real-Time Systems",
    importance: "supporting",
    position: { x: 55, y: 47 },
    description:
      "Moving fresh information between services and interfaces so applications can respond as data changes.",
  },
  {
    id: "pipelines",
    label: "Data Pipelines",
    importance: "supporting",
    position: { x: 44, y: 85 },
    description:
      "Moving, validating, and shaping data so analysis and applications start from a reliable foundation.",
  },
];

export const constellationEdges: readonly DataEdge[] = [
  { source: "data-science", target: "python" },
  { source: "data-science", target: "machine-learning" },
  { source: "data-science", target: "data-analytics" },
  { source: "machine-learning", target: "python" },
  { source: "machine-learning", target: "explainability" },
  { source: "machine-learning", target: "ai-systems" },
  { source: "data-analytics", target: "sql" },
  { source: "data-analytics", target: "visualization" },
  { source: "data-analytics", target: "pipelines" },
  { source: "data-analytics", target: "ai-systems" },
  { source: "ai-systems", target: "fastapi" },
  { source: "ai-systems", target: "postgresql" },
  { source: "ai-systems", target: "real-time" },
  { source: "real-time", target: "nextjs" },
  { source: "real-time", target: "fastapi" },
  { source: "sql", target: "postgresql" },
  { source: "pipelines", target: "postgresql" },
];

export const constellationCopy = {
  title: "Data Constellation",
  index: "FIELD / 01",
  introduction: "Data → Relationships → Systems → Insights",
  instructions: "Select a node to explore its connections.",
  compactInstructions: "Tap an area, or explore any concept below.",
  selectorLabel: "Explore all concepts",
  contextLabel: "In focus",
  relatedLabel: "Connected to",
};

export const initialNodeId: DataNodeId = "data-science";
export const nodeById = Object.fromEntries(
  constellationNodes.map((node) => [node.id, node]),
) as Record<DataNodeId, DataNode>;

export function connectedNodeIds(id: DataNodeId): Set<DataNodeId> {
  return new Set(
    constellationEdges.flatMap((edge) =>
      edge.source === id
        ? [edge.target]
        : edge.target === id
          ? [edge.source]
          : [],
    ),
  );
}

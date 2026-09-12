export type DataNodeId =
  | "data-science"
  | "machine-learning"
  | "data-analytics"
  | "ai-systems"
  | "python"
  | "sql"
  | "fastapi"
  | "nextjs"
  | "postgresql"
  | "visualization"
  | "explainability"
  | "real-time"
  | "pipelines";

export interface NodePosition {
  x: number;
  y: number;
}

export interface DataNode {
  id: DataNodeId;
  label: string;
  description: string;
  importance: "primary" | "secondary" | "supporting";
  /** Percentage coordinates; the compact composition only includes main areas. */
  position: NodePosition;
  compactPosition?: NodePosition;
}

export interface DataEdge {
  source: DataNodeId;
  target: DataNodeId;
}

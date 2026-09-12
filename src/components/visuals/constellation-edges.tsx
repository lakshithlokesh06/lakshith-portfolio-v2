import { constellationEdges, nodeById } from "@/data/constellation";
import type { DataNodeId } from "@/types/constellation";

export function ConstellationEdges({
  selected,
  compact = false,
}: {
  selected: DataNodeId;
  compact?: boolean;
}) {
  return (
    <svg
      className={`constellation-edges ${compact ? "edges-compact" : "edges-wide"}`}
      aria-hidden="true"
      focusable="false"
    >
      {constellationEdges.map((edge) => {
        const source = compact
          ? nodeById[edge.source].compactPosition
          : nodeById[edge.source].position;
        const target = compact
          ? nodeById[edge.target].compactPosition
          : nodeById[edge.target].position;
        if (!source || !target) return null;
        return (
          <line
            key={`${edge.source}-${edge.target}`}
            x1={`${source.x}%`}
            y1={`${source.y}%`}
            x2={`${target.x}%`}
            y2={`${target.y}%`}
            pathLength={1}
            data-source={edge.source}
            data-target={edge.target}
            data-active={edge.source === selected || edge.target === selected}
          />
        );
      })}
    </svg>
  );
}

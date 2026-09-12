import type { CSSProperties } from "react";
import type { DataNode, DataNodeId } from "@/types/constellation";

interface NodeProps {
  node: DataNode;
  selected: boolean;
  connected: boolean;
  onSelect: (id: DataNodeId) => void;
}

type PositionStyle = CSSProperties &
  Record<"--node-x" | "--node-y" | "--compact-x" | "--compact-y", string>;

export function ConstellationNode({
  node,
  selected,
  connected,
  onSelect,
}: NodeProps) {
  const style: PositionStyle = {
    "--node-x": `${node.position.x}%`,
    "--node-y": `${node.position.y}%`,
    "--compact-x": `${node.compactPosition?.x ?? 0}%`,
    "--compact-y": `${node.compactPosition?.y ?? 0}%`,
  };
  return (
    <button
      type="button"
      className="constellation-node"
      style={style}
      data-node-id={node.id}
      data-importance={node.importance}
      data-compact={Boolean(node.compactPosition)}
      data-connected={connected}
      aria-label={`Explore ${node.label}`}
      aria-pressed={selected}
      aria-controls="constellation-context"
      onClick={() => onSelect(node.id)}
    >
      <span className="node-dot" aria-hidden="true" />
      <span className="node-label">{node.label}</span>
    </button>
  );
}

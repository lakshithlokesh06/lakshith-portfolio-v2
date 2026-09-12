"use client";
import { useRef, useState } from "react";
import {
  constellationNodes,
  constellationCopy,
  connectedNodeIds,
  initialNodeId,
  nodeById,
} from "@/data/constellation";
import type { DataNodeId } from "@/types/constellation";
import { useConstellationProximity } from "@/hooks/use-constellation-proximity";
import { ConstellationNode } from "./constellation-node";
import { ConstellationEdges } from "./constellation-edges";

export function DataConstellation() {
  const [selected, setSelected] = useState<DataNodeId>(initialNodeId);
  const field = useRef<HTMLDivElement>(null);
  useConstellationProximity(field);
  const activeNode = nodeById[selected];
  const connections = connectedNodeIds(selected);
  const related = constellationNodes.filter((node) => connections.has(node.id));

  return (
    <div
      className="data-constellation hero-enter hero-enter-visual"
      role="group"
      aria-labelledby="constellation-title"
      aria-describedby="constellation-instructions"
    >
      <div className="constellation-heading">
        <h2 id="constellation-title">{constellationCopy.title}</h2>
        <span className="eyebrow">{constellationCopy.index}</span>
      </div>
      <p id="constellation-instructions" className="constellation-instructions">
        <span className="wide-instructions">
          {constellationCopy.instructions}
        </span>
        <span className="compact-instructions">
          {constellationCopy.compactInstructions}
        </span>
      </p>
      <div className="constellation-field" ref={field}>
        <ConstellationEdges selected={selected} />
        <ConstellationEdges selected={selected} compact />
        <div className="constellation-orbit" aria-hidden="true" />
        {constellationNodes.map((node) => (
          <ConstellationNode
            key={node.id}
            node={node}
            selected={selected === node.id}
            connected={connections.has(node.id)}
            onSelect={setSelected}
          />
        ))}
      </div>
      <div className="constellation-selector">
        <label htmlFor="constellation-concept">
          {constellationCopy.selectorLabel}
        </label>
        <select
          id="constellation-concept"
          value={selected}
          onChange={(event) => {
            const node = constellationNodes.find(
              (item) => item.id === event.target.value,
            );
            if (node) setSelected(node.id);
          }}
        >
          {constellationNodes.map((node) => (
            <option key={node.id} value={node.id}>
              {node.label}
            </option>
          ))}
        </select>
      </div>
      <div
        id="constellation-context"
        className="constellation-context"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="context-heading">
          <span className="eyebrow">{constellationCopy.contextLabel}</span>
          <h3>{activeNode.label}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        <p className="context-description">{activeNode.description}</p>
        <p className="context-related">
          <span>{constellationCopy.relatedLabel}</span>{" "}
          {related.map((node) => node.label).join(" · ")}
        </p>
      </div>
      <p className="constellation-caption">{constellationCopy.introduction}</p>
    </div>
  );
}

import type { JourneyStage } from "@/types/journey";

/** Unitless geometry conveys conceptual complexity, never measured proficiency. */
export function JourneyPath({
  stages,
  active,
}: {
  stages: JourneyStage[];
  active: string;
}) {
  return (
    <svg
      className="journey-path"
      viewBox="0 0 1000 240"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {stages.slice(0, -1).map((stage, i) => {
        const next = stages[i + 1];
        const x = stage.position.x * 10,
          y = stage.position.y * 2.4,
          nx = next.position.x * 10,
          ny = next.position.y * 2.4;
        return (
          <path
            key={stage.id}
            className="trajectory-segment"
            data-active={active === stage.id || active === next.id}
            d={`M${x} ${y} C${x + 70} ${y} ${nx - 65} ${ny} ${nx} ${ny}`}
            pathLength={1}
          />
        );
      })}
      {stages.map((stage, i) => {
        const x = stage.position.x * 10,
          y = stage.position.y * 2.4;
        return (
          <g
            key={stage.id}
            className="trajectory-detail"
            data-active={active === stage.id}
          >
            {Array.from({ length: i + 1 }, (_, j) => {
              const dx = (j % 2 ? 1 : -1) * (18 + Math.floor(j / 2) * 9),
                dy = -24 - Math.floor(j / 2) * 16;
              return (
                <g key={j}>
                  <path d={`M${x} ${y}L${x + dx} ${y + dy}`} />
                  <rect x={x + dx - 2} y={y + dy - 2} width="4" height="4" />
                </g>
              );
            })}
            <circle cx={x} cy={y} r={i === 0 ? 4 : 6} />
          </g>
        );
      })}
      <path className="trajectory-open" d="M920 122C955 122 972 96 998 96" />
    </svg>
  );
}

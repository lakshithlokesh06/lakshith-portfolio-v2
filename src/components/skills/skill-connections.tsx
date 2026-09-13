import type { CapabilityStage, WorkflowStage } from "@/types/skills";
export function SkillConnections({
  stages,
  active,
}: {
  stages: WorkflowStage[];
  active: CapabilityStage[];
}) {
  const positions = stages.flatMap((stage, i) =>
    active.includes(stage.id) ? [i * 100 + 50] : [],
  );
  return (
    <svg
      viewBox="0 0 500 26"
      preserveAspectRatio="none"
      className="skill-connections"
      aria-hidden="true"
      focusable="false"
    >
      {positions.length > 1 && (
        <path
          key={positions.join("-")}
          d={positions.map((x, i) => `${i === 0 ? "M" : "L"}${x} 13`).join(" ")}
          pathLength={1}
        />
      )}
      {positions.map((x) => (
        <circle key={x} cx={x} cy={13} r={3} />
      ))}
    </svg>
  );
}

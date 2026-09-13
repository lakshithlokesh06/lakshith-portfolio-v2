import type { CapabilityStage, WorkflowStage } from "@/types/skills";
export function CapabilityStageRail({
  stages,
  filter,
  activeStages,
  onFilter,
}: {
  stages: WorkflowStage[];
  filter: CapabilityStage | "all";
  activeStages: CapabilityStage[];
  onFilter: (filter: CapabilityStage | "all") => void;
}) {
  return (
    <div
      className="capability-rail"
      role="group"
      aria-label="Filter by workflow stage"
    >
      <button
        type="button"
        aria-pressed={filter === "all"}
        onClick={() => onFilter("all")}
        className="capability-all"
      >
        All
      </button>
      {stages.map((stage, i) => (
        <button
          key={stage.id}
          type="button"
          aria-pressed={filter === stage.id}
          data-connected={activeStages.includes(stage.id)}
          onClick={() => onFilter(stage.id)}
        >
          <span className="rail-stage-index">0{i + 1}</span>
          {stage.label}
          <span className="rail-connection" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

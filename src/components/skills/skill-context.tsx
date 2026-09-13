import type { ResolvedSkill, WorkflowStage } from "@/types/skills";
export function SkillContext({
  skill,
  stages,
  projectIds,
}: {
  skill: ResolvedSkill;
  stages: WorkflowStage[];
  projectIds: string[];
}) {
  return (
    <div className="skill-context-content">
      <div className="skill-role">
        <p className="eyebrow">
          {skill.group} / {skill.usage}
        </p>
        <h3>{skill.label}</h3>
        <dl>
          <div>
            <dt>Role</dt>
            <dd>{skill.role}</dd>
          </div>
          <div>
            <dt>Used for</dt>
            <dd>{skill.usedFor.join(" · ")}</dd>
          </div>
          <div>
            <dt>Workflow</dt>
            <dd>
              {stages
                .filter((stage) => skill.stages.includes(stage.id))
                .map((stage) => stage.label)
                .join(" → ")}
            </dd>
          </div>
        </dl>
      </div>
      <div className="skill-evidence">
        <p className="skill-usage-count">
          Used in <strong>{skill.projects.length}</strong> listed{" "}
          {skill.projects.length === 1 ? "project" : "projects"}
        </p>
        <div className="skill-usage-pattern" aria-hidden="true">
          {projectIds.map((id) => (
            <span
              key={id}
              data-used={skill.projects.some((project) => project.id === id)}
            />
          ))}
          <span>
            {skill.projects.length} / {projectIds.length}
          </span>
        </div>
        {skill.repositoryEvidence && (
          <p className="skill-repository-evidence">
            {skill.repositoryEvidence}
          </p>
        )}
        {skill.projects.length > 0 && (
          <ul className="skill-projects">
            {skill.projects.map((project) => (
              <li key={project.id}>
                <a href={`#project-${project.id}`}>
                  {project.title}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        <p className="skill-usage-note">
          Counts reflect recorded technologies in Selected Work.
        </p>
      </div>
    </div>
  );
}

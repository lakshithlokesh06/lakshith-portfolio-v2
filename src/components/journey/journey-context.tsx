import type { ReactNode } from "react";
import type { JourneyStage } from "@/types/journey";
import { education, educationPeriod } from "@/data/education";
import { projects } from "@/data/projects";

export function JourneyContext({ stage }: { stage: JourneyStage }) {
  const academic = stage.educationId ? education[stage.educationId] : undefined;
  const work = stage.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project) => project !== undefined);
  return (
    <>
      <div className="journey-context-heading">
        <p className="eyebrow">
          {String(stage.index).padStart(2, "0")} / {stage.category}
        </p>
        <h3>{stage.title}</h3>
      </div>
      <p className="journey-summary">{stage.summary}</p>
      <div className="journey-context-columns">
        <dl className="journey-facts">
          {academic && (
            <>
              <Fact label="Institution">
                {academic.institution}
                {academic.location && `, ${academic.location}`}
              </Fact>
              <Fact label="Program">
                {academic.program}
                {academic.specialization && ` — ${academic.specialization}`}
              </Fact>
              <Fact label="Status">
                {academic.status}
                {educationPeriod(academic) && ` · ${educationPeriod(academic)}`}
              </Fact>
              {academic.cgpa && (
                <Fact label="Academic result">{academic.cgpa} CGPA</Fact>
              )}
            </>
          )}
          <Fact label="Transition">{stage.transition}</Fact>
        </dl>
        <div>
          <p className="journey-field-label">
            {stage.id === "exploration"
              ? "Currently exploring"
              : stage.educationId === "msc"
                ? "Current direction"
                : stage.educationId === "puc"
                  ? "Subjects"
                  : "Focus developed"}
          </p>
          <ul className="journey-focus">
            {stage.focus.map((focus) => (
              <li key={focus}>{focus}</li>
            ))}
          </ul>
          {work.length > 0 && (
            <div className="journey-projects">
              <p className="journey-field-label">Representative work</p>
              {work.map((project) => (
                <a key={project.id} href={`#project-${project.id}`}>
                  {project.title}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

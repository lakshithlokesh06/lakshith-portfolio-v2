import type { CaseStudy } from "@/types/case-study";
export function TechnicalFlow({ steps }: { steps: CaseStudy["workflow"] }) {
  return (
    <ol className="technical-flow">
      {steps.map((step, index) => (
        <li key={step.label}>
          <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.label}</h3>
          <p>{step.description}</p>
          {index < steps.length - 1 && (
            <span className="flow-arrow" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

import { portfolio, sectionContent } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
export function Journey() {
  return (
    <Section id="journey" {...sectionContent.journey}>
      <div className="journey-list">
        {portfolio.journey.map((entry) => (
          <article className="journey-entry" key={entry.id}>
            <span className="timeline-dot" />
            <p className="eyebrow">{entry.kind}</p>
            <div>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              {entry.organization && <p>{entry.organization}</p>}
            </div>
            <span className="eyebrow">
              {entry.period ?? "Learning & building"}
            </span>
          </article>
        ))}
      </div>
      <p className="section-note">
        A fuller story of the learning along the way is coming soon.
      </p>
    </Section>
  );
}

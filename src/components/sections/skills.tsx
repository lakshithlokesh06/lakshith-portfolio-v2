import { portfolio, sectionContent } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
export function Skills() {
  return (
    <Section id="skills" {...sectionContent.skills}>
      <div className="skills-list">
        {portfolio.skills.map((group, i) => (
          <div className="skill-row" key={group.title}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <span aria-hidden="true" className="skill-cross">
              +
            </span>
          </div>
        ))}
      </div>
      <p className="section-note">
        Tools and project context will be added as the portfolio develops.
      </p>
    </Section>
  );
}

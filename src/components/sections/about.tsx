import { portfolio, sectionContent } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
export function About() {
  return (
    <Section id="about" {...sectionContent.about}>
      <div className="about-body">
        <p className="about-copy">{portfolio.person.about}</p>
        <div className="about-note">
          <span className="eyebrow">At the intersection of</span>
          <p>
            Analytical thinking.
            <br />
            Practical building.
            <br />
            <span>Continuous learning.</span>
          </p>
        </div>
      </div>
    </Section>
  );
}

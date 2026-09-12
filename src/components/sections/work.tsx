import { ArrowUpRight } from "lucide-react";
import { portfolio, sectionContent } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
export function Work() {
  return (
    <Section id="work" {...sectionContent.work}>
      {portfolio.projects.length ? (
        <div className="project-list">
          {portfolio.projects.map((project) => (
            <article key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              {project.url && (
                <a className="action action-text" href={project.url}>
                  View project
                  <ArrowUpRight size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="work-placeholder">
          <div className="work-glyph" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">The collection is taking shape</p>
            <h3>
              Built to be explored.
              <br />
              Documented with intention.
            </h3>
            <p>Selected projects and their stories will live here.</p>
          </div>
          <span className="outline-label">Project stories coming soon</span>
        </div>
      )}
    </Section>
  );
}

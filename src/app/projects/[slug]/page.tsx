import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { skills } from "@/data/skills";
import { getProjectStudy, projectStudies } from "@/lib/case-studies";
import { ProjectVisual } from "@/components/projects/project-visual";
import { TechnicalFlow } from "@/components/case-studies/technical-flow";
import { SystemMap } from "@/components/case-studies/system-map";
import { ProjectLinks } from "@/components/case-studies/project-links";
import "@/components/projects/projects.css";
import "@/components/case-studies/case-study.css";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projectStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const entry = getProjectStudy((await params).slug);
  if (!entry) notFound();
  const { project } = entry;
  const title = `${project.title} — ${portfolio.person.name}`;
  return {
    title: { absolute: title },
    description: project.description,
    openGraph: { title, description: project.description, type: "article" },
    twitter: { card: "summary", title, description: project.description },
  };
}
export default async function ProjectCaseStudy({ params }: PageProps) {
  const entry = getProjectStudy((await params).slug);
  if (!entry) notFound();
  const { project, study } = entry;
  const index = projectStudies.indexOf(entry);
  const previous =
    projectStudies[(index + projectStudies.length - 1) % projectStudies.length]
      .project;
  const next = projectStudies[(index + 1) % projectStudies.length].project;
  const sections = [
    { id: "overview", label: "Overview" },
    ...(study.architecture ? [{ id: "architecture", label: "System" }] : []),
    { id: "workflow", label: "Workflow" },
    { id: "features", label: "Functionality" },
    ...(project.technologies.length ? [{ id: "stack", label: "Stack" }] : []),
    { id: "reflection", label: "Outcome" },
  ];
  return (
    <article className="case-study" data-depth={study.depth}>
      <header className="study-header">
        <ProjectLinks project={project} />
        <p className="eyebrow study-meta">
          Project / {String(project.index).padStart(2, "0")}{" "}
          <span>{project.classification}</span>
          {project.flagship && <span>Flagship</span>}
        </p>
        <h1>{project.title}</h1>
        <p className="study-deck">{project.description}</p>
        <div className="study-focus">
          <p>
            <span className="eyebrow">Technical focus</span>
            {project.focus.join(" · ")}
          </p>
          {project.technologySummary.length > 0 && (
            <p>
              <span className="eyebrow">Built with</span>
              {project.technologySummary.join(" / ")}
            </p>
          )}
        </div>
        <ProjectVisual project={project} />
      </header>
      {study.depth === "deep" && (
        <nav className="study-index" aria-label="Case study sections">
          {sections.map((section, i) => (
            <a key={section.id} href={`#${section.id}`}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {section.label}
            </a>
          ))}
        </nav>
      )}
      <section
        className="study-section"
        id="overview"
        aria-labelledby="overview-title"
      >
        <h2 id="overview-title">Overview</h2>
        <div>
          <p className="study-lead">{study.overview}</p>
          <div className="study-pair">
            <div>
              <h3>Problem / purpose</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>Approach</h3>
              <p>{study.approach}</p>
            </div>
          </div>
        </div>
      </section>
      {study.architecture && (
        <section
          className="study-section"
          id="architecture"
          aria-labelledby="architecture-title"
        >
          <h2 id="architecture-title">System / architecture</h2>
          <SystemMap architecture={study.architecture} />
        </section>
      )}
      <section
        className="study-section"
        id="workflow"
        aria-labelledby="workflow-title"
      >
        <h2 id="workflow-title">How it works</h2>
        <div>
          <p className="workflow-summary">{project.system}</p>
          <TechnicalFlow steps={study.workflow} />
        </div>
      </section>
      <section
        className="study-section"
        id="features"
        aria-labelledby="features-title"
      >
        <h2 id="features-title">Key functionality</h2>
        <ul className="study-features">
          {project.functionality.map((feature, i) => (
            <li key={feature}>
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>
      {project.technologies.length > 0 && (
        <section
          className="study-section"
          id="stack"
          aria-labelledby="stack-title"
        >
          <h2 id="stack-title">Technical stack</h2>
          <dl className="study-stack">
            {project.technologies.map((technology) => {
              const role = skills.find((skill) =>
                skill.projectTechnologies.includes(technology),
              )?.role;
              return (
                <div key={technology}>
                  <dt>{technology}</dt>
                  <dd>
                    {technology === "Scikit-learn" &&
                    project.id === "autoinsight"
                      ? "Machine-learning tools for model recommendations."
                      : (role ??
                        "Demand-oriented modelling within the analytics application.")}
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>
      )}
      {(study.media?.length ?? 0) > 0 && (
        <section className="study-section" aria-labelledby="media-title">
          <h2 id="media-title">Application views</h2>
          <div>
            {study.media?.map((media) => (
              <figure key={media.src}>
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  sizes="(max-width: 767px) 100vw, 70vw"
                  className="study-media"
                />
                {media.caption && <figcaption>{media.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}
      <section className="study-section" aria-labelledby="notes-title">
        <h2 id="notes-title">Engineering notes</h2>
        <div className="study-notes">
          {study.notes.map((note) => (
            <div key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="study-section study-outcome"
        id="reflection"
        aria-labelledby="reflection-title"
      >
        <h2 id="reflection-title">Outcome / reflection</h2>
        <div>
          <p className="study-lead">{study.outcome}</p>
          <p>{study.reflection}</p>
          {project.deployment && (
            <p className="eyebrow study-deployment">{project.deployment}</p>
          )}
        </div>
      </section>
      <ProjectLinks project={project} />
      <nav className="study-pagination" aria-label="More projects">
        <Link href={previous.caseStudy!}>
          <span className="eyebrow">← Previous project</span>
          <span>{previous.title}</span>
        </Link>
        <Link href={next.caseStudy!}>
          <span className="eyebrow">Next project →</span>
          <span>{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}

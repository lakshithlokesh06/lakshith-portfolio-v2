import type { Project } from "@/types/project";
import { ArrowUpRight } from "lucide-react";
import { ProjectArchitecture } from "./project-architecture";

export function ProjectDetail({ project }: { project: Project }) {
  const links = [
    { url: project.github, label: "GitHub", external: true },
    { url: project.live, label: "Live Demo", external: true },
  ].filter((link) => link.url);
  return (
    <div className="project-detail-content">
      <div className="technical-notes">
        <h4>Behind the build</h4>
        <dl>
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>System</dt>
            <dd>{project.system}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{project.focus.join(" · ")}</dd>
          </div>
          {project.technologies.length > 0 && (
            <div>
              <dt>Stack</dt>
              <dd className="detail-stack">
                {project.technologies.join(" / ")}
              </dd>
            </div>
          )}
        </dl>
      </div>
      <div className="detail-capabilities">
        <h4>Key functionality</h4>
        <ul>
          {project.functionality.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.deployment && (
          <p className="project-deployment">
            <span aria-hidden="true" /> {project.deployment}
          </p>
        )}
        {links.length > 0 && (
          <div className="project-links">
            {links.map((link) => (
              <a
                key={link.label}
                className="action action-secondary"
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={`${project.title}: ${link.label}${link.external ? " (opens in new tab)" : ""}`}
              >
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
      {project.flagship && <ProjectArchitecture />}
    </div>
  );
}

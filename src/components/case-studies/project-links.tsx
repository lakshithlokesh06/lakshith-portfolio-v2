import Link from "next/link";
import type { Project } from "@/types/project";
export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="study-links">
      <Link className="action action-text" href="/#work">
        ← Back to Selected Work
      </Link>
      {[
        { url: project.github, label: "View GitHub" },
        { url: project.live, label: "Open Live App" },
      ]
        .filter((link) => link.url)
        .map((link) => (
          <a
            className="action action-text"
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title}: ${link.label} (opens in new tab)`}
          >
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
    </div>
  );
}

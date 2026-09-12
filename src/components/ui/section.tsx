import type { ReactNode } from "react";
import type { SectionId } from "@/types/portfolio";
import { Reveal } from "./reveal";
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}
export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: SectionId;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section ${className}`}
    >
      <Reveal>
        <div className="section-heading">
          <Eyebrow>
            <span className="section-index">{index}</span>
            {eyebrow}
          </Eyebrow>
          <div>
            <h2 id={`${id}-title`}>{title}</h2>
            {description && (
              <p className="section-description">{description}</p>
            )}
          </div>
        </div>
        {children}
      </Reveal>
    </section>
  );
}

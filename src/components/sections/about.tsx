import { portfolio } from "@/data/portfolio";
import { profile } from "@/data/profile";
import { education, educationPeriod } from "@/data/education";
import { Section } from "@/components/ui/section";
import "@/components/journey/trajectory.css";
export function About() {
  return (
    <Section id="about" {...profile.heading} className="profile-section">
      <div className="profile-layout">
        <div className="profile-narrative">
          <h3>{portfolio.person.name}</h3>
          <p className="profile-positioning">{profile.positioning}</p>
          {profile.paragraphs.map((paragraph) => (
            <p className="profile-paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="profile-facts" aria-label="Profile at a glance">
          <dl>
            <div>
              <dt>Current</dt>
              <dd>
                {education.msc.program}
                <span>{education.msc.institution}</span>
                <span>{educationPeriod(education.msc)}</span>
              </dd>
            </div>
            <div>
              <dt>Foundation</dt>
              <dd>{profile.foundation.join(" · ")}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>
                {profile.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{portfolio.person.location}</dd>
            </div>
          </dl>
        </aside>
      </div>
      <div className="education-strip" aria-label="Academic background">
        {Object.values(education).map((item) => (
          <div key={item.id}>
            <p className="eyebrow">
              {item.status}
              {educationPeriod(item) && ` / ${educationPeriod(item)}`}
            </p>
            <h3>
              {item.program}
              {item.specialization && ` — ${item.specialization}`}
            </h3>
            <p>
              {item.institution}
              {item.location && `, ${item.location}`}
            </p>
            {item.cgpa && (
              <span className="education-result">{item.cgpa} CGPA</span>
            )}
          </div>
        ))}
      </div>
      <div className="profile-statement">
        <span className="eyebrow">The thread through the work</span>
        <p>{profile.statement}</p>
        <a href="#journey" className="action action-text">
          Follow the trajectory <span aria-hidden="true">↓</span>
        </a>
      </div>
    </Section>
  );
}

import { contactCopy } from "@/data/contact";
import { education, educationPeriod } from "@/data/education";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { ConnectionLayer } from "@/components/contact/connection-layer";
import "@/components/contact/contact.css";

export function Contact() {
  const study = education.msc;
  return (
    <Section
      id="contact"
      index={contactCopy.index}
      eyebrow={contactCopy.eyebrow}
      title={contactCopy.title}
      description={contactCopy.introduction}
      className="contact-section"
    >
      <div className="contact-composition">
        <aside
          className="contact-context"
          aria-label="Current academic context"
        >
          <div>
            <p className="eyebrow">{study.status} / Study</p>
            <p>
              {study.program}
              <br />
              {study.institution}
              <br />
              <span>{educationPeriod(study)}</span>
            </p>
          </div>
          <div>
            <p className="eyebrow">Location</p>
            <p>{portfolio.person.location}</p>
          </div>
        </aside>
        <ConnectionLayer />
      </div>
      <div className="contact-discussion">
        <p className="eyebrow">Discussion areas</p>
        <ul>
          {contactCopy.areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
      <p className="contact-closing">
        {contactCopy.closing}
        <span aria-hidden="true">↗</span>
      </p>
    </Section>
  );
}

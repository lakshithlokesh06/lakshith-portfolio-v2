import { ArrowUpRight } from "lucide-react";
import { sectionContent } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { SocialLinks } from "@/components/ui/social-links";
export function Contact() {
  return (
    <Section
      id="contact"
      {...sectionContent.contact}
      className="contact-section"
    >
      <div className="contact-body">
        <p>
          Interested in data, intelligent software, or building something useful
          together?
        </p>
        <div>
          <SocialLinks />
          <p className="section-note">
            Contact details and social links coming soon.
          </p>
        </div>
        <ArrowUpRight
          className="contact-arrow"
          size={68}
          strokeWidth={1}
          aria-hidden="true"
        />
      </div>
    </Section>
  );
}

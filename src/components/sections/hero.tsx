import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Eyebrow } from "@/components/ui/section";
import { ActionLink } from "@/components/ui/action-link";
import { SocialLinks } from "@/components/ui/social-links";
import { LabField } from "@/components/visuals/lab-field";
import { Reveal } from "@/components/ui/reveal";
export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-topline">
        <Eyebrow>
          <span className="status-dot" />
          An interactive data lab
        </Eyebrow>
        <p className="identity-status">
          {portfolio.person.location}
          <span> / </span>
          {portfolio.person.status}
        </p>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <Reveal kind="text">
            <h1 id="hero-title">
              Curious about data.
              <br />
              Intent on <span>building.</span>
            </h1>
          </Reveal>
          <p className="hero-name">{portfolio.person.name}</p>
          <p className="disciplines">
            {portfolio.person.disciplines.join(" · ")}
          </p>
          <p className="hero-description">{portfolio.person.introduction}</p>
          <div className="hero-actions">
            <ActionLink href="#work" variant="primary">
              Explore My Work
              <ArrowUpRight size={18} />
            </ActionLink>
            <SocialLinks />
          </div>
          <p className="link-note">Social links will be added soon.</p>
        </div>
        <LabField />
      </div>
      <div className="hero-bottom">
        <span className="eyebrow">Data → Understanding → Applications</span>
        <a href="#work" className="scroll-link">
          Scroll to explore
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}

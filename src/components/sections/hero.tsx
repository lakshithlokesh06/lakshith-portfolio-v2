import "@/components/visuals/constellation.css";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Eyebrow } from "@/components/ui/section";
import { ActionLink } from "@/components/ui/action-link";
import { SocialLinks } from "@/components/ui/social-links";
import { DataConstellation } from "@/components/visuals/data-constellation";
export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-topline hero-enter hero-enter-meta">
        <Eyebrow>
          <span className="status-dot" />
          01 / Portfolio · An interactive data lab
        </Eyebrow>
        <p className="identity-status">
          {portfolio.person.location}
          <span> / </span>
          {portfolio.person.status}
        </p>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-enter hero-enter-title">
            <h1 id="hero-title">
              Curious about data.
              <br />
              Intent on <span>building.</span>
            </h1>
          </div>
          <p className="hero-name hero-enter hero-enter-copy">
            {portfolio.person.name}
          </p>
          <p className="disciplines hero-enter hero-enter-copy">
            {portfolio.person.disciplines.join(" · ")}
          </p>
          <p className="hero-description hero-enter hero-enter-copy">
            {portfolio.person.introduction}
          </p>
          <div className="hero-actions hero-enter hero-enter-actions">
            <ActionLink href="#work" variant="primary">
              Explore My Work
              <ArrowUpRight size={18} />
            </ActionLink>
            <SocialLinks />
          </div>
          <p className="link-note">Social links will be added soon.</p>
        </div>
        <DataConstellation />
      </div>
      <div className="hero-bottom">
        <span className="eyebrow">Observe. Connect. Build.</span>
        <a href="#work" className="scroll-link">
          Scroll to explore
          <span className="scroll-rule" aria-hidden="true" />
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}

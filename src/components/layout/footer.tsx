import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SocialLinks } from "@/components/ui/social-links";
export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {portfolio.person.name}
        <span>{portfolio.person.disciplines.join(" · ")}</span>
      </p>
      <div>
        <SocialLinks />
        <a className="action action-text" href="#home">
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

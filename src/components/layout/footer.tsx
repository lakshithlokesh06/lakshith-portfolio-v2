import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ActionLink } from "@/components/ui/action-link";
export function Footer() {
  return (
    <footer className="footer">
      <p>
        {portfolio.person.name}
        <span>Built with curiosity. Developed with care.</span>
      </p>
      <div>
        <span className="eyebrow">Portfolio · In development</span>
        <ActionLink href="#home" variant="icon" label="Back to top">
          <ArrowUp size={18} />
        </ActionLink>
      </div>
    </footer>
  );
}

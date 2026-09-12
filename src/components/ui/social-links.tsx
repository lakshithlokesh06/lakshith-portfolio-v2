import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ActionLink } from "./action-link";
export function SocialLinks() {
  return (
    <div className="social-links">
      {portfolio.socials.map((social) =>
        social.url ? (
          <ActionLink
            key={social.label}
            href={social.url}
            label={`${social.label} (opens in new tab)`}
          >
            {social.label}
            <ArrowUpRight size={15} />
          </ActionLink>
        ) : (
          <span
            key={social.label}
            className="social-placeholder"
            aria-label={`${social.label}: link coming soon`}
          >
            {social.label}
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only"> — link coming soon</span>
          </span>
        ),
      )}
    </div>
  );
}

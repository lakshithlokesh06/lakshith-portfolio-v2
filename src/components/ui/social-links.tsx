import { ArrowUpRight } from "lucide-react";
import { contactRoutes } from "@/data/contact";
export function SocialLinks() {
  return (
    <div className="social-links">
      {contactRoutes
        .filter((route) => route.type === "github" || route.type === "linkedin")
        .map((route) => (
          <a
            key={route.id}
            className="action action-text"
            href={route.href}
            aria-label={`View ${route.label}${route.external ? " (opens in new tab)" : ""}`}
            {...(route.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {route.label}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
    </div>
  );
}

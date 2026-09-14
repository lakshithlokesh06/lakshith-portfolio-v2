import { contactRoutes } from "@/data/contact";
import { portfolio } from "@/data/portfolio";

export function ConnectionLayer() {
  return (
    <div className="connection-layer">
      <div className="connection-signature" aria-hidden="true">
        <span className="eyebrow">Data / systems / learning</span>
        <svg viewBox="0 0 420 130" fill="none" focusable="false">
          <path d="M0 18H90C150 18 160 65 220 65H395M0 65H395M0 112H90C150 112 160 65 220 65" />
          <circle cx="395" cy="65" r="7" />
          <circle cx="395" cy="65" r="2" />
        </svg>
        <span className="connection-name">
          {portfolio.person.name}
          <span>Connect ↗</span>
        </span>
      </div>
      <div className="contact-routes" aria-label="Contact routes">
        {contactRoutes.map((route, index) => (
          <a
            key={route.id}
            className="contact-route"
            href={route.href}
            aria-label={`${route.type === "email" ? "Email Lakshith" : `View ${route.label}`}${route.external ? " (opens in new tab)" : ""}`}
            aria-describedby={`route-description-${route.id}`}
            {...(route.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className="route-label">
              <span>0{index + 1}</span>
              {route.label}
              <span className="route-arrow" aria-hidden="true">
                ↗
              </span>
            </span>
            <span className="route-value">{route.value}</span>
            <span
              className="route-description"
              id={`route-description-${route.id}`}
            >
              {route.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

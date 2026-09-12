import type { ReactNode } from "react";
export function ActionLink({
  href,
  children,
  variant = "text",
  label,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text" | "icon";
  label?: string;
}) {
  const external = href.startsWith("https://");
  return (
    <a
      className={`action action-${variant}`}
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

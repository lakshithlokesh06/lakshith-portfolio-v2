export interface ContactRoute {
  id: string;
  label: string;
  value: string;
  href: string;
  type: "email" | "linkedin" | "github" | "resume";
  description: string;
  external?: boolean;
}

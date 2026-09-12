import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { portfolio } from "@/data/portfolio";
import "./globals.css";
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});
export const metadata: Metadata = {
  title: {
    default: `${portfolio.person.name} — Data Science & Software`,
    template: `%s | ${portfolio.person.name}`,
  },
  description: portfolio.person.introduction,
  applicationName: "Lakshith’s Interactive Data Lab",
  openGraph: {
    title: `${portfolio.person.name} — Interactive Data Lab`,
    description: portfolio.person.introduction,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: portfolio.person.name,
    description: portfolio.person.introduction,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1} className="page-container">
          {children}
        </main>
        <div className="page-container">
          <Footer />
        </div>
      </body>
    </html>
  );
}

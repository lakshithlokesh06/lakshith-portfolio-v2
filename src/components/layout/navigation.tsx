"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const active = useActiveSection();
  const isHome = usePathname() === "/";
  useEffect(() => {
    const element = dialog.current;
    const triggerElement = trigger.current;
    if (!element || !open) return;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 900px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      media.removeEventListener("change", closeOnDesktop);
      triggerElement?.focus();
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link
          className="wordmark"
          href="/#home"
          aria-label={`${portfolio.person.name}, home`}
        >
          <span className="brand-mark" aria-hidden="true">
            l<span>.</span>
          </span>
          {portfolio.person.name}
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {portfolio.navigation.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              aria-current={
                isHome && active === item.id ? "location" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-labelledby="menu-title"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
      >
        <div className="mobile-menu-top">
          <p id="menu-title" className="eyebrow">
            Explore the lab
          </p>
          <button
            className="action action-icon"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {portfolio.navigation.map((item, i) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              aria-current={
                isHome && active === item.id ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              <span className="eyebrow">0{i + 1}</span>
              {item.label}
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </nav>
        <p className="menu-status">
          {portfolio.person.location} · {portfolio.person.status}
        </p>
      </dialog>
    </header>
  );
}

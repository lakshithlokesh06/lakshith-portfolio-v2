"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";
export function useActiveSection() {
  const pathname = usePathname();
  const [active, setActive] = useState<SectionId>("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    portfolio.navigation.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);
  return active;
}

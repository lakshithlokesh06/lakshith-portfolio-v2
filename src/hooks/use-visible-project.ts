"use client";
import { useEffect, useState, type RefObject } from "react";

export function useVisibleProject(
  ref: RefObject<HTMLDivElement | null>,
  initialId: string,
) {
  const [visible, setVisible] = useState(initialId);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const candidates = new Set<Element>();
    let observer: IntersectionObserver;
    const observe = () => {
      observer?.disconnect();
      candidates.clear();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) candidates.add(entry.target);
            else candidates.delete(entry.target);
          });
          const band = entries[0]?.rootBounds;
          if (!band) return;
          // Compare adjacent rows after scrolling or inline expansion. Bounds
          // are read only on observer callbacks, never on continuous scroll.
          let best: Element | undefined;
          let largestOverlap = 0;
          candidates.forEach((row) => {
            const bounds = row.getBoundingClientRect();
            const overlap =
              Math.min(bounds.bottom, band.bottom) -
              Math.max(bounds.top, band.top);
            if (overlap > largestOverlap) {
              largestOverlap = overlap;
              best = row;
            }
          });
          if (best) setVisible(best.id.replace("project-", ""));
        },
        // IO percentage margins resolve against width, so use viewport-height
        // pixels to preserve the reading band on wide desktop displays.
        {
          rootMargin: `-${Math.round(window.innerHeight * 0.28)}px 0px -${Math.round(window.innerHeight * 0.55)}px 0px`,
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      );
      root
        .querySelectorAll("[data-project-id]")
        .forEach((row) => observer.observe(row));
    };
    observe();
    window.addEventListener("resize", observe);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", observe);
    };
  }, [ref]);
  return visible;
}

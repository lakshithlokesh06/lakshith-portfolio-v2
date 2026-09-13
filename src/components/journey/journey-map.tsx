"use client";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import type { JourneyStage } from "@/types/journey";
import { JourneyPath } from "./journey-path";

interface JourneyMapProps {
  stages: JourneyStage[];
  contexts: ReactNode[];
  initialId: string;
  title: string;
  instructions: string;
  mobileInstructions: string;
  note: string;
}
export function JourneyMap({
  stages,
  contexts,
  initialId,
  title,
  instructions,
  mobileInstructions,
  note,
}: JourneyMapProps) {
  const [selected, setSelected] = useState(initialId);
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const active = hovered ?? focused ?? selected;
  const [entered, setEntered] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const choose = (id: string) => {
    setSelected(id);
    setHovered(null);
    setFocused(null);
  };
  return (
    <div ref={root} className="journey-map" data-entered={entered}>
      <div className="journey-map-heading">
        <h3>{title}</h3>
        <span className="eyebrow">FOUNDATION → EXPLORATION</span>
      </div>
      <p className="journey-instructions">
        <span className="journey-wide-instructions">{instructions}</span>
        <span className="journey-mobile-instructions">
          {mobileInstructions}
        </span>
      </p>
      <div
        className="journey-stage-field"
        onMouseLeave={() => setHovered(null)}
      >
        <JourneyPath stages={stages} active={active} />
        <div
          className="journey-stages"
          role="group"
          aria-label="Learning trajectory stages"
        >
          {stages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              className="journey-stage"
              style={
                {
                  "--stage-x": `${stage.position.x}%`,
                  "--stage-y": `${stage.position.y}%`,
                  "--stage-order": stage.index,
                } as CSSProperties
              }
              aria-pressed={selected === stage.id}
              aria-controls={`journey-context-${stage.id}`}
              data-active={active === stage.id}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setHovered(stage.id);
              }}
              onFocus={() => setFocused(stage.id)}
              onBlur={() => setFocused(null)}
              onClick={() => choose(stage.id)}
            >
              <span className="stage-number">
                {String(stage.index).padStart(2, "0")}
              </span>
              <span className="stage-label">{stage.title}</span>
              <span className="stage-subtitle">{stage.shortTitle}</span>
              <span className="stage-selection">
                {selected === stage.id ? "Selected" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>
      <a
        className="journey-read action action-text"
        href={`#journey-context-${selected}`}
      >
        Read selected stage details <span aria-hidden="true">↓</span>
      </a>
      <div className="journey-context-shell">
        {stages.map((stage, i) => (
          <div
            key={stage.id}
            id={`journey-context-${stage.id}`}
            className="journey-context"
            tabIndex={-1}
            role="region"
            aria-label={`${stage.title} details`}
            hidden={active !== stage.id}
          >
            {contexts[i]}
          </div>
        ))}
      </div>
      <p
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {stages.find((stage) => stage.id === selected)?.title} selected. Details
        include its transition, focus, and available academic or project
        information.
      </p>
      <p className="journey-footnote">{note}</p>
    </div>
  );
}

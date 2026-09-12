"use client";
import { useEffect, type RefObject } from "react";
import { constellationNodes } from "@/data/constellation";
import type { DataNodeId } from "@/types/constellation";

/** One bounds read per animation frame; only writes when the nearest node changes. */
export function useConstellationProximity(
  ref: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const field = ref.current;
    if (!field) return;
    const enabled = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const compact = window.matchMedia("(max-width: 599px)");
    const buttons = Array.from(
      field.querySelectorAll<HTMLButtonElement>("[data-node-id]"),
    );
    const lines = Array.from(field.querySelectorAll<SVGLineElement>("line"));
    let frame = 0;
    let nearest: DataNodeId | null = null;
    let pointer = { x: 0, y: 0 };
    const highlight = (id: DataNodeId | null) => {
      if (nearest === id) return;
      nearest = id;
      buttons.forEach((button) => {
        button.dataset.near = String(button.dataset.nodeId === id);
      });
      lines.forEach((line) => {
        line.dataset.near = String(
          line.dataset.source === id || line.dataset.target === id,
        );
      });
    };
    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      highlight(null);
    };
    const update = () => {
      frame = 0;
      if (!enabled.matches) return;
      const bounds = field.getBoundingClientRect();
      let closest: DataNodeId | null = null;
      let distance = 64;
      for (const node of constellationNodes) {
        const position = compact.matches ? node.compactPosition : node.position;
        if (!position) continue;
        const nextDistance = Math.hypot(
          pointer.x - bounds.left - (bounds.width * position.x) / 100,
          pointer.y - bounds.top - (bounds.height * position.y) / 100,
        );
        if (nextDistance < distance) {
          distance = nextDistance;
          closest = node.id;
        }
      }
      highlight(closest);
    };
    const move = (event: PointerEvent) => {
      if (!enabled.matches || event.pointerType === "touch") return;
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(update);
    };
    field.addEventListener("pointermove", move, { passive: true });
    field.addEventListener("pointerleave", clear);
    field.addEventListener("pointercancel", clear);
    enabled.addEventListener("change", clear);
    window.addEventListener("scroll", clear, { passive: true });
    window.addEventListener("resize", clear);
    return () => {
      clear();
      field.removeEventListener("pointermove", move);
      field.removeEventListener("pointerleave", clear);
      field.removeEventListener("pointercancel", clear);
      enabled.removeEventListener("change", clear);
      window.removeEventListener("scroll", clear);
      window.removeEventListener("resize", clear);
    };
  }, [ref]);
}

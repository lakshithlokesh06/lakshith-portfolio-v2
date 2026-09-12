"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { motionTiming, revealVariants } from "@/lib/motion";
export function Reveal({
  children,
  kind = "section",
  className,
}: {
  children: ReactNode;
  kind?: keyof typeof revealVariants;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={revealVariants[kind]}
      transition={reduced ? { duration: 0 } : motionTiming}
    >
      {children}
    </motion.div>
  );
}

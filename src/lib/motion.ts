export const motionTiming = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};
// Content stays visible in server HTML and when JavaScript is unavailable.
export const revealVariants = {
  section: { visible: { opacity: [0.85, 1], y: [14, 0] } },
  text: { visible: { opacity: [0.85, 1], y: [8, 0] } },
};

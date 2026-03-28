/* ═══════════════════════════════════════════════
   Quantum Garden — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  bg: "#010204",
  neonGreen: "#10ffaa",
  limeGreen: "#39ff14",
  green: "#00e676",
} as const;

/* ── Vine paths ── */
export const VINE_PATHS = [
  { d: "M100,800 C200,600 150,400 300,300 S500,200 600,400", stroke: PALETTE.neonGreen, strokeWidth: 0.8, opacity: 0.1 },
  { d: "M1100,800 C1000,650 1050,450 900,350 S700,250 600,400", stroke: PALETTE.limeGreen, strokeWidth: 0.8, opacity: 0.08 },
  { d: "M600,400 C600,300 650,200 600,100", stroke: PALETTE.green, strokeWidth: 0.6, opacity: 0.06 },
] as const;

/* ── Flower nodes ── */
export const FLOWER_NODES: readonly [number, number][] = [
  [300, 300], [600, 400], [900, 350], [200, 550], [1000, 500], [600, 150],
] as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "Superposition: planted & deployed",
  titleLine1: "Quantum",
  titleLine2: "Garden",
  description:
    "The eggplant exists in superposition: simultaneously a vegetable and a design system mascot. Observation collapses the state. Scrolling counts as observation.",
  tagline: "Schr\u00F6dinger\u2019s deploy: it both works and doesn\u2019t until QA opens the box",
} as const;

/* ── SVG shared ── */
export { SVG_VIEWBOX };

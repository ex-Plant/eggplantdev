/* ═══════════════════════════════════════════════
   Aubergine Architect — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  mint: "#10ffaa",
  magenta: "#d946ef",
  bgColor: "#020206",
} as const;

/* ── Blueprint grid ── */
export const GRID = {
  horizontalLines: 25,
  verticalLines: 38,
  spacing: 32,
  svgViewBox: "0 0 1200 800",
  spiralPath: "M600,400 Q650,350 700,400 Q750,500 600,550 Q400,600 350,400 Q300,150 600,100 Q950,50 1000,400",
} as const;

/* ── Compass rose (inner SVG) ── */
export const COMPASS = {
  viewBox: "0 0 280 280",
  center: { x: 140, y: 140 },
  outerR: 130,
  tickCount: 36,
  majorEvery: 9,
  innerR: 110,
  tickInnerR: 120,
} as const;

/* ── Navigation tabs ── */
export const NAV_TABS = ["Blueprints", "Elevation", "Cross-section"] as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Blueprint Revision ∞.0",
  titleLine1: "The Aubergine",
  titleLine2: "Architect",
  description:
    "Every great structure starts with a questionable vegetable and a grid nobody asked for. The golden ratio was discovered by an eggplant. This is not historically accurate but it feels right.",
} as const;

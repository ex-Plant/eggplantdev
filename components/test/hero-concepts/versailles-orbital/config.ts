/* ═══════════════════════════════════════════════
   Versailles Orbital — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  brightGold: "#ffd700",
  darkGold: "#c8860e",
  cream: "#f5e6c0",
  caption: "#c8b080",
  bgColor: "#0a0806",
} as const;

/* ── Orbits ── */
export const ORBITS = [
  { rx: 120, ry: 100, stroke: PALETTE.brightGold, bodies: [0, 2.2, 4.5] },
  { rx: 190, ry: 155, stroke: PALETTE.gold, bodies: [1.1, 3.8] },
  { rx: 270, ry: 210, stroke: PALETTE.darkGold, bodies: [0.7, 2.9, 5.2] },
  { rx: 350, ry: 280, stroke: PALETTE.gold, bodies: [1.8, 4.1] },
] as const;

/* ── Star field ── */
export const STAR_COUNT = 55;

/* ── Art deco corners ── */
export const CORNERS: readonly [number, number, number][] = [
  [40, 40, 0], [1120, 40, 90], [1120, 720, 180], [40, 720, 270],
];

/* ── Tick marks ── */
export const TICK_COUNT = 25;
export const TICK_Y_START = 150;
export const TICK_Y_STEP = 24;

/* ── SVG center ── */
export const SVG_CENTER = { x: 600, y: 400 } as const;

/* ── Eggplant ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.3) saturate(1.6) brightness(1.1)",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "M\u00e9canique c\u00e9leste",
  titleLine1: "Versailles",
  titleLine2: "Orbital",
  description:
    "The eggplant holds court at the center of a gilded orrery \u2014 all cosmic bodies in faithful orbit around its aubergine mass, tracing gold ellipses through the hall of mirrors.",
} as const;

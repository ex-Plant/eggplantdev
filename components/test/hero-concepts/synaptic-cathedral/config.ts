/* ═══════════════════════════════════════════════
   Synaptic Cathedral — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  bg: "#010108",
  neonGreen: "#10ffaa",
  cyan: "#00e5ff",
  fuchsia: "#d946ef",
} as const;

/* ── Background stars ── */
export const STAR_COUNT = 50;
export const STARS = Array.from({ length: STAR_COUNT }, (_, i) => ({
  left: `${(i * 31 + 7) % 100}%`,
  top: `${(i * 47 + 13) % 100}%`,
  size: i % 7 === 0 ? 2 : 1,
  opacity: 0.04 + (i % 5) * 0.02,
}));

/* ── Neural network nodes ── */
export const NODES: readonly [number, number][] = [
  [350, 700], [350, 620], [350, 540], [350, 460], [360, 380],
  [380, 310], [420, 250], [470, 200], [530, 165],
  [600, 150],
  [670, 165], [730, 200], [780, 250], [820, 310],
  [840, 380], [850, 460], [850, 540], [850, 620], [850, 700],
  [450, 500], [550, 400], [650, 400], [750, 500],
  [500, 300], [600, 280], [700, 300],
  [600, 100],
] as const;

/* ── Neural connections ── */
export const CONNECTIONS: readonly [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
  [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18],
  [3, 19], [19, 20], [20, 21], [21, 14],
  [5, 22], [22, 23], [23, 24], [24, 12],
  [19, 22], [24, 21], [20, 23], [21, 23],
  [8, 25], [9, 25], [23, 25],
  [7, 23], [10, 23], [6, 22], [11, 24],
] as const;

/* ── Apex node index ── */
export const APEX_NODE_INDEX = 25;

/* ── Flower of Life at apex ── */
export const APEX_FOL = {
  cx: 600,
  cy: 100,
  r: 25,
  petalCount: 6,
  rayCount: 12,
  rayLength: 80,
} as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "drop-shadow(0 0 20px rgba(16,255,170,0.2))",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  titleLine1: "Synaptic",
  titleLine2: "Cathedral",
  description:
    "Every node is a tiny glowing eggplant. Every connection is a Metatron\u2019s cube segment. Your brain is a temple and it runs on eggplants.",
  tagline: "Neural architecture: gothic // Runtime: eternal",
} as const;

/* ── SVG shared ── */
export { SVG_VIEWBOX };

/* ═══════════════════════════════════════════════
   Vesica Piscis Neon — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  gold: "#ffd700",
  darkGold: "#daa520",
  magenta: "#d946ef",
  mint: "#10ffaa",
  cyan: "#00e5ff",
  cream: "#f5f0e0",
  caption: "#c8b080",
  bgColor: "#080610",
} as const;

/* ── Stars ── */
export const STARS: readonly [number, number][] = [
  [8, 12], [22, 6], [37, 18], [52, 8], [68, 14], [83, 5], [93, 22],
  [5, 35], [18, 42], [33, 30], [47, 38], [62, 28], [78, 36], [91, 44],
  [12, 55], [27, 62], [42, 50], [57, 58], [72, 48], [87, 60], [95, 52],
  [3, 72], [16, 78], [31, 68], [46, 76], [61, 70], [76, 82], [90, 74],
  [10, 88], [25, 92], [40, 85], [55, 90], [70, 94], [85, 88], [96, 80],
  [14, 25], [29, 16], [44, 22], [59, 15], [74, 20], [88, 30], [7, 48],
  [23, 54], [38, 46], [53, 64], [67, 56], [82, 66], [4, 82], [19, 68],
  [34, 78], [49, 84], [64, 88], [79, 92], [94, 62], [11, 4],
];

/* ── Vesica geometry ── */
const R = 180;
const OFF = 100;
const NEON = ["#daa520", "#d946ef", "#10ffaa"] as const;
const ANGLES = [0, Math.PI / 3, (2 * Math.PI) / 3] as const;

export const PAIRS = ANGLES.map((a, i) => ({
  c1: [SVG_CENTER.x + OFF * Math.cos(a), SVG_CENTER.y + OFF * Math.sin(a)] as const,
  c2: [SVG_CENTER.x - OFF * Math.cos(a), SVG_CENTER.y - OFF * Math.sin(a)] as const,
  color: NEON[i],
  opacity: i === 0 ? 0.14 : 0.12,
  vesicaAngle: a + Math.PI / 2,
  r: R,
}));

export const CENTERS = PAIRS.flatMap((p) => [p.c1, p.c2]);

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Where all circles converge",
  titleLine1: "Vesica",
  titleLine2: "Piscis",
  description:
    "An eggplant born at the intersection of all sacred circles, where three vesicae align and geometry collapses into origin.",
} as const;

/* ── SVG shared ── */
export const VESICA_R = R;
export { SVG_CENTER, SVG_VIEWBOX };

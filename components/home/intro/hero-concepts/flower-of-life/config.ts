/* ═══════════════════════════════════════════════
   Flower of Life — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  darkGold: "#c8860e",
  softGold: "#f0c040",
  starBase: "#f5f0e0",
} as const;

export const STROKES = ["#daa520", "#c8860e", "#f0c040"] as const;

/* ── Geometry ── */
export const R = 80;
export const CX = 600;
export const CY = 400;

const INNER_RING: readonly [number, number][] = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 3) * i - Math.PI / 2;
  return [CX + R * Math.cos(a), CY + R * Math.sin(a)] as [number, number];
});

const OUTER_RING: readonly [number, number][] = Array.from({ length: 12 }, (_, i) => {
  const a = (Math.PI / 6) * i - Math.PI / 2;
  const d = R * Math.sqrt(3);
  return [CX + d * Math.cos(a), CY + d * Math.sin(a)] as [number, number];
});

export const ALL_CIRCLES: readonly [number, number][] = [[CX, CY], ...INNER_RING, ...OUTER_RING];

/* ── Star field ── */
export const STAR_FIELD: readonly [number, number][] = [
  [8, 12], [22, 6], [37, 18], [52, 8], [68, 14], [83, 5], [93, 22],
  [5, 35], [18, 42], [33, 30], [47, 38], [62, 28], [78, 36], [91, 44],
  [12, 55], [27, 62], [42, 50], [57, 58], [72, 48], [87, 60], [95, 52],
  [3, 72], [16, 78], [31, 68], [46, 76], [61, 70], [76, 82], [90, 74],
  [10, 88], [25, 92], [40, 85], [55, 90], [70, 94], [85, 88], [96, 80],
  [14, 25], [29, 16], [44, 22], [59, 15], [74, 20], [88, 30], [7, 48],
  [23, 54], [38, 46], [53, 64], [67, 56], [82, 66], [4, 82], [19, 68],
  [34, 78], [49, 84], [64, 88], [79, 92], [94, 62], [11, 4],
];

/* ── Tiny 4-point stars ── */
export const TINY_STARS: readonly [number, number][] = [
  [200, 180], [980, 220], [150, 620], [1050, 580], [400, 150], [800, 680],
];

/* ── Eggplant ── */
export const EGGPLANT_SRC = "/logos/eggplant-logo-smooth.apng" as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "The seed of all sacred forms",
  titleLine1: "Flower",
  titleLine2: "of Life",
  description:
    "An eggplant blooms at the origin point where every circle begins and all geometry unfolds.",
} as const;

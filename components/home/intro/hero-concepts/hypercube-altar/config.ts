/* ═══════════════════════════════════════════════
   Hypercube Altar — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const NEON = ["#10ffaa", "#d946ef", "#00e5ff", "#daa520"] as const;

export const PALETTE = {
  gold: "#daa520",
  brightGold: "#ffd700",
  neonGreen: "#10ffaa",
  neonPink: "#d946ef",
  neonCyan: "#00e5ff",
  cream: "#f5e6c0",
  caption: "#c8b080",
  bgColor: "#080610",
} as const;

/* ── Stars ── */
export const STARS = Array.from({ length: 60 }, (_, i) => ({
  x: `${(i * 19 + 3) % 100}%`,
  y: `${(i * 29 + 11) % 100}%`,
  size: i % 3 === 0 ? 3 : 2,
  opacity: 0.06 + (i % 4) * 0.03,
  color: NEON[i % 4],
}));

/* ── Cube geometry helpers ── */
const sq = (cx: number, cy: number, half: number, rot: number): [number, number][] => {
  const rad = (rot * Math.PI) / 180;
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([dx, dy]) => {
    const x = dx * half, y = dy * half;
    return [cx + x * Math.cos(rad) - y * Math.sin(rad), cy + x * Math.sin(rad) + y * Math.cos(rad)];
  });
};

/* ── SVG center ── */
export const C = [600, 400] as const;

/* ── Tesseract cube vertices ── */
export const outerA = sq(C[0], C[1], 250, 15);
export const innerA = sq(C[0], C[1], 150, 45);
export const outerB = sq(C[0], C[1], 100, 20);
export const innerB = sq(C[0], C[1], 60, 50);

/* ── Polygon string builder ── */
export const polyStr = (pts: [number, number][]) => pts.map((p) => p.join(",")).join(" ");

/* ── Triangle at point helper ── */
export const triAt = ([x, y]: [number, number], s = 12) =>
  `${x},${y - s} ${x - s * 0.866},${y + s * 0.5} ${x + s * 0.866},${y + s * 0.5}`;

/* ── Concentric circle radii ── */
export const CIRCLE_RADII = [320, 240, 160] as const;

/* ── Eggplant ── */
export const EGGPLANT_SRC = "/logos/eggplant-logo-smooth.apng" as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Fourth-dimensional produce",
  titleLine1: "Hypercube",
  titleLine2: "Altar",
  description:
    "The eggplant exists in four dimensions simultaneously \u2014 projected through impossible vertices onto the altar of your screen",
} as const;

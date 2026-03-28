/* ═══════════════════════════════════════════════
   Supernova Farmer's Market — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  bg: "#020102",
  neonGreen: "#10ffaa",
  hotPink: "#ff1493",
  gold: "#daa520",
  limeGreen: "#39ff14",
  fuchsia: "#d946ef",
  cyan: "#00e5ff",
} as const;

/* ── Shockwave rings ── */
export const RING_COLORS = [
  PALETTE.neonGreen, PALETTE.hotPink, PALETTE.gold,
  PALETTE.limeGreen, PALETTE.fuchsia, PALETTE.cyan,
] as const;

export const RING_COUNT = 12;
export const RINGS = Array.from({ length: RING_COUNT }, (_, i) => ({
  r: 40 + i * 38,
  stroke: RING_COLORS[i % RING_COLORS.length],
  strokeWidth: 3 - i * 0.2,
  opacity: 0.25 - i * 0.018,
  strokeDasharray: i > 6 ? "8 12" : "none",
}));

/* ── Stall icons (Venn, Flower of Life, Triangle, Hexagon) ── */
export const VENN_CIRCLES = [
  { cx: 380, cy: 280, r: 25 },
  { cx: 400, cy: 280, r: 25 },
] as const;

export const FLOWER_OF_LIFE_CENTER = { cx: 820, cy: 320, r: 15 } as const;
export const FLOWER_OF_LIFE_PETALS = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 6;
  return {
    cx: FLOWER_OF_LIFE_CENTER.cx + 15 * Math.cos(a),
    cy: FLOWER_OF_LIFE_CENTER.cy + 15 * Math.sin(a),
  };
});

export const TRIANGLE_POINTS = "450,520 490,580 410,580" as const;
export const HEXAGON_POINTS = "750,180 780,210 780,250 750,280 720,250 720,210" as const;

/* ── Debris particles ── */
export const DEBRIS_COUNT = 40;
export const DEBRIS = Array.from({ length: DEBRIS_COUNT }, (_, i) => {
  const angle = (Math.PI * 2 * i) / DEBRIS_COUNT;
  const dist = 100 + (i * 37) % 350;
  return {
    cx: SVG_CENTER.x + dist * Math.cos(angle),
    cy: SVG_CENTER.y + dist * Math.sin(angle),
    r: i % 5 === 0 ? 2.5 : 1,
    fill: i % 3 === 0 ? PALETTE.neonGreen : i % 3 === 1 ? PALETTE.hotPink : PALETTE.gold,
    opacity: 0.3 - (dist / 1500),
  };
});

/* ── Typography / Copy ── */
export const COPY = {
  titleName: "Konrad",
  subtitleName: "Antonik",
  description:
    "A massive eggplant detonated like a dying star. In the calm eye of the explosion: a frontend developer, perfectly still. The shockwave carries sacred geometry into the void.",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

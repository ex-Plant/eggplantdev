/* ═══════════════════════════════════════════════
   Void Liturgy — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  bg: "#000000",
  neonGreen: "#10ffaa",
  fuchsia: "#d946ef",
  limeGreen: "#39ff14",
  cyan: "#00e5ff",
  hotPink: "#ff1493",
  gold: "#daa520",
} as const;

/* ── Ring colors (shared cycle) ── */
export const RING_COLORS = [
  PALETTE.neonGreen, PALETTE.fuchsia, PALETTE.limeGreen,
  PALETTE.cyan, PALETTE.hotPink, PALETTE.gold,
] as const;

/* ── Concentric rings ── */
export const RING_COUNT = 24;
export const RINGS = Array.from({ length: RING_COUNT }, (_, i) => {
  const r = 20 + i * 16;
  const hasDecoration = i % 4 === 0;
  return {
    r,
    stroke: RING_COLORS[i % RING_COLORS.length],
    strokeWidth: i < 6 ? 1.2 : i < 12 ? 0.8 : 0.4,
    opacity: 0.25 - i * 0.008,
    strokeDasharray: i % 3 === 2 ? "3 6" : "none",
    hasDecoration,
    decorationDots: hasDecoration
      ? Array.from({ length: 12 }, (_, j) => {
          const a = (Math.PI * 2 * j) / 12;
          return {
            cx: SVG_CENTER.x + r * Math.cos(a),
            cy: SVG_CENTER.y + r * Math.sin(a),
          };
        })
      : [],
  };
});

/* ── Radial ribs ── */
export const RIB_COUNT = 24;
export const RIBS = Array.from({ length: RIB_COUNT }, (_, i) => {
  const a = (Math.PI * 2 * i) / RIB_COUNT;
  return {
    x1: SVG_CENTER.x + 60 * Math.cos(a),
    y1: SVG_CENTER.y + 60 * Math.sin(a),
    x2: SVG_CENTER.x + 400 * Math.cos(a),
    y2: SVG_CENTER.y + 400 * Math.sin(a),
  };
});

/* ── Light rays (div-based) ── */
export const LIGHT_RAY_COUNT = 8;
export const LIGHT_RAYS = Array.from({ length: LIGHT_RAY_COUNT }, (_, i) => ({
  angle: (360 / LIGHT_RAY_COUNT) * i,
}));

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter:
    "drop-shadow(0 0 30px rgba(16,255,170,0.3)) drop-shadow(0 0 60px rgba(217,70,239,0.15))",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  authorName: "Konrad Antonik",
  titleLine1: "Void",
  titleLine2: "Liturgy",
  description:
    "Pure black. A single neon circle appears. Then another. Then another. Concentric rings building a mandala. At the center, the eggplant materializes, casting light through the geometry like stained glass. A summoning ritual that actually worked.",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

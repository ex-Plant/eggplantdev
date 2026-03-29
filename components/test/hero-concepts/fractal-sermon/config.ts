/* ═══════════════════════════════════════════════
   Fractal Sermon — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  bg: "#010102",
  gold: "#daa520",
  neonGreen: "#10ffaa",
  hotPink: "#ff1493",
} as const;

/* ── Flower of Life rings ── */
export const FOL_RINGS = Array.from({ length: 3 }, (_, ring) => {
  const ringR = 120 + ring * 120;
  const count = ring === 0 ? 6 : ring === 1 ? 12 : 18;
  return {
    ringR,
    count,
    opacity: 0.06 - ring * 0.015,
    circles: Array.from({ length: count }, (_, i) => {
      const a = (Math.PI * 2 * i) / count;
      return {
        cx: SVG_CENTER.x + ringR * Math.cos(a),
        cy: SVG_CENTER.y + ringR * Math.sin(a),
      };
    }),
  };
});

/* ── Center circle ── */
export const CENTER_CIRCLE = {
  cx: SVG_CENTER.x,
  cy: SVG_CENTER.y,
  r: 70,
  strokeWidth: 0.4,
  opacity: 0.08,
} as const;

/* ── Sierpinski fractal eggplant positions ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

export const SIERPINSKI_POSITIONS: readonly [number, number][] = [
  [-50, -55], [0, -75], [50, -55],
  [-75, 20], [-95, 45], [-55, 45],
  [75, 20], [95, 45], [55, 45],
] as const;

/* ── Background stars ── */
export const STAR_COUNT = 20;
export const STARS = Array.from({ length: STAR_COUNT }, (_, i) => ({
  left: `${(i * 41 + 17) % 100}%`,
  top: `${(i * 59 + 11) % 100}%`,
  size: i % 4 === 0 ? 2 : 1,
  opacity: 0.06 + (i % 3) * 0.04,
}));

/* ── Typography / Copy ── */
export const COPY = {
  terminal: "$ transmitting on all frequencies...",
  titleLine1: "Fractal",
  titleLine2: "Sermon",
  description:
    "Each generation smaller, more translucent, more devoted. The Sierpinski eggplant recurses toward enlightenment. Base case: never.",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

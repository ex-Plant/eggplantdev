/* ═══════════════════════════════════════════════
   Temple of the Eggplant — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  bg: "#020206",
  neonGreen: "#10ffaa",
  fuchsia: "#d946ef",
  limeGreen: "#39ff14",
  green: "#00e676",
} as const;

/* ── Outer rectangles ── */
export const OUTER_RECTS = [
  { x: 250, y: 100, width: 700, height: 600, strokeWidth: 0.4, opacity: 0.05 },
  { x: 280, y: 130, width: 640, height: 540, strokeWidth: 0.3, opacity: 0.04 },
] as const;

/* ── Interlocking triangles ── */
export const TRIANGLES = [
  { points: "600,120 900,620 300,620", stroke: PALETTE.neonGreen, strokeWidth: 0.6, opacity: 0.08 },
  { points: "600,680 900,180 300,180", stroke: PALETTE.fuchsia, strokeWidth: 0.6, opacity: 0.06 },
  { points: "600,200 800,560 400,560", stroke: PALETTE.limeGreen, strokeWidth: 0.5, opacity: 0.05 },
  { points: "600,600 800,240 400,240", stroke: PALETTE.green, strokeWidth: 0.5, opacity: 0.04 },
] as const;

/* ── Central bindu ── */
export const BINDU = [
  { r: 8, opacity: 0.15 },
  { r: 3, opacity: 0.3 },
] as const;

/* ── Lotus petals ── */
export const LOTUS_PETAL_COUNT = 8;
export const LOTUS_RADIUS = 60;
export const LOTUS_PETALS = Array.from({ length: LOTUS_PETAL_COUNT }, (_, i) => {
  const angle = (Math.PI * 2 * i) / LOTUS_PETAL_COUNT;
  return {
    cx: SVG_CENTER.x + LOTUS_RADIUS * Math.cos(angle),
    cy: SVG_CENTER.y + LOTUS_RADIUS * Math.sin(angle),
    rotation: (360 / LOTUS_PETAL_COUNT) * i,
  };
});

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "Est. 2022 CE",
  titleLine1: "Temple of the",
  titleLine2: "Holy Aubergine",
  description:
    "In the beginning there was a div. And the div was without class, and void. And the Spirit of the Eggplant moved upon the face of the viewport. And it was deployed. And it was good.",
  ctaLeft: "Enter the Temple",
  ctaRight: "Read the Scriptures",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

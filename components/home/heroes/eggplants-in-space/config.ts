/* ═══════════════════════════════════════════════
   EggplantsInSpace — Hero Configuration
   Canonical values live in CSS (--color-gold-*).
   SVG attributes need literal hex, so we mirror them here.
   ═══════════════════════════════════════════════ */

/* ── SVG shared ── */
export const SVG_CENTER = { x: 600, y: 400 } as const;

/* ── Metatron's cube circles ── */
export const METATRON_CIRCLE_R = 100;
export const METATRON_CIRCLES: readonly (readonly [number, number])[] = [
  [600, 400],
  [600, 300],
  [600, 500],
  [687, 350],
  [513, 350],
  [687, 450],
  [513, 450],
] as const;

/* ── Connecting lines ── */
export const METATRON_LINES = [
  "M600,300 L687,350",
  "M600,300 L513,350",
  "M687,350 L687,450",
  "M513,350 L513,450",
  "M687,450 L600,500",
  "M513,450 L600,500",
  "M600,300 L600,500",
  "M513,350 L687,450",
  "M687,350 L513,450",
] as const;

/* ── Outer containing circles ── */
export const OUTER_CIRCLES_GOLD = [
  { r: 200, stroke: "var(--color-gold-warm)", strokeWidth: 0.3, opacity: 0.1, dasharray: "8 12" as string | undefined },
  {
    r: 300,
    stroke: "var(--color-gold-dark)",
    strokeWidth: 0.3,
    opacity: 0.06,
    dasharray: "4 16" as string | undefined,
  },
  { r: 380, stroke: "var(--color-gold)", strokeWidth: 0.2, opacity: 0.04, dasharray: undefined },
  {
    r: 450,
    stroke: "var(--color-gold-dark)",
    strokeWidth: 0.28,
    opacity: 0.05,
    dasharray: "8 18" as string | undefined,
  },
  {
    r: 520,
    stroke: "var(--color-gold-warm)",
    strokeWidth: 0.24,
    opacity: 0.04,
    dasharray: "5 20" as string | undefined,
  },
] as const;
export const RADIAL_GUIDES = Array.from({ length: 6 }, (_, i) => {
  const angle = (Math.PI / 3) * i - Math.PI / 2;
  return {
    x2: SVG_CENTER.x + Math.cos(angle) * 500,
    y2: SVG_CENTER.y + Math.sin(angle) * 500,
  };
});

/* ── Burst dot positions at circle intersections — shuffled delays ── */
export const BURST_POINTS = [
  { pos: [600, 300] as const, delay: 0 }, // top
  { pos: [687, 350] as const, delay: 17.5 }, // top-right
  { pos: [687, 450] as const, delay: 7 }, // bottom-right
  { pos: [600, 500] as const, delay: 24.5 }, // bottom
  { pos: [513, 450] as const, delay: 10.5 }, // bottom-left
  { pos: [513, 350] as const, delay: 31.5 }, // top-left
] as const;

/* ── Star particles (pre-computed styles for zero render-time allocation) ── */
const RAW_STAR_POSITIONS: readonly (readonly [number, number])[] = [
  [15, 20],
  [85, 15],
  [10, 70],
  [90, 65],
  [50, 10],
  [30, 85],
  [70, 80],
  [20, 45],
  [80, 40],
  [45, 90],
  [60, 25],
  [35, 60],
  [75, 55],
] as const;

export const STAR_PARTICLES = RAW_STAR_POSITIONS.map(([x, y], i) => ({
  left: `${x}%`,
  top: `${y}%`,
  width: i % 3 === 0 ? 3 : 1.5,
  height: i % 3 === 0 ? 3 : 1.5,
  opacity: 0.12 + (i % 4) * 0.08,
  backgroundColor: i % 2 === 0 ? "var(--color-gold-cream)" : "var(--color-gold-warm)",
}));

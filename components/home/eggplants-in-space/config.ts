/* ═══════════════════════════════════════════════
   EggplantsInSpace — Hero Configuration
   Canonical values live in CSS (--color-gold-*).
   SVG attributes need literal hex, so we mirror them here.
   ═══════════════════════════════════════════════ */

/* ── SVG shared ── */
export const SVG_CENTER = { x: 600, y: 400 } as const;

/* ── Metatron's cube circles ── */
export const METATRON_CIRCLES: readonly (readonly [number, number])[] = [
  [600, 400], [600, 300], [600, 500],
  [687, 350], [513, 350], [687, 450], [513, 450],
] as const;

/* ── Connecting lines ── */
export const METATRON_LINES = [
  "M600,300 L687,350", "M600,300 L513,350", "M687,350 L687,450",
  "M513,350 L513,450", "M687,450 L600,500", "M513,450 L600,500",
  "M600,300 L600,500", "M513,350 L687,450", "M687,350 L513,450",
] as const;

/* ── Outer containing circles ── */
export const OUTER_CIRCLES_GOLD = [
  { r: 200, stroke: "var(--color-gold-warm)", strokeWidth: 0.3, opacity: 0.1, dasharray: "8 12" },
  { r: 300, stroke: "var(--color-gold-dark)", strokeWidth: 0.3, opacity: 0.06, dasharray: "4 16" },
  { r: 380, stroke: "var(--color-gold)", strokeWidth: 0.2, opacity: 0.04 },
] as const;

/* ── Central star rays (same pattern as Metatron's Cube) ── */
const STAR_RAY_COUNT = 16;
const STAR_INNER_R = 2;
const STAR_OUTER_R = 5;

export const CENTRAL_STAR_RAYS = Array.from({ length: STAR_RAY_COUNT }, (_, i) => {
  const angle = (i * (360 / STAR_RAY_COUNT) * Math.PI) / 180;
  return {
    x1: SVG_CENTER.x + Math.cos(angle) * STAR_INNER_R,
    y1: SVG_CENTER.y + Math.sin(angle) * STAR_INNER_R,
    x2: SVG_CENTER.x + Math.cos(angle) * STAR_OUTER_R,
    y2: SVG_CENTER.y + Math.sin(angle) * STAR_OUTER_R,
  };
});

/* ── Star particles ── */
export const STAR_PARTICLES = [
  [15, 20], [85, 15], [10, 70], [90, 65], [50, 10], [30, 85], [70, 80],
  [20, 45], [80, 40], [45, 90], [60, 25], [35, 60], [75, 55],
] as readonly (readonly number[])[];

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "Cosmique potager stellaire",
  titleLine1: "EggPlantis",
  titleLine2: "in Space",
  description: "Shipping produce to the void since the last deployment.",
} as const;

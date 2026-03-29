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
  { r: 380, stroke: "var(--color-gold)", strokeWidth: 0.2, opacity: 0.04, dasharray: undefined },
] as const;

/* ── Star particles ── */
export const STAR_PARTICLES = [
  [15, 20], [85, 15], [10, 70], [90, 65], [50, 10], [30, 85], [70, 80],
  [20, 45], [80, 40], [45, 90], [60, 25], [35, 60], [75, 55],
] as readonly (readonly number[])[];

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.3) saturate(1.5) brightness(0.9)",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  title: "EggPlantis in Space",
  titleLine1: "EggPlantis",
  titleLine2: "in Space",
  description: "Shipping produce to the void since the last deployment.",
} as const;

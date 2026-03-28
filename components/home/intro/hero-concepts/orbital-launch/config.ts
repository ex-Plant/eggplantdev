/* ═══════════════════════════════════════════════
   Orbital Launch — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  neonGreen: "#10ffaa",
  limeGreen: "#39ff14",
  purple: "#d946ef",
  lavender: "#8c99f1",
  greenAccent: "#00e676",
  bgColor: "#010204",
} as const;

/* ── SVG shared ── */
export const SVG_CENTER = { x: 600, y: 400 } as const;

/* ── Orbital rings ── */
export const ORBITAL_RINGS = [
  { rx: 180, ry: 80, rot: -20, color: PALETTE.neonGreen, w: 1.5 },
  { rx: 280, ry: 110, rot: 15, color: PALETTE.limeGreen, w: 1 },
  { rx: 380, ry: 150, rot: -8, color: PALETTE.purple, w: 0.6 },
  { rx: 480, ry: 180, rot: 25, color: PALETTE.lavender, w: 0.4 },
  { rx: 560, ry: 200, rot: -12, color: PALETTE.greenAccent, w: 0.3 },
] as const;

/* ── Orbiting planet dots ── */
export const PLANET_DOTS = [
  { cx: 780, cy: 380, r: 4, color: PALETTE.neonGreen, opacity: 0.6, haloR: 10, haloOpacity: 0.3 },
  { cx: 380, cy: 310, r: 3, color: PALETTE.purple, opacity: 0.5, haloR: 0, haloOpacity: 0 },
  { cx: 950, cy: 450, r: 2, color: PALETTE.limeGreen, opacity: 0.4, haloR: 0, haloOpacity: 0 },
  { cx: 250, cy: 500, r: 2.5, color: PALETTE.lavender, opacity: 0.4, haloR: 0, haloOpacity: 0 },
] as const;

/* ── Stars ── */
export const STAR_COUNT = 30;
export const STARS = Array.from({ length: STAR_COUNT }, (_, i) => ({
  x: `${(i * 37 + 13) % 100}%`,
  y: `${(i * 53 + 7) % 100}%`,
  size: i % 5 === 0 ? 2.5 : 1,
  opacity: 0.08 + (i % 4) * 0.08,
}));

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  titleLine1: "The Solar",
  titleLine2: "Aubergine",
  description:
    "At the center of every good deployment is a vegetable nobody asked for but everyone needed. Five orbiting principles. One cosmic produce.",
} as const;

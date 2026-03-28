/* ═══════════════════════════════════════════════
   Glam Cosmic Billboard — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  hotPink: "#ff1493",
  cream: "#f5e6c0",
  warmCaption: "#c8b080",
  bgColor: "#0a0408",
} as const;

/* ── Diagonal glam stripes ── */
export const GLAM_STRIPES = [
  { y1: 600, y2: 200, stroke: PALETTE.gold, strokeWidth: 60, opacity: 0.03 },
  { y1: 620, y2: 220, stroke: PALETTE.hotPink, strokeWidth: 1, opacity: 0.08 },
  { y1: 580, y2: 180, stroke: PALETTE.gold, strokeWidth: 1, opacity: 0.08 },
] as const;

/* ── Orbital arcs ── */
export const ORBITAL_ARCS = [
  { cx: 400, cy: 400, rx: 300, ry: 350, stroke: PALETTE.gold, strokeWidth: 1.5, opacity: 0.08, rotate: -15 },
  { cx: 800, cy: 400, rx: 280, ry: 320, stroke: PALETTE.hotPink, strokeWidth: 1, opacity: 0.06, rotate: 10 },
] as const;

/* ── Sparkle cluster ── */
export const SPARKLE_COUNT = 20;
export const SPARKLES = Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
  x: 200 + (i * 47) % 800,
  y: 100 + (i * 61) % 600,
  opacity: 0.15 - (i % 4) * 0.03,
  color: i % 2 === 0 ? PALETTE.gold : PALETTE.hotPink,
}));

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.15) saturate(1.6) brightness(1.05)",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "Limited Edition",
  titleLine1: "Aubergine",
  titleLine2: "d'Or",
  description:
    "A fragrance for the cosmos. Notes of sacred geometry, TypeScript, and freshly deployed produce. Bottled at the event horizon.",
  buttons: ["Pre-Order", "Watch Film"],
} as const;

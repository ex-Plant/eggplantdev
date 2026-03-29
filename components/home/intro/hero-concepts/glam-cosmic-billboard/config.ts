/* ═══════════════════════════════════════════════
   Glam Cosmic Billboard — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Hex values for SVG attributes (can't use CSS var()) ── */
export const HEX = {
  gold: "#daa520",
  hotPink: "#ff1493",
} as const;

/* ── Diagonal glam stripes ── */
export const GLAM_STRIPES = [
  { y1: 620, y2: 220, stroke: HEX.hotPink, strokeWidth: 1, opacity: 0.08 },
  { y1: 580, y2: 180, stroke: HEX.gold, strokeWidth: 1, opacity: 0.08 },
] as const;

/* ── Orbital arcs ── */
export const ORBITAL_ARCS = [
  { cx: 400, cy: 400, rx: 300, ry: 350, stroke: HEX.gold, strokeWidth: 1.5, opacity: 0.08, rotate: -15 },
  { cx: 800, cy: 400, rx: 280, ry: 320, stroke: HEX.hotPink, strokeWidth: 1, opacity: 0.06, rotate: 10 },
] as const;

/* ── Sparkle cluster ── */
export const SPARKLE_COUNT = 20;
export const SPARKLES = Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
  x: 200 + (i * 47) % 800,
  y: 100 + (i * 61) % 600,
  opacity: 0.15 - (i % 4) * 0.03,
  color: i % 2 === 0 ? HEX.gold : HEX.hotPink,
}));

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.15) saturate(1.6) brightness(1.05)",
} as const;

/* ── Animation timing ── */
export const ORBIT_DURATION_S = 44;
export const STRIPE_PULSE_COUNT = 1;
export const STRIPE_DURATIONS = [52, 60] as const;

/* ── SVG IDs (namespaced to avoid collisions with other heroes) ── */
export const ID = {
  orbitDot: "gcb-orbit-dot",
  stripeGold: "gcb-stripe-gold",
  stripePink: "gcb-stripe-pink",
} as const;

/* ── Derived constants ── */
function buildEllipseMotionPath(arc: (typeof ORBITAL_ARCS)[0]) {
  const rad = (arc.rotate * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const lx = -arc.rx;
  const sx = arc.cx + lx * cos;
  const sy = arc.cy + lx * sin;
  return `M ${sx} ${sy} A ${arc.rx} ${arc.ry} ${arc.rotate} 1 1 ${arc.cx + arc.rx * cos} ${arc.cy + arc.rx * sin} A ${arc.rx} ${arc.ry} ${arc.rotate} 1 1 ${sx} ${sy} Z`;
}

export const ORBIT_PATH = buildEllipseMotionPath(ORBITAL_ARCS[0]);

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "Limited Edition",
  titleLine1: "Aubergine",
  titleLine2: "d'Or",
  description:
    "A fragrance for the cosmos. Notes of sacred geometry, TypeScript, and freshly deployed produce. Bottled at the event horizon.",
  buttons: ["Pre-Order", "Watch Film"],
} as const;

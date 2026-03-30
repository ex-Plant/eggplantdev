/* ═══════════════════════════════════════════════
   Glam Cosmic Billboard — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Billboard-specific stripe/sparkle config (independent from global overlay) ── */
export const GLAM_STRIPES = [
  { y1: 620, y2: 220, stroke: "var(--color-hot-pink)", strokeWidth: 1, opacity: 0.1, tone: "pink" as const },
  { y1: 580, y2: 180, stroke: "var(--color-gold)", strokeWidth: 1, opacity: 0.1, tone: "gold" as const },
] as const;

const SPARKLE_COUNT = 20;
export const SPARKLES = Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
  x: 200 + ((i * 47) % 800),
  y: 100 + ((i * 61) % 600),
  opacity: 0.15 - (i % 4) * 0.03,
  color: i % 2 === 0 ? "var(--color-gold)" : "var(--color-hot-pink)",
}));

/* ── Orbital arcs ── */
export const ORBITAL_ARCS = [
  { cx: 400, cy: 400, rx: 300, ry: 350, stroke: "var(--color-gold)", strokeWidth: 1.5, opacity: 0.1, rotate: -15 },
  { cx: 800, cy: 400, rx: 280, ry: 320, stroke: "var(--color-hot-pink)", strokeWidth: 1, opacity: 0.12, rotate: 10 },
] as const;

/* ── Stripe dot timing (billboard-specific) ── */
export const STRIPE_PULSE_COUNT = 3;
export const STRIPE_DURATIONS = [36, 30, 40, 42, 34, 38] as const;

/* ── Animation timing ── */
export const ORBIT_DURATION_S = 44;

/* ── SVG IDs (namespaced to avoid collisions with other heroes) ── */
export const ID = {
  orbitDot: "gcb-orbit-dot",
  orbitDotPink: "gcb-orbit-dot-pink",
  stripeGold: "gcb-stripe-gold",
  stripePink: "gcb-stripe-pink",
} as const;

/* ── Derived constants ── */
function buildEllipseMotionPath(arc: (typeof ORBITAL_ARCS)[number]) {
  const rad = (arc.rotate * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const lx = -arc.rx;
  const sx = arc.cx + lx * cos;
  const sy = arc.cy + lx * sin;
  return `M ${sx} ${sy} A ${arc.rx} ${arc.ry} ${arc.rotate} 1 1 ${arc.cx + arc.rx * cos} ${arc.cy + arc.rx * sin} A ${arc.rx} ${arc.ry} ${arc.rotate} 1 1 ${sx} ${sy} Z`;
}

export const ORBIT_PATH = buildEllipseMotionPath(ORBITAL_ARCS[0]);
export const ORBIT_PATH_PINK = buildEllipseMotionPath(ORBITAL_ARCS[1]);

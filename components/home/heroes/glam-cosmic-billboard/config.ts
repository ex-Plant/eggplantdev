/* ═══════════════════════════════════════════════
   Glam Cosmic Billboard — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Shared stripe/sparkle config (lives in the global cosmic-lines animation) ── */
export {
  GLAM_STRIPES,
  SPARKLES,
  STRIPE_PULSE_COUNT,
  STRIPE_DURATIONS,
} from "@/components/animations/fixed-cosmic-lines/config";

/* ── Orbital arcs ── */
export const ORBITAL_ARCS = [
  { cx: 400, cy: 400, rx: 300, ry: 350, stroke: "var(--color-gold)", strokeWidth: 1.5, opacity: 0.1, rotate: -15 },
  { cx: 800, cy: 400, rx: 280, ry: 320, stroke: "var(--color-hot-pink)", strokeWidth: 1, opacity: 0.12, rotate: 10 },
] as const;

/* ── Animation timing ── */
export const ORBIT_DURATION_S = 44;

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

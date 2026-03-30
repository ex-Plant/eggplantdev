/* ═══════════════════════════════════════════════
   Cosmic Lines — Shared stripe / sparkle config
   Used by both FixedCosmicLines (global overlay)
   and the Glam Cosmic Billboard hero.
   ═══════════════════════════════════════════════ */

/* ── Diagonal glam stripes ── */
export const GLAM_STRIPES = [
  { y1: 420, y2: 420, stroke: "var(--color-hot-pink)", strokeWidth: 1, opacity: 0.12, tone: "pink" as const },
  { y1: 380, y2: 380, stroke: "var(--color-gold)", strokeWidth: 1, opacity: 0.12, tone: "gold" as const },
] as const;

/* ── Sparkle cluster ── */
const SPARKLE_COUNT = 20;
export const SPARKLES = Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
  x: 200 + ((i * 47) % 800),
  y: 100 + ((i * 61) % 600),
  opacity: 0.15 - (i % 4) * 0.03,
  color: i % 2 === 0 ? "var(--color-gold)" : "var(--color-hot-pink)",
}));

/* ── Animation timing ── */
export const STRIPE_PULSE_COUNT = 2;
export const STRIPE_DURATIONS = [42, 38, 48, 44] as const;

/* ── SVG gradient IDs ── */
export const STRIPE_ID = {
  stripeGold: "gcb-stripe-gold",
  stripePink: "gcb-stripe-pink",
} as const;

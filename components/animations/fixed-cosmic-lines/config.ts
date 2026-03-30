/* ═══════════════════════════════════════════════
   Fixed Cosmic Lines — Global overlay config
   Used ONLY by FixedCosmicLines (the fixed viewport overlay in layout.tsx).
   Billboard hero has its own config at:
   components/home/heroes/glam-cosmic-billboard/config.ts
   ═══════════════════════════════════════════════ */

/* ── Horizontal stripes (global overlay) ── */
export const GLAM_STRIPES = [
  /* Center — gentle downward slope, left → right */
  { y1: 380, y2: 420, stroke: "var(--color-hot-pink)", strokeWidth: 1, opacity: 0, tone: "pink" as const },
  /* Center — gentle upward slope, left → right */
  { y1: 420, y2: 380, stroke: "var(--color-gold)", strokeWidth: 1, opacity: 0, tone: "gold" as const },
  /* Top — gentle downward slope, right → left */
  { y1: 150, y2: 200, x1: 1200, x2: 0, stroke: "var(--color-gold)", strokeWidth: 1, opacity: 0, tone: "gold" as const },
] as const;

/* ── Animation timing ── */
export const STRIPE_PULSE_COUNT = 1;
export const STRIPE_DURATIONS = [42, 38, 45] as const;

/* ── SVG gradient IDs ── */
export const STRIPE_ID = {
  stripeGold: "gcb-stripe-gold",
  stripePink: "gcb-stripe-pink",
} as const;

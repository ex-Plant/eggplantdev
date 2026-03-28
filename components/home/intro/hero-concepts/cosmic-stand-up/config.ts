/* ═══════════════════════════════════════════════
   Cosmic Stand-Up — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  bg: "#020204",
  neonGreen: "#10ffaa",
} as const;

/* ── Spotlight ── */
export const SPOTLIGHT = {
  clipPath: "polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)",
  gradient:
    "linear-gradient(180deg,rgba(16,255,170,0.03) 0%,rgba(16,255,170,0.01) 40%,transparent 70%)",
} as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  titleLine1: "Cosmic",
  titleLine2: "Stand-Up",
  tagline: "* No vegetables were harmed during this deployment *",
} as const;

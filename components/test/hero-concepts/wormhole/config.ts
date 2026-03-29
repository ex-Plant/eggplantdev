/* ═══════════════════════════════════════════════
   Wormhole — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  neonGreen: "#10ffaa",
  limeGreen: "#39ff14",
  purple: "#d946ef",
  bgColor: "#010102",
} as const;

/* ── SVG shared ── */
export const SVG_CENTER = { x: 600, y: 400 } as const;

/* ── Wormhole tunnel rings ── */
export const TUNNEL_RING_COUNT = 20;
export const TUNNEL_RINGS = Array.from({ length: TUNNEL_RING_COUNT }, (_, i) => ({
  r: 30 + i * 25,
  opacity: Math.max(0.2 - i * 0.008, 0.01),
  color: i % 3 === 0 ? PALETTE.neonGreen : i % 3 === 1 ? PALETTE.purple : PALETTE.limeGreen,
  strokeWidth: i < 5 ? 1 : 0.4,
}));

/* ── Speed lines ── */
export const SPEED_LINE_COUNT = 24;
export const SPEED_LINE_INNER_R = 200;
export const SPEED_LINE_OUTER_R = 500;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "Entering Hyperspace",
  titleLine1: "Warp",
  titleLine2: "Aubergine",
  description:
    "When you npm deploy so hard the eggplant breaks through spacetime. Estimated arrival: after the next sprint.",
} as const;

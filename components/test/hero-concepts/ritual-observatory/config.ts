/* ═══════════════════════════════════════════════
   Ritual Observatory — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  softGold: "#f0c040",
  darkGold: "#c8860e",
  cream: "#f5e6c0",
  warmCaption: "#c8b080",
  bgColor: "#0a0908",
} as const;

/* ── SVG shared ── */
export const SVG_CENTER = { x: 600, y: 400 } as const;

/* ── Measurement rings ── */
export const MEASUREMENT_RINGS = [
  { r: 100, strokeWidth: 1.5, tickCount: 24, dasharray: "none" },
  { r: 160, strokeWidth: 0.5, tickCount: 12, dasharray: "none" },
  { r: 230, strokeWidth: 0.5, tickCount: 8, dasharray: "none" },
  { r: 310, strokeWidth: 0.5, tickCount: 8, dasharray: "2 6" },
  { r: 400, strokeWidth: 0.5, tickCount: 8, dasharray: "2 6" },
] as const;

/* ── Cardinal labels ── */
export const CARDINAL_LABELS = [
  { x: 600, y: 285, text: "0\u00b0" },
  { x: 715, y: 404, text: "90\u00b0" },
  { x: 600, y: 520, text: "180\u00b0" },
  { x: 485, y: 404, text: "270\u00b0" },
] as const;

/* ── Annotated celestial objects ── */
export const CELESTIAL_OBJECTS = [
  {
    id: "A",
    cx: 780, cy: 280, r: 8, outerR: 12, color: PALETTE.gold,
    leaderLine: { x1: 790, y1: 270, x2: 850, y2: 230 },
    label: { x: 855, y: 228, text: "OBJ-A / 47.2\u00b0" },
  },
  {
    id: "B",
    cx: 430, cy: 530, r: 6, outerR: 10, color: PALETTE.darkGold,
    leaderLine: { x1: 420, y1: 540, x2: 350, y2: 580 },
    label: { x: 280, y: 585, text: "OBJ-B / 213.8\u00b0" },
  },
  {
    id: "C",
    cx: 340, cy: 360, r: 5, outerR: 0, color: PALETTE.softGold,
    leaderLine: { x1: 335, y1: 355, x2: 280, y2: 320 },
    label: { x: 215, y: 318, text: "OBJ-C / 282.1\u00b0" },
  },
] as const;

/* ── Scan line ── */
export const SCAN_LINE = { x1: 600, y1: 400, x2: 900, y2: 300 } as const;

/* ── Background stars ── */
export const BG_STAR_COUNT = 40;
export const BG_STARS = Array.from({ length: BG_STAR_COUNT }, (_, i) => ({
  cx: (i * 31 + 17) % 1200,
  cy: (i * 47 + 9) % 800,
  r: i % 7 === 0 ? 1.5 : 0.7,
  opacity: 0.04 + (i % 5) * 0.02,
}));

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.3) saturate(1.4)",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  signalLabel: "Signal Acquired",
  titleLine1: "Ritual",
  titleLine2: "Observatory",
  description:
    "The eggplant has been located at bearing 0\u00b0, distance: infinite. Three satellite objects confirmed in orbit. Classification: sacred. Recommendation: deploy immediately.",
  statusCards: [
    { label: "Status", value: "Tracking" },
    { label: "Signal", value: "\u221e Hz" },
    { label: "Deploy", value: "Pending" },
  ],
} as const;

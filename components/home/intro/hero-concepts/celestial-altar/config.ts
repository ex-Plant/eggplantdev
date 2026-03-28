/* ═══════════════════════════════════════════════
   Celestial Altar — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  softGold: "#f0c040",
  darkGold: "#c8860e",
  cream: "#f5e6c0",
  warmCaption: "#c8b080",
  coolBlue: "#8fa6b0",
  bgColor: "#08070a",
} as const;

/* ── Altar pedestal ── */
export const ALTAR = {
  outerPoints: "500,550 700,550 750,650 450,650",
  innerPoints: "520,550 680,550 710,620 490,620",
  steps: [
    { y: 560, x1: 480, x2: 720, opacity: 0.08 },
    { y: 580, x1: 470, x2: 730, opacity: 0.06 },
  ],
} as const;

/* ── Sacred mandorla / vesica ── */
export const MANDORLA = {
  inner: { cx: 600, cy: 380, rx: 70, ry: 120 },
  outer: { cx: 600, cy: 380, rx: 90, ry: 150 },
} as const;

/* ── Symmetrical planets — left side ── */
export const PLANETS_LEFT = [
  { cx: 320, cy: 250, r: 20, innerR: 8, color: "#8fa6b0", hasInner: true },
  { cx: 250, cy: 400, r: 15, innerR: 0, color: "#daa520", hasInner: false },
  { cx: 350, cy: 550, r: 12, innerR: 0, color: "#f5e6c0", hasInner: false },
] as const;

/* ── Crescent (left) ── */
export const CRESCENT_LEFT = {
  cx: 200, cy: 300, r: 10, maskCx: 203, maskCy: 298, maskR: 8,
} as const;

/* ── Symmetrical planets — right side ── */
export const PLANETS_RIGHT = [
  { cx: 880, cy: 250, r: 20, innerR: 8, color: "#8fa6b0", hasInner: true },
  { cx: 950, cy: 400, r: 15, innerR: 0, color: "#daa520", hasInner: false },
  { cx: 850, cy: 550, r: 12, innerR: 0, color: "#f5e6c0", hasInner: false },
] as const;

/* ── Concentric target (right) ── */
export const CONCENTRIC_TARGET = {
  cx: 1000, cy: 300, radii: [14, 8, 3] as readonly number[],
} as const;

/* ── Constellation lines ── */
export const CONSTELLATION_LINES = [
  { x1: 320, y1: 250, x2: 250, y2: 400 },
  { x1: 250, y1: 400, x2: 350, y2: 550 },
  { x1: 880, y1: 250, x2: 950, y2: 400 },
  { x1: 950, y1: 400, x2: 850, y2: 550 },
] as const;

/* ── Crown rays ── */
export const CROWN_RAY_COUNT = 7;
export const CROWN_ORIGIN = { x: 600, y: 250 } as const;
export const CROWN_RADIUS = 120;

/* ── 4-point stars ── */
export const FOUR_POINT_STARS = [
  [180, 150], [450, 120], [750, 130], [1020, 160], [150, 600], [1050, 600], [600, 100],
] as readonly (readonly number[])[];

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.25) saturate(1.4) brightness(0.95)",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  titleLine1: "Celestial",
  titleLine2: "Altar",
  description:
    "The eggplant sits enthroned above a golden pedestal. Planets hang in symmetrical reverence on either side. This is religious iconography for a produce-worshipping civilization with impeccable design taste.",
} as const;

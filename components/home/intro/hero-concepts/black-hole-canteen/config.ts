/* ═══════════════════════════════════════════════
   Black Hole Canteen — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  bg: "#010103",
  neonGreen: "#10ffaa",
  fuchsia: "#d946ef",
} as const;

/* ── Accretion disk ellipses ── */
export const DISK_COUNT = 8;
export const DISK_ELLIPSES = Array.from({ length: DISK_COUNT }, (_, i) => ({
  rx: 80 + i * 40,
  ry: 20 + i * 8,
  stroke: i % 2 === 0 ? PALETTE.neonGreen : PALETTE.fuchsia,
  strokeWidth: 2 - i * 0.2,
  opacity: 0.2 - i * 0.02,
  rotation: -15 + i * 2,
}));

/* ── Central circles ── */
export const CENTER_CIRCLES = [
  { r: 45, fill: "#000", stroke: PALETTE.neonGreen, strokeWidth: 1.5, opacity: 0.2 },
  { r: 15, fill: PALETTE.neonGreen, stroke: undefined, strokeWidth: undefined, opacity: 0.08 },
] as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  titleLine1: "Black Hole",
  titleLine2: "Canteen",
  description:
    "Where vegetables go after git push --force. The eggplant has been spaghettified but the code still compiles. Menu: event horizon soup, singularity risotto, and dark matter on tap.",
  tagline: "— No refunds past the event horizon —",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

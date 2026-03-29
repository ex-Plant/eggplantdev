/* ═══════════════════════════════════════════════
   Meridian Procession — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  gold: "#ffd700",
  darkGold: "#daa520",
  darkBrown: "#c8860e",
  softGold: "#f0c040",
  cream: "#f5e6c0",
  steel: "#8fa6b0",
  caption: "#c8b080",
  bgColor: "#0b0907",
} as const;

/* ── Stars ── */
export const PROCESSION_STARS = Array.from({ length: 52 }, (_, i) => ({
  x: (i * 29 + 13) % 100,
  y: (i * 47 + 5) % 100,
  size: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  opacity: 0.04 + (i % 6) * 0.025,
}));

/* ── Medallions ── */
export const MEDALLIONS = [
  { cy: 142, r: 34, stroke: "#f0c040", opacity: 0.16 },
  { cy: 246, r: 56, stroke: "#daa520", opacity: 0.14 },
  { cy: 400, r: 108, stroke: "#f5e6c0", opacity: 0.1 },
  { cy: 562, r: 62, stroke: "#c8860e", opacity: 0.12 },
  { cy: 678, r: 28, stroke: "#f0c040", opacity: 0.14 },
] as const;

/* ── Meridian curves (SVG path data) ── */
export const MERIDIAN_CURVES = [
  "M600 120 C 750 170, 750 318, 600 400",
  "M600 120 C 450 170, 450 318, 600 400",
  "M600 400 C 768 482, 742 624, 600 690",
  "M600 400 C 432 482, 458 624, 600 690",
] as const;

/* ── Decorative elements ── */
export const DECORATIVE = {
  planet: { cx: 422, cy: 232, r: 17, ringRx: 30, ringRy: 8 },
  moon: { cx: 776, cy: 564, r: 20, shadowCx: 786, shadowCy: 564, shadowR: 13 },
  arrowTop: "596,90 604,90 608,100 600,112 592,100",
  arrowBottom: "596,712 604,712 608,722 600,734 592,722",
  diamondLeft: "308,398 322,412 308,426 294,412",
  diamondRight: "892,398 906,412 892,426 878,412",
} as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.3) saturate(1.5) brightness(0.9)",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Axis / ceremonial transit",
  titleLine1: "Meridian",
  titleLine2: "Procession",
  description:
    "A vertical sacred march instead of a centered halo. The whole composition behaves like a processional banner, with the eggplant passing through successive stations of worship.",
} as const;

/* ── SVG shared ── */
export { SVG_VIEWBOX };

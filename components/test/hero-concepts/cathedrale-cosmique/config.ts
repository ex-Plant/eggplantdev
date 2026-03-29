/* ═══════════════════════════════════════════════
   Cathedrale Cosmique — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  brightGold: "#ffd700",
  darkGold: "#c8860e",
  cream: "#f5e6c0",
  rose: "#e8a0c0",
  caption: "#c8b080",
  bgColor: "#0a0806",
} as const;

/* ── Stars builder ── */
export function buildStars() {
  return Array.from({ length: 55 }, (_, i) => ({
    x: `${(i * 37 + 13) % 100}%`,
    y: `${(i * 53 + 7) % 100}%`,
    size: 1 + (i % 3),
    color: [PALETTE.gold, PALETTE.brightGold, PALETTE.cream][i % 3],
    opacity: 0.08 + (i % 5) * 0.04,
  }));
}

/* ── Petals ── */
export const PETAL_COUNT = 12;
export const PETAL_ANGLES = Array.from({ length: PETAL_COUNT }, (_, i) => i * 30);

/* ── SVG center ── */
export const SVG_CENTER = { x: 600, y: 380 } as const;

/* ── Gothic arch paths ── */
export const ARCH_OUTER = "M400,700 L400,350 Q400,100 600,80 Q800,100 800,350 L800,700";
export const ARCH_INNER = "M420,690 L420,360 Q420,130 600,110 Q780,130 780,360 L780,690";

/* ── Rose window rings ── */
export const ROSE_RINGS = [
  { r: 220, stroke: PALETTE.brightGold, strokeWidth: 1.5, opacity: 0.15 },
  { r: 225, stroke: PALETTE.darkGold, strokeWidth: 0.5, opacity: 0.08 },
  { r: 160, stroke: PALETTE.gold, strokeWidth: 0.8, opacity: 0.12 },
  { r: 110, stroke: PALETTE.brightGold, strokeWidth: 0.6, opacity: 0.1 },
  { r: 65, stroke: PALETTE.darkGold, strokeWidth: 0.5, opacity: 0.08 },
] as const;

/* ── Eggplant ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.3) saturate(1.6) brightness(0.9) hue-rotate(-10deg)",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Vitrail de l\u2019univers",
  titleLine1: "Cath\u00e9drale",
  titleLine2: "Cosmique",
  description:
    "The eggplant sits enthroned within a rose window of cosmic light \u2014 gilded tracery radiating outward like a cathedral built by stars.",
} as const;

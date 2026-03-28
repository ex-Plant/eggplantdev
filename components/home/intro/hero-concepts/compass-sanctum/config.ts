/* ═══════════════════════════════════════════════
   Compass Sanctum — Hero Configuration
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
  bgColor: "#0c0a08",
} as const;

/* ── Stars ── */
export const COMPASS_STARS = Array.from({ length: 48 }, (_, i) => ({
  x: (i * 43 + 3) % 100,
  y: (i * 31 + 17) % 100,
  size: i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  color: i % 4 === 0 ? "#daa520" : "#f5e6c0",
  opacity: 0.05 + (i % 5) * 0.025,
}));

/* ── Compass point geometry ── */
export const compassPoint = (outer: number, inner: number, angle: number) => {
  const a = (Math.PI / 180) * angle;
  const left = a - Math.PI / 16;
  const right = a + Math.PI / 16;
  return `${600 + outer * Math.cos(a)},${400 + outer * Math.sin(a)} ${600 + inner * Math.cos(right)},${400 + inner * Math.sin(right)} ${600 + 48 * Math.cos(a)},${400 + 48 * Math.sin(a)} ${600 + inner * Math.cos(left)},${400 + inner * Math.sin(left)}`;
};

/* ── Compass directions ── */
export const COMPASS_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315] as const;

/* ── Corner brackets ── */
export const CORNER_PATHS = [
  "M94 84 H188 M94 84 V170",
  "M1106 84 H1012 M1106 84 V170",
  "M94 716 H188 M94 716 V630",
  "M1106 716 H1012 M1106 716 V630",
] as const;

/* ── Decorative elements ── */
export const DECORATIVE = {
  planet: { cx: 288, cy: 284, r: 16, ringRx: 28, ringRy: 7 },
  moon: { cx: 924, cy: 516, r: 18, shadowCx: 930, shadowCy: 512, shadowR: 14 },
} as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.33) saturate(1.46) brightness(0.92)",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Navigation / liturgical bearings",
  titleLine1: "Compass",
  titleLine2: "Sanctum",
  description:
    "A sacred compass rose that treats the eggplant like the fixed point of orientation. Less mystical fog, more ceremonial wayfinding poster for a cult that takes direction systems personally.",
} as const;

/* ── SVG shared ── */
export { SVG_VIEWBOX };

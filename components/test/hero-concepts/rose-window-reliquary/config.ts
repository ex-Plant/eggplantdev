/* ═══════════════════════════════════════════════
   Rose Window Reliquary — Hero Configuration
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

/* ── Rose petals ── */
export const ROSE_PETALS = Array.from({ length: 12 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 12 - Math.PI / 2;
  return {
    cx: 600 + 128 * Math.cos(angle),
    cy: 400 + 128 * Math.sin(angle),
  };
});

/* ── Stars ── */
export const ROSE_STARS = Array.from({ length: 56 }, (_, i) => ({
  x: (i * 37 + 19) % 100,
  y: (i * 53 + 7) % 100,
  size: i % 9 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
  color: i % 5 === 0 ? "#daa520" : "#f5e6c0",
  opacity: 0.05 + (i % 5) * 0.025,
}));

/* ── Corner brackets ── */
export const CORNER_PATHS = [
  "M72 72 H180 M72 72 V180",
  "M1128 72 H1020 M1128 72 V180",
  "M72 728 H180 M72 728 V620",
  "M1128 728 H1020 M1128 728 V620",
] as const;

/* ── Decorative elements ── */
export const DECORATIVE = {
  planet: { cx: 292, cy: 548, r: 20, ringRx: 34, ringRy: 9 },
  moon: { cx: 908, cy: 238, r: 14, shadowCx: 913, shadowCy: 235, shadowR: 12 },
  starDecor: "242,230 252,244 268,248 256,260 258,278 242,270 226,278 228,260 216,248 232,244",
  diamond: "954,582 968,596 954,610 940,596",
} as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.34) saturate(1.45) brightness(0.92)",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Cathedral optics / devotional glazing",
  titleLine1: "Rose Window",
  titleLine2: "Reliquary",
  description:
    "The eggplant set into a cosmic stained-glass rose: less diagram, more relic. Sacred geometry turns ornamental here, like a poster for a fake cathedral opening in deep space.",
} as const;

/* ── SVG shared ── */
export { SVG_VIEWBOX };

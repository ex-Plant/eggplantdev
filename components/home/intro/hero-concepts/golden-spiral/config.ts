/* ═══════════════════════════════════════════════
   Golden Spiral — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  darkGold: "#c8860e",
  softGold: "#f0c040",
  titlePrimary: "#daa520",
  titleSecondary: "#f5e6c0",
  caption: "#c8b080",
  starBase: "#f5f0e0",
  bgColor: "#0c0a08",
} as const;

/* ── Stars ── */
export const STARS = Array.from({ length: 55 }, (_, i) => ({
  x: `${(i * 17 + 3) % 100}%`,
  y: `${(i * 23 + 7) % 100}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1,
  color: i % 3 === 0 ? PALETTE.gold : PALETTE.starBase,
  opacity: 0.15 + (i % 5) * 0.12,
}));

/* ── Fibonacci rectangles ── */
export const FIBONACCI_RECTS = [
  { x: 100, y: 80, w: 500, h: 500 },
  { x: 600, y: 80, w: 309, h: 500 },
  { x: 600, y: 389, w: 309, h: 191 },
  { x: 600, y: 389, w: 191, h: 191 },
  { x: 600, y: 389, w: 118, h: 118 },
  { x: 600, y: 434, w: 73, h: 73 },
] as const;

/* ── Spiral paths ── */
export const SPIRAL_PATH_PRIMARY =
  "M 100 580 A 500 500 0 0 1 600 80 A 309 309 0 0 1 909 389 A 191 191 0 0 1 718 580 A 118 118 0 0 1 600 462 A 73 73 0 0 1 673 389 A 45 45 0 0 1 628 434";

export const SPIRAL_PATH_SECONDARY =
  "M 100 580 A 500 500 0 0 1 600 80 A 309 309 0 0 1 909 389 A 191 191 0 0 1 718 580 A 118 118 0 0 1 600 462";

/* ── Celestial bodies ── */
export const CRESCENT_MOON = { x: 200, y: 180 } as const;
export const RINGED_PLANET = { x: 950, y: 250 } as const;
export const DISTANT_PLANET = { x: 850, y: 620 } as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  className: "mb-8 h-48 w-48 drop-shadow-[0_0_40px_rgba(218,165,32,0.3)] [filter:sepia(0.4)_saturate(1.2)]",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "\u03c6 = 1.618033...",
  titleLine1: "Golden",
  titleLine2: "Spiral",
  description: "The eggplant follows the universe\u2019s most perfect curve",
} as const;

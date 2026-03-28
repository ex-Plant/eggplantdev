/* ═══════════════════════════════════════════════
   Reliquary d'Or — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  brightGold: "#ffd700",
  cream: "#f5e6c0",
  darkGold: "#c8860e",
  caption: "#c8b080",
  bgColor: "#0a0806",
} as const;

/* ── Stars ── */
export const STAR_COUNT = 50;
export function buildStars() {
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    x: `${(i * 37 + 13) % 100}%`,
    y: `${(i * 53 + 7) % 100}%`,
    color: [PALETTE.gold, PALETTE.brightGold, PALETTE.cream][i % 3],
    opacity: 0.08 + (i % 5) * 0.04,
    size: 1 + (i % 3),
  }));
}

/* ── Frame geometry ── */
export const OUTER_FRAME = { x: 150, y: 60, width: 900, height: 680 } as const;
export const INNER_FRAME = { x: 165, y: 75, width: 870, height: 650 } as const;

export const CORNER_CIRCLES: readonly [number, number][] = [
  [150, 60], [1050, 60], [150, 740], [1050, 740],
];

export const CORNER_BRACKETS = [
  "M160,85 L160,70 L185,70",
  "M1040,85 L1040,70 L1015,70",
  "M160,715 L160,730 L185,730",
  "M1040,715 L1040,730 L1015,730",
] as const;

/* ── Gothic arch paths ── */
export const ARCH_OUTER = "M480,580 L480,300 Q480,180 600,140 Q720,180 720,300 L720,580";
export const ARCH_INNER = "M495,570 L495,310 Q495,200 600,165 Q705,200 705,310 L705,570";

/* ── Sunburst ── */
export const RAY_COUNT = 24;
export const RAY_CENTER = { x: 600, y: 370 } as const;
export const RAY_LENGTH = 280;

/* ── Trefoil positions ── */
export const TREFOIL_POSITIONS: readonly [number, number][] = [
  [600, 120], [600, 620], [300, 370], [900, 370],
];

/* ── Horizontal rules ── */
export const RULES = [
  { x1: 400, y: 480, x2: 800, innerX1: 420, innerX2: 780, innerY: 485 },
  { x1: 400, y: 640, x2: 800, innerX1: 420, innerX2: 780, innerY: 645 },
] as const;

/* ── Eggplant ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.4) saturate(1.8) brightness(0.85)",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Reliquaire sacr\u00e9",
  titleLine1: "Reliquary",
  titleLine2: "d\u2019Or",
  description:
    "The most precious vegetable, preserved in gilded geometry for eternity \u2014 enshrined behind ornate frames as a holy relic of impeccable taste.",
} as const;

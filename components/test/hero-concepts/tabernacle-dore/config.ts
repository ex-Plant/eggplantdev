/* ═══════════════════════════════════════════════
   Tabernacle Dore — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  brightGold: "#ffd700",
  darkGold: "#c8860e",
  cream: "#f5e6c0",
  caption: "#c8b080",
  bgColor: "#0a0806",
} as const;

/* ── Sephirot (Tree of Life nodes) ── */
export const SEPHIROT = [
  { name: "Keter", cx: 400, cy: 60 },
  { name: "Chokmah", cx: 520, cy: 160 },
  { name: "Binah", cx: 280, cy: 160 },
  { name: "Chesed", cx: 520, cy: 300 },
  { name: "Geburah", cx: 280, cy: 300 },
  { name: "Tiferet", cx: 400, cy: 380 },
  { name: "Netzach", cx: 520, cy: 480 },
  { name: "Hod", cx: 280, cy: 480 },
  { name: "Yesod", cx: 400, cy: 560 },
  { name: "Malkuth", cx: 400, cy: 660 },
] as const;

/* ── 22 paths connecting sephirot ── */
export const PATHS: readonly [number, number][] = [
  [0, 1], [0, 2], [1, 2], [1, 3], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5],
  [3, 6], [4, 5], [4, 7], [5, 6], [5, 7], [5, 8], [6, 7], [6, 8], [7, 8], [8, 9],
  [0, 5], [6, 9], [7, 9],
];

/* ── Stars ── */
export const STARS = Array.from({ length: 50 }, (_, i) => ({
  x: `${(i * 41 + 17) % 100}%`,
  y: `${(i * 59 + 11) % 100}%`,
  color: [PALETTE.gold, PALETTE.brightGold, PALETTE.cream][i % 3],
  opacity: 0.06 + (i % 5) * 0.035,
  size: 1 + (i % 3),
}));

/* ── Pillar-top star positions ── */
export const PILLAR_STARS: readonly [number, number][] = [[280, 130], [400, 30], [520, 130]];

/* ── Gothic arch paths ── */
export const ARCH_OUTER = "M240,700 L240,280 Q240,40 400,10 Q560,40 560,280 L560,700 Z";
export const ARCH_INNER = "M250,695 L250,285 Q250,55 400,25 Q550,55 550,285 L550,695 Z";

/* ── Eggplant ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.35) saturate(1.6) brightness(0.9)",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "L\u2019arbre de la connaissance",
  titleLine1: "Tabernacle",
  titleLine2: "Dor\u00e9",
  description:
    "The eggplant crowned at the summit of the Tree of Life \u2014 the golden tabernacle of all cosmic knowledge, radiating through ten sephirot of eternal wisdom.",
} as const;

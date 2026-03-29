/* ═══════════════════════════════════════════════
   Soleil Aubergine — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export type PaletteT = { gold: string; darkGold: string; softGold: string; warmCaption: string; bgColor: string };

export const PALETTE: PaletteT = {
  gold: "#ffd700",
  darkGold: "#daa520",
  softGold: "#f0c040",
  warmCaption: "#c8b080",
  bgColor: "#0a0806",
} as const;

export const PALETTE_MUTED: PaletteT = {
  gold: "#daa520",
  darkGold: "#c8860e",
  softGold: "#f0c040",
  warmCaption: "#c8b080",
  bgColor: "#0c0a08",
} as const;

/* ── Stars ── */
export const STAR_COUNT = 50;
export const STARS = buildStars(PALETTE);

export function buildStars(p: PaletteT) {
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    x: `${(i * 37 + 13) % 100}%`,
    y: `${(i * 53 + 7) % 100}%`,
    size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5,
    opacity: 0.08 + (i % 5) * 0.04,
    color: i % 3 === 0 ? p.gold : i % 3 === 1 ? p.darkGold : p.softGold,
  }));
}

/* ── Rays ── */
export const RAY_COUNT = 24;
export const RAY_ANGLE_STEP = 15; // degrees
export const RAY_PULSE_TRAVEL = "18vw"; // dies before ray tips

export const RAYS = Array.from({ length: RAY_COUNT }, (_, i) => {
  const angle = (i * RAY_ANGLE_STEP * Math.PI) / 180;
  const isLong = i % 2 === 0;
  const len = isLong ? 340 : 220;
  const round = (v: number) => Math.round(v * 100) / 100;
  return {
    angleDeg: i * RAY_ANGLE_STEP,
    x2: round(SVG_CENTER.x + Math.cos(angle) * len),
    y2: round(SVG_CENTER.y + Math.sin(angle) * len),
    len,
    width: isLong ? 1.8 : 0.6,
    opacity: isLong ? 0.18 : 0.1,
    hasDot: isLong,
    dotX: round(SVG_CENTER.x + Math.cos(angle) * (len + 12)),
    dotY: round(SVG_CENTER.y + Math.sin(angle) * (len + 12)),
  };
});

/* ── Corona rings ── */
export const CORONA_RINGS = buildCoronaRings(PALETTE);

export function buildCoronaRings(p: PaletteT) {
  return [
    { r: 150, stroke: p.gold, strokeWidth: 1.5, opacity: 0.18 },
    { r: 120, stroke: p.darkGold, strokeWidth: 1, opacity: 0.14 },
    { r: 90, stroke: p.softGold, strokeWidth: 0.8, opacity: 0.1 },
  ];
}

/* ── Zigzag band ── */
export const ZIGZAG_SEGMENTS = 48;
export const ZIGZAG_POINTS = Array.from({ length: ZIGZAG_SEGMENTS }, (_, i) => {
  const angle = (i * 7.5 * Math.PI) / 180;
  const r = 105 + (i % 2 === 0 ? 6 : -6);
  const x = Math.round((SVG_CENTER.x + Math.cos(angle) * r) * 100) / 100;
  const y = Math.round((SVG_CENTER.y + Math.sin(angle) * r) * 100) / 100;
  return `${x},${y}`;
}).join(" ");

/* ── Art deco corner brackets ── */
const INSET = 40;
const INNER_INSET = 50;
const ARM_LEN = 80;
const INNER_ARM_LEN = 50;

type CornerT = {
  primary: string;
  secondary: string;
};

function makeCorner(ox: number, oy: number, dx: number, dy: number): CornerT {
  return {
    primary: `M${ox},${oy} L${ox},${oy + dy * ARM_LEN} M${ox},${oy} L${ox + dx * ARM_LEN},${oy}`,
    secondary: `M${ox + dx * 10},${oy + dy * 10} L${ox + dx * 10},${oy + dy * INNER_ARM_LEN} M${ox + dx * 10},${oy + dy * 10} L${ox + dx * INNER_ARM_LEN},${oy + dy * 10}`,
  };
}

export const CORNERS = [
  makeCorner(INSET, INSET, 1, 1),          // top-left
  makeCorner(1200 - INSET, INSET, -1, 1),  // top-right
  makeCorner(INSET, 800 - INSET, 1, -1),   // bottom-left
  makeCorner(1200 - INSET, 800 - INSET, -1, -1), // bottom-right
] as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15)",
  shadowClass: "drop-shadow-[0_0_40px_rgba(255,215,0,0.4)]",
  glowOuter: "bg-[#ffd700]/15",
  glowInner: "bg-[#daa520]/20",
} as const;

/* ── Typography ── */
export const COPY = {
  subtitle: "Astre sacré du potager",
  titleLine1: "Soleil",
  titleLine2: "Aubergine",
  description:
    "A golden ember suspended in the void — the aubergine radiates its divine light across the cosmos, an eternal beacon for those who dare to look upward.",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

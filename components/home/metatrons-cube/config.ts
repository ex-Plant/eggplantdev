/* ═══════════════════════════════════════════════
   Metatron's Cube — Hero Configuration
   ═══════════════════════════════════════════════ */

const INNER_R = 100;
const OUTER_R = 200;
const CENTER: [number, number] = [600, 400];

const ringPoints = (r: number, count: number): [number, number][] =>
  Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return [CENTER[0] + r * Math.cos(angle), CENTER[1] + r * Math.sin(angle)];
  });

/* ── Geometry points ── */
export const ALL_POINTS: [number, number][] = [CENTER, ...ringPoints(INNER_R, 6), ...ringPoints(OUTER_R, 6)];

/* ── Theme system ── */
export type ThemeT = "gold" | "raw" | "silver" | "mono";

/* ── Theme CSS variable overrides (gold uses globals as-is) ── */
export const THEME_OVERRIDES: Record<ThemeT, React.CSSProperties> = {
  gold: {},
  raw: {
    "--color-gold": "#ffffff",
    "--color-gold-dark": "#d4d4d4",
    "--color-gold-warm": "#a3a3a3",
    "--color-gold-bright": "#ffffff",
    "--color-gold-cream": "#e5e5e5",
    "--color-gold-caption": "#a3a3a3",
    "--color-gold-bg": "#0c0a08",
  } as React.CSSProperties,
  silver: {
    "--color-gold": "#c0c0c0",
    "--color-gold-dark": "#8a8a8a",
    "--color-gold-warm": "#e0e0e0",
    "--color-gold-bright": "#e0e0e0",
    "--color-gold-cream": "#8a8a8a",
    "--color-gold-caption": "#a0a0a0",
    "--color-gold-bg": "#080610",
  } as React.CSSProperties,
  mono: {
    "--color-gold": "#cccccc",
    "--color-gold-dark": "#777777",
    "--color-gold-warm": "#555555",
    "--color-gold-bright": "#ffffff",
    "--color-gold-cream": "#cccccc",
    "--color-gold-caption": "#777777",
    "--color-gold-bg": "#0c0a08",
  } as React.CSSProperties,
};

/* ── Eggplant preset per theme (from EggplantImage EGGPLANT_PRESETS) ── */
import type { EggplantPresetT } from "@/components/general/eggplant-image";

export const EGGPLANT_PRESETS: Record<ThemeT, EggplantPresetT> = {
  gold: "warm-gold-glow",
  raw: "natural",
  silver: "silver",
  mono: "silver-subtle",
};

/* ── SVG shared ── */
export const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Sacred symbols ── */
export const SACRED_SYMBOLS = {
  triangleTop: { points: "600,260 620,300 580,300" },
  triangleBottom: { points: "600,540 620,500 580,500" },
  diamondLeft: { x: 440, y: 385, width: 20, height: 20, transform: "rotate(45 450 395)" },
  diamondRight: { x: 740, y: 385, width: 20, height: 20, transform: "rotate(45 750 395)" },
} as const;

/* ── Containment circle ── */
export const CONTAINMENT = { cx: 600, cy: 400, r: 350, dasharray: "6 10" } as const;
export const OUTER_DASHED_CIRCLES = [
  { r: 420, dasharray: "10 16", stroke: "var(--color-gold-dark)", opacity: 0.05 },
  { r: 500, dasharray: "6 18", stroke: "var(--color-gold-warm)", opacity: 0.04 },
] as const;
export const RADIAL_GUIDES = Array.from({ length: 6 }, (_, i) => {
  const angle = (Math.PI / 3) * i - Math.PI / 2;
  return {
    x2: CENTER[0] + Math.cos(angle) * 480,
    y2: CENTER[1] + Math.sin(angle) * 480,
  };
});
export const CORNER_BRACKETS = [
  { x: 36, y: 36, dx: 1, dy: 1 },
  { x: 1164, y: 36, dx: -1, dy: 1 },
  { x: 36, y: 764, dx: 1, dy: -1 },
  { x: 1164, y: 764, dx: -1, dy: -1 },
] as const;

/* ── Typography ── */
export const COPY = {
  subtitle: "The blueprint of all creation",
  titleLine1: "Metatron\u2019s",
  titleLine2: "Cube",
  description:
    "The eggplant exists within the geometric template of the universe \u2014 encoded in every vertex, every edge, every platonic form",
} as const;

/* ── Burst dot positions at vertices — shuffled delays for random appearance ── */
const BURST_DELAYS = [0, 21, 7, 28, 14, 35, 3.5, 24.5, 10.5, 31.5, 17.5, 38.5];
export const BURST_POINTS = ALL_POINTS.slice(1).map(([x, y], i) => ({
  pos: [x, y] as const,
  delay: BURST_DELAYS[i],
}));

export { CENTER, INNER_R };

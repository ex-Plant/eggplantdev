/* ═══════════════════════════════════════════════
   Pentagram Rave — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Geometry helpers ── */
const A = (i: number, offset = 0) => ((2 * Math.PI * i) / 5 - Math.PI / 2 + offset);
const PX = (r: number, i: number, off = 0) => SVG_CENTER.x + r * Math.cos(A(i, off));
const PY = (r: number, i: number, off = 0) => SVG_CENTER.y + r * Math.sin(A(i, off));

/* ── Palette ── */
export const PALETTE = {
  gold: "#ffd700",
  darkGold: "#daa520",
  magenta: "#d946ef",
  cyan: "#00e5ff",
  mint: "#10ffaa",
  caption: "#c8b080",
  bgColor: "#080610",
} as const;

/* ── Pentagon / pentagram vertices ── */
export const OUTER_PTS = Array.from({ length: 5 }, (_, i) => [PX(280, i), PY(280, i)] as const);
export const INNER_PTS = Array.from({ length: 5 }, (_, i) => [PX(280, i, Math.PI / 5), PY(280, i, Math.PI / 5)] as const);
export const INNER2 = Array.from({ length: 5 }, (_, i) => [PX(107, i, Math.PI / 5), PY(107, i, Math.PI / 5)] as const);

export const starLine = (pts: readonly (readonly [number, number])[]) =>
  Array.from({ length: 5 }, (_, i) => `M${pts[i][0]},${pts[i][1]}L${pts[(i + 2) % 5][0]},${pts[(i + 2) % 5][1]}`).join(" ");

export const pentagon = (pts: readonly (readonly [number, number])[]) =>
  "M" + pts.map(([x, y]) => `${x},${y}`).join("L") + "Z";

/* ── Stars ── */
export const STARS: readonly [number, number, string][] = [
  [8, 12, "#daa520"], [22, 6, "#d946ef"], [37, 18, "#ffd700"], [52, 8, "#10ffaa"], [68, 14, "#daa520"],
  [83, 5, "#ffd700"], [93, 22, "#d946ef"], [5, 35, "#daa520"], [18, 42, "#00e5ff"], [33, 30, "#ffd700"],
  [47, 38, "#daa520"], [62, 28, "#d946ef"], [78, 36, "#ffd700"], [91, 44, "#10ffaa"], [12, 55, "#daa520"],
  [27, 62, "#ffd700"], [42, 50, "#d946ef"], [57, 58, "#daa520"], [72, 48, "#00e5ff"], [87, 60, "#ffd700"],
  [95, 52, "#daa520"], [3, 72, "#10ffaa"], [16, 78, "#daa520"], [31, 68, "#ffd700"], [46, 76, "#d946ef"],
  [61, 70, "#daa520"], [76, 82, "#ffd700"], [90, 74, "#daa520"], [10, 88, "#00e5ff"], [25, 92, "#ffd700"],
  [40, 85, "#daa520"], [55, 90, "#d946ef"], [70, 94, "#ffd700"], [85, 88, "#10ffaa"], [96, 80, "#daa520"],
  [14, 25, "#ffd700"], [29, 16, "#daa520"], [44, 22, "#d946ef"], [59, 15, "#ffd700"], [74, 20, "#daa520"],
  [88, 30, "#00e5ff"], [7, 48, "#ffd700"], [23, 54, "#daa520"], [38, 46, "#10ffaa"], [53, 64, "#ffd700"],
  [67, 56, "#daa520"], [82, 66, "#d946ef"], [4, 82, "#ffd700"], [19, 68, "#daa520"], [34, 78, "#ffd700"],
  [49, 84, "#daa520"], [64, 88, "#00e5ff"], [79, 92, "#ffd700"], [94, 62, "#daa520"], [11, 4, "#d946ef"],
  [50, 3, "#ffd700"], [75, 7, "#10ffaa"], [20, 95, "#daa520"], [60, 96, "#d946ef"], [88, 95, "#ffd700"],
];

/* ── Radiating lines from pentagram points ── */
export const RADIATE = OUTER_PTS.flatMap(([x, y], i) => {
  const angle = A(i);
  return Array.from({ length: 10 }, (_, j) => {
    const spread = ((j - 4.5) / 4.5) * 0.5;
    const a = angle + spread;
    return `M${x},${y}L${x + 28 * Math.cos(a)},${y + 28 * Math.sin(a)}`;
  });
});

/* ── Ritual marks ── */
export const RITUAL_MARKS = [
  [520, 320], [680, 320], [520, 480], [680, 480], [600, 280],
  [600, 520], [490, 370], [710, 370], [490, 430], [710, 430],
  [550, 300], [650, 300], [550, 500], [650, 500],
] as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Ritual frequency: 432 Hz",
  titleLine1: "Pentagram",
  titleLine2: "Rave",
  description:
    "The eggplant was summoned at the intersection of five cosmic lines, pulsing where sacred geometry meets the dance floor.",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

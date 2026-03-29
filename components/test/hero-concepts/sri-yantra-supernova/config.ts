/* ═══════════════════════════════════════════════
   Sri Yantra Supernova — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

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

/* ── Stars ── */
export const STARS: readonly [number, number, string][] = [
  [3, 8, "#daa520"], [12, 4, "#d946ef"], [21, 15, "#ffd700"], [30, 6, "#10ffaa"], [38, 19, "#daa520"],
  [46, 3, "#ffd700"], [55, 12, "#d946ef"], [63, 7, "#daa520"], [72, 16, "#10ffaa"], [81, 4, "#ffd700"],
  [89, 11, "#d946ef"], [95, 20, "#daa520"], [7, 28, "#ffd700"], [16, 35, "#10ffaa"], [24, 42, "#daa520"],
  [33, 30, "#d946ef"], [41, 38, "#ffd700"], [50, 26, "#daa520"], [58, 44, "#10ffaa"], [67, 32, "#d946ef"],
  [75, 40, "#ffd700"], [84, 28, "#daa520"], [92, 36, "#10ffaa"], [4, 52, "#d946ef"], [13, 58, "#ffd700"],
  [22, 48, "#daa520"], [31, 56, "#10ffaa"], [39, 64, "#d946ef"], [48, 50, "#ffd700"], [56, 62, "#daa520"],
  [65, 54, "#10ffaa"], [73, 66, "#d946ef"], [82, 52, "#ffd700"], [90, 60, "#daa520"], [6, 72, "#10ffaa"],
  [15, 78, "#d946ef"], [23, 68, "#ffd700"], [32, 76, "#daa520"], [40, 82, "#10ffaa"], [49, 70, "#d946ef"],
  [57, 84, "#ffd700"], [66, 74, "#daa520"], [74, 86, "#10ffaa"], [83, 72, "#d946ef"], [91, 80, "#ffd700"],
  [9, 90, "#daa520"], [18, 94, "#10ffaa"], [27, 88, "#d946ef"], [36, 92, "#ffd700"], [44, 86, "#daa520"],
  [53, 96, "#10ffaa"], [61, 90, "#d946ef"], [70, 94, "#ffd700"], [78, 88, "#daa520"], [87, 96, "#10ffaa"],
  [96, 92, "#d946ef"], [2, 18, "#ffd700"], [35, 14, "#daa520"], [64, 22, "#10ffaa"], [79, 10, "#d946ef"],
  [11, 46, "#ffd700"], [44, 58, "#daa520"], [77, 48, "#10ffaa"], [94, 44, "#d946ef"], [28, 80, "#ffd700"],
];

/* ── Triangle geometry ── */
export const UP_SCALES = [1, 0.72, 0.48, 0.28] as const;
export const DOWN_SCALES = [0.92, 0.68, 0.52, 0.36, 0.18] as const;
const TRI_H = 160;

export const upTriangle = (s: number) =>
  `M${SVG_CENTER.x},${SVG_CENTER.y - TRI_H * s * 0.6}L${SVG_CENTER.x + TRI_H * s * 0.7},${SVG_CENTER.y + TRI_H * s * 0.4}L${SVG_CENTER.x - TRI_H * s * 0.7},${SVG_CENTER.y + TRI_H * s * 0.4}Z`;
export const downTriangle = (s: number) =>
  `M${SVG_CENTER.x},${SVG_CENTER.y + TRI_H * s * 0.6}L${SVG_CENTER.x + TRI_H * s * 0.7},${SVG_CENTER.y - TRI_H * s * 0.4}L${SVG_CENTER.x - TRI_H * s * 0.7},${SVG_CENTER.y - TRI_H * s * 0.4}Z`;

/* ── Lotus petals ── */
const PETAL_COUNT = 16;
const PETAL_R = 195;
export const PETALS = Array.from({ length: PETAL_COUNT }, (_, i) => {
  const a = ((Math.PI * 2) / PETAL_COUNT) * i;
  const px = SVG_CENTER.x + PETAL_R * Math.cos(a);
  const py = SVG_CENTER.y + PETAL_R * Math.sin(a);
  const tip = 18;
  const w = 8;
  return `M${px + tip * Math.cos(a)},${py + tip * Math.sin(a)}Q${px + w * Math.cos(a + 0.5)},${py + w * Math.sin(a + 0.5)} ${px - tip * Math.cos(a)},${py - tip * Math.sin(a)}Q${px + w * Math.cos(a - 0.5)},${py + w * Math.sin(a - 0.5)} ${px + tip * Math.cos(a)},${py + tip * Math.sin(a)}Z`;
});

/* ── Bhupura gate ── */
const GATE = 230;
const G_NOTCH = 18;
export const GATE_FRAME = `M${SVG_CENTER.x - GATE},${SVG_CENTER.y - GATE}H${SVG_CENTER.x + GATE}V${SVG_CENTER.y + GATE}H${SVG_CENTER.x - GATE}Z`;
export const GATE_TABS = [
  `M${SVG_CENTER.x - G_NOTCH},${SVG_CENTER.y - GATE}V${SVG_CENTER.y - GATE - G_NOTCH}H${SVG_CENTER.x + G_NOTCH}V${SVG_CENTER.y - GATE}`,
  `M${SVG_CENTER.x - G_NOTCH},${SVG_CENTER.y + GATE}V${SVG_CENTER.y + GATE + G_NOTCH}H${SVG_CENTER.x + G_NOTCH}V${SVG_CENTER.y + GATE}`,
  `M${SVG_CENTER.x - GATE},${SVG_CENTER.y - G_NOTCH}H${SVG_CENTER.x - GATE - G_NOTCH}V${SVG_CENTER.y + G_NOTCH}H${SVG_CENTER.x - GATE}`,
  `M${SVG_CENTER.x + GATE},${SVG_CENTER.y - G_NOTCH}H${SVG_CENTER.x + GATE + G_NOTCH}V${SVG_CENTER.y + G_NOTCH}H${SVG_CENTER.x + GATE}`,
];

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Nine triangles, forty-three fragments, one truth",
  titleLine1: "Sri Yantra",
  titleLine2: "Supernova",
  description:
    "An eggplant rests at the bindu point — the silent center of the universe\u2019s most complex sacred diagram.",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

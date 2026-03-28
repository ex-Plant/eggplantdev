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

export type PaletteT = {
  strokes: readonly [string, string, string];
  starAccent: string;
  starBase: string;
  glow: string;
  eggplantFilter: string;
  titlePrimary: string;
  titleSecondary: string;
  subtitle: string;
  caption: string;
};

export const PALETTES: Record<ThemeT, PaletteT> = {
  gold: {
    strokes: ["#daa520", "#c8860e", "#f0c040"],
    starAccent: "#daa520",
    starBase: "#f5f0e0",
    glow: "radial-gradient(circle,rgba(218,165,32,0.12) 0%,rgba(200,134,14,0.05) 40%,transparent 70%)",
    eggplantFilter: "sepia(1) saturate(0.5) drop-shadow(0 0 40px rgba(218,165,32,0.3))",
    titlePrimary: "#daa520",
    titleSecondary: "#f5e6c0",
    subtitle: "rgba(218,165,32,0.4)",
    caption: "rgba(200,176,128,0.5)",
  },
  raw: {
    strokes: ["#ffffff", "#d4d4d4", "#a3a3a3"],
    starAccent: "#ffffff",
    starBase: "#e5e5e5",
    glow: "radial-gradient(circle,rgba(255,255,255,0.06) 0%,rgba(200,200,200,0.03) 40%,transparent 70%)",
    eggplantFilter: "none",
    titlePrimary: "#ffffff",
    titleSecondary: "#a3a3a3",
    subtitle: "rgba(255,255,255,0.35)",
    caption: "rgba(163,163,163,0.5)",
  },
  silver: {
    strokes: ["#c0c0c0", "#8a8a8a", "#e0e0e0"],
    starAccent: "#c0c0c0",
    starBase: "#d4d4d8",
    glow: "radial-gradient(circle,rgba(192,192,192,0.10) 0%,rgba(140,140,140,0.04) 40%,transparent 70%)",
    eggplantFilter: "saturate(0) brightness(1.4) contrast(1.2) drop-shadow(0 0 40px rgba(192,192,192,0.25))",
    titlePrimary: "#e0e0e0",
    titleSecondary: "#8a8a8a",
    subtitle: "rgba(192,192,192,0.4)",
    caption: "rgba(160,160,160,0.5)",
  },
  mono: {
    strokes: ["#cccccc", "#777777", "#555555"],
    starAccent: "#cccccc",
    starBase: "#777777",
    glow: "radial-gradient(circle,rgba(204,204,204,0.08) 0%,rgba(119,119,119,0.03) 40%,transparent 70%)",
    eggplantFilter: "saturate(0) brightness(1.2) contrast(1.1) drop-shadow(0 0 30px rgba(204,204,204,0.15))",
    titlePrimary: "#ffffff",
    titleSecondary: "#cccccc",
    subtitle: "rgba(204,204,204,0.35)",
    caption: "rgba(119,119,119,0.5)",
  },
};

/* ── Stars builder ── */
export function buildStars(palette: PaletteT) {
  return Array.from({ length: 55 }, (_, i) => ({
    x: `${(i * 17 + 7) % 100}%`,
    y: `${(i * 23 + 13) % 100}%`,
    size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1,
    opacity: 0.15 + (i % 5) * 0.12,
    color: i % 4 === 0 ? palette.starAccent : palette.starBase,
  }));
}

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
export const CONTAINMENT = { cx: 600, cy: 400, r: 280, dasharray: "6 10" } as const;

/* ── Eggplant ── */
export const EGGPLANT_SRC = "/logos/eggplant-logo-smooth.apng" as const;

/* ── Typography ── */
export const COPY = {
  subtitle: "The blueprint of all creation",
  titleLine1: "Metatron\u2019s",
  titleLine2: "Cube",
  description:
    "The eggplant exists within the geometric template of the universe \u2014 encoded in every vertex, every edge, every platonic form",
} as const;

export { INNER_R };

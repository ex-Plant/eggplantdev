/* ═══════════════════════════════════════════════
   Akashic Terminal — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  mint: "#10ffaa",
  magenta: "#d946ef",
  cyan: "#00e5ff",
  lime: "#39ff14",
  bgColor: "#010204",
  terminalBg: "#0a0e0a",
  terminalInner: "#050a05",
} as const;

/* ── SVG sacred geometry shapes ── */
export const GEOMETRY = {
  triangle: {
    points: "180,150 230,240 130,240",
    medians: [
      { x1: 180, y1: 150, x2: 180, y2: 210 },
      { x1: 130, y1: 240, x2: 180, y2: 210 },
      { x1: 230, y1: 240, x2: 180, y2: 210 },
    ],
    opacity: 0.12,
    color: "#10ffaa",
  },
  diamond: {
    points: "1000,200 1040,250 1000,300 960,250",
    lines: [
      { x1: 1000, y1: 200, x2: 1000, y2: 300 },
      { x1: 960, y1: 250, x2: 1040, y2: 250 },
    ],
    opacity: 0.1,
    color: "#d946ef",
  },
  cube: {
    rects: [
      { x: 100, y: 520, width: 60, height: 60, strokeWidth: 1 },
      { x: 115, y: 505, width: 60, height: 60, strokeWidth: 0.5 },
    ],
    edges: [
      { x1: 100, y1: 520, x2: 115, y2: 505 },
      { x1: 160, y1: 520, x2: 175, y2: 505 },
      { x1: 100, y1: 580, x2: 115, y2: 565 },
      { x1: 160, y1: 580, x2: 175, y2: 565 },
    ],
    opacity: 0.08,
    color: "#39ff14",
  },
  pentagon: {
    cx: 1050,
    cy: 580,
    r: 40,
    sides: 5,
    opacity: 0.09,
    color: "#00e5ff",
  },
} as const;

/* ── Terminal ASCII art ── */
export const TERMINAL_TEXT = `> AKASHIC_TERMINAL v∞.0
> signal locked... decoding...

        ·  ˙  ✦  ˙  ·
     ╱  ◇  ─────  ◇  ╲
    │  ╱ ╲  ◎  ╱ ╲  │
    ◇ │  ◎──🍆──◎  │ ◇
    │  ╲ ╱  ◎  ╲ ╱  │
     ╲  ◇  ─────  ◇  ╱
        ·  ˙  ✦  ˙  ·

> ENTITY: Solanum melongena
> CLASS:  Sacred Vegetable
> STATUS: Transmitting...
> FREQ:   ∞ Hz (all bands)
> MSG:    "deploy with intention"` as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography ── */
export const COPY = {
  titleLine1: "Akashic",
  titleLine2: "Terminal",
  description:
    "Intercepted from an alien broadcast. A civilization that worshipped a single vegetable. They had excellent uptime and no runtime errors.",
} as const;

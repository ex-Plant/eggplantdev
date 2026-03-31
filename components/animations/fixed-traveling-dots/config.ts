/* ═══════════════════════════════════════════════
   Fixed Traveling Dots — Config for the global overlay instance
   Edit this file to change the fixed overlay's dot paths and colors.

   To create a different instance (e.g. in a hero), import TravelingDots
   directly and pass your own gradients + paths.
   ═══════════════════════════════════════════════ */

import type { DotGradientT, DotPathT } from "./traveling-dots";

/* ── Gradients ──
   Each gradient gets a unique SVG ID and defines center → edge color stops.
   These are rendered as <radialGradient> in the SVG <defs>. */
export const GRADIENTS: DotGradientT[] = [
  {
    id: "td-grad-gold",
    stops: [
      { offset: "0%", color: "var(--color-gold)", opacity: 0.65 },
      { offset: "35%", color: "var(--color-gold)", opacity: 0.2 },
      { offset: "100%", color: "var(--color-gold)", opacity: 0 },
    ],
  },
  {
    id: "td-grad-pink",
    stops: [
      { offset: "0%", color: "var(--color-hot-pink)", opacity: 0.6 },
      { offset: "35%", color: "var(--color-hot-pink)", opacity: 0.18 },
      { offset: "100%", color: "var(--color-hot-pink)", opacity: 0 },
    ],
  },
  /* ── Cosmic highway gradients (uncomment to enable) ──
  {
    id: "td-grad-cyan",
    stops: [
      { offset: "0%", color: "#00e5ff", opacity: 0.5 },
      { offset: "35%", color: "#00e5ff", opacity: 0.15 },
      { offset: "100%", color: "#00e5ff", opacity: 0 },
    ],
  },
  {
    id: "td-grad-cyan-dim",
    stops: [
      { offset: "0%", color: "#00e5ff", opacity: 0.22 },
      { offset: "35%", color: "#00e5ff", opacity: 0.06 },
      { offset: "100%", color: "#00e5ff", opacity: 0 },
    ],
  },
  {
    id: "td-grad-orange",
    stops: [
      { offset: "0%", color: "#f97316", opacity: 0.55 },
      { offset: "35%", color: "#f97316", opacity: 0.16 },
      { offset: "100%", color: "#f97316", opacity: 0 },
    ],
  },
  {
    id: "td-grad-orange-dim",
    stops: [
      { offset: "0%", color: "#f97316", opacity: 0.25 },
      { offset: "35%", color: "#f97316", opacity: 0.07 },
      { offset: "100%", color: "#f97316", opacity: 0 },
    ],
  },
  {
    id: "td-grad-gold-dim",
    stops: [
      { offset: "0%", color: "var(--color-gold)", opacity: 0.3 },
      { offset: "35%", color: "var(--color-gold)", opacity: 0.08 },
      { offset: "100%", color: "var(--color-gold)", opacity: 0 },
    ],
  },
  */
];

/* ── Dot travel paths ──
   Each entry defines one traveling dot:
   - x1,y1 → x2,y2: start and end within the 1200×800 viewBox
   - gradientId: references one of the gradient IDs above
   - dur: full animation cycle in seconds (travel + idle pause) */
export const DOT_PATHS: DotPathT[] = [
  /* Center — gentle downward slope, left → right */
  { y1: 380, y2: 420, x1: 0, x2: 1200, gradientId: "td-grad-pink", dur: 42 },
  /* Center — gentle upward slope, left → right */
  { y1: 420, y2: 380, x1: 0, x2: 1200, gradientId: "td-grad-gold", dur: 38 },
  /* Top — gentle downward slope, right → left */
  { y1: 150, y2: 200, x1: 1200, x2: 0, gradientId: "td-grad-gold", dur: 45 },

  /* ── Cosmic highway paths (uncomment to enable) ──
     Requires the cosmic highway gradients above to be uncommented too.
     Also set radius default to 15 in traveling-dots.tsx and
     switch timing to 50/50 travel/idle for lower frequency.

  // Main highway lanes (left → right)
  { y1: 380, y2: 420, x1: 0, x2: 1200, gradientId: "td-grad-pink", dur: 65 },
  { y1: 420, y2: 380, x1: 0, x2: 1200, gradientId: "td-grad-gold", dur: 60 },
  { y1: 300, y2: 360, x1: 0, x2: 1200, gradientId: "td-grad-cyan", dur: 52, radius: 11 },
  { y1: 480, y2: 500, x1: 0, x2: 1200, gradientId: "td-grad-gold-dim", dur: 75, radius: 18 },
  { y1: 650, y2: 600, x1: 0, x2: 1200, gradientId: "td-grad-orange-dim", dur: 85, radius: 14 },

  // Express lanes (smaller dots, still unhurried)
  { y1: 180, y2: 340, x1: 0, x2: 1200, gradientId: "td-grad-cyan", dur: 38, radius: 7 },
  { y1: 550, y2: 470, x1: 0, x2: 1200, gradientId: "td-grad-orange", dur: 42, radius: 8 },

  // Oncoming lanes (right → left)
  { y1: 150, y2: 200, x1: 1200, x2: 0, gradientId: "td-grad-gold", dur: 70 },
  { y1: 260, y2: 230, x1: 1200, x2: 0, gradientId: "td-grad-pink", dur: 65, radius: 12 },
  { y1: 580, y2: 630, x1: 1200, x2: 0, gradientId: "td-grad-cyan-dim", dur: 80, radius: 14 },
  { y1: 100, y2: 280, x1: 1200, x2: 0, gradientId: "td-grad-orange", dur: 48, radius: 5 },

  // Diagonal streaks
  { y1: 60, y2: 650, x1: 100, x2: 1100, gradientId: "td-grad-gold-dim", dur: 90, radius: 20 },
  { y1: 120, y2: 500, x1: 200, x2: 1000, gradientId: "td-grad-cyan", dur: 50, radius: 5 },
  */
];

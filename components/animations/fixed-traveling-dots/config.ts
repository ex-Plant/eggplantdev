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
];

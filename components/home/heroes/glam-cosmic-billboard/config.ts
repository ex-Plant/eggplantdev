/* ═══════════════════════════════════════════════
   Glam Cosmic Billboard — Hero Configuration
   ═══════════════════════════════════════════════ */

import type { DotPathT } from "@/components/animations/fixed-traveling-dots/traveling-dots";

/* ── Billboard-specific visible stripes (rendered as <line> elements) ── */
export const GLAM_STRIPES = [
  { y1: 620, y2: 220, stroke: "var(--color-hot-pink)", strokeWidth: 1, opacity: 0.1 },
  { y1: 580, y2: 180, stroke: "var(--color-gold)", strokeWidth: 1, opacity: 0.1 },
] as const;

/* ── Traveling dot paths (3 dots per stripe, staggered durations) ──
   Gradients are defined by FixedTravelingDots in layout.tsx (renders first). */
export const BILLBOARD_DOT_PATHS: DotPathT[] = [
  /* Pink stripe — 3 dots */
  { x1: 0, y1: 620, x2: 1200, y2: 220, gradientId: "td-grad-pink", dur: 36 },
  { x1: 0, y1: 620, x2: 1200, y2: 220, gradientId: "td-grad-pink", dur: 30 },
  { x1: 0, y1: 620, x2: 1200, y2: 220, gradientId: "td-grad-pink", dur: 40 },
  /* Gold stripe — 3 dots */
  { x1: 0, y1: 580, x2: 1200, y2: 180, gradientId: "td-grad-gold", dur: 42 },
  { x1: 0, y1: 580, x2: 1200, y2: 180, gradientId: "td-grad-gold", dur: 34 },
  { x1: 0, y1: 580, x2: 1200, y2: 180, gradientId: "td-grad-gold", dur: 38 },
];

/* ── Orbital arcs ── */
export const ORBITAL_ARCS = [
  { cx: 400, cy: 400, rx: 300, ry: 350, stroke: "var(--color-gold)", strokeWidth: 1.5, opacity: 0.1, rotate: -15 },
  { cx: 800, cy: 400, rx: 280, ry: 320, stroke: "var(--color-hot-pink)", strokeWidth: 1, opacity: 0.12, rotate: 10 },
] as const;

/* ── Animation timing ── */
export const ORBIT_DURATION_S = 44;

/* ── SVG IDs (billboard-specific, orbit dots only) ── */
export const ID = {
  orbitDot: "gcb-orbit-dot",
  orbitDotPink: "gcb-orbit-dot-pink",
} as const;

/* ── Derived constants ── */
function buildEllipseMotionPath(arc: (typeof ORBITAL_ARCS)[number]) {
  const rad = (arc.rotate * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const lx = -arc.rx;
  const sx = arc.cx + lx * cos;
  const sy = arc.cy + lx * sin;
  return `M ${sx} ${sy} A ${arc.rx} ${arc.ry} ${arc.rotate} 1 1 ${arc.cx + arc.rx * cos} ${arc.cy + arc.rx * sin} A ${arc.rx} ${arc.ry} ${arc.rotate} 1 1 ${sx} ${sy} Z`;
}

export const ORBIT_PATH = buildEllipseMotionPath(ORBITAL_ARCS[0]);
export const ORBIT_PATH_PINK = buildEllipseMotionPath(ORBITAL_ARCS[1]);

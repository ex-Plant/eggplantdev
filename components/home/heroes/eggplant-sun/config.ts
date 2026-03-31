/* ═══════════════════════════════════════════════
   Soleil Aubergine — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Stars ── */
const STAR_COUNT = 50;

export const STARS = buildStars();

export function buildStars() {
  const colors = ["var(--color-gold)", "var(--color-gold-dark)", "var(--color-gold-warm)"] as const;
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    x: `${(i * 37 + 13) % 100}%`,
    y: `${(i * 53 + 7) % 100}%`,
    size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5,
    opacity: 0.08 + (i % 5) * 0.04,
    color: colors[i % 3],
  }));
}

/* ── Rays ── */
const RAY_COUNT = 24;
const RAY_ANGLE_STEP = 15; // degrees
export const RAY_PULSE_TRAVEL = "18vw"; // dies before ray tips

export const RAYS = Array.from({ length: RAY_COUNT }, (_, i) => {
  const angle = (i * RAY_ANGLE_STEP * Math.PI) / 180;
  const isLong = i % 2 === 0;
  const len = isLong ? 480 : 320;
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
export const CORONA_RINGS = [
  { r: 350, stroke: "var(--color-gold)", strokeWidth: 1, opacity: 0.05 },
  { r: 260, stroke: "var(--color-gold-dark)", strokeWidth: 1.1, opacity: 0.06 },
  { r: 200, stroke: "var(--color-gold-warm)", strokeWidth: 1.2, opacity: 0.08 },
  { r: 150, stroke: "var(--color-gold)", strokeWidth: 1.5, opacity: 0.18 },
  { r: 120, stroke: "var(--color-gold-dark)", strokeWidth: 1, opacity: 0.14 },
  { r: 90, stroke: "var(--color-gold-warm)", strokeWidth: 0.8, opacity: 0.1 },
];

/* ── Zigzag band ── */
const ZIGZAG_SEGMENTS = 48;
export const ZIGZAG_POINTS = Array.from({ length: ZIGZAG_SEGMENTS }, (_, i) => {
  const angle = (i * 7.5 * Math.PI) / 180;
  const r = 105 + (i % 2 === 0 ? 6 : -6);
  const x = Math.round((SVG_CENTER.x + Math.cos(angle) * r) * 100) / 100;
  const y = Math.round((SVG_CENTER.y + Math.sin(angle) * r) * 100) / 100;
  return `${x},${y}`;
}).join(" ");

/* ── Art deco corner brackets ── */
const INSET = 30;
const INNER_INSET = 50;
const ARM_LEN = 140;
const INNER_ARM_LEN = 90;

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
  makeCorner(INSET, INSET, 1, 1), // top-left
  makeCorner(1200 - INSET, INSET, -1, 1), // top-right
  makeCorner(INSET, 800 - INSET, 1, -1), // bottom-left
  makeCorner(1200 - INSET, 800 - INSET, -1, -1), // bottom-right
] as const;

/* ── Derived subsets ── */
export const DOT_RAYS = RAYS.filter((r) => r.hasDot);

/* ── Burst dot positions at ray tips — shuffled delays for random appearance ── */
export const BURST_POINTS = DOT_RAYS.map((r, i) => ({
  pos: [r.dotX, r.dotY] as const,
  delay: [0, 14, 7, 21, 2.3, 16.3, 9.3, 23.3, 4.7, 18.7, 11.7, 25.7][i],
}));

const INNER_BURST_RADIUS = 150;

export const INNER_BURST_POINTS = DOT_RAYS.map((r, i) => {
  const angle = (r.angleDeg * Math.PI) / 180;
  const round = (v: number) => Math.round(v * 100) / 100;

  return {
    pos: [
      round(SVG_CENTER.x + Math.cos(angle) * INNER_BURST_RADIUS),
      round(SVG_CENTER.y + Math.sin(angle) * INNER_BURST_RADIUS),
    ] as const,
    delay: [1.2, 15.2, 8.2, 22.2, 3.5, 17.5, 10.5, 24.5, 5.8, 19.8, 12.8, 26.8][i],
  };
});

/* ── CSS custom property names — contract between TSX and CSS module ── */
export const CSS_VAR_RAY_ANGLE = "--ray-angle";
export const CSS_VAR_RAY_TRAVEL = "--ray-travel";

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

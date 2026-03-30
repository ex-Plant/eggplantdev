/* ═══════════════════════════════════════════════
   Hex Lattice Shrine — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Hex geometry ── */
export const HEX_R = 52;
const SQRT3 = Math.sqrt(3);

export const hexCorners = (cx: number, cy: number, r: number): string =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

const RING_OFFSETS: readonly [number, number][] = [
  [0, 0],
  ...Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i;
    return [SQRT3 * HEX_R * Math.cos(a), SQRT3 * HEX_R * Math.sin(a)] as [number, number];
  }),
  ...Array.from({ length: 12 }, (_, i) => {
    const d = i % 2 === 0 ? 2 * SQRT3 * HEX_R : 3 * HEX_R;
    const angle = i % 2 === 0 ? (Math.PI / 3) * (i / 2) : (Math.PI / 3) * ((i - 1) / 2) + Math.PI / 6;
    return [d * Math.cos(angle), d * Math.sin(angle)] as [number, number];
  }),
];

export const HEX_CENTERS = RING_OFFSETS.map(([dx, dy]) => [SVG_CENTER.x + dx, SVG_CENTER.y + dy] as const);

const VERTICES = new Map<string, [number, number]>();
HEX_CENTERS.forEach(([cx, cy]) => {
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    const vx = Math.round((cx + HEX_R * Math.cos(a)) * 10) / 10;
    const vy = Math.round((cy + HEX_R * Math.sin(a)) * 10) / 10;
    VERTICES.set(`${vx},${vy}`, [vx, vy]);
  });
});
export const VERTEX_LIST = [...VERTICES.values()];

/* ── Stars (pre-computed for shared StarField component) ── */
const STAR_COUNT = 55;
const STAR_COLORS = ["var(--color-gold)", "var(--color-gold)", "var(--color-gold-cream)"] as const;

export const STARS = Array.from({ length: STAR_COUNT }, (_, i) => ({
  x: `${(7 + i * 17.3) % 100}%`,
  y: `${(3 + i * 13.7) % 100}%`,
  size: i % 7 === 0 ? 2.5 : 1.5,
  opacity: 0.1 + (i % 6) * 0.04,
  color: i % 3 === 0 ? STAR_COLORS[0] : i % 5 === 0 ? STAR_COLORS[1] : STAR_COLORS[2],
}));

/* ── Radial lines ── */
export const RADIAL_LINES = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 3) * i;
  return `M${SVG_CENTER.x},${SVG_CENTER.y} L${SVG_CENTER.x + 500 * Math.cos(a)},${SVG_CENTER.y + 500 * Math.sin(a)}`;
});
export const OUTER_DASHED_CIRCLE = { r: 450, dasharray: "8 18" } as const;

/* ── Burst dots — intersection points near center with shuffled delays ── */
export const BURST_POINTS = [
  { pos: HEX_CENTERS[0], delay: 2 },
  { pos: HEX_CENTERS[1], delay: 8 },
  { pos: HEX_CENTERS[2], delay: 18 },
  { pos: HEX_CENTERS[3], delay: 28 },
  { pos: HEX_CENTERS[4], delay: 12 },
  { pos: HEX_CENTERS[5], delay: 34 },
  { pos: HEX_CENTERS[6], delay: 22 },
  { pos: VERTEX_LIST[0], delay: 5 },
  { pos: VERTEX_LIST[3], delay: 15 },
  { pos: VERTEX_LIST[6], delay: 26 },
] as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

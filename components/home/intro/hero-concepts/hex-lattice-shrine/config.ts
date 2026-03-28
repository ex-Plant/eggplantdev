/* ═══════════════════════════════════════════════
   Hex Lattice Shrine — Hero Configuration
   ═══════════════════════════════════════════════ */

const SVG_CENTER = { x: 600, y: 400 } as const;
const SVG_VIEWBOX = "0 0 1200 800" as const;

/* ── Palette ── */
export const PALETTE = {
  gold: "#ffd700",
  darkGold: "#daa520",
  darkBrown: "#c8860e",
  cyan: "#00e5ff",
  mint: "#10ffaa",
  magenta: "#d946ef",
  cream: "#f5e6c0",
  caption: "#c8b080",
  bgColor: "#080610",
} as const;

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
    const d = i % 2 === 0 ? 2 * SQRT3 * HEX_R : SQRT3 * HEX_R * 2;
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

/* ── Stars ── */
export const STARS: readonly [number, number][] = Array.from({ length: 55 }, (_, i) => [
  (7 + i * 17.3) % 100,
  (3 + i * 13.7) % 100,
]);

/* ── Radial lines ── */
export const RADIAL_LINES = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 3) * i;
  return `M${SVG_CENTER.x},${SVG_CENTER.y} L${SVG_CENTER.x + 380 * Math.cos(a)},${SVG_CENTER.y + 380 * Math.sin(a)}`;
});

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Crystalline lattice formation",
  titleLine1: "Hex Lattice",
  titleLine2: "Shrine",
  description:
    "An eggplant rests at the nucleus of an infinite crystal lattice, resonating through every vertex of the cosmic honeycomb.",
} as const;

/* ── SVG shared ── */
export { SVG_CENTER, SVG_VIEWBOX };

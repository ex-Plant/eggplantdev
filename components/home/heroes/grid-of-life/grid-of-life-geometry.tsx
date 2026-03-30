/* Agent: Claude — Grid of Life / Sacred Geometry
   Dense stellated octahedron / 64-tetrahedron grid.
   Built from 5 concentric hexagonal vertex rings with all-to-all
   triangular connections — the 2D projection of a 3D star tetrahedron. */

import { BurstDots } from "@/components/animations/burst-dots/burst-dots";

const CX = 600;
const CY = 400;

/* Generate hexagonal vertex ring at given radius and rotation offset */
const hex = (r: number, offsetDeg = 0) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = ((i * 60 + offsetDeg - 90) * Math.PI) / 180;
    return [CX + r * Math.cos(a), CY + r * Math.sin(a)] as const;
  });

/* 5 vertex rings — outer to core */
const R1 = hex(280); /* Outermost points */
const R2 = hex(240, 30); /* Second ring, rotated 30° */
const R3 = hex(170); /* Mid ring */
const R4 = hex(140, 30); /* Inner ring, rotated 30° */
const R5 = hex(80); /* Core ring */

const ALL_VERTICES = [...R1, ...R2, ...R3, ...R4, ...R5, [CX, CY] as const];

/* Collect all structural lines */
type LineT = { x1: number; y1: number; x2: number; y2: number };
const lines: LineT[] = [];
const addLine = (a: readonly [number, number], b: readonly [number, number]) =>
  lines.push({ x1: a[0], y1: a[1], x2: b[0], y2: b[1] });

/* Hexagon edges for each ring */
[R1, R2, R3, R4, R5].forEach((ring) => {
  for (let i = 0; i < 6; i++) addLine(ring[i], ring[(i + 1) % 6]);
});

/* Star of David triangles at multiple scales */
const tri = (ring: readonly (readonly [number, number])[], start: number) => {
  for (let i = 0; i < 3; i++) addLine(ring[(start + i * 2) % 6], ring[(start + (i + 1) * 2) % 6]);
};
[R1, R3, R5].forEach((r) => {
  tri(r, 0);
  tri(r, 1);
});

/* Cross-ring connections — every vertex connects to non-adjacent vertices in neighboring rings */
const connect = (a: readonly (readonly [number, number])[], b: readonly (readonly [number, number])[]) => {
  for (let i = 0; i < 6; i++) {
    addLine(a[i], b[i]);
    addLine(a[i], b[(i + 1) % 6]);
    addLine(a[i], b[(i + 5) % 6]);
  }
};
connect(R1, R2);
connect(R2, R3);
connect(R3, R4);
connect(R4, R5);

/* Long-range connections — outer to inner for density */
for (let i = 0; i < 6; i++) {
  addLine(R1[i], R3[i]);
  addLine(R1[i], R3[(i + 1) % 6]);
  addLine(R2[i], R4[i]);
  addLine(R2[i], R4[(i + 1) % 6]);
  addLine(R1[i], R4[(i + 3) % 6]);
  addLine(R3[i], [CX, CY]);
  addLine(R5[i], [CX, CY]);
}

/* Burst dots at all vertices — staggered delays across 42s cycle */
const burstPoints = ALL_VERTICES.map((v, i) => ({
  pos: [v[0], v[1]] as readonly [number, number],
  delay: (i * 42) / ALL_VERTICES.length + (i % 3) * 1.5,
}));

/* Corner brackets */
const S = 30;
const O = 24;
const CORNERS = [
  { x: O, y: O, sx: 1, sy: 1 },
  { x: 1200 - O, y: O, sx: -1, sy: 1 },
  { x: O, y: 800 - O, sx: 1, sy: -1 },
  { x: 1200 - O, y: 800 - O, sx: -1, sy: -1 },
] as const;

export function GridOfLifeGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* All structural lines — the dense web */}
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke={i < 60 ? "var(--color-gold)" : i < 120 ? "var(--color-gold-dark)" : "var(--color-gold-warm)"}
          strokeWidth={i < 30 ? 0.6 : i < 90 ? 0.45 : 0.3}
          opacity={i < 30 ? 0.16 : i < 90 ? 0.1 : 0.07}
        />
      ))}

      {/* Vertex dots — small solid markers */}
      {ALL_VERTICES.map((v, i) => (
        <circle key={`v-${i}`} cx={v[0]} cy={v[1]} r={1.5} fill="var(--color-gold)" opacity={i < 12 ? 0.25 : 0.15} />
      ))}

      {/* Central dot */}
      <circle cx={CX} cy={CY} r={5} fill="var(--color-gold)" opacity="0.5" />

      {/* Pulsating burst dots at all vertices */}
      <BurstDots points={burstPoints} radius={18} idPrefix="golBurst" />

      {/* Corner brackets */}
      {CORNERS.map((c, i) => (
        <path
          key={`c-${i}`}
          d={`M${c.x},${c.y + c.sy * S} L${c.x},${c.y} L${c.x + c.sx * S},${c.y}`}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="0.5"
          opacity="0.12"
        />
      ))}
    </svg>
  );
}

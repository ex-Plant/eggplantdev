/* Shared central star for sacred geometry SVGs.
   Renders a tiny filled core with evenly-spaced hair-thin rays. */

type CentralStarPropsT = {
  cx: number;
  cy: number;
  /** Number of rays (default: 16) */
  rayCount?: number;
  /** Inner radius where rays start (default: 2) */
  innerR?: number;
  /** Outer radius where rays end (default: 5) */
  outerR?: number;
  /** Core circle radius (default: 1.5) */
  coreR?: number;
};

const buildRays = (cx: number, cy: number, count: number, innerR: number, outerR: number) =>
  Array.from({ length: count }, (_, i) => {
    const angle = (i * (360 / count) * Math.PI) / 180;
    return {
      x1: cx + Math.cos(angle) * innerR,
      y1: cy + Math.sin(angle) * innerR,
      x2: cx + Math.cos(angle) * outerR,
      y2: cy + Math.sin(angle) * outerR,
    };
  });

export function CentralStar({ cx, cy, rayCount = 16, innerR = 2, outerR = 5, coreR = 1.5 }: CentralStarPropsT) {
  const rays = buildRays(cx, cy, rayCount, innerR, outerR);

  return (
    <>
      <circle cx={cx} cy={cy} r={coreR} fill="var(--color-gold-warm)" opacity="0.9" />
      {rays.map((ray, i) => (
        <line
          key={`star-${i}`}
          x1={ray.x1}
          y1={ray.y1}
          x2={ray.x2}
          y2={ray.y2}
          stroke="var(--color-gold-warm)"
          strokeWidth={0.15}
          opacity={0.35}
        />
      ))}
    </>
  );
}

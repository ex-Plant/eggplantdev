import { ALL_POINTS, CENTER } from "./config";
import styles from "./metatrons-cube.module.css";

const STAR_RAY_COUNT = 16;
const STAR_INNER_R = 2;
const STAR_OUTER_R = 5;

const STAR_RAYS = Array.from({ length: STAR_RAY_COUNT }, (_, i) => {
  const angle = (i * (360 / STAR_RAY_COUNT) * Math.PI) / 180;
  return {
    x1: CENTER[0] + Math.cos(angle) * STAR_INNER_R,
    y1: CENTER[1] + Math.sin(angle) * STAR_INNER_R,
    x2: CENTER[0] + Math.cos(angle) * STAR_OUTER_R,
    y2: CENTER[1] + Math.sin(angle) * STAR_OUTER_R,
  };
});

export function MetatronsVertexAnimations() {
  return (
    <>
      {/* Central star — tiny core with many even hair-thin rays */}
      <g>
        <circle cx={CENTER[0]} cy={CENTER[1]} r={1.5} fill="var(--color-gold-warm)" opacity="0.9" />
        {STAR_RAYS.map((ray, i) => (
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
      </g>
      {/* Burst dots at each vertex */}
      {ALL_POINTS.slice(1).map(([cx, cy], i) => (
        <circle
          key={`burst-${i}`}
          cx={cx}
          cy={cy}
          r={40}
          fill={`url(#burstGlow-${i})`}
          className={styles.burstDot}
          style={{ animationDelay: `${i * 3.5}s` }}
        />
      ))}
    </>
  );
}

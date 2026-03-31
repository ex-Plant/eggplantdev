// Scattered pulsating mini-stars at random positions within a radius.
// Each star is a CentralStar (core + rays) wrapped in a group that
// pulses using the same burst-dot animation as the glow dots.

import { CentralStar } from "./central-star";
import styles from "../burst-dots/burst-dot.module.css";
import { scatteredBurstPoints } from "../burst-dots/scattered-burst-points";

type ScatteredStarsPropsT = {
  cx: number;
  cy: number;
  count?: number;
  radius?: number;
  seed?: number;
  /** Star scale — core radius, ray lengths scale proportionally (default: 1) */
  scale?: number;
};

export function ScatteredStars({ cx, cy, count = 6, radius = 250, seed = 42, scale = 0.7 }: ScatteredStarsPropsT) {
  const points = scatteredBurstPoints(cx, cy, count, radius, seed);

  return (
    <>
      {points.map((p, i) => (
        <g key={`scatter-star-${i}`} className={styles.burstDot} style={{ animationDelay: `${p.delay}s` }}>
          <CentralStar
            cx={p.pos[0]}
            cy={p.pos[1]}
            coreR={1.5 * scale}
            innerR={2 * scale}
            outerR={5 * scale}
            rayCount={8}
          />
        </g>
      ))}
    </>
  );
}

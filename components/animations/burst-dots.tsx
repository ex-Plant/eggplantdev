/* Shared pulsating burst dots for sacred geometry SVG.
   Each dot is a radial gradient circle that fires a quick pulse
   then stays dark for the rest of a 42s cycle.
   Used inside <svg> elements — renders <defs> + animated <circle> elements. */

import styles from "./burst-dot.module.css";

type BurstDotsPropsT = {
  /** Array of [cx, cy] positions with animation delay in seconds */
  points: readonly { pos: readonly [number, number]; delay: number }[];
  /** SVG circle radius for the glow (default: 40 for 1200×800 viewBox) */
  radius?: number;
  /** ID prefix for gradient defs — must be unique per SVG (default: "burst") */
  idPrefix?: string;
};

export function BurstDots({ points, radius = 40, idPrefix = "burst" }: BurstDotsPropsT) {
  return (
    <>
      <defs>
        {points.map((_, i) => (
          <radialGradient key={`bg-${i}`} id={`${idPrefix}-${i}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-gold-warm)" stopOpacity="0.35" />
            <stop offset="25%" stopColor="var(--color-gold)" stopOpacity="0.15" />
            <stop offset="70%" stopColor="var(--color-gold)" stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>
      {points.map(({ pos: [cx, cy], delay }, i) => (
        <circle
          key={`${idPrefix}-dot-${i}`}
          cx={cx}
          cy={cy}
          r={radius}
          fill={`url(#${idPrefix}-${i})`}
          className={styles.burstDot}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </>
  );
}

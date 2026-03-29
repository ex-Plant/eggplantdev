import { FLOWER_CIRCLES, GEOMETRY, CENTER_STAR, INTERSECTION_POINTS } from "./config";
import styles from "@/components/animations/burst-dot.module.css";

/* Burst glow radius scaled for 420×420 viewBox (Metatron's uses r=40 in 1200×800) */
const BURST_R = 14;

export function CosmicFlowerSacredGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {INTERSECTION_POINTS.map((_, i) => (
          <radialGradient key={`bg-${i}`} id={`cosmicBurst-${i}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-gold-warm)" stopOpacity="0.35" />
            <stop offset="25%" stopColor="var(--color-gold)" stopOpacity="0.15" />
            <stop offset="70%" stopColor="var(--color-gold)" stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>

      {/* Flower of life fragment */}
      {FLOWER_CIRCLES.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={70} fill="none" stroke="var(--color-gold-warm)" strokeWidth="0.5" opacity="0.12" />
      ))}
      {/* Outer ring */}
      <circle
        cx={GEOMETRY.outerRing.cx}
        cy={GEOMETRY.outerRing.cy}
        r={GEOMETRY.outerRing.r}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.6"
        opacity="0.1"
        strokeDasharray="6 10"
      />
      {/* Triangle */}
      <polygon points={GEOMETRY.triangleUp} fill="none" stroke="var(--color-gold)" strokeWidth="0.4" opacity="0.06" />
      <polygon points={GEOMETRY.triangleDown} fill="none" stroke="var(--color-gold-warm)" strokeWidth="0.4" opacity="0.05" />
      {/* Burst dots at intersection points — same animation as Metatron's, shuffled delays */}
      {INTERSECTION_POINTS.map(({ pos: [cx, cy], delay }, i) => (
        <circle
          key={`burst-${i}`}
          cx={cx}
          cy={cy}
          r={BURST_R}
          fill={`url(#cosmicBurst-${i})`}
          className={styles.burstDot}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      {/* Central star — tiny core with hair-thin rays */}
      <circle cx={CENTER_STAR.cx} cy={CENTER_STAR.cy} r={CENTER_STAR.coreR} fill="var(--color-gold-warm)" opacity="0.9" />
      {CENTER_STAR.rays.map((ray, i) => (
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
    </svg>
  );
}

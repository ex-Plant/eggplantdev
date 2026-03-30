/* Agent: Claude — Grid of Life / Central Star Glow Animation */

import styles from "./grid-of-life-glow.module.css";

export function GridOfLifeGlow() {
  return (
    <div
      className={`pointer-events-none absolute top-1/2 left-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full md:size-40 lg:size-48 ${styles.starPulse}`}
      style={{
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--color-gold) 30%, transparent) 0%, color-mix(in srgb, var(--color-gold-dark) 10%, transparent) 35%, transparent 70%)",
      }}
    />
  );
}

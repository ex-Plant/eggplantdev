/* Agent: Claude — Soleil Aubergine / Glow Dot + Center Pulse Animations */

import { DOT_RAYS, RAY_PULSE_TRAVEL, CSS_VAR_RAY_ANGLE, CSS_VAR_RAY_TRAVEL } from "./config";
import styles from "./soleil-aubergine.module.css";

const DOT_GRADIENT =
  "radial-gradient(circle, color-mix(in srgb, var(--color-gold) 25%, transparent) 0%, color-mix(in srgb, var(--color-gold-dark) 10%, transparent) 30%, transparent 70%)";

const DOT_STYLES = DOT_RAYS.map((r) => ({
  background: DOT_GRADIENT,
  [CSS_VAR_RAY_ANGLE]: `${r.angleDeg}deg`,
  [CSS_VAR_RAY_TRAVEL]: RAY_PULSE_TRAVEL,
}));

export function SoleilGlowAnimations() {
  return (
    <>
      {DOT_RAYS.map((_, i) => (
        <div
          key={`pulse-${i}`}
          className={`pointer-events-none absolute left-1/2 top-1/2 -ml-12 -mt-12 size-24 rounded-full ${styles.glowDot}`}
          style={DOT_STYLES[i]}
        />
      ))}
    </>
  );
}

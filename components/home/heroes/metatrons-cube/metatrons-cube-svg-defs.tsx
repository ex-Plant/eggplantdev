import { ALL_POINTS } from "./config";

/* Radial gradient definitions referenced by the animated burst dots at each vertex (burstGlow-0 … burstGlow-11).
   Gold-warm center fading to transparent — gives each vertex its soft glow pulse. */
export function MetatronsCubeSvgDefs() {
  return (
    <defs>
      {ALL_POINTS.slice(1).map((_, i) => (
        <radialGradient key={`bg-${i}`} id={`burstGlow-${i}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-gold-warm)" stopOpacity="0.35" />
          <stop offset="25%" stopColor="var(--color-gold)" stopOpacity="0.15" />
          <stop offset="70%" stopColor="var(--color-gold)" stopOpacity="0" />
        </radialGradient>
      ))}
    </defs>
  );
}

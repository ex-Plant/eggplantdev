/* Agent: Claude — Eggplants in Space / Star Particles */

import { STAR_PARTICLES } from "./config";

export function EggplantsInSpaceStarParticles() {
  return (
    <>
      {STAR_PARTICLES.map(([x, y], i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 3 === 0 ? 3 : 1.5,
            height: i % 3 === 0 ? 3 : 1.5,
            opacity: 0.12 + (i % 4) * 0.08,
            backgroundColor: i % 2 === 0 ? "var(--color-gold-cream)" : "var(--color-gold-warm)",
          }}
        />
      ))}
    </>
  );
}

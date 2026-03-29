/* Agent: Claude — Eggplants in Space / Star Particles */

import { STAR_PARTICLES } from "./config";

export function EggplantsInSpaceStarParticles() {
  return (
    <>
      {STAR_PARTICLES.map((style, i) => (
        <div key={i} className="pointer-events-none absolute rounded-full" style={style} />
      ))}
    </>
  );
}

// Generates pseudo-random burst points scattered within a radius of a center point.
// Uses a deterministic seed so positions AND delays are stable across renders/builds.
// Each hero gets a different seed → unique positions and timing, no cross-hero sync.

type ScatteredPointT = { pos: readonly [number, number]; delay: number };

// Burst animation cycle duration — must match burst-dot.module.css
const CYCLE_DURATION = 28;

export function scatteredBurstPoints(
  cx: number,
  cy: number,
  count: number,
  radius: number,
  seed = 42,
): ScatteredPointT[] {
  // Simple deterministic pseudo-random (mulberry32)
  let s = seed | 0;
  const rand = () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  return Array.from({ length: count }, () => {
    const angle = rand() * Math.PI * 2;
    const dist = radius * (0.3 + rand() * 0.7);
    // Delay is also seeded — spread across the full cycle
    const delay = Math.round(rand() * CYCLE_DURATION * 10) / 10;
    return {
      pos: [Math.round(cx + Math.cos(angle) * dist), Math.round(cy + Math.sin(angle) * dist)] as const,
      delay,
    };
  });
}

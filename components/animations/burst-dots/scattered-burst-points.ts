// Generates pseudo-random burst points scattered within a radius of a center point.
// Uses a deterministic seed so positions are stable across renders/builds.
// Delays use prime-based spacing to avoid synchronization with the main bursts.

type ScatteredPointT = { pos: readonly [number, number]; delay: number };

const PRIME_DELAYS = [1.3, 4.7, 9.1, 13.3, 17.9, 2.6, 7.3, 11.7, 15.1, 19.4, 3.9, 8.1, 14.6, 18.7, 6.2];

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

  return Array.from({ length: count }, (_, i) => {
    // Polar coordinates for even-ish spread
    const angle = rand() * Math.PI * 2;
    const dist = radius * (0.3 + rand() * 0.7);
    return {
      pos: [Math.round(cx + Math.cos(angle) * dist), Math.round(cy + Math.sin(angle) * dist)] as const,
      delay: PRIME_DELAYS[i % PRIME_DELAYS.length],
    };
  });
}

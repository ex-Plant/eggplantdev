/* Agent: Claude — Flower of Life */

const STAR_FIELD: readonly [number, number][] = [
  [8, 12], [22, 6], [37, 18], [52, 8], [68, 14], [83, 5], [93, 22],
  [5, 35], [18, 42], [33, 30], [47, 38], [62, 28], [78, 36], [91, 44],
  [12, 55], [27, 62], [42, 50], [57, 58], [72, 48], [87, 60], [95, 52],
  [3, 72], [16, 78], [31, 68], [46, 76], [61, 70], [76, 82], [90, 74],
  [10, 88], [25, 92], [40, 85], [55, 90], [70, 94], [85, 88], [96, 80],
  [14, 25], [29, 16], [44, 22], [59, 15], [74, 20], [88, 30], [7, 48],
  [23, 54], [38, 46], [53, 64], [67, 56], [82, 66], [4, 82], [19, 68],
  [34, 78], [49, 84], [64, 88], [79, 92], [94, 62], [11, 4],
];

const R = 80;
const CX = 600;
const CY = 400;
const INNER_RING: readonly [number, number][] = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 3) * i - Math.PI / 2;
  return [CX + R * Math.cos(a), CY + R * Math.sin(a)] as [number, number];
});
const OUTER_RING: readonly [number, number][] = Array.from({ length: 12 }, (_, i) => {
  const a = (Math.PI / 6) * i - Math.PI / 2;
  const d = R * Math.sqrt(3);
  return [CX + d * Math.cos(a), CY + d * Math.sin(a)] as [number, number];
});
const ALL_CIRCLES: readonly [number, number][] = [[CX, CY], ...INNER_RING, ...OUTER_RING];

const STROKES = ["#daa520", "#c8860e", "#f0c040"] as const;

const TINY_STARS: readonly [number, number][] = [
  [200, 180], [980, 220], [150, 620], [1050, 580], [400, 150], [800, 680],
];

export function HeroFlowerOfLife() {
  return (
    <div id="hero-flower-of-life" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field */}
      {STAR_FIELD.map(([x, y], i) => (
        <div
          key={`s-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 5 === 0 ? 2.5 : 1.5,
            height: i % 5 === 0 ? 2.5 : 1.5,
            backgroundColor: i % 3 === 0 ? "#daa520" : "#f5f0e0",
            opacity: 0.12 + (i % 5) * 0.06,
          }}
        />
      ))}

      {/* Sacred geometry — Flower of Life */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* 19 overlapping circles */}
        {ALL_CIRCLES.map(([cx, cy], i) => (
          <circle key={`c-${i}`} cx={cx} cy={cy} r={R} fill="none" stroke={STROKES[i % 3]} strokeWidth="0.6" opacity={0.08 + (i % 3) * 0.05} />
        ))}
        {/* Bounding circles */}
        <circle cx={CX} cy={CY} r={R * 2.8} fill="none" stroke="#daa520" strokeWidth="0.4" opacity="0.1" />
        <circle cx={CX} cy={CY} r={R * 3.2} fill="none" stroke="#c8860e" strokeWidth="0.3" opacity="0.06" strokeDasharray="6 10" />
        {/* Tiny 4-point stars */}
        {TINY_STARS.map(([sx, sy], i) => (
          <path key={`ts-${i}`} d={`M${sx},${sy - 6}L${sx + 1.5},${sy}L${sx},${sy + 6}L${sx - 1.5},${sy}Z M${sx - 6},${sy}L${sx},${sy + 1.5}L${sx + 6},${sy}L${sx},${sy - 1.5}Z`} fill="#f0c040" opacity={0.1 + (i % 3) * 0.04} />
        ))}
      </svg>

      {/* Radial glow behind eggplant */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.14)_0%,rgba(200,134,14,0.05)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <img
          src="/logos/eggplant-logo-smooth.apng"
          alt=""
          className="h-48 w-48 object-contain saturate-[0.6] sepia-[0.3]"
        />

        {/* Eyebrow */}
        <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#daa520]/40">
          The seed of all sacred forms
        </p>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase leading-none text-[#f5e6c0] md:text-72">
          <span className="text-[#daa520]">Flower</span>
          <br />
          of Life
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/50">
          An eggplant blooms at the origin point where every circle begins and all geometry unfolds.
        </p>
      </div>
    </div>
  );
}

/* Agent: Claude — Hex Lattice Shrine */

const CX = 600;
const CY = 400;
const HEX_R = 52;
const SQRT3 = Math.sqrt(3);

const hexCorners = (cx: number, cy: number, r: number): string =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

const RING_OFFSETS: readonly [number, number][] = [
  [0, 0],
  ...Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i;
    return [SQRT3 * HEX_R * Math.cos(a), SQRT3 * HEX_R * Math.sin(a)] as [number, number];
  }),
  ...Array.from({ length: 12 }, (_, i) => {
    const a = (Math.PI / 6) * i;
    const d = i % 2 === 0 ? 2 * SQRT3 * HEX_R : SQRT3 * HEX_R * 2;
    const angle = i % 2 === 0 ? (Math.PI / 3) * (i / 2) : (Math.PI / 3) * ((i - 1) / 2) + Math.PI / 6;
    return [d * Math.cos(angle), d * Math.sin(angle)] as [number, number];
  }),
];

const HEX_CENTERS = RING_OFFSETS.map(([dx, dy]) => [CX + dx, CY + dy] as const);

const VERTICES = new Map<string, [number, number]>();
HEX_CENTERS.forEach(([cx, cy]) => {
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    const vx = Math.round((cx + HEX_R * Math.cos(a)) * 10) / 10;
    const vy = Math.round((cy + HEX_R * Math.sin(a)) * 10) / 10;
    VERTICES.set(`${vx},${vy}`, [vx, vy]);
  });
});
const VERTEX_LIST = [...VERTICES.values()];

const STARS: readonly [number, number][] = Array.from({ length: 55 }, (_, i) => [
  (7 + i * 17.3) % 100,
  (3 + i * 13.7) % 100,
]);

const RADIAL_LINES = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 3) * i;
  return `M${CX},${CY} L${CX + 380 * Math.cos(a)},${CY + 380 * Math.sin(a)}`;
});

export function HeroHexLatticeShrine() {
  return (
    <div id="hero-hex-lattice-shrine" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080610]">
      {/* Star field */}
      {STARS.map(([x, y], i) => (
        <div
          key={`s-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${x}%`, top: `${y}%`,
            width: i % 7 === 0 ? 2.5 : 1.5, height: i % 7 === 0 ? 2.5 : 1.5,
            backgroundColor: i % 3 === 0 ? "#daa520" : i % 5 === 0 ? "#00e5ff" : "#ffd700",
            opacity: 0.1 + (i % 6) * 0.04,
          }}
        />
      ))}

      {/* Sacred geometry — Hexagonal Crystal Lattice */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* 19 hexagons */}
        {HEX_CENTERS.map(([cx, cy], i) => (
          <polygon key={`h-${i}`} points={hexCorners(cx, cy, HEX_R)} fill="none" stroke={i % 2 === 0 ? "#daa520" : "#c8860e"} strokeWidth="0.6" opacity={0.1 + (i === 0 ? 0.06 : 0)} />
        ))}
        {/* Vertex dots */}
        {VERTEX_LIST.map(([vx, vy], i) => (
          <circle key={`v-${i}`} cx={vx} cy={vy} r="1.8" fill="#00e5ff" opacity="0.1" />
        ))}
        {/* 6 radial crystal axes */}
        {RADIAL_LINES.map((d, i) => (
          <path key={`r-${i}`} d={d} stroke="#10ffaa" strokeWidth="0.5" opacity="0.08" />
        ))}
        {/* Bounding hexagon */}
        <polygon points={hexCorners(CX, CY, 340)} fill="none" stroke="#d946ef" strokeWidth="0.5" opacity="0.06" />
        {/* Inner + outer framing circles */}
        <circle cx={CX} cy={CY} r={HEX_R * 3.2} fill="none" stroke="#d946ef" strokeWidth="0.4" opacity="0.06" strokeDasharray="4 8" />
        <circle cx={CX} cy={CY} r={HEX_R * 5.8} fill="none" stroke="#d946ef" strokeWidth="0.3" opacity="0.06" />
      </svg>

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.1)_0%,rgba(218,165,32,0.06)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-44 w-44 object-contain saturate-[0.7] sepia-[0.2] drop-shadow-[0_0_30px_rgba(0,229,255,0.25)]" />
        <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#00e5ff]/30">
          Crystalline lattice formation
        </p>
        <h1 className="mt-4 font-mono text-48 uppercase leading-none md:text-72">
          <span className="text-[#ffd700]">Hex Lattice</span>
          <br />
          <span className="text-[#f5e6c0]">Shrine</span>
        </h1>
        <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/45">
          An eggplant rests at the nucleus of an infinite crystal lattice, resonating through every vertex of the cosmic honeycomb.
        </p>
      </div>
    </div>
  );
}

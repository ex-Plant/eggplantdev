/* Agent: Claude — Hypercube Altar */

const NEON = ['#10ffaa', '#d946ef', '#00e5ff', '#daa520'] as const;

const STARS = Array.from({ length: 60 }, (_, i) => ({
  x: `${(i * 19 + 3) % 100}%`,
  y: `${(i * 29 + 11) % 100}%`,
  size: i % 3 === 0 ? 3 : 2,
  opacity: 0.06 + (i % 4) * 0.03,
  color: NEON[i % 4],
}));

const sq = (cx: number, cy: number, half: number, rot: number): [number, number][] => {
  const rad = (rot * Math.PI) / 180;
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([dx, dy]) => {
    const x = dx * half, y = dy * half;
    return [cx + x * Math.cos(rad) - y * Math.sin(rad), cy + x * Math.sin(rad) + y * Math.cos(rad)];
  });
};

const C = [600, 400] as const;
const outerA = sq(C[0], C[1], 250, 15);
const innerA = sq(C[0], C[1], 150, 45);
const outerB = sq(C[0], C[1], 100, 20);
const innerB = sq(C[0], C[1], 60, 50);

const polyStr = (pts: [number, number][]) => pts.map((p) => p.join(',')).join(' ');

const triAt = ([x, y]: [number, number], s = 12) =>
  `${x},${y - s} ${x - s * 0.866},${y + s * 0.5} ${x + s * 0.866},${y + s * 0.5}`;

export function HeroHypercubeAltar() {
  return (
    <div id="hero-hypercube-altar" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080610]">
      {/* Star field */}
      {STARS.map((s, i) => (
        <div key={`s-${i}`} className="pointer-events-none absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      {/* Dense sacred geometry */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Concentric circles */}
        {[320, 240, 160].map((r, i) => (
          <circle key={`cr-${i}`} cx={C[0]} cy={C[1]} r={r} fill="none" stroke="#daa520" strokeWidth="0.4" opacity={0.06 + i * 0.02} strokeDasharray={i === 0 ? '8 12' : 'none'} />
        ))}
        {/* Diagonal cross lines */}
        <line x1={C[0] - 340} y1={C[1] - 340} x2={C[0] + 340} y2={C[1] + 340} stroke="#daa520" strokeWidth="0.3" opacity="0.05" />
        <line x1={C[0] + 340} y1={C[1] - 340} x2={C[0] - 340} y2={C[1] + 340} stroke="#daa520" strokeWidth="0.3" opacity="0.05" />
        {/* Outer cube pair */}
        <polygon points={polyStr(outerA)} fill="none" stroke="#ffd700" strokeWidth="0.8" opacity="0.18" />
        <polygon points={polyStr(innerA)} fill="none" stroke="#daa520" strokeWidth="0.7" opacity="0.16" />
        {/* Tesseract connecting lines — outer pair */}
        {outerA.map(([x1, y1], i) => (
          <line key={`tA-${i}`} x1={x1} y1={y1} x2={innerA[i][0]} y2={innerA[i][1]} stroke="#ffd700" strokeWidth="0.5" opacity="0.12" />
        ))}
        {/* Inner cube pair */}
        <polygon points={polyStr(outerB)} fill="none" stroke="#10ffaa" strokeWidth="0.5" opacity="0.12" />
        <polygon points={polyStr(innerB)} fill="none" stroke="#d946ef" strokeWidth="0.4" opacity="0.1" />
        {/* Tesseract connecting lines — inner pair */}
        {outerB.map(([x1, y1], i) => (
          <line key={`tB-${i}`} x1={x1} y1={y1} x2={innerB[i][0]} y2={innerB[i][1]} stroke="#00e5ff" strokeWidth="0.4" opacity="0.08" />
        ))}
        {/* Corner triangles on outer cube */}
        {outerA.map((pt, i) => (
          <polygon key={`tri-${i}`} points={triAt(pt)} fill="none" stroke="#ffd700" strokeWidth="0.4" opacity="0.1" />
        ))}
        {/* Vertex dots */}
        {[...outerA, ...innerA, ...outerB, ...innerB].map(([cx, cy], i) => (
          <circle key={`d-${i}`} cx={cx} cy={cy} r={1.5} fill={i < 8 ? '#ffd700' : '#10ffaa'} opacity={i < 8 ? 0.25 : 0.15} />
        ))}
      </svg>

      {/* Radial glow — gold + neon fringe */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.14)_0%,rgba(16,255,170,0.04)_35%,rgba(217,70,239,0.02)_55%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[#10ffaa]/30">
          Fourth-dimensional produce
        </p>

        <img
          src="/logos/eggplant-logo-smooth.apng"
          alt="Eggplant logo"
          className="mb-8 h-48 w-48 sepia saturate-50 hue-rotate-15 drop-shadow-[0_0_50px_rgba(218,165,32,0.35)]"
        />

        <h1 className="font-mono text-48 uppercase leading-none tracking-tight md:text-72">
          <span className="block text-[#ffd700]">Hypercube</span>
          <span className="block text-[#f5e6c0]">Altar</span>
        </h1>

        <p className="mt-6 max-w-md font-mono text-sm text-[#c8b080]/45">
          The eggplant exists in four dimensions simultaneously — projected through impossible vertices onto the altar of your screen
        </p>
      </div>
    </div>
  );
}

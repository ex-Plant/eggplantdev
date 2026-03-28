import {
  PALETTE,
  FOL_RINGS,
  CENTER_CIRCLE,
  EGGPLANT,
  SIERPINSKI_POSITIONS,
  STARS,
  COPY,
  SVG_VIEWBOX,
} from "./config";

export function HeroFractalSermon() {
  return (
    <div id="hero-fractal-sermon" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: PALETTE.bg }}>
      {/* Flower of Life wireframe expanding infinitely */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {FOL_RINGS.map((ring, ringIdx) =>
          ring.circles.map((c, i) => (
            <circle
              key={`fol-${ringIdx}-${i}`}
              cx={c.cx}
              cy={c.cy}
              r={70}
              fill="none"
              stroke={PALETTE.gold}
              strokeWidth="0.3"
              opacity={ring.opacity}
            />
          )),
        )}
        <circle cx={CENTER_CIRCLE.cx} cy={CENTER_CIRCLE.cy} r={CENTER_CIRCLE.r} fill="none" stroke={PALETTE.gold} strokeWidth={CENTER_CIRCLE.strokeWidth} opacity={CENTER_CIRCLE.opacity} />
      </svg>

      {/* Sierpinski fractal of eggplants */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative">
          <img src={EGGPLANT.src} alt="" className="h-48 w-48 object-contain" />
          <img src={EGGPLANT.src} alt="" className="absolute -top-16 left-1/2 -translate-x-1/2 h-20 w-20 object-contain opacity-80" />
          <img src={EGGPLANT.src} alt="" className="absolute -bottom-8 -left-16 h-20 w-20 object-contain opacity-80" />
          <img src={EGGPLANT.src} alt="" className="absolute -bottom-8 -right-16 h-20 w-20 object-contain opacity-80" />
          {SIERPINSKI_POSITIONS.map(([x, y], i) => (
            <img key={i} src={EGGPLANT.src} alt="" className="absolute h-8 w-8 object-contain" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, opacity: 0.5 + (i % 3) * 0.1, filter: i % 3 === 0 ? "hue-rotate(320deg) brightness(1.5)" : "none" }} />
          ))}
          <div className="absolute -inset-20 rounded-full bg-[radial-gradient(circle,rgba(255,20,147,0.08)_0%,transparent_60%)]" />
        </div>

        <div className="mt-16 font-mono text-sm tracking-wider" style={{ color: `${PALETTE.neonGreen}80` }}>
          <span style={{ color: `${PALETTE.neonGreen}4D` }}>$</span> {COPY.terminal?.replace("$ ", "")}
        </div>
        <h1 className="mt-4 font-mono text-48 uppercase text-white md:text-64">
          {COPY.titleLine1}<br /><span style={{ color: PALETTE.hotPink }}>{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-md text-16 text-white/25 mx-auto">
          {COPY.description}
        </p>
      </div>

      {STARS.map((star, i) => (
        <div key={i} className="pointer-events-none absolute rounded-full" style={{ backgroundColor: PALETTE.gold, left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity }} />
      ))}
    </div>
  );
}

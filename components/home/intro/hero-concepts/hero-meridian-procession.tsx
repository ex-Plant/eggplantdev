/* Agent: Codex — Meridian Procession */

const PROCESSION_STARS = Array.from({ length: 52 }, (_, i) => ({
  x: (i * 29 + 13) % 100,
  y: (i * 47 + 5) % 100,
  size: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  opacity: 0.04 + (i % 6) * 0.025,
}));

const MEDALLIONS = [
  { cy: 142, r: 34, stroke: "#f0c040", opacity: 0.16 },
  { cy: 246, r: 56, stroke: "#daa520", opacity: 0.14 },
  { cy: 400, r: 108, stroke: "#f5e6c0", opacity: 0.1 },
  { cy: 562, r: 62, stroke: "#c8860e", opacity: 0.12 },
  { cy: 678, r: 28, stroke: "#f0c040", opacity: 0.14 },
] as const;

export function HeroMeridianProcession() {
  return (
    <div id="hero-meridian-procession" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0907]">
      {PROCESSION_STARS.map((star, i) => (
        <div
          key={`star-${i}`}
          className="pointer-events-none absolute rounded-full bg-[#f5e6c0]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <line x1="600" y1="40" x2="600" y2="760" stroke="#daa520" strokeWidth="1" opacity="0.14" />
        <line x1="564" y1="40" x2="564" y2="760" stroke="#c8860e" strokeWidth="0.45" opacity="0.1" />
        <line x1="636" y1="40" x2="636" y2="760" stroke="#c8860e" strokeWidth="0.45" opacity="0.1" />

        {MEDALLIONS.map((medallion, i) => (
          <g key={`medallion-${i}`}>
            <circle cx="600" cy={medallion.cy} r={medallion.r} fill="none" stroke={medallion.stroke} strokeWidth={i === 2 ? 1.2 : 0.9} opacity={medallion.opacity} />
            <circle cx="600" cy={medallion.cy} r={medallion.r * 0.62} fill="none" stroke="#daa520" strokeWidth="0.5" opacity={medallion.opacity * 0.75} />
          </g>
        ))}

        <path d="M600 120 C 750 170, 750 318, 600 400" fill="none" stroke="#f0c040" strokeWidth="0.7" opacity="0.12" />
        <path d="M600 120 C 450 170, 450 318, 600 400" fill="none" stroke="#f0c040" strokeWidth="0.7" opacity="0.12" />
        <path d="M600 400 C 768 482, 742 624, 600 690" fill="none" stroke="#daa520" strokeWidth="0.7" opacity="0.1" />
        <path d="M600 400 C 432 482, 458 624, 600 690" fill="none" stroke="#daa520" strokeWidth="0.7" opacity="0.1" />

        <circle cx="422" cy="232" r="17" fill="none" stroke="#8fa6b0" strokeWidth="0.9" opacity="0.18" />
        <ellipse cx="422" cy="232" rx="30" ry="8" fill="none" stroke="#8fa6b0" strokeWidth="0.45" opacity="0.12" />
        <circle cx="776" cy="564" r="20" fill="none" stroke="#f5e6c0" strokeWidth="0.8" opacity="0.16" />
        <circle cx="786" cy="564" r="13" fill="#0b0907" />

        <polygon points="596,90 604,90 608,100 600,112 592,100" fill="none" stroke="#f0c040" strokeWidth="0.7" opacity="0.18" />
        <polygon points="596,712 604,712 608,722 600,734 592,722" fill="none" stroke="#f0c040" strokeWidth="0.7" opacity="0.18" />
        <polygon points="308,398 322,412 308,426 294,412" fill="none" stroke="#c8860e" strokeWidth="0.7" opacity="0.1" />
        <polygon points="892,398 906,412 892,426 878,412" fill="none" stroke="#c8860e" strokeWidth="0.7" opacity="0.1" />
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[260px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(218,165,32,0.12)_0%,rgba(240,192,64,0.06)_38%,transparent_74%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#daa520]/36">Axis / ceremonial transit</p>
        <div className="relative my-8">
          <div className="absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(245,230,192,0.08)_0%,transparent_68%)]" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative h-52 w-52 object-contain" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
        </div>
        <h1 className="font-mono text-48 uppercase leading-none text-[#f5e6c0] md:text-72">
          Meridian
          <br />
          <span className="text-[#daa520]">Procession</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-[#c8b080]/48">
          A vertical sacred march instead of a centered halo. The whole composition behaves like a processional banner, with the eggplant passing through successive stations of worship.
        </p>
      </div>
    </div>
  );
}

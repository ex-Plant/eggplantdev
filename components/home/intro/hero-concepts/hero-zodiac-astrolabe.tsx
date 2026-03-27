/* Agent: Claude — Zodiac Astrolabe */

const ZODIAC_SIGNS = ["\u2648", "\u2649", "\u264A", "\u264B", "\u264C", "\u264D", "\u264E", "\u264F", "\u2650", "\u2651", "\u2652", "\u2653"];

export function HeroZodiacAstrolabe() {
  return (
    <div id="hero-zodiac-astrolabe" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 55 }, (_, i) => (
          <circle key={`star-${i}`} cx={(i * 23 + 11) % 1200} cy={(i * 41 + 7) % 800} r={i % 8 === 0 ? 1.4 : 0.6} fill={i % 3 === 0 ? "#daa520" : "#f5f0e0"} opacity={0.03 + (i % 6) * 0.015} />
        ))}

        {/* Concentric graduated rings */}
        {[90, 150, 220, 300].map((r, i) => (
          <g key={`ring-${i}`}>
            <circle cx="600" cy="400" r={r} fill="none" stroke={i % 2 === 0 ? "#daa520" : "#c8860e"} strokeWidth={i === 0 ? 1.2 : 0.5} opacity={0.15 - i * 0.025} strokeDasharray={i === 3 ? "1 5" : "none"} />
            {/* Degree tick marks */}
            {Array.from({ length: i === 0 ? 36 : i === 1 ? 24 : 12 }, (_, j) => {
              const count = i === 0 ? 36 : i === 1 ? 24 : 12;
              const a = (Math.PI * 2 * j) / count;
              const len = j % (count / 4) === 0 ? 8 : 4;
              return <line key={`t-${i}-${j}`} x1={600 + (r - len) * Math.cos(a)} y1={400 + (r - len) * Math.sin(a)} x2={600 + (r + len) * Math.cos(a)} y2={400 + (r + len) * Math.sin(a)} stroke="#daa520" strokeWidth={j % (count / 4) === 0 ? 0.8 : 0.3} opacity={0.12} />;
            })}
          </g>
        ))}

        {/* 12 radial zodiac house lines */}
        {Array.from({ length: 12 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 12;
          return (
            <g key={`house-${i}`}>
              <line x1={600 + 90 * Math.cos(a)} y1={400 + 90 * Math.sin(a)} x2={600 + 300 * Math.cos(a)} y2={400 + 300 * Math.sin(a)} stroke="#c8860e" strokeWidth="0.4" opacity="0.1" />
              {/* Zodiac sign labels */}
              <text x={600 + 260 * Math.cos(a + Math.PI / 12)} y={400 + 260 * Math.sin(a + Math.PI / 12)} textAnchor="middle" dominantBaseline="central" fill="#daa520" fontSize="11" opacity="0.12">{ZODIAC_SIGNS[i]}</text>
            </g>
          );
        })}

        {/* Cardinal decorative marks */}
        {[0, 90, 180, 270].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return <circle key={`card-${deg}`} cx={600 + 150 * Math.cos(a)} cy={400 + 150 * Math.sin(a)} r="3" fill="none" stroke="#f0c040" strokeWidth="0.8" opacity="0.15" />;
        })}

        {/* Saturn — ringed planet, top-right */}
        <circle cx="870" cy="200" r="7" fill="#daa520" opacity="0.08" />
        <ellipse cx="870" cy="200" rx="14" ry="4" fill="none" stroke="#daa520" strokeWidth="0.6" opacity="0.12" />

        {/* Eclipse — overlapping circles, bottom-left */}
        <circle cx="330" cy="600" r="9" fill="#0c0a08" stroke="#f0c040" strokeWidth="0.6" opacity="0.15" />
        <circle cx="336" cy="600" r="9" fill="none" stroke="#c8860e" strokeWidth="0.5" opacity="0.1" />

        {/* Crescent moon, left edge */}
        <path d="M 200 350 A 8 8 0 1 1 200 366 A 6 6 0 1 0 200 350" fill="#daa520" opacity="0.1" />
      </svg>

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Radial glow behind eggplant */}
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#daa520]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0c040]/8 blur-2xl" />

        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative h-48 w-48 object-contain" style={{ filter: "sepia(0.35) saturate(1.5)" }} />

        {/* Eyebrow */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-10 bg-[#daa520]/15" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#daa520]/40">Celestial navigation since the first harvest</span>
          <div className="h-px w-10 bg-[#daa520]/15" />
        </div>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase text-[#f5e6c0] md:text-72">
          Zodiac<br /><span className="text-[#daa520]">Astrolabe</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-md font-mono text-14 text-[#c8b080]/50">
          The eggplant charts its course through all twelve houses of the cosmos, reading the angles of forgotten stars and calibrating its passage by golden light alone.
        </p>
      </div>
    </div>
  );
}

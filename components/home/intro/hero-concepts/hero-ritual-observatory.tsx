export function HeroRitualObservatory() {
  /* Observatory / signal map — technical devotional diagram with
     concentric measurement rings, annotated celestial positions,
     and eggplant at the center of the observation field. */
  return (
    <div id="hero-ritual-observatory" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0908]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Measurement rings with degree marks */}
        {[100, 160, 230, 310, 400].map((r, i) => (
          <g key={`ring-${i}`}>
            <circle cx="600" cy="400" r={r} fill="none" stroke="#daa520" strokeWidth={i === 0 ? 1.5 : 0.5} opacity={0.15 - i * 0.02} strokeDasharray={i > 2 ? "2 6" : "none"} />
            {/* Degree ticks */}
            {Array.from({ length: i === 0 ? 24 : i === 1 ? 12 : 8 }, (_, j) => {
              const count = i === 0 ? 24 : i === 1 ? 12 : 8;
              const a = (Math.PI * 2 * j) / count;
              const inner = r - (i === 0 ? 6 : 4);
              const outer = r + (i === 0 ? 6 : 4);
              return <line key={`tick-${i}-${j}`} x1={600 + inner * Math.cos(a)} y1={400 + inner * Math.sin(a)} x2={600 + outer * Math.cos(a)} y2={400 + outer * Math.sin(a)} stroke="#daa520" strokeWidth={i === 0 && j % 6 === 0 ? 1 : 0.3} opacity={0.15} />;
            })}
          </g>
        ))}

        {/* Cardinal labels */}
        <text x="600" y="285" textAnchor="middle" fill="#daa520" fontSize="9" fontFamily="monospace" opacity="0.25">0°</text>
        <text x="715" y="404" textAnchor="middle" fill="#daa520" fontSize="9" fontFamily="monospace" opacity="0.25">90°</text>
        <text x="600" y="520" textAnchor="middle" fill="#daa520" fontSize="9" fontFamily="monospace" opacity="0.25">180°</text>
        <text x="485" y="404" textAnchor="middle" fill="#daa520" fontSize="9" fontFamily="monospace" opacity="0.25">270°</text>

        {/* Crosshair */}
        <line x1="600" y1="300" x2="600" y2="500" stroke="#daa520" strokeWidth="0.4" opacity="0.1" />
        <line x1="500" y1="400" x2="700" y2="400" stroke="#daa520" strokeWidth="0.4" opacity="0.1" />

        {/* Annotated celestial objects with leader lines */}
        {/* Object A — top right */}
        <circle cx="780" cy="280" r="8" fill="#daa520" opacity="0.1" />
        <circle cx="780" cy="280" r="12" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.15" />
        <line x1="790" y1="270" x2="850" y2="230" stroke="#daa520" strokeWidth="0.3" opacity="0.12" />
        <text x="855" y="228" fill="#daa520" fontSize="8" fontFamily="monospace" opacity="0.2">OBJ-A / 47.2°</text>

        {/* Object B — bottom left */}
        <circle cx="430" cy="530" r="6" fill="#c8860e" opacity="0.08" />
        <circle cx="430" cy="530" r="10" fill="none" stroke="#c8860e" strokeWidth="0.5" opacity="0.12" />
        <line x1="420" y1="540" x2="350" y2="580" stroke="#c8860e" strokeWidth="0.3" opacity="0.1" />
        <text x="280" y="585" fill="#c8860e" fontSize="8" fontFamily="monospace" opacity="0.18">OBJ-B / 213.8°</text>

        {/* Object C — left */}
        <circle cx="340" cy="360" r="5" fill="#f0c040" opacity="0.1" />
        <line x1="335" y1="355" x2="280" y2="320" stroke="#f0c040" strokeWidth="0.3" opacity="0.1" />
        <text x="215" y="318" fill="#f0c040" fontSize="8" fontFamily="monospace" opacity="0.18">OBJ-C / 282.1°</text>

        {/* Scan line / sweep */}
        <line x1="600" y1="400" x2="900" y2="300" stroke="#f0c040" strokeWidth="1" opacity="0.06" />

        {/* Stars */}
        {Array.from({ length: 40 }, (_, i) => (
          <circle key={`bgstar-${i}`} cx={(i * 31 + 17) % 1200} cy={(i * 47 + 9) % 800} r={i % 7 === 0 ? 1.5 : 0.7} fill="#f5e6c0" opacity={0.04 + (i % 5) * 0.02} />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-36 w-36 object-contain" style={{ filter: "sepia(0.3) saturate(1.4)" }} />
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-12 bg-[#daa520]/15" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#daa520]/30">Signal Acquired</span>
          <div className="h-px w-12 bg-[#daa520]/15" />
        </div>
        <h1 className="mt-4 font-mono text-48 uppercase text-[#f5e6c0] md:text-64">
          Ritual<br /><span className="text-[#daa520]">Observatory</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-[#c8b080]/40">
          The eggplant has been located at bearing 0°, distance: infinite. Three satellite objects confirmed in orbit. Classification: sacred. Recommendation: deploy immediately.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 font-mono text-[10px] uppercase text-[#daa520]/30">
          <div className="rounded border border-[#daa520]/10 px-3 py-2">
            <div className="text-[#daa520]/50">Status</div>
            <div className="mt-1 text-[#f0c040]/40">Tracking</div>
          </div>
          <div className="rounded border border-[#daa520]/10 px-3 py-2">
            <div className="text-[#daa520]/50">Signal</div>
            <div className="mt-1 text-[#f0c040]/40">∞ Hz</div>
          </div>
          <div className="rounded border border-[#daa520]/10 px-3 py-2">
            <div className="text-[#daa520]/50">Deploy</div>
            <div className="mt-1 text-[#f0c040]/40">Pending</div>
          </div>
        </div>
      </div>
    </div>
  );
}

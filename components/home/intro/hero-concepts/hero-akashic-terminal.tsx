export function HeroAkashicTerminal() {
  return (
    <div id="hero-akashic-terminal" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#010204]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.12">
          <polygon points="180,150 230,240 130,240" fill="none" stroke="#10ffaa" strokeWidth="1" />
          <line x1="180" y1="150" x2="180" y2="210" stroke="#10ffaa" strokeWidth="0.5" />
          <line x1="130" y1="240" x2="180" y2="210" stroke="#10ffaa" strokeWidth="0.5" />
          <line x1="230" y1="240" x2="180" y2="210" stroke="#10ffaa" strokeWidth="0.5" />
        </g>
        <g opacity="0.1">
          <polygon points="1000,200 1040,250 1000,300 960,250" fill="none" stroke="#d946ef" strokeWidth="1" />
          <line x1="1000" y1="200" x2="1000" y2="300" stroke="#d946ef" strokeWidth="0.5" />
          <line x1="960" y1="250" x2="1040" y2="250" stroke="#d946ef" strokeWidth="0.5" />
        </g>
        <g opacity="0.08">
          <rect x="100" y="520" width="60" height="60" fill="none" stroke="#39ff14" strokeWidth="1" />
          <rect x="115" y="505" width="60" height="60" fill="none" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="100" y1="520" x2="115" y2="505" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="160" y1="520" x2="175" y2="505" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="100" y1="580" x2="115" y2="565" stroke="#39ff14" strokeWidth="0.5" />
          <line x1="160" y1="580" x2="175" y2="565" stroke="#39ff14" strokeWidth="0.5" />
        </g>
        <g opacity="0.09">
          <circle cx="1050" cy="580" r="40" fill="none" stroke="#00e5ff" strokeWidth="0.5" />
          {Array.from({ length: 5 }, (_, i) => {
            const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            const a2 = (Math.PI * 2 * ((i + 1) % 5)) / 5 - Math.PI / 2;
            return <line key={i} x1={1050 + 40 * Math.cos(a)} y1={580 + 40 * Math.sin(a)} x2={1050 + 40 * Math.cos(a2)} y2={580 + 40 * Math.sin(a2)} stroke="#00e5ff" strokeWidth="0.8" />;
          })}
          {Array.from({ length: 5 }, (_, i) => {
            const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            return <line key={`r-${i}`} x1="1050" y1="580" x2={1050 + 40 * Math.cos(a)} y2={580 + 40 * Math.sin(a)} stroke="#00e5ff" strokeWidth="0.3" />;
          })}
        </g>
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="rounded-xl border-2 border-white/10 bg-[#0a0e0a] p-1 shadow-[0_0_60px_rgba(16,255,170,0.06)]">
            <div className="relative w-[420px] overflow-hidden rounded-lg bg-[#050a05] p-6 md:w-[520px]" style={{ boxShadow: "inset 0 0 80px rgba(16,255,170,0.04)" }}>
              <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(16,255,170,0.03) 0px, transparent 1px, transparent 3px)", backgroundSize: "100% 3px" }} />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,255,170,0.04),transparent_70%)]" />

              <pre className="font-mono text-[11px] leading-[1.4] text-[#10ffaa]/70 md:text-[13px]">
{`> AKASHIC_TERMINAL v∞.0
> signal locked... decoding...

        ·  ˙  ✦  ˙  ·
     ╱  ◇  ─────  ◇  ╲
    │  ╱ ╲  ◎  ╱ ╲  │
    ◇ │  ◎──🍆──◎  │ ◇
    │  ╲ ╱  ◎  ╲ ╱  │
     ╲  ◇  ─────  ◇  ╱
        ·  ˙  ✦  ˙  ·

> ENTITY: Solanum melongena
> CLASS:  Sacred Vegetable
> STATUS: Transmitting...
> FREQ:   ∞ Hz (all bands)
> MSG:    "deploy with intention"`}
              </pre>
            </div>
          </div>

          <div className="mx-auto h-6 w-24 rounded-b-lg bg-white/5" />
          <div className="mx-auto h-2 w-40 rounded-b-lg bg-white/[0.03]" />

          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="absolute -top-14 right-4 h-16 w-16 object-contain" style={{ filter: "drop-shadow(0 0 8px rgba(16,255,170,0.3))" }} />
        </div>

        <h1 className="mt-10 font-mono text-40 uppercase text-white md:text-56">
          Akashic<br /><span className="text-[#10ffaa]">Terminal</span>
        </h1>
        <p className="mt-4 max-w-md text-16 text-white/25 mx-auto text-center">
          Intercepted from an alien broadcast. A civilization that worshipped a single vegetable. They had excellent uptime and no runtime errors.
        </p>
      </div>
    </div>
  );
}

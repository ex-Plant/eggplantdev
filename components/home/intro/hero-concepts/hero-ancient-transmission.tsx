export function HeroAncientTransmission() {
  return (
    <div id="hero-ancient-transmission" className="relative flex min-h-screen overflow-hidden bg-[#020204]">
      <div className="fest-container relative z-10 flex min-h-screen items-center">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:items-center">
          {/* Left: ancient tablet */}
          <div className="relative rounded-2xl border border-[#10ffaa]/10 bg-[#060808] p-8 md:p-12">
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-[#10ffaa]/30 mb-8">Recovered Transmission // Epoch Unknown</p>
            <div className="space-y-6">
              {[
                { glyph: "🍆→☁️→🚀→✨", text: "The Aubergine ascends through the cloud layer into orbit" },
                { glyph: "△▽◇○◎", text: "Sacred forms contain the deployment pipeline" },
                { glyph: "λ→fn→()⇒{}", text: "The functions are pure. The side effects, divine" },
                { glyph: "∞ ÷ 0 = 🍆", text: "Infinity divided by nothing yields eggplant" },
              ].map((line, i) => (
                <div key={i} className="border-b border-[#10ffaa]/5 pb-4">
                  <p className="font-mono text-20 text-[#10ffaa]/50 tracking-wider">{line.glyph}</p>
                  <p className="mt-2 text-16 text-white/30 italic">{line.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: eggplant artifact */}
          <div className="flex flex-col items-center text-center overflow-hidden">
            <svg className="absolute h-[400px] w-[400px] overflow-hidden opacity-[0.05]" viewBox="0 0 400 400">
              {Array.from({ length: 6 }, (_, i) => {
                const angle = (Math.PI * 2 * i) / 6;
                return <line key={i} x1={200 + 180 * Math.cos(angle)} y1={200 + 180 * Math.sin(angle)} x2={200 - 180 * Math.cos(angle)} y2={200 - 180 * Math.sin(angle)} stroke="#10ffaa" strokeWidth="0.5" />;
              })}
              <circle cx="200" cy="200" r="180" fill="none" stroke="#10ffaa" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#d946ef" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="#39ff14" strokeWidth="0.5" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative h-52 w-52 object-contain" />
            <h1 className="mt-8 font-mono text-40 uppercase text-white md:text-56">
              Ancient<br /><span className="bg-gradient-to-r from-[#10ffaa] to-[#d946ef] bg-clip-text text-transparent">Transmission</span>
            </h1>
            <p className="mt-4 text-16 text-white/25 max-w-sm">
              Archaeologists found this in a lost Kubernetes cluster. The inscriptions suggest a civilization that worshipped a single vegetable. They had excellent uptime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

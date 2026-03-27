export function HeroFractalSermon() {
  return (
    <div id="hero-fractal-sermon" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#010102]">
      {/* Flower of Life wireframe expanding infinitely */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 3 }, (_, ring) => {
          const ringR = 120 + ring * 120;
          const count = ring === 0 ? 6 : ring === 1 ? 12 : 18;
          return Array.from({ length: count }, (_, i) => {
            const a = (Math.PI * 2 * i) / count;
            return (
              <circle
                key={`fol-${ring}-${i}`}
                cx={600 + ringR * Math.cos(a)}
                cy={400 + ringR * Math.sin(a)}
                r={70}
                fill="none"
                stroke="#daa520"
                strokeWidth="0.3"
                opacity={0.06 - ring * 0.015}
              />
            );
          });
        })}
        <circle cx="600" cy="400" r="70" fill="none" stroke="#daa520" strokeWidth="0.4" opacity="0.08" />
      </svg>

      {/* Sierpinski fractal of eggplants */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-48 w-48 object-contain" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="absolute -top-16 left-1/2 -translate-x-1/2 h-20 w-20 object-contain opacity-80" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="absolute -bottom-8 -left-16 h-20 w-20 object-contain opacity-80" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="absolute -bottom-8 -right-16 h-20 w-20 object-contain opacity-80" />
          {[
            [-50, -55], [0, -75], [50, -55],
            [-75, 20], [-95, 45], [-55, 45],
            [75, 20], [95, 45], [55, 45],
          ].map(([x, y], i) => (
            <img key={i} src="/logos/eggplant-logo-smooth.apng" alt="" className="absolute h-8 w-8 object-contain" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, opacity: 0.5 + (i % 3) * 0.1, filter: i % 3 === 0 ? "hue-rotate(320deg) brightness(1.5)" : "none" }} />
          ))}
          <div className="absolute -inset-20 rounded-full bg-[radial-gradient(circle,rgba(255,20,147,0.08)_0%,transparent_60%)]" />
        </div>

        <div className="mt-16 font-mono text-sm text-[#10ffaa]/50 tracking-wider">
          <span className="text-[#10ffaa]/30">$</span> transmitting on all frequencies...
        </div>
        <h1 className="mt-4 font-mono text-48 uppercase text-white md:text-64">
          Fractal<br /><span className="text-[#ff1493]">Sermon</span>
        </h1>
        <p className="mt-6 max-w-md text-16 text-white/25 mx-auto">
          Each generation smaller, more translucent, more devoted. The Sierpinski eggplant recurses toward enlightenment. Base case: never.
        </p>
      </div>

      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="pointer-events-none absolute rounded-full bg-[#daa520]" style={{ left: `${(i * 41 + 17) % 100}%`, top: `${(i * 59 + 11) % 100}%`, width: i % 4 === 0 ? 2 : 1, height: i % 4 === 0 ? 2 : 1, opacity: 0.06 + (i % 3) * 0.04 }} />
      ))}
    </div>
  );
}

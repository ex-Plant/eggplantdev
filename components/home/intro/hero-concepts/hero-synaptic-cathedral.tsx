export function HeroSynapticCathedral() {
  return (
    <div id="hero-synaptic-cathedral" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#010108]">
      {Array.from({ length: 50 }, (_, i) => (
        <div key={`star-${i}`} className="pointer-events-none absolute rounded-full bg-white" style={{ left: `${(i * 31 + 7) % 100}%`, top: `${(i * 47 + 13) % 100}%`, width: i % 7 === 0 ? 2 : 1, height: i % 7 === 0 ? 2 : 1, opacity: 0.04 + (i % 5) * 0.02 }} />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {(() => {
          const nodes: [number, number][] = [
            [350, 700], [350, 620], [350, 540], [350, 460], [360, 380],
            [380, 310], [420, 250], [470, 200], [530, 165],
            [600, 150],
            [670, 165], [730, 200], [780, 250], [820, 310],
            [840, 380], [850, 460], [850, 540], [850, 620], [850, 700],
            [450, 500], [550, 400], [650, 400], [750, 500],
            [500, 300], [600, 280], [700, 300],
            [600, 100],
          ];

          const connections: [number, number][] = [
            [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
            [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18],
            [3, 19], [19, 20], [20, 21], [21, 14],
            [5, 22], [22, 23], [23, 24], [24, 12],
            [19, 22], [24, 21], [20, 23], [21, 23],
            [8, 25], [9, 25], [23, 25],
            [7, 23], [10, 23], [6, 22], [11, 24],
          ];

          return (
            <>
              {connections.map(([from, to], i) => (
                <line key={`conn-${i}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} stroke="#10ffaa" strokeWidth="0.6" opacity="0.08" />
              ))}
              {connections.filter((_, i) => i % 3 === 0).map(([from, to], i) => (
                <line key={`trail-${i}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} stroke="#00e5ff" strokeWidth="1.5" opacity="0.12" strokeDasharray="4 12" />
              ))}
              {nodes.map(([cx, cy], i) => (
                <g key={`node-${i}`}>
                  <circle cx={cx} cy={cy} r={i === 25 ? 8 : 4} fill="#10ffaa" opacity={i === 25 ? 0.3 : 0.2} />
                  <circle cx={cx} cy={cy} r={i === 25 ? 16 : 8} fill="none" stroke="#10ffaa" strokeWidth="0.3" opacity="0.08" />
                </g>
              ))}
            </>
          );
        })()}

        {Array.from({ length: 6 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 6;
          return <circle key={`fol-${i}`} cx={600 + 25 * Math.cos(a)} cy={100 + 25 * Math.sin(a)} r="25" fill="none" stroke="#d946ef" strokeWidth="0.6" opacity="0.15" />;
        })}
        <circle cx="600" cy="100" r="25" fill="none" stroke="#d946ef" strokeWidth="0.8" opacity="0.2" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 12;
          return <line key={`ray-${i}`} x1="600" y1="100" x2={600 + 80 * Math.cos(a)} y2={100 + 80 * Math.sin(a)} stroke="#d946ef" strokeWidth="0.3" opacity="0.06" />;
        })}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-32 w-32 object-contain" style={{ filter: "drop-shadow(0 0 20px rgba(16,255,170,0.2))" }} />
        <h1 className="mt-8 font-mono text-48 uppercase text-white md:text-72">
          Synaptic<br /><span className="bg-gradient-to-r from-[#10ffaa] via-[#00e5ff] to-[#d946ef] bg-clip-text text-transparent">Cathedral</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-white/25 mx-auto">
          Every node is a tiny glowing eggplant. Every connection is a Metatron&apos;s cube segment. Your brain is a temple and it runs on eggplants.
        </p>
        <p className="mt-3 font-mono text-sm text-[#10ffaa]/25 tracking-wider">
          Neural architecture: gothic // Runtime: eternal
        </p>
      </div>
    </div>
  );
}

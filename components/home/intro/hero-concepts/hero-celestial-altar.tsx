export function HeroCelestialAltar() {
  /* Central shrine/altar composition. Eggplant on a golden pedestal
     with planets arranged symmetrically like religious iconography. */
  return (
    <div id="hero-celestial-altar" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08070a]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Altar pedestal / pyramid base */}
        <polygon points="500,550 700,550 750,650 450,650" fill="none" stroke="#daa520" strokeWidth="1.5" opacity="0.15" />
        <polygon points="520,550 680,550 710,620 490,620" fill="none" stroke="#f0c040" strokeWidth="0.5" opacity="0.08" />
        {/* Altar steps */}
        <line x1="480" y1="560" x2="720" y2="560" stroke="#daa520" strokeWidth="0.5" opacity="0.08" />
        <line x1="470" y1="580" x2="730" y2="580" stroke="#daa520" strokeWidth="0.5" opacity="0.06" />

        {/* Sacred mandorla / vesica around eggplant */}
        <ellipse cx="600" cy="380" rx="70" ry="120" fill="none" stroke="#daa520" strokeWidth="2" opacity="0.15" />
        <ellipse cx="600" cy="380" rx="90" ry="150" fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.08" />

        {/* Symmetrical planets — left side */}
        <circle cx="320" cy="250" r="20" fill="none" stroke="#8fa6b0" strokeWidth="1" opacity="0.2" />
        <circle cx="320" cy="250" r="8" fill="#8fa6b0" opacity="0.05" />
        <circle cx="250" cy="400" r="15" fill="none" stroke="#daa520" strokeWidth="0.8" opacity="0.15" />
        <circle cx="350" cy="550" r="12" fill="none" stroke="#f5e6c0" strokeWidth="0.8" opacity="0.12" />
        {/* Crescent */}
        <circle cx="200" cy="300" r="10" fill="none" stroke="#f5e6c0" strokeWidth="0.8" opacity="0.15" />
        <circle cx="203" cy="298" r="8" fill="#08070a" />

        {/* Symmetrical planets — right side */}
        <circle cx="880" cy="250" r="20" fill="none" stroke="#8fa6b0" strokeWidth="1" opacity="0.2" />
        <circle cx="880" cy="250" r="8" fill="#8fa6b0" opacity="0.05" />
        <circle cx="950" cy="400" r="15" fill="none" stroke="#daa520" strokeWidth="0.8" opacity="0.15" />
        <circle cx="850" cy="550" r="12" fill="none" stroke="#f5e6c0" strokeWidth="0.8" opacity="0.12" />
        {/* Concentric target */}
        <circle cx="1000" cy="300" r="14" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.12" />
        <circle cx="1000" cy="300" r="8" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.08" />
        <circle cx="1000" cy="300" r="3" fill="#daa520" opacity="0.1" />

        {/* Connecting constellation lines */}
        <line x1="320" y1="250" x2="250" y2="400" stroke="#daa520" strokeWidth="0.3" opacity="0.06" />
        <line x1="250" y1="400" x2="350" y2="550" stroke="#daa520" strokeWidth="0.3" opacity="0.06" />
        <line x1="880" y1="250" x2="950" y2="400" stroke="#daa520" strokeWidth="0.3" opacity="0.06" />
        <line x1="950" y1="400" x2="850" y2="550" stroke="#daa520" strokeWidth="0.3" opacity="0.06" />

        {/* Top crown — three-pointed radiance */}
        {Array.from({ length: 7 }, (_, i) => {
          const a = Math.PI + (Math.PI * i) / 6 - Math.PI / 2;
          return <line key={`crown-${i}`} x1="600" y1="250" x2={600 + 120 * Math.cos(a)} y2={250 + 120 * Math.sin(a)} stroke="#f0c040" strokeWidth="0.8" opacity={0.12 - Math.abs(i - 3) * 0.02} />;
        })}

        {/* Scattered 4-point stars */}
        {[[180, 150], [450, 120], [750, 130], [1020, 160], [150, 600], [1050, 600], [600, 100]].map(([x, y], i) => (
          <g key={`star4-${i}`} opacity={0.12}>
            <line x1={x - 4} y1={y} x2={x + 4} y2={y} stroke="#f5e6c0" strokeWidth="0.8" />
            <line x1={x} y1={y - 4} x2={x} y2={y + 4} stroke="#f5e6c0" strokeWidth="0.8" />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[400px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(240,192,64,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-48 w-48 object-contain" style={{ filter: "sepia(0.25) saturate(1.4) brightness(0.95)" }} />
        <h1 className="mt-8 font-mono text-48 uppercase text-[#f5e6c0] md:text-64">
          Celestial<br /><span className="text-[#daa520]">Altar</span>
        </h1>
        <p className="mt-6 max-w-md text-16 text-[#c8b080]/40">
          The eggplant sits enthroned above a golden pedestal. Planets hang in symmetrical reverence on either side. This is religious iconography for a produce-worshipping civilization with impeccable design taste.
        </p>
      </div>
    </div>
  );
}

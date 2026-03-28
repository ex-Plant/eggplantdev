"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  STARS,
  CORNERS,
  INFINITY_CIRCLES,
  CELESTIAL_BODIES,
  SYMBOLS,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroEchoesOfDjembeya() {
  return (
    <EggplantRadialWrapper>
      <EchoesOfDjembeyaContent />
    </EggplantRadialWrapper>
  );
}

export function EchoesOfDjembeyaContent() {
  /* Interlocking figure-8 sacred circles with celestial bodies orbiting.
     Warm amber/gold palette. Central eggplant as luminous deity figure. */
  return (
    <div id="hero-echoes-djembeya" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Star field — warm tone */}
      {STARS.map((s, i) => (
        <div key={`star-${i}`} className="pointer-events-none absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.backgroundColor, opacity: s.opacity }} />
      ))}

      {/* Art deco corner frames */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Corners */}
        {CORNERS.outer.map((c, i) => (
          <path key={`corner-outer-${i}`} d={c.d} fill="none" stroke={PALETTE.gold} strokeWidth="1" opacity="0.15" />
        ))}
        {/* Double corner inset */}
        {CORNERS.inner.map((c, i) => (
          <path key={`corner-inner-${i}`} d={c.d} fill="none" stroke={PALETTE.gold} strokeWidth="0.5" opacity="0.08" />
        ))}

        {/* Figure-8 / infinity interlocking circles */}
        {INFINITY_CIRCLES.outer.map((c, i) => (
          <circle key={`outer-${i}`} cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke={PALETTE.gold} strokeWidth="2" opacity="0.2" />
        ))}
        {/* Inner circles */}
        {INFINITY_CIRCLES.inner.map((c, i) => (
          <circle key={`inner-${i}`} cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke={PALETTE.darkGold} strokeWidth="1" opacity="0.12" />
        ))}
        {/* Center vesica piscis highlight */}
        <ellipse cx={INFINITY_CIRCLES.vesica.cx} cy={INFINITY_CIRCLES.vesica.cy} rx={INFINITY_CIRCLES.vesica.rx} ry={INFINITY_CIRCLES.vesica.ry} fill="none" stroke={PALETTE.softGold} strokeWidth="1.5" opacity="0.15" />

        {/* Orbiting celestial bodies — moons & planets */}
        {/* Saturn-like */}
        <circle cx={CELESTIAL_BODIES.saturn.cx} cy={CELESTIAL_BODIES.saturn.cy} r={CELESTIAL_BODIES.saturn.r} fill="none" stroke={CELESTIAL_BODIES.saturn.color} strokeWidth="1" opacity="0.2" />
        <ellipse cx={CELESTIAL_BODIES.saturn.cx} cy={CELESTIAL_BODIES.saturn.cy} rx={CELESTIAL_BODIES.saturn.ringRx} ry={CELESTIAL_BODIES.saturn.ringRy} fill="none" stroke={CELESTIAL_BODIES.saturn.color} strokeWidth="0.5" opacity="0.15" />
        {/* Crescent moon */}
        <circle cx={CELESTIAL_BODIES.crescentMoon.cx} cy={CELESTIAL_BODIES.crescentMoon.cy} r={CELESTIAL_BODIES.crescentMoon.r} fill="none" stroke={CELESTIAL_BODIES.crescentMoon.color} strokeWidth="1" opacity="0.2" />
        <circle cx={CELESTIAL_BODIES.crescentMoon.maskCx} cy={CELESTIAL_BODIES.crescentMoon.maskCy} r={CELESTIAL_BODIES.crescentMoon.maskR} fill={PALETTE.bgColor} />
        {/* Half moon */}
        <circle cx={CELESTIAL_BODIES.halfMoon.cx} cy={CELESTIAL_BODIES.halfMoon.cy} r={CELESTIAL_BODIES.halfMoon.r} fill="none" stroke={CELESTIAL_BODIES.halfMoon.color} strokeWidth="1" opacity="0.18" />
        <rect x={CELESTIAL_BODIES.halfMoon.cx} y={CELESTIAL_BODIES.halfMoon.cy - CELESTIAL_BODIES.halfMoon.r} width={CELESTIAL_BODIES.halfMoon.r} height={CELESTIAL_BODIES.halfMoon.r * 2} fill={PALETTE.bgColor} />
        {/* Full planet */}
        <circle cx={CELESTIAL_BODIES.fullPlanet.cx} cy={CELESTIAL_BODIES.fullPlanet.cy} r={CELESTIAL_BODIES.fullPlanet.r} fill="none" stroke={CELESTIAL_BODIES.fullPlanet.color} strokeWidth="0.8" opacity="0.15" />
        <circle cx={CELESTIAL_BODIES.fullPlanet.cx} cy={CELESTIAL_BODIES.fullPlanet.cy} r={CELESTIAL_BODIES.fullPlanet.innerR} fill={CELESTIAL_BODIES.fullPlanet.color} opacity="0.04" />
        {/* Eclipse */}
        <circle cx={CELESTIAL_BODIES.eclipse.cx} cy={CELESTIAL_BODIES.eclipse.cy} r={CELESTIAL_BODIES.eclipse.r} fill={CELESTIAL_BODIES.eclipse.color} opacity="0.08" />
        <circle cx={CELESTIAL_BODIES.eclipse.cx} cy={CELESTIAL_BODIES.eclipse.cy} r={CELESTIAL_BODIES.eclipse.outerR} fill="none" stroke={CELESTIAL_BODIES.eclipse.color} strokeWidth="0.5" opacity="0.12" />
        {/* Concentric target */}
        <circle cx={CELESTIAL_BODIES.concentricTarget.cx} cy={CELESTIAL_BODIES.concentricTarget.cy} r={CELESTIAL_BODIES.concentricTarget.radii[0]} fill="none" stroke={CELESTIAL_BODIES.concentricTarget.color} strokeWidth="1" opacity="0.12" />
        <circle cx={CELESTIAL_BODIES.concentricTarget.cx} cy={CELESTIAL_BODIES.concentricTarget.cy} r={CELESTIAL_BODIES.concentricTarget.radii[1]} fill="none" stroke={CELESTIAL_BODIES.concentricTarget.color} strokeWidth="0.5" opacity="0.1" />
        <circle cx={CELESTIAL_BODIES.concentricTarget.cx} cy={CELESTIAL_BODIES.concentricTarget.cy} r={CELESTIAL_BODIES.concentricTarget.radii[2]} fill={CELESTIAL_BODIES.concentricTarget.color} opacity="0.15" />

        {/* Scattered sacred symbols */}
        {/* Upward triangle */}
        <polygon points={SYMBOLS.upTriangle} fill="none" stroke={PALETTE.gold} strokeWidth="0.8" opacity="0.12" />
        {/* Downward triangle */}
        <polygon points={SYMBOLS.downTriangle} fill="none" stroke={PALETTE.darkGold} strokeWidth="0.8" opacity="0.1" />
        {/* Diamond */}
        <polygon points={SYMBOLS.diamond} fill="none" stroke={PALETTE.softGold} strokeWidth="0.6" opacity="0.1" />
        {/* Tiny 4-point stars */}
        {SYMBOLS.fourPointStars.map(([x, y], i) => (
          <g key={`tstar-${i}`} opacity={0.15 - i * 0.02}>
            <line x1={x - 5} y1={y} x2={x + 5} y2={y} stroke={PALETTE.cream} strokeWidth="0.8" />
            <line x1={x} y1={y - 5} x2={x} y2={y + 5} stroke={PALETTE.cream} strokeWidth="0.8" />
          </g>
        ))}
      </svg>

      {/* Warm radial glow at center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.08)_0%,rgba(200,134,14,0.04)_40%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-sm uppercase tracking-[0.5em] text-[#daa520]/40">{COPY.subtitle}</p>
        <div className="relative my-8">
          <EggplantImage
            src={EGGPLANT.src}
            sizeClass="h-52 w-52"
            filter={EGGPLANT.filter}
            float
            glow={{
              gradient: "radial-gradient(circle, rgba(240,192,64,0.08) 0%, transparent 60%)",
              size: "calc(100% + 8rem)",
            }}
          />
        </div>
        <h1 className="font-mono text-48 uppercase text-[#f5e6c0] md:text-72">
          {COPY.titleLine1}<br /><span className="text-[#daa520]">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-[#c8b080]/50">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}

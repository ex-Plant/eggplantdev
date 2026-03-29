"use client";

/* Agent: Claude — EggplantsInSpace */

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE_GOLD,
  SVG_CENTER,
  METATRON_CIRCLES,
  METATRON_LINES,
  OUTER_CIRCLES_GOLD,
  STAR_PARTICLES,
  COPY,
} from "./config-gold";

export function HeroEggplantsInSpace() {
  return (
    <EggplantRadialWrapper>
      <div id="hero-eggplants-in-space" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Sacred geometry background */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {METATRON_CIRCLES.map(([cx, cy], i) => (
            <circle key={`mc-${i}`} cx={cx} cy={cy} r={100} fill="none" stroke={PALETTE_GOLD.gold} strokeWidth="0.4" opacity="0.15" />
          ))}
          {METATRON_LINES.map((d, i) => (
            <path key={`line-${i}`} d={d} fill="none" stroke={PALETTE_GOLD.warmGold} strokeWidth="0.5" opacity="0.1" />
          ))}
          {OUTER_CIRCLES_GOLD.map((circle) => (
            <circle key={circle.r} cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={circle.r} fill="none" stroke={circle.stroke} strokeWidth={circle.strokeWidth} opacity={circle.opacity} strokeDasharray={circle.dasharray} />
          ))}
        </svg>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative">
            <EggplantImage
              sizeClass="h-48 w-48"
              preset="golden-metallic"
              float
              /* Zero-gravity modes: "tumble" | "jelly" | "orbital" */
              floatMode="tumble"
              glowPreset="gold"
            />
            {/* Halo rings — gold */}
            <div className="absolute -inset-8 rounded-full border border-gold/15" />
            <div className="absolute -inset-16 rounded-full border border-gold/8" />
            <div className="absolute -inset-24 rounded-full border border-dashed border-gold-dark/[0.06]" />
          </div>

          <h1 className="mt-12 font-mono text-20 uppercase tracking-[0.4em] text-gold">
            {COPY.title}
          </h1>
          <p className="mt-4 max-w-md text-16 text-gold-caption/40">
            {COPY.description}
          </p>
        </div>

        {/* Star particles */}
        {STAR_PARTICLES.map(([x, y], i) => (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: i % 3 === 0 ? 3 : 1.5,
              height: i % 3 === 0 ? 3 : 1.5,
              opacity: 0.12 + (i % 4) * 0.08,
              backgroundColor: i % 2 === 0 ? PALETTE_GOLD.cream : PALETTE_GOLD.warmGold,
            }}
          />
        ))}
      </div>
    </EggplantRadialWrapper>
  );
}

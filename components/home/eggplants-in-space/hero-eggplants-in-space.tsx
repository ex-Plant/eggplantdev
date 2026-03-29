"use client";

/* Agent: Claude — EggplantsInSpace */

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import { HeroTitle } from "@/components/home/hero-title";
import { HeroDescription } from "@/components/home/hero-description";
import {
  SVG_CENTER,
  METATRON_CIRCLES,
  METATRON_LINES,
  OUTER_CIRCLES_GOLD,
  STAR_PARTICLES,
  COPY,
} from "./config";

export function HeroEggplantsInSpace() {
  return (
    <EggplantRadialWrapper>
      <div id="hero-eggplants-in-space" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Sacred geometry background */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {METATRON_CIRCLES.map(([cx, cy], i) => (
            <circle key={`mc-${i}`} cx={cx} cy={cy} r={100} fill="none" stroke="var(--color-gold)" strokeWidth="0.4" opacity="0.15" />
          ))}
          {METATRON_LINES.map((d, i) => (
            <path key={`line-${i}`} d={d} fill="none" stroke="var(--color-gold-warm)" strokeWidth="0.5" opacity="0.1" />
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
              /* Zero-gravity modes: "tumble" | "jelly" | "orbital" */
              floatMode="tumble"
              glowPreset="gold"
            />
            {/* Halo rings — gold */}
            <div className="absolute -inset-8 rounded-full border border-gold/15" />
            <div className="absolute -inset-16 rounded-full border border-gold/8" />
            <div className="absolute -inset-24 rounded-full border border-dashed border-gold-dark/[0.06]" />
          </div>

          <HeroTitle
            line1={COPY.titleLine1}
            line2={COPY.titleLine2}
            className="mt-12 pt-1 tracking-tight"
          />
          <HeroDescription className="mt-4">{COPY.description}</HeroDescription>
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
              backgroundColor: i % 2 === 0 ? "var(--color-gold-cream)" : "var(--color-gold-warm)",
            }}
          />
        ))}
      </div>
    </EggplantRadialWrapper>
  );
}

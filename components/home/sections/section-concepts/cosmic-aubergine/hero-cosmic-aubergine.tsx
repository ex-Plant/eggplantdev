"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  PALETTE_GOLD,
  FLOWER_CIRCLES,
  GEOMETRY,
  COPY,
  buildNebulaClouds,
} from "./config";
import type { CosmicPaletteT } from "./config";

type CosmicPropsT = { palette?: CosmicPaletteT };

/** Wrapped version with per-section bg animation (used on home page) */
export function HeroCosmicAubergine({ palette }: CosmicPropsT = {}) {
  const p = palette ?? PALETTE;
  return (
    <EggplantRadialWrapper
     
    >
      <CosmicAubergineContent palette={palette} />
    </EggplantRadialWrapper>
  );
}

/** Golden palette variant with silver/desaturated eggplant */
export function SectionCosmicAubergineGold() {
  return <HeroCosmicAubergine palette={PALETTE_GOLD} />;
}

/** Raw content — no bg wrapper, usable inside ScrollBackdropProvider */
export function CosmicAubergineContent({ palette }: CosmicPropsT = {}) {
  const p = palette ?? PALETTE;
  const clouds = buildNebulaClouds(p);

  return (
    <div id="hero-cosmic-aubergine" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Deep space nebula */}
      <div className="pointer-events-none absolute inset-0">
        {clouds.map((cloud, i) => (
          <div key={i} className={`absolute ${cloud.position} ${cloud.size} rounded-full`} style={{ backgroundImage: cloud.gradient }} />
        ))}
      </div>

      <div className="fest-container relative z-10 grid gap-16 md:grid-cols-2 md:items-center">
        {/* Left: text */}
        <div>
          <p className="font-mono text-16 uppercase tracking-[0.3em]" style={{ color: `${p.accent1}80` }}>{COPY.subtitle}</p>
          <h1 className="mt-6 font-mono text-64 uppercase leading-none text-white md:text-[5.5rem]">
            {COPY.titleLine1}<br />
            <span style={{ color: p.accent2 }}>{COPY.titleLine2}</span><br />
            {COPY.titleLine3}
          </h1>
          <p className="mt-8 max-w-md text-20 text-white/35 leading-relaxed">
            {COPY.description}
          </p>
          <div className="mt-10 flex gap-4">
            <span className="rounded-full border px-5 py-2.5 font-mono text-sm uppercase tracking-wider" style={{ borderColor: `${p.accent1}4d`, color: `${p.accent1}99` }}>{COPY.buttons[0]}</span>
            <span className="rounded-full border px-5 py-2.5 font-mono text-sm uppercase tracking-wider" style={{ borderColor: `${p.accent2}4d`, color: `${p.accent2}99` }}>{COPY.buttons[1]}</span>
          </div>
        </div>

        {/* Right: eggplant with geometry */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <svg className="absolute h-[420px] w-[420px] overflow-hidden" viewBox="0 0 420 420">
            {/* Flower of life fragment */}
            {FLOWER_CIRCLES.map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={70} fill="none" stroke={p.accent2} strokeWidth="0.5" opacity="0.12" />
            ))}
            {/* Outer ring */}
            <circle cx={GEOMETRY.outerRing.cx} cy={GEOMETRY.outerRing.cy} r={GEOMETRY.outerRing.r} fill="none" stroke={p.accent1} strokeWidth="0.6" opacity="0.1" strokeDasharray="6 10" />
            {/* Triangle */}
            <polygon points={GEOMETRY.triangleUp} fill="none" stroke={p.accent1} strokeWidth="0.4" opacity="0.06" />
            <polygon points={GEOMETRY.triangleDown} fill="none" stroke={p.accent2} strokeWidth="0.4" opacity="0.05" />
          </svg>

          <EggplantImage sizeClass="h-56 w-56" preset={p.eggplantPreset}/>
        </div>
      </div>
    </div>
  );
}

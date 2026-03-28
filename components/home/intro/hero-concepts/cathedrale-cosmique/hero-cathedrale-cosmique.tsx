/* Agent: Claude — Cathedrale Cosmique */

"use client";

import AnimatedBgWrapper from "@/components/animations/animated-bg-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  buildStars,
  PETAL_ANGLES,
  SVG_CENTER,
  ARCH_OUTER,
  ARCH_INNER,
  ROSE_RINGS,
  EGGPLANT,
  COPY,
} from "./config";

/** Wrapped version with per-section bg animation (used on home page) */
export function HeroCathedralCosmique() {
  return (
    <AnimatedBgWrapper maskStyle={{ backgroundColor: "#0a0806" }}>
      <CathedraleCosmiquContent />
    </AnimatedBgWrapper>
  );
}

/** Raw content — no bg wrapper, usable inside ScrollBackdropProvider */
export function CathedraleCosmiquContent() {
  const petals = PETAL_ANGLES;
  const stars = buildStars();

  return (
    <div id="hero-cathedrale-cosmique" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Star field */}
      {stars.map((s, i) => (
        <div key={`s-${i}`} className="absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Gothic pointed arch frame */}
        <path d={ARCH_OUTER} fill="none" stroke={PALETTE.darkGold} strokeWidth="1.2" opacity="0.12" />
        <path d={ARCH_INNER} fill="none" stroke={PALETTE.brightGold} strokeWidth="0.6" opacity="0.08" />

        {/* Rose window rings */}
        {ROSE_RINGS.map((ring, i) => (
          <circle key={`ring-${i}`} cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={ring.r} fill="none" stroke={ring.stroke} strokeWidth={ring.strokeWidth} opacity={ring.opacity} />
        ))}

        {/* 12 radiating petals */}
        {petals.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          const color = i % 3 === 0 ? PALETTE.rose : i % 2 === 0 ? PALETTE.brightGold : PALETTE.gold;
          const op = i % 3 === 0 ? 0.08 : 0.14;
          return (
            <g key={`p-${i}`}>
              {/* Petal ellipse */}
              <ellipse cx={SVG_CENTER.x + 130 * cos} cy={SVG_CENTER.y + 130 * sin} rx="40" ry="14" fill="none" stroke={color} strokeWidth="0.8" opacity={op} transform={`rotate(${deg},${SVG_CENTER.x + 130 * cos},${SVG_CENTER.y + 130 * sin})`} />
              {/* Radial spoke */}
              <line x1={SVG_CENTER.x + 65 * cos} y1={SVG_CENTER.y + 65 * sin} x2={SVG_CENTER.x + 220 * cos} y2={SVG_CENTER.y + 220 * sin} stroke={PALETTE.gold} strokeWidth="0.5" opacity="0.1" />
              {/* Trefoil at petal intersection with outer ring */}
              <circle cx={SVG_CENTER.x + 190 * cos} cy={SVG_CENTER.y + 190 * sin} r="6" fill="none" stroke={PALETTE.brightGold} strokeWidth="0.6" opacity="0.1" />
              <circle cx={SVG_CENTER.x + 190 * cos + 5} cy={SVG_CENTER.y + 190 * sin} r="3" fill="none" stroke={PALETTE.darkGold} strokeWidth="0.4" opacity="0.08" />
              <circle cx={SVG_CENTER.x + 190 * cos - 5} cy={SVG_CENTER.y + 190 * sin} r="3" fill="none" stroke={PALETTE.darkGold} strokeWidth="0.4" opacity="0.08" />
            </g>
          );
        })}

        {/* Small decorative segments between petals on middle ring */}
        {petals.map((deg, i) => {
          const mid = ((deg + 15) * Math.PI) / 180;
          return <circle key={`d-${i}`} cx={SVG_CENTER.x + 160 * Math.cos(mid)} cy={SVG_CENTER.y + 160 * Math.sin(mid)} r="4" fill="none" stroke={PALETTE.cream} strokeWidth="0.5" opacity="0.08" />;
        })}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-12 uppercase tracking-[0.5em] text-[#ffd700]/35">{COPY.eyebrow}</p>
        <EggplantImage
          float
          sizeClass="h-48 w-48"
          className="mt-6"
          filter={EGGPLANT.filter}
          glow={{
            size: "500px",
            gradient: "radial-gradient(ellipse, rgba(218,165,32,0.07) 0%, transparent 65%)",
          }}
        />
        <h1 className="mt-8 font-mono text-48 uppercase leading-tight text-[#f5e6c0] md:text-72">
          {COPY.titleLine1}<br /><span className="text-[#ffd700]">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-5 max-w-md text-16 text-[#c8b080]/45">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}

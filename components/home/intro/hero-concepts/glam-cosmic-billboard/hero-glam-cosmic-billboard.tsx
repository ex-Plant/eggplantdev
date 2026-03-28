"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  GLAM_STRIPES,
  ORBITAL_ARCS,
  SPARKLES,
  EGGPLANT,
  COPY,
} from "./config";

/** Wrapped version with per-section bg animation */
export function HeroGlamCosmicBillboard() {
  return (
    <EggplantRadialWrapper>
      <GlamCosmicBillboardContent />
    </EggplantRadialWrapper>
  );
}

/** Raw content — no bg wrapper, usable inside ScrollBackdropProvider */
export function GlamCosmicBillboardContent() {
  return (
    <div id="hero-glam-cosmic-billboard" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Dual-tone nebula wash */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[70%] w-[50%] bg-[radial-gradient(ellipse_at_top_left,rgba(218,165,32,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-[70%] w-[50%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,20,147,0.06),transparent_60%)]" />
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Diagonal glam stripe */}
        {GLAM_STRIPES.map((stripe, i) => (
          <line key={`stripe-${i}`} x1="0" y1={stripe.y1} x2="1200" y2={stripe.y2} stroke={stripe.stroke} strokeWidth={stripe.strokeWidth} opacity={stripe.opacity} />
        ))}

        {/* Orbital arcs — gold and pink */}
        {ORBITAL_ARCS.map((arc, i) => (
          <ellipse key={`arc-${i}`} cx={arc.cx} cy={arc.cy} rx={arc.rx} ry={arc.ry} fill="none" stroke={arc.stroke} strokeWidth={arc.strokeWidth} opacity={arc.opacity} transform={`rotate(${arc.rotate} ${arc.cx} ${arc.cy})`} />
        ))}

        {/* Sparkle cluster */}
        {SPARKLES.map((s, i) => (
          <g key={`sparkle-${i}`} opacity={s.opacity}>
            <line x1={s.x - 3} y1={s.y} x2={s.x + 3} y2={s.y} stroke={s.color} strokeWidth="0.8" />
            <line x1={s.x} y1={s.y - 3} x2={s.x} y2={s.y + 3} stroke={s.color} strokeWidth="0.8" />
          </g>
        ))}
      </svg>

      <div className="fest-container relative z-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.4em] text-[#ff1493]/40">{COPY.subtitle}</p>
          <h1 className="mt-4 text-[4rem] font-bold uppercase leading-[0.9] text-[#f5e6c0] md:text-[6rem]" style={{ fontFamily: "monospace" }}>
            {COPY.titleLine1}<br />
            <span className="text-[#daa520]">{COPY.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-md text-20 text-[#c8b080]/40 leading-relaxed">
            {COPY.description}
          </p>
          <div className="mt-8 flex gap-4">
            <span className="rounded-full bg-[#daa520]/10 border border-[#daa520]/25 px-6 py-2.5 font-mono text-sm uppercase tracking-wider text-[#daa520]/70">{COPY.buttons[0]}</span>
            <span className="rounded-full border border-[#ff1493]/20 px-6 py-2.5 font-mono text-sm uppercase tracking-wider text-[#ff1493]/50">{COPY.buttons[1]}</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <EggplantImage
            sizeClass="h-56 w-56"
            filter={EGGPLANT.filter}
            float
            glow={{
              size: "350px",
              gradient: "radial-gradient(circle, rgba(218,165,32,0.1) 0%, rgba(255,20,147,0.04) 50%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

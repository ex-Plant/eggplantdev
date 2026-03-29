"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  GLAM_STRIPES,
  ORBITAL_ARCS,
  SPARKLES,
  COPY,
  PALETTE,
} from "./config";

/* ── Orbit dot config ── */
const ORBIT_DOT_COUNT = 1;
const ORBIT_DURATION_S = 44;

/* ── Stripe pulse config ── */
const STRIPE_PULSE_COUNT = 1;
/* One dot per stripe, different speeds */
const STRIPE_DURATIONS = [52, 60];

/* Build an SVG ellipse path for <animateMotion>.
   The gold arc: cx=400 cy=400 rx=300 ry=350 rotate=-15.
   We need a closed path in the rotated coordinate space. */
function buildEllipseMotionPath(arc: (typeof ORBITAL_ARCS)[0]) {
  const rad = (arc.rotate * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  /* Start point: leftmost of ellipse in local coords, then rotate */
  const lx = -arc.rx;
  const ly = 0;
  const sx = arc.cx + lx * cos - ly * sin;
  const sy = arc.cy + lx * sin + ly * cos;

  return `M ${sx} ${sy} A ${arc.rx} ${arc.ry} ${arc.rotate} 1 1 ${arc.cx + arc.rx * cos} ${arc.cy + arc.rx * sin} A ${arc.rx} ${arc.ry} ${arc.rotate} 1 1 ${sx} ${sy} Z`;
}

/** Wrapped version with per-section bg animation */
export function HeroGlamCosmicBillboard() {
  const goldArc = ORBITAL_ARCS[0];
  const orbitPath = buildEllipseMotionPath(goldArc);

  /* The two thin visible stripes (hot pink & gold edges) */
  const animatedStripes = [GLAM_STRIPES[1], GLAM_STRIPES[2]];

  return (
    <EggplantRadialWrapper>
    <div id="hero-glam-cosmic-billboard" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Dual-tone nebula wash */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[70%] w-[50%] bg-[radial-gradient(ellipse_at_top_left,rgba(218,165,32,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-[70%] w-[50%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,20,147,0.06),transparent_60%)]" />
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Glow filter */}
          <filter id="glamGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial glow gradients for orbit dots */}
          <radialGradient id="orbitDotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={PALETTE.gold} stopOpacity="0.5" />
            <stop offset="40%" stopColor={PALETTE.gold} stopOpacity="0.15" />
            <stop offset="100%" stopColor={PALETTE.gold} stopOpacity="0" />
          </radialGradient>

          {/* Radial glow for gold stripe dots */}
          <radialGradient id="stripeGoldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={PALETTE.gold} stopOpacity="0.45" />
            <stop offset="35%" stopColor={PALETTE.gold} stopOpacity="0.12" />
            <stop offset="100%" stopColor={PALETTE.gold} stopOpacity="0" />
          </radialGradient>

          {/* Radial glow for pink stripe dots */}
          <radialGradient id="stripePinkGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={PALETTE.hotPink} stopOpacity="0.4" />
            <stop offset="35%" stopColor={PALETTE.hotPink} stopOpacity="0.1" />
            <stop offset="100%" stopColor={PALETTE.hotPink} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Diagonal glam stripes */}
        {GLAM_STRIPES.map((stripe, i) => (
          <line key={`stripe-${i}`} x1="0" y1={stripe.y1} x2="1200" y2={stripe.y2} stroke={stripe.stroke} strokeWidth={stripe.strokeWidth} opacity={stripe.opacity} />
        ))}

        {/* Orbital arcs — gold and pink */}
        {ORBITAL_ARCS.map((arc, i) => (
          <ellipse key={`arc-${i}`} cx={arc.cx} cy={arc.cy} rx={arc.rx} ry={arc.ry} fill="none" stroke={arc.stroke} strokeWidth={arc.strokeWidth} opacity={arc.opacity} transform={`rotate(${arc.rotate} ${arc.cx} ${arc.cy})`} />
        ))}

        {/* ── Animation 1: Pulsating dot orbiting the gold ellipse ── */}
        <g filter="url(#glamGlow)">
          <circle r="10" fill="url(#orbitDotGlow)" opacity="0.9">
            <animateMotion
              dur={`${ORBIT_DURATION_S}s`}
              repeatCount="indefinite"
              path={orbitPath}
              rotate="auto"
            />
            {/* Gentle size pulse only — opacity stays high throughout */}
            <animate
              attributeName="r"
              values="8;12;9;11;8"
              keyTimes="0;0.25;0.5;0.75;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* ── Animation 2: Pulse dots traveling along diagonal stripes ── */}
        {animatedStripes.map((stripe, si) => {
          const isGold = stripe.stroke === PALETTE.gold;
          const gradientId = isGold ? "stripeGoldGlow" : "stripePinkGlow";
          const linePath = `M 0 ${stripe.y1} L 1200 ${stripe.y2}`;

          return Array.from({ length: STRIPE_PULSE_COUNT }, (_, di) => {
            const dur = STRIPE_DURATIONS[si * STRIPE_PULSE_COUNT + di];
            const delay = di * 8 + si * 5;
            return (
              <g key={`stripe-dot-${si}-${di}`} filter="url(#glamGlow)">
                <circle r="20" fill={`url(#${gradientId})`}>
                  {/* keyPoints: full path in first 65%, hold at end for 35% idle */}
                  <animateMotion
                    dur={`${dur}s`}
                    repeatCount="indefinite"
                    path={linePath}
                    begin={`${delay}s`}
                    keyPoints="0;1;1"
                    keyTimes="0;0.65;1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0.7;0.5;0.3;0;0"
                    keyTimes="0;0.02;0.2;0.45;0.6;0.65;1"
                    dur={`${dur}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="8;22;18;14;10;8;8"
                    keyTimes="0;0.02;0.2;0.45;0.6;0.65;1"
                    dur={`${dur}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          });
        })}

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
            preset="glam-gold"
            float
            glowPreset="gold-pink"
          />
        </div>
      </div>
    </div>
    </EggplantRadialWrapper>
  );
}

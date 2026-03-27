"use client";
/* Agent: Claude — SolarSystemZodiac */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PLANETS = [
  { radius: 170, duration: 38, angle: 0, floatDur: 1.8, filter: "sepia(0.2) saturate(2) hue-rotate(280deg) brightness(1.1)" },
  { radius: 170, duration: 46, angle: Math.PI / 2, floatDur: 2.1, filter: "sepia(0.2) saturate(2) hue-rotate(140deg) brightness(1.1)" },
  { radius: 170, duration: 54, angle: Math.PI, floatDur: 1.6, filter: "sepia(0.4) saturate(2.5) hue-rotate(10deg) brightness(1.2)" },
  { radius: 170, duration: 62, angle: (3 * Math.PI) / 2, floatDur: 2.3, filter: "sepia(0.3) saturate(2) hue-rotate(230deg) brightness(0.9)" },
];

const INNER_R = 130;
const OUTER_R = 220;
const SEGMENTS = 12;
const TICK_LEN = 10;

function star4(cx: number, cy: number, r: number): string {
  return `M${cx},${cy - r} L${cx + r * 0.25},${cy} L${cx},${cy + r} L${cx - r * 0.25},${cy} Z M${cx - r},${cy} L${cx},${cy - r * 0.25} L${cx + r},${cy} L${cx},${cy + r * 0.25} Z`;
}

const STARS = [[-280, -200, 5], [300, -180, 4], [-250, 220, 3.5], [320, 200, 4.5], [0, -260, 3], [-340, 0, 4], [350, 60, 3.5]];

export function SolarSystemZodiac() {
  const sunRef = useRef<HTMLImageElement>(null);
  const orbitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const planetRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(() => {
    if (sunRef.current) gsap.to(sunRef.current, { y: -10, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });

    PLANETS.forEach((p, i) => {
      const wrapper = orbitRefs.current[i];
      const img = planetRefs.current[i];
      if (!wrapper || !img) return;
      const proxy = { angle: p.angle };
      gsap.to(proxy, {
        angle: p.angle + Math.PI * 2, duration: p.duration, ease: "none", repeat: -1,
        onUpdate: () => { if (wrapper) gsap.set(wrapper, { x: Math.cos(proxy.angle) * p.radius, y: Math.sin(proxy.angle) * p.radius }); },
      });
      gsap.to(img, { y: -10, duration: p.floatDur, ease: "sine.inOut", yoyo: true, repeat: -1 });
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#0a0806]">
      <svg className="absolute inset-0 h-full w-full" viewBox="-400 -300 800 600" fill="none">
        <circle r={INNER_R} cx={0} cy={0} stroke="#daa520" strokeWidth={0.6} opacity={0.15} />
        <circle r={OUTER_R} cx={0} cy={0} stroke="#daa520" strokeWidth={0.6} opacity={0.15} />
        <circle r={(INNER_R + OUTER_R) / 2} cx={0} cy={0} stroke="#c8860e" strokeWidth={0.3} opacity={0.08} strokeDasharray="4 6" />
        {Array.from({ length: SEGMENTS }, (_, i) => {
          const a = (i / SEGMENTS) * Math.PI * 2;
          return <line key={`s${i}`} x1={Math.cos(a) * INNER_R} y1={Math.sin(a) * INNER_R} x2={Math.cos(a) * OUTER_R} y2={Math.sin(a) * OUTER_R} stroke="#f0c040" strokeWidth={0.4} opacity={0.12} />;
        })}
        {Array.from({ length: SEGMENTS * 5 }, (_, i) => {
          const a = (i / (SEGMENTS * 5)) * Math.PI * 2;
          return <line key={`t${i}`} x1={Math.cos(a) * OUTER_R} y1={Math.sin(a) * OUTER_R} x2={Math.cos(a) * (OUTER_R + TICK_LEN)} y2={Math.sin(a) * (OUTER_R + TICK_LEN)} stroke="#daa520" strokeWidth={0.3} opacity={0.1} />;
        })}
        {STARS.map(([x, y, r], i) => <path key={`st${i}`} d={star4(x, y, r)} fill="#ffd700" opacity={0.15} />)}
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="absolute" style={{ width: "clamp(12rem, 30vw, 20rem)", height: "clamp(12rem, 30vw, 20rem)", background: "radial-gradient(circle, rgba(255,215,0,0.18) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)", transform: "translate(-50%, -50%)", left: "50%", top: "50%" }} />
        <img ref={sunRef} src="/logos/eggplant-logo-smooth.apng" alt="Sun eggplant" className="h-40 w-40" style={{ filter: "sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15)" }} />

        {PLANETS.map((p, i) => (
          <div key={i} ref={(el) => { orbitRefs.current[i] = el; }} className="absolute">
            <img ref={(el) => { planetRefs.current[i] = el; }} src="/logos/eggplant-logo-smooth.apng" alt={`Planet ${i + 1}`} className="h-16 w-16" style={{ filter: p.filter }} />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-[8%] z-20 text-center">
        <p className="font-mono uppercase text-[#ffd700]/35" style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.75rem)", letterSpacing: "clamp(0.2em, 0.5vw, 0.5em)" }}>Astral cartography</p>
        <h2 className="font-mono uppercase tracking-wider text-[#ffd700]" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>Zodiac Wheel</h2>
      </div>
    </div>
  );
}

"use client";
/* Agent: Claude — SolarSystemRadiant */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PLANETS = [
  { radius: 140, duration: 36, angle: 0, floatDur: 1.8, filter: "sepia(0.2) saturate(2) hue-rotate(280deg) brightness(1.1)" },
  { radius: 210, duration: 52, angle: (2 * Math.PI) / 3, floatDur: 2.0, filter: "sepia(0.2) saturate(2) hue-rotate(140deg) brightness(1.1)" },
  { radius: 280, duration: 68, angle: (4 * Math.PI) / 3, floatDur: 1.6, filter: "sepia(0.4) saturate(2.5) hue-rotate(10deg) brightness(1.2)" },
];

const RAYS = 24;
const DIAMONDS = [100, 180, 260];
const BRACKET = 12;

function diamondPath(r: number): string {
  return `M0,${-r} L${r},0 L0,${r} L${-r},0 Z`;
}

export function SolarSystemRadiant() {
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
        {Array.from({ length: RAYS }, (_, i) => {
          const a = (i / RAYS) * Math.PI * 2;
          return <line key={`r${i}`} x1={0} y1={0} x2={Math.cos(a) * 380} y2={Math.sin(a) * 380} stroke="#daa520" strokeWidth={0.4} opacity={0.1} />;
        })}
        {DIAMONDS.map((r, i) => <path key={`d${i}`} d={diamondPath(r)} stroke="#f0c040" strokeWidth={0.5} opacity={0.12} />)}
        {/* Art deco corner brackets */}
        {[[-380, -280], [380, -280], [-380, 280], [380, 280]].map(([bx, by], i) => {
          const sx = bx > 0 ? -1 : 1; const sy = by > 0 ? -1 : 1;
          return <path key={`b${i}`} d={`M${bx},${by + sy * BRACKET * 4} L${bx},${by} L${bx + sx * BRACKET * 4},${by}`} stroke="#c8860e" strokeWidth={1} opacity={0.25} fill="none" />;
        })}
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
        <p className="font-mono uppercase text-[#ffd700]/35" style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.75rem)", letterSpacing: "clamp(0.2em, 0.5vw, 0.5em)" }}>Solar radiance</p>
        <h2 className="font-mono uppercase tracking-wider text-[#ffd700]" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>Radiant Crown</h2>
      </div>
    </div>
  );
}

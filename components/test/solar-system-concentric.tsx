"use client";
/* Agent: Claude — SolarSystemConcentric */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PLANETS = [
  { radius: 120, duration: 30, angle: 0, floatDur: 1.7, filter: "sepia(0.2) saturate(2) hue-rotate(280deg) brightness(1.1)" },
  { radius: 180, duration: 42, angle: Math.PI / 2, floatDur: 2.0, filter: "sepia(0.2) saturate(2) hue-rotate(140deg) brightness(1.1)" },
  { radius: 240, duration: 56, angle: Math.PI, floatDur: 1.9, filter: "sepia(0.4) saturate(2.5) hue-rotate(10deg) brightness(1.2)" },
  { radius: 300, duration: 70, angle: (3 * Math.PI) / 2, floatDur: 2.2, filter: "sepia(0.3) saturate(2) hue-rotate(230deg) brightness(0.9)" },
];

export function SolarSystemConcentric() {
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
        {PLANETS.map((p, i) => (
          <circle key={i} r={p.radius} cx={0} cy={0} stroke="#daa520" strokeWidth={0.5} opacity={0.15} />
        ))}
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
        <p className="font-mono uppercase text-[#ffd700]/35" style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.75rem)", letterSpacing: "clamp(0.2em, 0.5vw, 0.5em)" }}>Celestial mechanics</p>
        <h2 className="font-mono uppercase tracking-wider text-[#ffd700]" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>Concentric Orbits</h2>
      </div>
    </div>
  );
}

"use client";
/* Agent: Claude — SolarSystemHexagonal */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PLANETS = [
  { orbitR: 40, centerAngle: 0, duration: 8, floatDur: 1.7, filter: "sepia(0.2) saturate(2) hue-rotate(280deg) brightness(1.1)" },
  { orbitR: 40, centerAngle: (2 * Math.PI) / 5, duration: 9, floatDur: 2.0, filter: "sepia(0.2) saturate(2) hue-rotate(140deg) brightness(1.1)" },
  { orbitR: 40, centerAngle: (4 * Math.PI) / 5, duration: 10, floatDur: 1.9, filter: "sepia(0.4) saturate(2.5) hue-rotate(10deg) brightness(1.2)" },
  { orbitR: 40, centerAngle: (6 * Math.PI) / 5, duration: 11, floatDur: 2.2, filter: "sepia(0.3) saturate(2) hue-rotate(230deg) brightness(0.9)" },
  { orbitR: 40, centerAngle: (8 * Math.PI) / 5, duration: 8.5, floatDur: 1.6, filter: "sepia(0.2) saturate(2) hue-rotate(80deg) brightness(1.1)" },
];
const FORMATION_R = 200;

function hexGrid(): string[] {
  const paths: string[] = [];
  const size = 50;
  const h = size * Math.sqrt(3);
  for (let row = -4; row <= 4; row++) {
    for (let col = -5; col <= 5; col++) {
      const cx = col * size * 1.5;
      const cy = row * h + (col % 2 !== 0 ? h / 2 : 0);
      const pts = Array.from({ length: 6 }, (_, k) => {
        const a = (Math.PI / 3) * k - Math.PI / 6;
        return `${cx + (size * 0.45) * Math.cos(a)},${cy + (size * 0.45) * Math.sin(a)}`;
      });
      paths.push(`M${pts.join("L")}Z`);
    }
  }
  return paths;
}

export function SolarSystemHexagonal() {
  const sunRef = useRef<HTMLImageElement>(null);
  const orbitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const planetRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(() => {
    if (sunRef.current) gsap.to(sunRef.current, { y: -10, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });

    PLANETS.forEach((p, i) => {
      const wrapper = orbitRefs.current[i];
      const img = planetRefs.current[i];
      if (!wrapper || !img) return;
      const cx = Math.cos(p.centerAngle) * FORMATION_R;
      const cy = Math.sin(p.centerAngle) * FORMATION_R;
      const proxy = { angle: 0 };
      gsap.to(proxy, {
        angle: Math.PI * 2, duration: p.duration, ease: "none", repeat: -1,
        onUpdate: () => { if (wrapper) gsap.set(wrapper, { x: cx + Math.cos(proxy.angle) * p.orbitR, y: cy + Math.sin(proxy.angle) * p.orbitR }); },
      });
      gsap.to(img, { y: -10, duration: p.floatDur, ease: "sine.inOut", yoyo: true, repeat: -1 });
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#0a0806]">
      <svg className="absolute inset-0 h-full w-full" viewBox="-400 -300 800 600" fill="none">
        {hexGrid().map((d, i) => <path key={i} d={d} stroke="#daa520" strokeWidth={0.4} opacity={0.1} />)}
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
        <p className="font-mono uppercase text-[#ffd700]/35" style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.75rem)", letterSpacing: "clamp(0.2em, 0.5vw, 0.5em)" }}>Hex formation</p>
        <h2 className="font-mono uppercase tracking-wider text-[#ffd700]" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>Honeycomb Drift</h2>
      </div>
    </div>
  );
}

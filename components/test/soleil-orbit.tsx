"use client";
/* Soleil Aubergine — eggplant drifting in a slow orbit, floating in space */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SoleilBackground } from "@/components/test/soleil-background";

const ORBIT_RADIUS = 180;
const ORBIT_DURATION = 50;

export function SoleilOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const eggplantRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!orbitRef.current || !eggplantRef.current) return;

    // Slow orbit on the wrapper div
    const proxy = { angle: 0 };
    gsap.to(proxy, {
      angle: Math.PI * 2,
      duration: ORBIT_DURATION,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        if (!orbitRef.current) return;
        const x = Math.cos(proxy.angle) * ORBIT_RADIUS;
        const y = Math.sin(proxy.angle) * ORBIT_RADIUS;
        gsap.set(orbitRef.current, { x, y });
      },
    });

    // Yo-yo float — same as eggplant logo: y: -16, 1.8s, sine.inOut
    gsap.to(eggplantRef.current, {
      y: -12,
      duration: 1.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <SoleilBackground />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div ref={orbitRef}>
          <img
            ref={eggplantRef}
            src="/logos/eggplant-logo-smooth.apng"
            alt="Orbiting eggplant"
            className="h-20 w-20 origin-center drop-shadow-[0_0_40px_rgba(255,215,0,0.4)]"
            style={{ filter: "sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15)" }}
          />
        </div>
      </div>
    </div>
  );
}

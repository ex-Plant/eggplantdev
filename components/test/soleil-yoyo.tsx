"use client";
/* Soleil Aubergine — eggplant-only yo-yo float over fixed background */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SoleilBackground } from "@/components/test/soleil-background";

export function SoleilYoyo() {
  const eggplantRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!eggplantRef.current) return;

    gsap.to(eggplantRef.current, {
      y: -16,
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
        <img
          ref={eggplantRef}
          src="/logos/eggplant-logo-smooth.apng"
          alt="Floating eggplant"
          className="h-52 w-52 origin-center drop-shadow-[0_0_40px_rgba(255,215,0,0.4)]"
          style={{ filter: "sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15)" }}
        />
      </div>
    </div>
  );
}

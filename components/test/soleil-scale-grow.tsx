"use client";
/* Soleil Aubergine — eggplant scales from near-invisible to viewport overflow */

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SoleilBackground } from "@/components/test/soleil-background";

gsap.registerPlugin(ScrollTrigger);

export function SoleilScaleGrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eggplantRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !eggplantRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        eggplantRef.current,
        { scale: 0.05 },
        { scale: 40, ease: "power1.in", duration: 1 },
        0,
      );

      tl.fromTo(
        eggplantRef.current,
        { opacity: 1 },
        { opacity: 0, ease: "power2.in", duration: 0.2 },
        0.8,
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <SoleilBackground />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <img
          ref={eggplantRef}
          src="/logos/eggplant-logo-smooth.apng"
          alt="Expanding eggplant"
          className="h-52 w-52 origin-center drop-shadow-[0_0_40px_rgba(255,215,0,0.4)]"
          style={{ filter: "sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15)" }}
        />
      </div>
    </div>
  );
}

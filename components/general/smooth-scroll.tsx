"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePreferencesStore } from "@/stores/preferences-store";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<React.ComponentRef<typeof ReactLenis>>(null);
  const smoothScroll = usePreferencesStore((s) => s.smoothScroll);
  const allAnimations = usePreferencesStore((s) => s.allAnimations);

  const isEnabled = allAnimations && smoothScroll;

  // Sync Lenis with GSAP's ticker instead of running its own requestAnimationFrame loop.
  // This avoids two competing animation loops and keeps scroll position
  // in sync with any GSAP/ScrollTrigger animations.
  useEffect(() => {
    if (!isEnabled) return;

    // GSAP provides time in seconds, Lenis expects milliseconds
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    // Disable GSAP's lag compensation to prevent visible scroll jumps when frames drop
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, [isEnabled]);

  if (!isEnabled) return <>{children}</>;

  // duration controls the easing animation length,
  // wheelMultiplier controls how much distance each scroll tick covers.

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        // duration: 2,
        wheelMultiplier: 0.3,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { usePreferencesStore } from "@/stores/preferences-store";
import { GlowArrow } from "@/components/general/glow-arrow";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven eggplant: starts centered, grows, shrinks & flies to logo
 * position (top-left), then pops. The real logo is revealed via onLeave/onEnterBack.
 */
export const AnimatedEggplant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eggplantRef = useRef<HTMLImageElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const isEnabled = usePreferencesStore((s) => s.letterAnimations);
  const { t } = useTranslation("common");

  useGSAP(
    () => {
      if (!isEnabled || !eggplantRef.current || !containerRef.current) return;

      const realLogo = document.querySelector('img[alt="Logo"]') as HTMLElement | null;

      // Bouncing arrow
      if (arrowRef.current) {
        gsap.to(arrowRef.current, {
          y: 12,
          duration: 1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // Idle floating yoyo — gentle bob + tilt mimicking the logo
      const float = gsap.to(eggplantRef.current, {
        y: -18,
        rotate: 4,
        duration: 1.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            if (self.progress > 0 && float.isActive()) {
              float.pause(0);
            } else if (self.progress === 0 && !float.isActive()) {
              float.resume();
            }
          },
          onLeave: () => {
            // Animation done — fade in real logo smoothly
            if (realLogo) gsap.to(realLogo, { opacity: 1, duration: 1.2, delay: 1, ease: "power2.out" });
          },
          onEnterBack: () => {
            // Scrolling back — fade out real logo
            if (realLogo) gsap.to(realLogo, { opacity: 0, duration: 0.3, ease: "power2.in" });
          },
        },
      });

      // Fade out arrow early
      if (arrowRef.current) {
        tl.to(arrowRef.current, { opacity: 0, duration: 0.15 }, 0);
      }

      // Compute target position eagerly
      const rect = containerRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const pad = vw >= 1920 ? 104 : vw >= 1440 ? 56 : vw >= 1024 ? 40 : vw >= 640 ? 32 : 16;
      const logoSize = vw >= 1024 ? 80 : vw >= 640 ? 60 : 40;
      const logoCenterX = pad - 12 + logoSize / 2;
      const endX = -(rect.width / 2) - rect.left + logoCenterX;
      const logoCenterY = 20 + logoSize / 2;
      const endY = -(rect.height / 2) + logoCenterY;

      // Phase 1: quick grow (0 → 0.2)
      tl.fromTo(
        eggplantRef.current,
        { scale: 1, rotate: 0 },
        { scale: 5.5, rotate: 10, duration: 0.2, ease: "none" },
        0,
      );

      // Phase 2: shrink to 0 & fly to corner (0.2 → 1.0) — linear, no seam
      tl.to(eggplantRef.current, {
        scale: 0,
        opacity: 0,
        x: endX,
        y: endY,
        rotate: 0,
        duration: 0.8,
        ease: "none",
      });

      // Handle page refresh with scroll already past the animation
      if (tl.scrollTrigger && tl.scrollTrigger.progress >= 1 && realLogo) {
        gsap.set(realLogo, { opacity: 1 });
      }
    },
    { scope: containerRef, dependencies: [isEnabled] },
  );

  return (
    <div ref={containerRef} className="relative z-2 flex h-screen items-center justify-center">
      <img
        ref={eggplantRef}
        src="/logos/eggplant-logo-smooth.apng"
        alt="Eggplant"
        className="h-40 w-40 object-contain"
      />
      <div ref={arrowRef} className="fixed inset-x-0 bottom-24 z-101 flex flex-col items-center gap-2">
        <span className="text-16 font-mono tracking-wider text-white/60 uppercase">{t("scrollDown")}</span>
        <GlowArrow className="rotate-90 text-white/60" />
      </div>
    </div>
  );
};

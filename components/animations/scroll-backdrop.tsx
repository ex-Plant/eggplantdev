"use client";

/**
 * ScrollBackdrop — scroll-driven background system.
 *
 * Architecture:
 * ┌─────────────────────────────────────────────────────────────┐
 * │ z-201  Additive texture A/B buffer (extra grit, optional)  │
 * │ z-200  Layout's base `grit` (always on, from layout.tsx)   │
 * │ z-100  Edge gradient masks (top/bottom fade)               │
 * │ z-10   ScrollScene content                                 │
 * │ z-1    Color + gradient backdrop                           │
 * └─────────────────────────────────────────────────────────────┘
 *
 * Grit strategy:
 * - The layout renders a fixed `grit` (medium) overlay at z-200 on ALL pages.
 *   This provider does NOT touch it — it's always visible.
 * - When a scene needs extra density (e.g. intro text like the home page),
 *   it sets `textureClass: "grit-medium-dense"`. The A/B double-buffer at
 *   z-201 smoothly crossfades that extra layer in on top of the base.
 * - When scrolling to a scene without `textureClass`, the extra layer fades
 *   out and only the layout's base grit remains.
 *
 * Usage:
 *   <ScrollBackdropProvider>
 *     <ScrollScene config={{ color: "#0a0806" }}>         // base grit only
 *     <ScrollScene config={{ textureClass: "grit-medium-dense" }}>  // extra density
 *   </ScrollBackdropProvider>
 */

import { createContext, useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/helpers/cn";
import { EggplantLogo } from "@/components/top-navigation/eggplant-logo";

gsap.registerPlugin(ScrollTrigger);

/* ── Types ── */

type BackdropLayersT = {
  colorRef: React.RefObject<HTMLDivElement | null>;
  textureARef: React.RefObject<HTMLDivElement | null>;
  textureBRef: React.RefObject<HTMLDivElement | null>;
  gradientRef: React.RefObject<HTMLDivElement | null>;
  logoRef: React.RefObject<HTMLDivElement | null>;
  edgeTopRef: React.RefObject<HTMLDivElement | null>;
  edgeBottomRef: React.RefObject<HTMLDivElement | null>;
  providerRef: React.RefObject<HTMLDivElement | null>;
  textureSlotRef: React.RefObject<"A" | "B">;
  textureClassRef: React.RefObject<ExtraGritT | undefined>;
};

/** Extra grit to layer ON TOP of the layout's base `grit` (z-200).
 *  Omit = no extra layer, only the layout's base grit shows through. */
type ExtraGritT = "grit-subtle" | "grit" | "grit-medium-dense" | "grit-dense";

export type SceneConfigT = {
  /** Background color for this scene. Omit to fade out the color layer. */
  color?: string;
  /** Additional grit texture on top of the layout's always-on base.
   *  Crossfaded smoothly via A/B double-buffer. Omit = base grit only. */
  textureClass?: ExtraGritT;
  /** CSS gradient string for the gradient layer. */
  gradient?: string;
  /** Show/hide the fixed eggplant logo. */
  showLogo?: boolean;
  /** CSS filter applied to the logo (e.g. silver or gold treatment). */
  logoFilter?: string;
  /** Override text color for all children via CSS variable. */
  textColor?: string;
  /** ScrollTrigger start position (default: "top center"). */
  start?: string;
  /** ScrollTrigger end position (default: "bottom center"). */
  end?: string;
  /** Duration for all crossfade tweens in seconds (default: 0.6). */
  crossfadeDuration?: number;
};

/* ── Context ── */

const BackdropContext = createContext<BackdropLayersT | null>(null);

/* ── Provider ── */

export function ScrollBackdropProvider({ children }: { children: React.ReactNode }) {
  const colorRef = useRef<HTMLDivElement>(null);
  const textureARef = useRef<HTMLDivElement>(null);
  const textureBRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const edgeTopRef = useRef<HTMLDivElement>(null);
  const edgeBottomRef = useRef<HTMLDivElement>(null);
  const providerRef = useRef<HTMLDivElement>(null);
  /* Double-buffer state — kept in refs so it resets with the component
   * (fixes HMR desync and multiple-provider conflicts). */
  const textureSlotRef = useRef<"A" | "B">("A");
  const textureClassRef = useRef<ExtraGritT | undefined>(undefined);

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <BackdropContext.Provider
      value={{ colorRef, textureARef, textureBRef, gradientRef, logoRef, edgeTopRef, edgeBottomRef, providerRef, textureSlotRef, textureClassRef }}
    >
      <div ref={providerRef}>
        {/* Background color + gradient — behind everything at z-1 */}
        <div className="pointer-events-none fixed inset-0 z-1">
          <div ref={colorRef} className="absolute inset-0 opacity-0" />
          <div ref={gradientRef} className="absolute inset-0 opacity-0" />
        </div>

        {/* Additive texture double-buffer at z-201 (above layout's base grit at z-200).
            Both start invisible. When a scene declares textureClass, one buffer fades
            in with that class while the other fades out — smooth density transitions. */}
        <div ref={textureARef} className="pointer-events-none fixed inset-0 z-201 opacity-0 will-change-[opacity]" />
        <div ref={textureBRef} className="pointer-events-none fixed inset-0 z-201 opacity-0 will-change-[opacity]" />

        {/* Top/bottom edge masks — gradient fade to the active scene color */}
        <div ref={edgeTopRef} className="pointer-events-none fixed top-0 right-0 isolate z-100 h-[8vh] w-full will-change-transform">
          <div className="absolute inset-0 bg-linear-to-t from-transparent to-(--backdrop-color,var(--color-bgc))" />
        </div>
        <div ref={edgeBottomRef} className="pointer-events-none fixed right-0 bottom-[-2px] isolate z-100 h-[8vh] w-full will-change-transform">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-(--backdrop-color,var(--color-bgc))" />
        </div>

        {/* Fixed logo — controlled per-scene via showLogo/logoFilter */}
        <div ref={logoRef} data-testid="backdrop-logo" className="pointer-events-none fixed top-4 left-4 z-201 opacity-0">
          <EggplantLogo link={false} />
        </div>

        {children}
      </div>
    </BackdropContext.Provider>
  );
}

/* ── Scene transition ── */

function applyScene(layers: BackdropLayersT, config: SceneConfigT, instant = false) {
  const dur = instant ? 0 : (config.crossfadeDuration ?? 0.6);

  // Background color
  if (layers.colorRef.current) {
    gsap.to(layers.colorRef.current, config.color
      ? { backgroundColor: config.color, opacity: 1, duration: dur, overwrite: true }
      : { opacity: 0, duration: dur, overwrite: true },
    );
  }

  // Additive texture — crossfade the A/B buffer
  const slot = layers.textureSlotRef.current;
  const prevClass = layers.textureClassRef.current;
  const outSlot = slot === "A" ? layers.textureARef : layers.textureBRef;
  const inSlot = slot === "A" ? layers.textureBRef : layers.textureARef;

  if (config.textureClass && config.textureClass !== prevClass) {
    // Eagerly clean up the incoming slot before applying the new class
    // (prevents stale classes if a prior onComplete was killed by overwrite)
    if (inSlot.current) {
      if (prevClass) inSlot.current.classList.remove(prevClass);
      inSlot.current.classList.add(config.textureClass);
      gsap.to(inSlot.current, { opacity: 1, duration: dur, overwrite: true });
    }
    if (outSlot.current) {
      gsap.to(outSlot.current, { opacity: 0, duration: dur, overwrite: true });
    }
    layers.textureClassRef.current = config.textureClass;
    layers.textureSlotRef.current = slot === "A" ? "B" : "A";
  } else if (!config.textureClass && prevClass) {
    // No extra texture — fade out both buffers, only layout's base grit remains
    if (outSlot.current) gsap.to(outSlot.current, { opacity: 0, duration: dur, overwrite: true });
    if (inSlot.current) gsap.to(inSlot.current, { opacity: 0, duration: dur, overwrite: true });
    layers.textureClassRef.current = undefined;
  }

  // Gradient
  if (layers.gradientRef.current) {
    const el = layers.gradientRef.current;
    if (config.gradient) {
      el.style.backgroundImage = config.gradient;
      gsap.to(el, { opacity: 1, duration: dur, overwrite: true });
    } else {
      gsap.to(el, { opacity: 0, duration: dur, overwrite: true });
    }
  }

  // Logo visibility + filter (merged into one tween to avoid overwrite conflicts)
  if (layers.logoRef.current && (config.showLogo !== undefined || config.logoFilter !== undefined)) {
    const logoProps: gsap.TweenVars = { duration: dur, overwrite: true };
    if (config.showLogo !== undefined) logoProps.opacity = config.showLogo ? 1 : 0;
    if (config.logoFilter !== undefined) logoProps.filter = config.logoFilter || "none";
    gsap.to(layers.logoRef.current, logoProps);
  }

  // Propagate scene color to CSS variable for edge masks and AnimatedLettersMask
  if (config.color && layers.providerRef.current) {
    layers.providerRef.current.style.setProperty("--backdrop-color", config.color);
  }
}

/* ── ScrollScene ── */

export function ScrollScene({
  config = {},
  className,
  children,
}: {
  config?: SceneConfigT;
  className?: string;
  children: React.ReactNode;
}) {
  const layers = useContext(BackdropContext);
  const triggerRef = useRef<HTMLDivElement>(null);
  const configRef = useRef(config);
  configRef.current = config;

  useGSAP(
    () => {
      if (!triggerRef.current || !layers) return;
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: config.start ?? "top center",
        end: config.end ?? "bottom center",
        onToggle: (self) => { if (self.isActive) applyScene(layers, configRef.current); },
      });
    },
    { scope: triggerRef, dependencies: [layers, config.start, config.end] },
  );

  // Seed the first visible scene instantly on mount
  useEffect(() => {
    if (!triggerRef.current || !layers) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
      applyScene(layers, config, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs once on mount to seed initial scene
  }, []);

  const sceneStyle = config.textColor
    ? ({ "--scene-text-color": config.textColor, color: config.textColor } as React.CSSProperties)
    : undefined;

  return (
    <div ref={triggerRef} className={cn("relative z-10", className)} style={sceneStyle}>
      {children}
    </div>
  );
}

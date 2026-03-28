"use client";

/**
 * ScrollBackdrop — a single fixed background that reacts to scroll.
 *
 * Usage:
 * 1. Wrap your page with <ScrollBackdropProvider>
 * 2. Wrap sections with <ScrollScene config={...}> to declare what bg they want
 *
 * Each ScrollScene registers a ScrollTrigger with onToggle. When a scene becomes
 * active, it tweens the shared backdrop layers to the declared config.
 *
 * The provider also renders the grit overlay and top/bottom gradient masks so they
 * can track the active scene color (fading to the right background).
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
  gritRef: React.RefObject<HTMLDivElement | null>;
  edgeTopRef: React.RefObject<HTMLDivElement | null>;
  edgeBottomRef: React.RefObject<HTMLDivElement | null>;
  providerRef: React.RefObject<HTMLDivElement | null>;
};

type GritTextureT = "grit-subtle" | "grit" | "grit-medium-dense" | "grit-dense";

export type SceneConfigT = {
  color?: string;
  textureClass?: GritTextureT;
  gradient?: string;
  showLogo?: boolean;
  /** CSS filter string applied to the logo (e.g. from Eggplant Palette presets) */
  logoFilter?: string;
  textColor?: string;
  start?: string;
  end?: string;
  crossfadeDuration?: number;
};

/* ── Context ── */

const BackdropContext = createContext<BackdropLayersT | null>(null);

/* ── Double-buffer state for texture crossfade ── */
let activeTextureSlot: "A" | "B" = "A";
let activeTextureClass: GritTextureT | undefined;

/* ── Provider (wrap entire page) ── */

export function ScrollBackdropProvider({ children }: { children: React.ReactNode }) {
  const colorRef = useRef<HTMLDivElement>(null);
  const textureARef = useRef<HTMLDivElement>(null);
  const textureBRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const gritRef = useRef<HTMLDivElement>(null);
  const edgeTopRef = useRef<HTMLDivElement>(null);
  const edgeBottomRef = useRef<HTMLDivElement>(null);
  const providerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <BackdropContext.Provider
      value={{
        colorRef,
        textureARef,
        textureBRef,
        gradientRef,
        logoRef,
        gritRef,
        edgeTopRef,
        edgeBottomRef,
        providerRef,
      }}
    >
      <div ref={providerRef}>
        {/* Fixed backdrop layers */}
        <div className="pointer-events-none fixed inset-0 z-1">
          <div ref={colorRef} className="absolute inset-0 opacity-0" />
          <div ref={gradientRef} className="absolute inset-0 opacity-0" />
        </div>

        {/* Grit overlay — full-page texture at z-200 (above both background AND mask
            so the texture renders uniformly, matching home page behavior) */}
        <div ref={gritRef} className="grit pointer-events-none fixed inset-0 z-200 will-change-transform" />
        {/* Texture A/B double-buffer at z-200 for smooth crossfade between grit variants */}
        <div ref={textureARef} className="pointer-events-none fixed inset-0 z-200 opacity-0 will-change-transform" />
        <div ref={textureBRef} className="pointer-events-none fixed inset-0 z-200 opacity-0 will-change-transform" />

        {/* Viewport-edge gradient masks — fade content to the active scene color */}
        <div
          ref={edgeTopRef}
          className="grit pointer-events-none fixed top-0 right-0 isolate z-100 h-[8vh] w-full will-change-transform"
        >
          <div className="absolute inset-0 bg-linear-to-t from-transparent to-(--backdrop-color,var(--color-bgc))" />
        </div>
        <div
          ref={edgeBottomRef}
          className="grit pointer-events-none fixed right-0 bottom-[-2px] isolate z-100 h-[8vh] w-full will-change-transform"
        >
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-(--backdrop-color,var(--color-bgc))" />
        </div>

        {/* Fixed logo layer — replaces the layout's EggplantLogo */}
        <div
          ref={logoRef}
          data-testid="backdrop-logo"
          className="pointer-events-none fixed top-4 left-4 z-201 opacity-0"
        >
          <EggplantLogo link={false} />
        </div>

        {children}
      </div>
    </BackdropContext.Provider>
  );
}

/* ── Helper: crossfade backdrop to new values ── */

function applyScene(layers: BackdropLayersT, config: SceneConfigT, instant = false) {
  const dur = instant ? 0 : (config.crossfadeDuration ?? 0.6);

  if (layers.colorRef.current) {
    if (config.color) {
      gsap.to(layers.colorRef.current, { backgroundColor: config.color, opacity: 1, duration: dur, overwrite: true });
    } else {
      gsap.to(layers.colorRef.current, { opacity: 0, duration: dur, overwrite: true });
    }
  }

  // Texture crossfade: fade out the current slot, fade in the other with the new class
  const outSlot = activeTextureSlot === "A" ? layers.textureARef : layers.textureBRef;
  const inSlot = activeTextureSlot === "A" ? layers.textureBRef : layers.textureARef;

  if (config.textureClass && config.textureClass !== activeTextureClass) {
    if (inSlot.current) {
      if (activeTextureClass) inSlot.current.classList.remove(activeTextureClass);
      inSlot.current.classList.add(config.textureClass);
      gsap.to(inSlot.current, { opacity: 1, duration: dur, overwrite: true });
    }
    if (outSlot.current) {
      gsap.to(outSlot.current, {
        opacity: 0,
        duration: dur,
        overwrite: true,
        onComplete: () => {
          if (activeTextureClass && outSlot.current) outSlot.current.classList.remove(activeTextureClass);
        },
      });
    }
    activeTextureClass = config.textureClass;
    activeTextureSlot = activeTextureSlot === "A" ? "B" : "A";
  } else if (!config.textureClass && activeTextureClass) {
    // Fade out whichever slot is active
    if (outSlot.current) gsap.to(outSlot.current, { opacity: 0, duration: dur, overwrite: true });
    if (inSlot.current) gsap.to(inSlot.current, { opacity: 0, duration: dur, overwrite: true });
    activeTextureClass = undefined;
  }

  if (layers.gradientRef.current) {
    const el = layers.gradientRef.current;
    if (config.gradient) {
      el.style.backgroundImage = config.gradient;
      gsap.to(el, { opacity: 1, duration: dur, overwrite: true });
    } else {
      gsap.to(el, { opacity: 0, duration: dur, overwrite: true });
    }
  }

  if (layers.logoRef.current && config.showLogo !== undefined) {
    gsap.to(layers.logoRef.current, { opacity: config.showLogo ? 1 : 0, duration: dur, overwrite: true });
  }

  if (layers.logoRef.current && config.logoFilter !== undefined) {
    gsap.to(layers.logoRef.current, { filter: config.logoFilter || "none", duration: dur, overwrite: "auto" });
  }

  // Set --backdrop-color CSS variable so gradient masks and AnimatedLettersMask track the scene
  if (config.color && layers.providerRef.current) {
    layers.providerRef.current.style.setProperty("--backdrop-color", config.color);
  }
}

/* ── ScrollScene (wrap each section) ── */

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
  // Store config in a ref so GSAP closures always see the latest values
  const configRef = useRef(config);
  configRef.current = config;

  useGSAP(
    () => {
      if (!triggerRef.current || !layers) return;

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: config.start ?? "top center",
        end: config.end ?? "bottom center",
        onToggle: (self) => {
          if (self.isActive) applyScene(layers, configRef.current);
        },
      });
    },
    { scope: triggerRef, dependencies: [layers, config.start, config.end] },
  );

  // Apply first visible scene instantly on mount
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

import { create } from "zustand";

const ANIMATION_KEYS = ["smoothScroll", "letterAnimations"] as const;
type AnimationKeyT = (typeof ANIMATION_KEYS)[number];

type AnimationStoreT = {
  allAnimations: boolean;
  smoothScroll: boolean;
  letterAnimations: boolean;
  isDesktopSafari: boolean;
  setAnimation: (key: AnimationKeyT, enabled: boolean) => void;
  setAllAnimations: (enabled: boolean) => void;
};

function detectDesktopSafari(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
  // iPadOS reports "Macintosh" but has touch — filter it out
  const isMobile = /iPhone|iPad|iPod/.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);
  return isSafari && !isMobile;
}

function detectReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match?.[1];
}

function persistToCookie(state: Pick<AnimationStoreT, "allAnimations" | "smoothScroll" | "letterAnimations">) {
  const value = JSON.stringify({
    allAnimations: state.allAnimations,
    smoothScroll: state.smoothScroll,
    letterAnimations: state.letterAnimations,
  });
  document.cookie = `animationPrefs=${encodeURIComponent(value)};path=/;max-age=${60 * 60 * 24 * 365}`;
}

function getInitialState(): Pick<AnimationStoreT, "allAnimations" | "smoothScroll" | "letterAnimations"> {
  const saved = readCookie("animationPrefs");
  if (saved) {
    try {
      return JSON.parse(decodeURIComponent(saved));
    } catch {
      // Corrupted cookie — fall through to defaults
    }
  }

  const isDesktopSafari = detectDesktopSafari();
  const reducedMotion = detectReducedMotion();

  return {
    allAnimations: !reducedMotion,
    smoothScroll: !isDesktopSafari && !reducedMotion,
    letterAnimations: !reducedMotion,
  };
}

export const useAnimationStore = create<AnimationStoreT>()((set, get) => {
  const initial = getInitialState();

  return {
    ...initial,
    isDesktopSafari: typeof navigator !== "undefined" ? detectDesktopSafari() : false,

    setAnimation: (key, enabled) => {
      set({ [key]: enabled });
      const state = get();
      persistToCookie(state);
    },

    setAllAnimations: (enabled) => {
      const update = {
        allAnimations: enabled,
        smoothScroll: enabled && !get().isDesktopSafari,
        letterAnimations: enabled,
      };
      set(update);
      persistToCookie(update);
    },
  };
});

export { ANIMATION_KEYS };
export type { AnimationKeyT };

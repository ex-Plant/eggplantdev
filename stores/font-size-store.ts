import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const MIN_SCALE = 1;
const MAX_SCALE = 1.5;
const STEP = 0.05;

type FontSizeStoreT = {
  scale: number;
  setScale: (scale: number) => void;
};

const applyScale = (scale: number) => {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty("--font-scale", String(scale));
};

export const useFontSizeStore = create<FontSizeStoreT>()(
  persist(
    (set) => ({
      scale: MIN_SCALE,

      setScale: (scale: number) => {
        const clamped = Math.round(Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale)) * 100) / 100;
        applyScale(clamped);
        set({ scale: clamped });
      },
    }),
    {
      name: "font-scale",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) applyScale(state.scale);
      },
    },
  ),
);

export { MIN_SCALE, MAX_SCALE, STEP };

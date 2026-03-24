import { create } from "zustand";

const MIN_SCALE = 1;
const MAX_SCALE = 1.5;
const STEP = 0.05;
const STORAGE_KEY = "font-scale";

type FontSizeStoreT = {
  scale: number;
  setScale: (scale: number) => void;
};

const applyScale = (scale: number) => {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty("--font-scale", String(scale));
};

// Read persisted scale synchronously to avoid flash/mismatch on reload
const getInitialScale = (): number => {
  if (typeof localStorage === "undefined") return MIN_SCALE;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return MIN_SCALE;
  const parsed = Number(raw);
  if (Number.isFinite(parsed) && parsed >= MIN_SCALE && parsed <= MAX_SCALE) return parsed;
  return MIN_SCALE;
};

const initialScale = getInitialScale();
// Apply immediately so CSS matches before first React render
applyScale(initialScale);

export const useFontSizeStore = create<FontSizeStoreT>()((set) => ({
  scale: initialScale,

  setScale: (scale: number) => {
    const clamped = Math.round(Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale)) * 100) / 100;
    applyScale(clamped);
    localStorage.setItem(STORAGE_KEY, String(clamped));
    set({ scale: clamped });
  },
}));

export { MIN_SCALE, MAX_SCALE, STEP };

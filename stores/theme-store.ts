import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const THEMES = ["dark", "contrast"] as const;
type ThemeT = (typeof THEMES)[number];

type ThemeStoreT = {
  theme: ThemeT;
  setTheme: (theme: ThemeT) => void;
};

const applyTheme = (theme: ThemeT) => {
  if (typeof document !== "undefined") {
    setTimeout(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, 500);
  }
};

export const useThemeStore = create<ThemeStoreT>()(
  persist(
    (set) => ({
      theme: "dark",

      setTheme: (theme) =>
        set(() => {
          applyTheme(theme);
          return { theme };
        }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) applyTheme(state.theme);
      },
    },
  ),
);

export { THEMES };
export type { ThemeT };

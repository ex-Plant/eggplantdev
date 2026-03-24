import { create } from "zustand";

const THEMES = ["dark", "contrast"] as const;
type ThemeT = (typeof THEMES)[number];

type ThemeStoreT = {
  theme: ThemeT;
  setTheme: (theme: ThemeT) => void;
};

export const useThemeStore = create<ThemeStoreT>()((set) => ({
  theme:
    (typeof document !== "undefined" ? (document.documentElement.getAttribute("data-theme") as ThemeT) : null) ??
    "dark",

  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
    document.documentElement.setAttribute("data-theme", theme);
  },
}));

export { THEMES };
export type { ThemeT };

"use client";

import { usePreferencesStore } from "@/stores/preferences-store";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { ToggleSwitch } from "./toggle-switch";

export function ThemeToggle() {
  const theme = usePreferencesStore((s) => s.theme);
  const setTheme = usePreferencesStore((s) => s.setTheme);
  const setAnimation = usePreferencesStore((s) => s.setAnimation);
  const { t } = useTranslation("accessibility");

  const isContrast = theme === "contrast";

  const handleToggle = (toContrast: boolean) => {
    setTheme(toContrast ? "contrast" : "dark");
    // Contrast mode disables letter animations for accessibility
    setAnimation("letterAnimations", !toContrast);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-16 md:text-14 truncate">{t("toggleTheme")}</span>
      <ToggleSwitch checked={isContrast} onChange={handleToggle} label={t("toggleTheme")} />
    </div>
  );
}

"use client";

import { usePreferencesStore, ANIMATION_KEYS, type AnimationKeyT } from "@/stores/preferences-store";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { ToggleSwitch } from "./toggle-switch";
import { cn } from "../../helpers/cn";

export function AnimationToggles({ className }: { className?: string }) {
  const allAnimations = usePreferencesStore((s) => s.allAnimations);
  const smoothScroll = usePreferencesStore((s) => s.smoothScroll);
  const letterAnimations = usePreferencesStore((s) => s.letterAnimations);
  const setAnimation = usePreferencesStore((s) => s.setAnimation);
  const setAllAnimations = usePreferencesStore((s) => s.setAllAnimations);
  const theme = usePreferencesStore((s) => s.theme);
  const { t } = useTranslation("accessibility");

  const isContrast = theme === "contrast";
  const values: Record<AnimationKeyT, boolean> = { smoothScroll, letterAnimations };
  // Letter animations break in contrast mode (mask overlay turns yellow)
  const disabled: Partial<Record<AnimationKeyT, boolean>> = {
    letterAnimations: isContrast,
  };

  return (
    <div className={cn("grid grid-cols-1 gap-3", className)}>
      <div className="flex items-center justify-between">
        <span className="text-11 truncate">{t("allAnimations")}</span>
        <ToggleSwitch checked={allAnimations} onChange={setAllAnimations} label={t("allAnimations")} />
      </div>
      {ANIMATION_KEYS.map((key) => (
        <div key={key} className="flex items-center justify-between">
          <span className="text-11 truncate">{t(key)}</span>
          <ToggleSwitch
            checked={values[key]}
            onChange={(v) => setAnimation(key, v)}
            label={t(key)}
            disabled={disabled[key]}
          />
        </div>
      ))}
    </div>
  );
}

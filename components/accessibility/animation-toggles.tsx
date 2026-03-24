"use client";

import { useAnimationStore, ANIMATION_KEYS, type AnimationKeyT } from "@/stores/animation-store";
import { useThemeStore } from "@/stores/theme-store";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { ToggleSwitch } from "./toggle-switch";

export function AnimationToggles() {
  const allAnimations = useAnimationStore((s) => s.allAnimations);
  const smoothScroll = useAnimationStore((s) => s.smoothScroll);
  const letterAnimations = useAnimationStore((s) => s.letterAnimations);
  const setAnimation = useAnimationStore((s) => s.setAnimation);
  const setAllAnimations = useAnimationStore((s) => s.setAllAnimations);
  const theme = useThemeStore((s) => s.theme);
  const { t } = useTranslation("accessibility");

  const isContrast = theme === "contrast";
  const values: Record<AnimationKeyT, boolean> = { smoothScroll, letterAnimations };
  // Letter animations break in contrast mode (mask overlay turns yellow)
  const disabled: Partial<Record<AnimationKeyT, boolean>> = {
    letterAnimations: isContrast,
  };

  return (
    <>
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
    </>
  );
}

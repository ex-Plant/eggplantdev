"use client";

import { usePreferencesStore, MIN_SCALE, MAX_SCALE, FONT_STEP } from "@/stores/preferences-store";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

export function FontSizeControl() {
  const scale = usePreferencesStore((s) => s.scale);
  const setScale = usePreferencesStore((s) => s.setScale);
  const { t } = useTranslation("accessibility");

  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-16 shrink-0" id="font-size-label">
        {t("fontSize")}
      </span>
      <div className="flex items-center gap-2" role="group" aria-labelledby="font-size-label">
        <button
          type="button"
          onClick={() => setScale(scale - FONT_STEP)}
          aria-label={t("decreaseFontSize")}
          disabled={scale <= MIN_SCALE}
          className="text-28 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full leading-none text-white focus-visible:outline-white disabled:cursor-default disabled:opacity-30"
        >
          −
        </button>
        <input
          type="range"
          min={MIN_SCALE}
          max={MAX_SCALE}
          step={FONT_STEP}
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
          aria-label={t("fontSize")}
          aria-valuemin={MIN_SCALE}
          aria-valuemax={MAX_SCALE}
          aria-valuenow={scale}
          aria-valuetext={`${Math.round(scale * 100)}%`}
          className="bg-gray5 h-2 w-24 cursor-pointer appearance-none rounded outline-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:transition-shadow focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(255,255,255,0.3)]"
        />
        <button
          type="button"
          onClick={() => setScale(scale + FONT_STEP)}
          aria-label={t("increaseFontSize")}
          disabled={scale >= MAX_SCALE}
          className="text-28 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full leading-none text-white focus-visible:outline-white disabled:cursor-default disabled:opacity-30"
        >
          +
        </button>
      </div>
    </div>
  );
}

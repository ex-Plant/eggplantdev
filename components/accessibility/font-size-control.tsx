"use client";

import { useFontSizeStore } from "@/stores/font-size-store";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

export function FontSizeControl() {
  const { increment, decrement, isMinSize, isMaxSize } = useFontSizeStore();
  const { t } = useTranslation("accessibility");

  return (
    <>
      <button
        type="button"
        onClick={decrement}
        aria-label={t("decreaseFontSize")}
        disabled={isMinSize}
        className="text-14 disabled:opacity-30"
      >
        A-
      </button>
      <button
        type="button"
        onClick={increment}
        aria-label={t("increaseFontSize")}
        disabled={isMaxSize}
        className="text-14 disabled:opacity-30"
      >
        A+
      </button>
    </>
  );
}

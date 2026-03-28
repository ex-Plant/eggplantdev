"use client";

import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { useI18nContext } from "@/lib/i18n/translations-provider";
import { ToggleSwitch } from "./toggle-switch";

export function LanguageSwitcher() {
  const { t, locale } = useTranslation("accessibility");
  const { setLocale } = useI18nContext();

  const isEnglish = locale === "en";

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-16 md:text-14 truncate">{t("languageLabel")}</span>
      <ToggleSwitch checked={isEnglish} onChange={(v) => setLocale(v ? "en" : "pl")} label={t("toggleLanguage")} />
    </div>
  );
}

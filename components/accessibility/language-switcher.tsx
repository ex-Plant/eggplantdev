"use client";

import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { useI18nContext } from "@/lib/i18n/translations-provider";

export function LanguageSwitcher() {
  const { t, locale } = useTranslation("accessibility");
  const { setLocale } = useI18nContext();

  const toggle = () => setLocale(locale === "pl" ? "en" : "pl");

  return (
    <button type="button" onClick={toggle} aria-label={t("toggleLanguage")} className="text-14 cursor-pointer">
      {locale === "pl" ? "EN" : "PL"}
    </button>
  );
}

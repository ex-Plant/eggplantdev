"use client";

import { createContext, useContext, useMemo } from "react";
import type { TranslationsT } from "./types";
import { getTranslations } from "./translations";
import { usePreferencesStore, type LocaleT } from "@/stores/preferences-store";

type I18nContextT = {
  locale: LocaleT;
  translations: TranslationsT;
  setLocale: (locale: LocaleT) => void;
};

const I18nContext = createContext<I18nContextT | null>(null);

export function TranslationsProvider({ children }: { children: React.ReactNode }) {
  const locale = usePreferencesStore((s) => s.locale);
  const setLocale = usePreferencesStore((s) => s.setLocale);

  const value = useMemo(() => ({ locale, translations: getTranslations(locale), setLocale }), [locale, setLocale]);

  return <I18nContext value={value}>{children}</I18nContext>;
}

export function useI18nContext() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18nContext must be used within TranslationsProvider");
  return context;
}

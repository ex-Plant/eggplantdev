"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { LocaleT, TranslationsT } from "./types";
import { getTranslations } from "./translations";
import { i18n } from "./i18n";

type I18nContextT = {
  locale: LocaleT;
  translations: TranslationsT;
  setLocale: (locale: LocaleT) => void;
};

const I18nContext = createContext<I18nContextT | null>(null);

function getInitialLocale(): LocaleT {
  if (typeof window === "undefined") return i18n.defaultLocale as LocaleT;
  try {
    const stored = localStorage.getItem("locale");
    if (stored === "en" || stored === "pl") return stored;
  } catch {}
  return i18n.defaultLocale as LocaleT;
}

export function TranslationsProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleT>(getInitialLocale);

  const setLocale = useCallback((newLocale: LocaleT) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("locale", newLocale);
    } catch {}
  }, []);

  const value = useMemo(
    () => ({
      locale,
      translations: getTranslations(locale),
      setLocale,
    }),
    [locale, setLocale],
  );

  return <I18nContext value={value}>{children}</I18nContext>;
}

export function useI18nContext() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18nContext must be used within TranslationsProvider");
  return context;
}

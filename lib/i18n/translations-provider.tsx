"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { LocaleT, TranslationsT } from "./types";
import { getTranslations } from "./translations";

type I18nContextT = {
  locale: LocaleT;
  translations: TranslationsT;
  setLocale: (locale: LocaleT) => void;
};

const I18nContext = createContext<I18nContextT | null>(null);

type TranslationsProviderPropsT = {
  initialLocale: LocaleT;
  children: React.ReactNode;
};

function getLocaleFromStorage(): LocaleT {
  if (typeof window === "undefined") return "en";
  const val = localStorage.getItem("locale");
  return val === "en" || val === "pl" ? val : "en";
}

export function TranslationsProvider({ initialLocale, children }: TranslationsProviderPropsT) {
  const [locale] = useState<LocaleT>(() => getLocaleFromStorage() ?? initialLocale);

  // Set html lang attribute for CSS font switching (html[lang="pl"])
  // and theme from localStorage — replaces ThemeHydrator script
  useEffect(() => {
    document.documentElement.lang = locale;
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || theme === "contrast") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: LocaleT) => {
    localStorage.setItem("locale", newLocale);
    window.location.reload();
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

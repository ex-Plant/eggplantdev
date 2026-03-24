"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
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

function getLocaleFromCookie(): LocaleT {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|; )locale=([^;]*)/);
  const val = match?.[1];
  return val === "en" || val === "pl" ? val : "en";
}

export function TranslationsProvider({ initialLocale, children }: TranslationsProviderPropsT) {
  const [locale] = useState<LocaleT>(() => getLocaleFromCookie() ?? initialLocale);

  const setLocale = useCallback((newLocale: LocaleT) => {
    document.cookie = `locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
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

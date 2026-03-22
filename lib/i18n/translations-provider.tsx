"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { usePathname } from "next/navigation.js";
import type { LocaleT, TranslationsT } from "./types";
import { getTranslations } from "./translations";
import { i18n } from "./i18n";

type I18nContextT = {
  locale: LocaleT;
  translations: TranslationsT;
  alternateSlug: string | undefined;
  setAlternateSlug: (slug: string | undefined) => void;
};

const I18nContext = createContext<I18nContextT | null>(null);

function getLocaleFromPath(pathname: string): LocaleT {
  if (pathname.startsWith("/en/") || pathname === "/en") {
    return "en";
  }
  return i18n.defaultLocale as LocaleT;
}

export function TranslationsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const [alternateSlug, setAlternateSlug] = useState<string | undefined>(undefined);

  const value = useMemo(
    () => ({
      locale,
      translations: getTranslations(locale),
      alternateSlug,
      setAlternateSlug,
    }),
    [locale, alternateSlug],
  );

  return <I18nContext value={value}>{children}</I18nContext>;
}

export function useI18nContext() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18nContext must be used within TranslationsProvider");
  return context;
}

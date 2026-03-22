"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { useI18nContext } from "@/lib/i18n/translations-provider";

export function LanguageSwitcher() {
  const { t, locale } = useTranslation("accessibility");
  const { alternateSlug } = useI18nContext();

  const targetLocale = locale === "pl" ? "en" : "pl";
  const isHome = alternateSlug === "home" || !alternateSlug;
  const path = targetLocale === "pl" ? `/${alternateSlug}` : `/en/${alternateSlug}`;
  const href = alternateSlug ? (isHome ? (targetLocale === "pl" ? "/" : "/en") : path) : "#";

  return (
    <Link href={href} aria-label={t("toggleLanguage")} className="text-14 text-lightgray">
      {locale === "pl" ? "EN" : "PL"}
    </Link>
  );
}

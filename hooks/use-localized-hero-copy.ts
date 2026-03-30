"use client";

import { HERO_COPY, type HeroCopyKeyT } from "@/data/hero-copy";
import { useI18nContext } from "@/lib/i18n/translations-provider";
import type { HeroCopyVariantT } from "@/types/hero-copy-types";

export function useLocalizedHeroCopy<Key extends HeroCopyKeyT>(key: Key, variant: HeroCopyVariantT = "default") {
  const { locale } = useI18nContext();
  return HERO_COPY[variant][locale][key];
}

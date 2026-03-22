import { useI18nContext } from "../translations-provider";
import type { NamespaceT, TranslationKeyT } from "../types";

export function useTranslation<NS extends NamespaceT>(namespace: NS) {
  const { locale, translations } = useI18nContext();

  function t<K extends TranslationKeyT<NS>>(key: K, params?: Record<string, string | number>): string {
    const namespaceTranslations = translations[namespace];
    const value = namespaceTranslations[key];

    if (typeof value !== "string") {
      console.warn(`Translation key "${String(key)}" not found in namespace "${String(namespace)}"`);
      return String(key);
    }

    if (!params) return value;

    return value.replace(/\{\{(\w+)\}\}/g, (_, paramKey: string) =>
      paramKey in params ? String(params[paramKey]) : `{{${paramKey}}}`,
    );
  }

  return { t, locale };
}

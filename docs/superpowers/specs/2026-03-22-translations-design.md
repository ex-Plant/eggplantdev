# Translations Design Spec

## Goal

Add full PL/EN translations to the portfolio site. All user-facing strings must be translatable. The site defaults to Polish, with English as alternate.

## Architecture

### Two translation systems

1. **`useTranslation(namespace)`** — for flat UI strings (buttons, labels, messages, aria). Already exists via `lib/i18n/`.
2. **`useLocalizedData(name)`** — new hook for structured content data (`home`, `projects`). Picks the right JSON file based on current locale from `useI18nContext`.

### Namespace structure (UI strings)

```
accessibility  — already done
common         — submit, sending, close
form           — placeholders, labels, success/error messages
nav            — skip-to-content, logo alt, navigation labels
notFound       — 404 page strings
footer         — slogan, get-in-touch label
```

### Data files (structured content)

```
data/home.en.json       — English home content (current home.json)
data/home.pl.json       — Polish home content
data/projects.en.json   — English projects (current projects.json)
data/projects.pl.json   — Polish projects
```

Old `data/home.json` and `data/projects.json` are removed after migration.

## New hook: `useLocalizedData`

```ts
// hooks/use-localized-data.ts
"use client";
import { useI18nContext } from "@/lib/i18n/translations-provider";

const dataModules = {
  home: { en: () => import("@/data/home.en.json"), pl: () => import("@/data/home.pl.json") },
  projects: { en: () => import("@/data/projects.en.json"), pl: () => import("@/data/projects.pl.json") },
};
```

Alternative simpler approach — static imports with a lookup:

```ts
import homeEn from "@/data/home.en.json";
import homePl from "@/data/home.pl.json";
import projectsEn from "@/data/projects.en.json";
import projectsPl from "@/data/projects.pl.json";

const DATA = {
  home: { en: homeEn, pl: homePl },
  projects: { en: projectsEn, pl: projectsPl },
} as const;

export function useLocalizedData<K extends keyof typeof DATA>(name: K) {
  const { locale } = useI18nContext();
  return DATA[name][locale];
}
```

Use the static import approach — the data files are small, no need for lazy loading.

## Components requiring changes

### Server → Client wrapper pattern

Pages stay as server components. Components that need translations become client components (most already are). For the few that aren't:

- `app/not-found.tsx` — wrap content in a client component `LocalizedNotFound`
- `app/layout.tsx` — "Skip to content" is static, can stay hardcoded or use a thin client wrapper
- `components/footer/Footer.tsx` — already renders client children, make it client
- `components/general/simple-header.tsx` — already client (uses ScrambleText)

### File-by-file changes

| File                                       | Current                       | Change                                           |
| ------------------------------------------ | ----------------------------- | ------------------------------------------------ |
| `footer/Footer.tsx`                        | Hardcoded SLOGAN              | `useTranslation("footer")` → `t("slogan")`       |
| `footer/footer-form.tsx`                   | Hardcoded placeholders/labels | `useTranslation("form")`                         |
| `get-in-touch-btn/button-form.tsx`         | Hardcoded txt constant        | `useTranslation("form")`                         |
| `get-in-touch-btn/get-in-touch-button.tsx` | Hardcoded "get in touch"      | `useTranslation("footer")`                       |
| `ui/submit-button.tsx`                     | Hardcoded SUBMIT/SENDING      | `useTranslation("common")`                       |
| `general/confirm-overlay.tsx`              | Hardcoded thank you text      | `useTranslation("form")`                         |
| `app/not-found.tsx`                        | Hardcoded 404 text            | Client wrapper with `useTranslation("notFound")` |
| `app/layout.tsx`                           | Hardcoded "Skip to content"   | `useTranslation("nav")` via client wrapper       |
| `eggplant-logo.tsx`                        | Hardcoded aria-label, alt     | `useTranslation("nav")` (already client)         |
| `sp-hero-section.tsx`                      | Hardcoded "Projects" link     | `useTranslation("nav")`                          |
| `app/page.tsx`                             | Imports home.json             | `useLocalizedData("home")` via client wrapper    |
| `projects-section.tsx`                     | Imports projects.json         | `useLocalizedData("projects")`                   |
| `sp-main.tsx`                              | Receives project prop         | Prop already comes translated from page          |
| `app/projects/[slug]/page.tsx`             | Imports projects.json         | Needs locale-aware data lookup                   |

### Metadata

`app/layout.tsx` metadata and `app/projects/[slug]/page.tsx` `generateMetadata` are server-side. These can use a server-side helper `getTranslations(locale)` directly — no hook needed. For now, keep English metadata (SEO concern — revisit with hreflang later).

## Locale JSON additions

### `en.json` additions

```json
{
  "accessibility": { ... },
  "common": {
    "submit": "SUBMIT",
    "sending": "SENDING...",
    "clickToClose": "click anywhere to close"
  },
  "form": {
    "name": "Name",
    "email": "Email",
    "projectDetails": "Details of your project",
    "quickContactPrompt": "Leave us your email and we will get back to you shortly",
    "thankYou": "Thank you for your message!",
    "willGetBack": "I will get back to you shortly",
    "confirmTitle": "Form submission confirmation"
  },
  "nav": {
    "skipToContent": "Skip to content",
    "homeNavigation": "home navigation",
    "logo": "Logo",
    "projects": "Projects",
    "returnHome": "Return Home"
  },
  "notFound": {
    "title": "Page Not Found",
    "returnHome": "Return Home"
  },
  "footer": {
    "sloganLine1": "Let's build",
    "sloganLine2": "something",
    "sloganLine3": "together",
    "getInTouch": "get in touch"
  }
}
```

### `pl.json` additions

Same keys, Polish values.

## Data file migration

1. Rename `data/home.json` → `data/home.en.json`
2. Create `data/home.pl.json` with Polish translations (same structure)
3. Rename `data/projects.json` → `data/projects.en.json`
4. Create `data/projects.pl.json` with Polish translations (same structure)

## What stays English-only (for now)

- Page metadata (title, description) — SEO concern, needs hreflang setup
- `generateStaticParams` slugs — URL structure stays English
- Debug tools — developer-facing only

## Implementation order

1. Extend locale JSON files with all UI namespaces
2. Create `useLocalizedData` hook
3. Create data files (rename + Polish copies)
4. Update components one by one (start with smallest: submit-button, then forms, then pages)
5. Test both locales via language switcher

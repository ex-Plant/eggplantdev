# Single Project Pages — Design Spec

## Overview

Create individual project pages at `/projects/[slug]` that render rich case study sections from static JSON data. Adapts archived components from `unused/singleProject/` into typed TSX Server/Client Components consuming `projects.json`.

## Routing & Data Layer

### Dynamic Route: `app/projects/[slug]/page.tsx`

- **Server Component** — no client-side data fetching
- `generateStaticParams()` — returns all slugs from `projects.json` for static generation
- `generateMetadata()` — sets `title` and `description` per project
- Calls `notFound()` when slug doesn't match any project

### Data Helper: `helpers/get-project-by-slug.ts`

```ts
import projectsData from "@/data/projects.json";
import { ProjectT } from "@/types/projectsTypes";

export function getProjectBySlug(slug: string): ProjectT | undefined {
  return projectsData.projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.projects.map((p) => p.slug);
}
```

### Config Fix

- `tsconfig.json`: change `baseUrl` from `"unused"` to `"."`
- This changes `@/*` resolution from `unused/*` to `./*` (project root). Audited: all existing imports use `@/components/...`, `@/hooks/...`, `@/helpers/...`, `@/types/...`, `@/data/...` — these all exist at the project root, so the fix is safe and actually corrects broken resolution.

## Component Architecture

All components live in `components/single-project/`.

### `single-project-main.tsx` (Server Component)

Orchestrator. Receives `ProjectT`, renders `SpHeader` then iterates `sections[]` switching on `section.type`:

| `type` | Component |
|---|---|
| `"main"` | `MainSlider` |
| `"simple"` | Imports `SimpleSection` directly from `home/sections/SimpleSection.tsx` — passes `titleLine` and `text` props |
| `"screenshots"` | `Screens` |
| `"video"` | `SpVideo` |
| `"team"` | `Team` |
| `"quote"` | Imports `Quotes` directly from `home/sections/quotes/Quotes.tsx` — passes `data={section.quotes}` (omit `singleP` so navigation arrows remain visible for multi-quote sections) |
| `"techstack"` | `SpTechStack` |

**Why not `RenderSections`?** It requires a `projects: ProjectT[]` prop (needed for the home page projects section), and its `data` type is `HomeSectionT` which doesn't include project-specific section types. Importing the leaf components (`SimpleSection`, `Quotes`) directly avoids type gymnastics and unnecessary prop passing.

### `sp-header.tsx` (Server Component)

- Breadcrumb link to `/projects` with `GoTo` icon
- Project name in large uppercase typography
- Props: `{ name: string }`

### `main-slider.tsx` (Client Component — `"use client"`)

- Swiper carousel with keyboard navigation
- Renders `SingleSlide` per slide, `GeneralInfo` below
- Props: `{ data: ProjectMainSectionT }`
- Client because Swiper requires DOM access

### `single-slide.tsx` (Client Component — child of slider)

- 3-image layout: main background, desktop overlay, mobile overlay
- Uses `next/image` with `src` strings directly (replaces `CustomImage`)
- Props: `{ data: { mainFoto: string; desktopView: string; mobileView: string } }`

### `general-info.tsx` (Server Component)

- Grid of metadata fields from `cats` object
- Iterates `Object.entries(cats)` to render key-value pairs
- Props: `{ cats: ProjectMainSectionT["cats"] }` (preserves specific keys: Client, Region, Year, Industry)

### `screens.tsx` (Server Component)

- Screenshot grid with 2 or 3 columns based on `gridColumnsNumber`
- Uses `next/image` with `src` strings from `images[]`
- Props: `{ data: ScreenshotsSectionT }`

### `sp-video.tsx` (Server Component)

- Full-page screenshot in a scroll-overflow container
- CSS responsive: `hidden lg:block` for desktop, `lg:hidden` for mobile
- Replaces `useMinLG()` hook — no client JS needed
- Props: `{ data: VideoSectionT }`

### `video-gradient-mask.tsx` (Server Component)

- Sticky gradient overlay at top/bottom of scroll container
- Props: `{ top?: boolean }`

### `sp-tech-stack.tsx` (Server Component)

- Section title + flex-wrap grid of `Button` tag pills
- Iterates `tags: string[]` directly (replaces `tag[].tag` Strapi shape)
- Props: `{ data: TechstackSectionT }`

### `team.tsx` (Server Component)

- Section title + grid of team member cards
- Iterates `cards[]` (replaces `card[]` Strapi key)
- Props: `{ data: TeamSectionT }`

## Data Shape Adaptations

| Strapi shape (unused) | JSON shape (projects.json) | Affected components |
|---|---|---|
| `data?.attributes` | Flat props | All |
| `__typename` | `section.type` | `SingleProjectMain` |
| `CustomImage data={x.data.attributes}` | `next/image src={string}` | `SingleSlide`, `Screens`, `SpVideo` |
| `data?.cats[0]` (array of objects) | `data.cats` (single object) | `GeneralInfo` |
| `data.card` | `data.cards` | `Team` |
| `data.tag` with `item?.tag` | `data.tags` as `string[]` | `SpTechStack` |
| `getMarkdownText(x)` | `{x}` (plain strings) | `GeneralInfoSection`, `Team` |
| `useMinLG()` for responsive | CSS `hidden lg:block` | `SpVideo` |

## Reused Existing Components

- `components/ui/GoTo.tsx` — breadcrumb arrow icon
- `components/ui/Button.tsx` — tech stack tag pills
- `components/home/sections/SimpleSection.tsx` — renders simple text sections (title + body)
- `components/home/sections/quotes/Quotes.tsx` — renders quote carousel (client component with Swiper)
- `hooks/useMediaQuery.tsx` — NOT used (replaced by CSS)

## Files Created

1. `app/projects/[slug]/page.tsx`
2. `helpers/get-project-by-slug.ts`
3. `components/single-project/single-project-main.tsx`
4. `components/single-project/sp-header.tsx`
5. `components/single-project/main-slider.tsx`
6. `components/single-project/single-slide.tsx`
7. `components/single-project/general-info.tsx`
8. `components/single-project/screens.tsx`
9. `components/single-project/sp-video.tsx`
10. `components/single-project/video-gradient-mask.tsx`
11. `components/single-project/sp-tech-stack.tsx`
12. `components/single-project/team.tsx`

## Files Modified

1. `tsconfig.json` — `baseUrl: "."` (fix from `"unused"`)
2. `types/projectsTypes.ts` — export sub-section types (`ProjectMainSectionT`, `SimpleSectionT`, `ScreenshotsSectionT`, `VideoSectionT`, `TeamSectionT`, `ProjectQuoteSectionT`, `TechstackSectionT`) so components can import them

## 404 Handling

The route calls `notFound()` for unknown slugs. The existing `app/not-found.tsx` handles this — no custom `/projects/[slug]/not-found.tsx` needed.

## Out of Scope

- `/projects` listing page (not requested)
- Deleting `unused/` directory
- Changing `projects.json` data structure
- Adding new section types

# Strapi to Static JSON Migration — Design Spec

## Goal

Convert the Next.js portfolio site from Strapi CMS (GraphQL) to fully static JSON data files with local images. Remove all CMS dependencies.

## Decisions

- **Approach A**: Replace `getData()` calls with JSON imports at page level
- **Data shape**: Flattened — no Strapi `data.attributes` nesting
- **Images**: Local in `public/images/`, plain string paths in JSON
- **Videos**: Removed entirely (static images only)
- **`next/image`**: Kept, just simplified props

---

## 1. JSON Data Files

All files live in `data/` at project root.

### `data/home.json`

```json
{
  "introTxt": "Lorem ipsum dolor sit amet",
  "backgroundDesktop": "/images/home/hero-desktop.jpg",
  "backgroundMobile": "/images/home/hero-mobile.jpg",
  "sections": [
    {
      "type": "cards",
      "titleLine": ["Our Team"],
      "text": "Lorem ipsum...",
      "cardDesktop": [
        {
          "leftSideTitle": "Name",
          "rightSideText": "Bio text",
          "leftSideImg": "/images/home/team-1.jpg"
        }
      ],
      "cardMobile": [
        { "title": "Name", "content": "Bio text" }
      ]
    },
    {
      "type": "fullSection",
      "titleLine": ["Our Approach"],
      "cards": [{ "title": "Strategy", "content": "Description" }],
      "largePhoto": "/images/home/approach.jpg"
    },
    {
      "type": "quote",
      "titleLine": ["What They Say"],
      "quotes": [
        {
          "quote": "Great partnership...",
          "name": "John Doe",
          "title": "CEO",
          "avatar": "/images/home/avatar-1.jpg"
        }
      ]
    },
    {
      "type": "simple",
      "titleLine": ["About Us"],
      "text": "Lorem ipsum..."
    }
  ]
}
```

### `data/services.json`

```json
{
  "slogan": "What we do",
  "introText": "Lorem ipsum...",
  "backgroundDesktop": "/images/services/hero-desktop.jpg",
  "backgroundMobile": "/images/services/hero-mobile.jpg",
  "services": [
    {
      "title": "Web Design",
      "description": "Lorem ipsum...",
      "tags": ["design", "ui", "ux"]
    }
  ]
}
```

### `data/projects.json`

```json
{
  "slogan": "Our Work",
  "introText": "Lorem ipsum...",
  "backgroundDesktop": "/images/projects/hero-desktop.jpg",
  "backgroundMobile": "/images/projects/hero-mobile.jpg",
  "projects": [
    {
      "uuid": "1",
      "slug": "project-alpha",
      "name": "Project Alpha",
      "description": "Lorem ipsum...",
      "logo": "/images/projects/alpha-logo.png",
      "sections": [
        {
          "type": "main",
          "cats": { "Client": "Acme", "Region": "EU", "Year": "2024", "Industry": "Tech" },
          "slides": [
            {
              "mainFoto": "/images/projects/alpha/slide-1.jpg",
              "desktopView": "/images/projects/alpha/slide-1-desktop.jpg",
              "mobileView": "/images/projects/alpha/slide-1-mobile.jpg"
            }
          ]
        },
        { "type": "simple", "titleLine": ["Overview"], "text": "Lorem..." },
        {
          "type": "screenshots",
          "gridColumnsNumber": 3,
          "images": ["/images/projects/alpha/screen-1.jpg"]
        },
        {
          "type": "video",
          "desktopScreenshot": "/images/projects/alpha/full-desktop.jpg",
          "mobileScreenshot": "/images/projects/alpha/full-mobile.jpg"
        },
        {
          "type": "team",
          "title": "The Team",
          "cards": [{ "title": "Developer", "content": "Built the thing" }]
        },
        {
          "type": "quote",
          "titleLine": ["Feedback"],
          "quotes": [{ "quote": "...", "name": "...", "title": "...", "avatar": "/images/avatars/avatar-1.jpg" }]
        },
        {
          "type": "techstack",
          "title": "Tech Stack",
          "tags": ["React", "Node.js"]
        }
      ]
    }
  ]
}
```

### `data/footer.json`

```json
{
  "slogan": "Let's work together",
  "address": [
    {
      "city": "Warsaw",
      "street": "ul. Example 12",
      "postalCode": "00-001",
      "phone": "+48 123 456 789",
      "mail": "hello@example.com"
    }
  ]
}
```

### `data/textPages.json`

```json
[
  {
    "slug": "about",
    "fragments": [
      {
        "titleLine": ["About Us"],
        "text": "Lorem ipsum..."
      }
    ]
  }
]
```

---

## 2. Image Directory Structure

```
public/images/
├── home/
│   ├── hero-desktop.jpg
│   ├── hero-mobile.jpg
│   ├── team-1.jpg
│   ├── approach.jpg
│   └── avatar-1.jpg
├── services/
│   ├── hero-desktop.jpg
│   └── hero-mobile.jpg
├── projects/
│   ├── hero-desktop.jpg
│   ├── hero-mobile.jpg
│   ├── alpha-logo.png
│   └── alpha/
│       ├── slide-1.jpg
│       ├── slide-1-desktop.jpg
│       ├── slide-1-mobile.jpg
│       ├── full-desktop.jpg
│       ├── full-mobile.jpg
│       └── screen-1.jpg
└── avatars/
    └── avatar-1.jpg
```

Placeholder images (colored rectangles with text labels) created so the site renders without broken images.

---

## 3. Type Changes

All types get `T` suffix. Strapi nesting removed.

### `types/commonTypes.ts`

- **Delete**: `WPImage`, `WPImageAttributes`
- **Simplify** `CustomImageProps`:

```typescript
type CustomImagePropsT = {
  src: string
  className?: string
  style?: Properties
  priority?: boolean
  heightFallback?: number
  widthFallback?: number
  alt?: string
  unoptimized?: boolean
}
```

### `types/homePageTypes.ts`

```typescript
type HomeSectionT =
  | CardsSectionT
  | FullSectionT
  | QuoteSectionT
  | SimpleSectionT

type HomePageDataT = {
  introTxt: string
  backgroundDesktop: string
  backgroundMobile: string
  sections: HomeSectionT[]
}

type CardsSectionT = {
  type: "cards"
  titleLine: string[]
  text: string
  cardDesktop: TeamCardT[]
  cardMobile: MobileCardT[]
}

type TeamCardT = {
  leftSideTitle: string
  rightSideText: string
  leftSideImg: string
}

type MobileCardT = {
  title: string
  content: string
}

type FullSectionT = {
  type: "fullSection"
  titleLine: string[]
  cards: { title: string; content: string }[]
  largePhoto: string
}

type QuoteSectionT = {
  type: "quote"
  titleLine: string[]
  quotes: QuoteT[]
}

type QuoteT = {
  quote: string
  name: string
  title: string
  avatar: string
}

type SimpleSectionT = {
  type: "simple"
  titleLine: string[]
  text: string
}
```

### `types/servicesTypes.ts`

```typescript
type ServicesCardT = {
  title: string
  description: string
  tags: string[]
}

type ServicesDataT = {
  services: ServicesCardT[]
  slogan: string
  introText: string
  backgroundMobile: string
  backgroundDesktop: string
}
```

### `types/projectsTypes.ts`

```typescript
type ProjectT = {
  uuid: string
  slug: string
  name: string
  description: string
  logo: string
  tempSlug: string
  sections: ProjectSectionT[]
}

type ProjectSectionT =
  | ProjectMainSectionT
  | SimpleSectionT
  | ScreenshotsSectionT
  | VideoSectionT
  | TeamSectionT
  | QuoteSectionT
  | TechstackSectionT

type ProjectMainSectionT = {
  type: "main"
  cats: { Client: string; Region: string; Year: string; Industry: string }
  slides: { mainFoto: string; desktopView: string; mobileView: string }[]
}

type ScreenshotsSectionT = {
  type: "screenshots"
  gridColumnsNumber: number
  images: string[]
}

type VideoSectionT = {
  type: "video"
  desktopScreenshot: string
  mobileScreenshot: string
}

type TeamSectionT = {
  type: "team"
  title: string
  cards: { title: string; content: string }[]
}

type TechstackSectionT = {
  type: "techstack"
  title: string
  tags: string[]
}

type ProjectsPageDataT = {
  slogan: string
  introText: string
  backgroundDesktop: string
  backgroundMobile: string
  projects: ProjectT[]
}
```

### `types/footerTypes.ts`

```typescript
type OfficeT = {
  city: string
  street: string
  postalCode: string
  phone: string
  mail: string
}

type FooterDataT = {
  slogan: string
  address: OfficeT[]
}
```

---

## 4. Component Changes

### Deleted

| File | Reason |
|------|--------|
| `lib/apiUtils.js` | No more GraphQL fetching |
| `lib/queries/getHomeData.js` | Replaced by JSON import |
| `lib/queries/getHomeSections.js` | Replaced by JSON import |
| `lib/queries/getServices.js` | Replaced by JSON import |
| `lib/queries/getProjectPage.js` | Replaced by JSON import |
| `lib/queries/getSingleProjects.js` | Replaced by JSON import |
| `lib/queries/getProjectsSlugs.js` | Replaced by JSON import |
| `lib/queries/getFooterData.js` | Replaced by JSON import |
| `lib/queries/getTextsData.js` | Replaced by JSON import |

### Modified — Page components (data boundary)

Each page replaces `await getData(query)` with a JSON import and removes Strapi nesting extraction:

| File | Change |
|------|--------|
| `app/page.tsx` | `import homeData from '@/data/home.json'` — pass directly to HomePage |
| `app/services/page.tsx` | `import servicesData from '@/data/services.json'` — pass directly to ServicesMain |
| `app/projects/page.tsx` | `import projectsData from '@/data/projects.json'` — pass directly to ProjectsMain |
| `app/about/[slug]/page.tsx` | Import both `textPages.json` and `projects.json`, find by slug |
| `app/layout.tsx` | `import footerData from '@/data/footer.json'` — pass directly to Footer |
| `app/server-sitemap.xml/route.ts` | Read slugs from `projects.json` |

### Modified — Image components

| File | Change |
|------|--------|
| `CustomImgServer.tsx` | Accept `src: string` + `alt?: string`. Remove `urlBase`, `WPImageAttributes` destructuring. Pass `src` directly to `next/image`. |
| `CustomImageClient.tsx` | Same simplification. Remove video detection and `<video>` rendering. |

### Modified — Interior components (nesting access)

| Pattern | Before | After |
|---------|--------|-------|
| Image access | `something.data.attributes` | plain `string` prop |
| Title lines | `titleLine[i].singleLine` | `titleLine[i]` |
| Tags | `tags.map(t => t.tag)` | `tags.map(t => t)` or just `tags` |
| Section type | `data.__typename` | `data.type` |
| Video prop | `video: boolean` | Removed |

Affected components (all in `components/`):
- `home/HomePage.tsx` — remove video prop from Intro
- `home/intro/Intro.tsx` — receive image as string, remove video/breakpoint image selection logic for WPImage
- `home/sections/Section.tsx` — switch on `data.type` instead of `__typename`
- `home/sections/teamCardsSection/TeamCard.tsx` — `leftSideImg` is string
- `home/sections/approachFullSection/Approach.tsx` — `foto` is string
- `home/sections/quotes/singleQuote/SingleQuote.tsx` — `avatar` is string
- `general/ProjectsHeader.tsx` — images as strings, remove video
- `projects/ProjectsHeaderServer.tsx` — image as string, remove video
- `projects/ProjectsMain.tsx` — flat data access, no `data.attributes` nesting
- `projects/projectCard/ProjectsCard.tsx` — logo as string
- `projects/projectCard/ProjectCardLogo.tsx` — logo as string
- `services/ServicesMain.tsx` — remove video, flat data
- `services/servicesCard/CardBody.tsx` — tags as `string[]`
- `footer/Footer.tsx` — flat data access
- `footer/FooterContact.tsx` — remove Krakow filter workaround

### Untouched

- All animation wrappers (`MotionWrapper`, GSAP hooks)
- `helpers/getMarkdownText.js` — stays as-is
- `helpers/removeSpaces.js` — stays as-is
- Zustand store (`app/store/global.ts`)
- All styling / Tailwind config
- Layout structure and routing

---

## 5. Config Changes

### `next.config.js`

Remove Strapi remote pattern:

```javascript
// Before
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'live.admin.navarra-lab.com' }
  ]
}

// After
images: {}
// or remove images key entirely
```

### `.env.local`

Remove `STRAPIBASEURL` — no longer needed.

---

## 6. Migration Summary

| Layer | Before | After |
|-------|--------|-------|
| Data source | Strapi GraphQL API | JSON files in `data/` |
| Images | Remote from CMS domain | Local in `public/images/` |
| Image types | `WPImage` nested object | Plain `string` path |
| Section discriminator | `__typename` | `type` |
| Tags | `{tag: string}[]` | `string[]` |
| Title lines | `[{singleLine: string}]` | `string[]` |
| Videos | Supported | Removed |
| `next/image` | Yes, with `urlBase + url` | Yes, with direct `src` path |
| `next.config.js` | Strapi remote pattern | No remote patterns needed |

**Files created:** 5 JSON data files, placeholder images, updated types
**Files deleted:** `lib/apiUtils.js`, 8 `lib/queries/*` files
**Files modified:** ~5 page components, 2 image components, ~15 interior components, 5 type files, `next.config.js`

# Strapi to Static JSON Migration — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all Strapi CMS (GraphQL) data fetching with static JSON files and local images, removing every CMS dependency.

**Architecture:** Bottom-up migration — create data files and placeholder images first, then update types to flat shapes, then update image components (shared by everything), then interior components, then page-level data boundaries, then cleanup dead code and config.

**Tech Stack:** Next.js 14 (App Router), TypeScript, next/image, Tailwind CSS 3

**Spec:** `docs/superpowers/specs/2026-03-17-strapi-to-static-json-design.md`

**Note:** This project has no test infrastructure (no Jest/Vitest/Playwright). Verification is `npx tsc --noEmit` and `npm run build`. Tasks 3-9 will have intermediate type errors because types change in Task 3 but consumers update in Tasks 5-9. Full type-check should only pass after Task 10 is complete. Tasks 5-9 are independent of each other and can run in any order.

---

## File Structure

### Created

| File | Responsibility |
|------|---------------|
| `data/home.json` | Home page data: intro text, backgrounds, sections |
| `data/services.json` | Services page data: slogan, services list |
| `data/projects.json` | Projects page data: slogan, project cards |
| `data/footer.json` | Footer data: slogan, office addresses |
| `data/textPages.json` | Text pages data: slug + fragments |
| `public/images/home/*` | Home page placeholder images |
| `public/images/services/*` | Services page placeholder images |
| `public/images/projects/*` | Projects page placeholder images |
| `public/images/avatars/*` | Shared avatar placeholder images |

### Modified

| File | Change |
|------|--------|
| `types/commonTypes.ts` | Delete `WPImage`, `WPImageAttributes`. Simplify `CustomImageProps` to `CustomImagePropsT` |
| `types/homePageTypes.ts` | Rewrite: discriminated union sections, flat image strings, `T` suffix |
| `types/servicesTypes.ts` | Rewrite: flat tags as `string[]`, `T` suffix |
| `types/projectsTypes.ts` | Rewrite: flat project structure, `T` suffix |
| `types/footerTypes.ts` | Rename types with `T` suffix |
| `components/general/customImage/CustomImgServer.tsx` | Remove `urlBase`, accept `src: string` + `alt?: string` directly |
| `components/general/customImage/CustomImageClient.tsx` | Remove `urlBase`, video detection, accept `src: string` + `alt?: string` |
| `components/home/HomePage.tsx` | Remove `video` destructuring, change section key to `type` |
| `components/home/intro/Intro.tsx` | Change props to `string` images, remove `WPImage` import |
| `components/home/sections/Section.tsx` | Switch on `data.type` instead of `__typename` |
| `components/home/sections/SimpleSection.tsx` | Change `titleLine` type to `string[]` |
| `components/home/sections/teamCardsSection/TeamCards.tsx` | Remove `.data.attributes` from `leftSideImg` |
| `components/home/sections/teamCardsSection/TeamCard.tsx` | `leftSideImg` is now `string` |
| `components/home/sections/approachFullSection/Approach.tsx` | `foto` is now `string` |
| `components/home/sections/quotes/Quotes.tsx` | Remove `WPImage` from avatar type |
| `components/home/sections/quotes/singleQuote/SingleQuote.tsx` | `avatar` is `string`, remove `.data.attributes` |
| `components/general/SimpleHeader.tsx` | `title` type to `string[]`, remove `.singleLine` |
| `components/general/ProjectsHeader.tsx` | Images as strings, remove `video` |
| `components/projects/ProjectsHeaderServer.tsx` | Remove `data.attributes` unwrap, remove `video` class logic |
| `components/projects/ProjectsMain.tsx` | Flat data access, remove `data.attributes` nesting |
| `components/projects/projectCard/ProjectsCard.tsx` | `logo` is string, flat project shape |
| `components/projects/projectCard/ProjectCardLogo.tsx` | `logo` is string, remove `.data.attributes` |
| `components/services/ServicesMain.tsx` | Remove `video` from header data |
| `components/services/servicesCard/CardBody.tsx` | `tags` as `string[]`, remove `.tag` access |
| `components/footer/Footer.tsx` | Update `FooterProps` import name |
| `components/footer/FooterContact.tsx` | Remove Kraków filter workaround |
| `components/textPage/TextPageMain.tsx` | Update data shape |
| `components/textPage/TextPageTitle.tsx` | `titleLine` as `string[]`, remove `.singleLine` |
| `app/page.tsx` | Import JSON, remove `getData` |
| `app/layout.tsx` | Import JSON, remove `getData` |
| `app/projects/page.tsx` | Import JSON, remove `getData` |
| `app/services/page.tsx` | Import JSON, remove `getData` |
| `app/about/[slug]/page.tsx` | Import JSON, remove `getData` |
| `app/server-sitemap.xml/route.ts` | Read slugs from JSON |
| `next.config.js` | Remove Strapi `remotePatterns` |

### Deleted

| File | Reason |
|------|--------|
| `lib/apiUtils.js` | No more GraphQL |
| `lib/queries/getFooterData.js` | Replaced by JSON import |
| `lib/queries/getHomeData.js` | Replaced by JSON import |
| `lib/queries/getHomeSections.js` | Replaced by JSON import |
| `lib/queries/getProjectPage.js` | Replaced by JSON import |
| `lib/queries/getProjectsSlugs.js` | Replaced by JSON import |
| `lib/queries/getServices.js` | Replaced by JSON import |
| `lib/queries/getSingleProjects.js` | Replaced by JSON import |
| `lib/queries/getTextsData.js` | Replaced by JSON import |

---

## Task 1: Create JSON data files

**Files:**
- Create: `data/home.json`
- Create: `data/services.json`
- Create: `data/projects.json`
- Create: `data/footer.json`
- Create: `data/textPages.json`

- [ ] **Step 1: Create `data/` directory**

```bash
mkdir -p data
```

- [ ] **Step 2: Create `data/home.json`**

```json
{
  "introTxt": "We are a digital\ndesign & development\nstudio",
  "backgroundDesktop": "/images/home/hero-desktop.jpg",
  "backgroundMobile": "/images/home/hero-mobile.jpg",
  "sections": [
    {
      "type": "cards",
      "titleLine": ["Our Team"],
      "text": "Meet the people behind our projects.",
      "cardDesktop": [
        {
          "leftSideTitle": "John",
          "rightSideText": "Full-stack developer with 10 years of experience in web technologies.",
          "leftSideImg": "/images/home/team-1.jpg"
        },
        {
          "leftSideTitle": "Anna",
          "rightSideText": "UI/UX designer focused on creating intuitive digital experiences.",
          "leftSideImg": "/images/home/team-2.jpg"
        }
      ],
      "cardMobile": [
        { "title": "John", "content": "Full-stack developer" },
        { "title": "Anna", "content": "UI/UX designer" }
      ]
    },
    {
      "type": "fullSection",
      "titleLine": ["Our Approach"],
      "cards": [
        { "title": "Strategy", "content": "We start every project with a deep dive into your business goals." },
        { "title": "Design", "content": "Beautiful interfaces that users love to interact with." },
        { "title": "Development", "content": "Clean, performant code built to scale." }
      ],
      "largePhoto": "/images/home/approach.jpg"
    },
    {
      "type": "quote",
      "titleLine": ["What They Say"],
      "quotes": [
        {
          "quote": "Working with this team was a game-changer for our digital presence.",
          "name": "John Doe",
          "title": "CEO, Acme Corp",
          "avatar": "/images/avatars/avatar-1.jpg"
        }
      ]
    },
    {
      "type": "simple",
      "titleLine": ["About Us"],
      "text": "We are a team of designers and developers who love building digital products."
    }
  ]
}
```

- [ ] **Step 3: Create `data/services.json`**

```json
{
  "slogan": "What we do",
  "introText": "We craft digital experiences that make a difference.",
  "backgroundDesktop": "/images/services/hero-desktop.jpg",
  "backgroundMobile": "/images/services/hero-mobile.jpg",
  "services": [
    {
      "title": "Web Design",
      "description": "Creating beautiful, functional interfaces for web applications.",
      "tags": ["design", "ui", "ux"]
    },
    {
      "title": "Web Development",
      "description": "Building performant, scalable web applications with modern technologies.",
      "tags": ["react", "next.js", "node"]
    },
    {
      "title": "Branding",
      "description": "Developing brand identities that resonate with your audience.",
      "tags": ["identity", "logo", "guidelines"]
    }
  ]
}
```

- [ ] **Step 4: Create `data/projects.json`**

```json
{
  "slogan": "Our Work",
  "introText": "Selected projects we are proud of.",
  "backgroundDesktop": "/images/projects/hero-desktop.jpg",
  "backgroundMobile": "/images/projects/hero-mobile.jpg",
  "projects": [
    {
      "uuid": "1",
      "slug": "project-alpha",
      "name": "Project Alpha",
      "description": "A complete digital transformation for a tech startup.",
      "logo": "/images/projects/alpha-logo.png",
      "tempSlug": "/projects/project-alpha",
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
        { "type": "simple", "titleLine": ["Overview"], "text": "Project Alpha was a full-scale redesign..." },
        {
          "type": "screenshots",
          "gridColumnsNumber": 3,
          "images": ["/images/projects/alpha/screen-1.jpg", "/images/projects/alpha/screen-2.jpg", "/images/projects/alpha/screen-3.jpg"]
        },
        {
          "type": "video",
          "desktopScreenshot": "/images/projects/alpha/full-desktop.jpg",
          "mobileScreenshot": "/images/projects/alpha/full-mobile.jpg"
        },
        {
          "type": "team",
          "title": "The Team",
          "cards": [
            { "title": "Developer", "content": "Built the frontend" },
            { "title": "Designer", "content": "Created the visual identity" }
          ]
        },
        {
          "type": "quote",
          "titleLine": ["Feedback"],
          "quotes": [
            { "quote": "Excellent work.", "name": "Jane Smith", "title": "CTO", "avatar": "/images/avatars/avatar-1.jpg" }
          ]
        },
        {
          "type": "techstack",
          "title": "Tech Stack",
          "tags": ["React", "Node.js", "PostgreSQL"]
        }
      ]
    }
  ]
}
```

- [ ] **Step 5: Create `data/footer.json`**

```json
{
  "slogan": "Let's work\ntogether",
  "address": [
    {
      "city": "Kraków",
      "street": "ul. Example 12",
      "postalCode": "30-001",
      "phone": "+48 123 456 789",
      "mail": "hello@example.com"
    }
  ]
}
```

- [ ] **Step 6: Create `data/textPages.json`**

```json
[
  {
    "slug": "privacy-policy",
    "fragments": [
      {
        "titleLine": ["Privacy Policy"],
        "text": "This is the privacy policy page content."
      }
    ]
  },
  {
    "slug": "terms",
    "fragments": [
      {
        "titleLine": ["Terms of Service"],
        "text": "This is the terms of service page content."
      }
    ]
  }
]
```

- [ ] **Step 7: Commit**

```bash
git add data/
git commit -m "feat: add static JSON data files for CMS replacement"
```

---

## Task 2: Create placeholder images

**Files:**
- Create: `public/images/home/` (5 images)
- Create: `public/images/services/` (2 images)
- Create: `public/images/projects/` (9+ images)
- Create: `public/images/avatars/` (1 image)

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p public/images/{home,services,projects/alpha,avatars}
```

- [ ] **Step 2: Generate placeholder images using ImageMagick**

Generate colored rectangles with text labels. Each image is 1200x800 (or appropriate size) so `next/image` can process them.

```bash
# Home
convert -size 1440x900 xc:#1a1a2e -fill white -pointsize 40 -gravity center -annotate 0 "hero-desktop" public/images/home/hero-desktop.jpg
convert -size 640x900 xc:#1a1a2e -fill white -pointsize 30 -gravity center -annotate 0 "hero-mobile" public/images/home/hero-mobile.jpg
convert -size 400x400 xc:#2d3436 -fill white -pointsize 24 -gravity center -annotate 0 "team-1" public/images/home/team-1.jpg
convert -size 400x400 xc:#2d3436 -fill white -pointsize 24 -gravity center -annotate 0 "team-2" public/images/home/team-2.jpg
convert -size 1200x600 xc:#0984e3 -fill white -pointsize 30 -gravity center -annotate 0 "approach" public/images/home/approach.jpg

# Services
convert -size 1440x900 xc:#6c5ce7 -fill white -pointsize 40 -gravity center -annotate 0 "services-desktop" public/images/services/hero-desktop.jpg
convert -size 640x900 xc:#6c5ce7 -fill white -pointsize 30 -gravity center -annotate 0 "services-mobile" public/images/services/hero-mobile.jpg

# Projects
convert -size 1440x900 xc:#00b894 -fill white -pointsize 40 -gravity center -annotate 0 "projects-desktop" public/images/projects/hero-desktop.jpg
convert -size 640x900 xc:#00b894 -fill white -pointsize 30 -gravity center -annotate 0 "projects-mobile" public/images/projects/hero-mobile.jpg
convert -size 200x80 xc:#dfe6e9 -fill '#2d3436' -pointsize 20 -gravity center -annotate 0 "alpha-logo" public/images/projects/alpha-logo.png
convert -size 1200x800 xc:#fd79a8 -fill white -pointsize 30 -gravity center -annotate 0 "slide-1" public/images/projects/alpha/slide-1.jpg
convert -size 1200x800 xc:#fd79a8 -fill white -pointsize 30 -gravity center -annotate 0 "slide-1-desktop" public/images/projects/alpha/slide-1-desktop.jpg
convert -size 400x800 xc:#fd79a8 -fill white -pointsize 24 -gravity center -annotate 0 "slide-1-mobile" public/images/projects/alpha/slide-1-mobile.jpg
convert -size 1200x800 xc:#e17055 -fill white -pointsize 30 -gravity center -annotate 0 "full-desktop" public/images/projects/alpha/full-desktop.jpg
convert -size 400x800 xc:#e17055 -fill white -pointsize 24 -gravity center -annotate 0 "full-mobile" public/images/projects/alpha/full-mobile.jpg
convert -size 600x400 xc:#636e72 -fill white -pointsize 20 -gravity center -annotate 0 "screen-1" public/images/projects/alpha/screen-1.jpg
convert -size 600x400 xc:#636e72 -fill white -pointsize 20 -gravity center -annotate 0 "screen-2" public/images/projects/alpha/screen-2.jpg
convert -size 600x400 xc:#636e72 -fill white -pointsize 20 -gravity center -annotate 0 "screen-3" public/images/projects/alpha/screen-3.jpg

# Avatars
convert -size 128x128 xc:#a29bfe -fill white -pointsize 16 -gravity center -annotate 0 "avatar-1" public/images/avatars/avatar-1.jpg
```

If `convert` (ImageMagick) is not available, install via `brew install imagemagick` first — or alternatively create simple 1x1 pixel placeholder files:

```bash
# Fallback: tiny placeholder PNGs using base64
# (use the ImageMagick approach if possible — produces better dev experience)
```

- [ ] **Step 3: Commit**

```bash
git add public/images/
git commit -m "feat: add placeholder images for static data"
```

---

## Task 3: Rewrite type definitions

**Files:**
- Modify: `types/commonTypes.ts`
- Modify: `types/homePageTypes.ts`
- Modify: `types/servicesTypes.ts`
- Modify: `types/projectsTypes.ts`
- Modify: `types/footerTypes.ts`

All types get `T` suffix. All Strapi nesting (`WPImage`, `data.attributes`, `{singleLine}`, `{tag}`) removed.

- [ ] **Step 1: Rewrite `types/commonTypes.ts`**

Delete `WPImage` and `WPImageAttributes`. Simplify `CustomImageProps`:

```typescript
import { Properties } from "csstype";

export type CustomImagePropsT = {
  src: string;
  className?: string;
  style?: Properties;
  priority?: boolean;
  heightFallback?: number;
  widthFallback?: number;
  alt?: string;
  unoptimized?: boolean;
};
```

- [ ] **Step 2: Rewrite `types/homePageTypes.ts`**

```typescript
export type HomePagePropsT = {
  data: {
    introTxt: string;
    backgroundDesktop: string;
    backgroundMobile: string;
    sections: HomeSectionT[];
  };
};

export type HomeSectionT =
  | CardsSectionT
  | FullSectionT
  | QuoteSectionT
  | SimpleSectionT;

export type CardsSectionT = {
  type: "cards";
  titleLine: string[];
  text: string;
  cardDesktop: TeamCardDesktopT[];
  cardMobile: MobileCardT[];
};

export type TeamCardDesktopT = {
  leftSideTitle: string;
  rightSideText: string;
  leftSideImg: string;
};

export type MobileCardT = {
  title: string;
  content: string;
};

export type FullSectionT = {
  type: "fullSection";
  titleLine: string[];
  cards: { title: string; content: string }[];
  largePhoto: string;
};

export type QuoteSectionT = {
  type: "quote";
  titleLine: string[];
  quotes: QuoteT[];
};

export type QuoteT = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

export type SimpleSectionT = {
  type: "simple";
  titleLine: string[];
  text: string;
};

export type SectionPropsT = {
  data: HomeSectionT;
  singleProjectPage?: boolean;
  home?: boolean;
  quote?: boolean;
};

export type TeamCardTypeT = {
  cardDesktop: TeamCardDesktopT[];
  cardMobile: MobileCardT[];
  home?: boolean;
};

export type TeamCardPropsT = {
  home?: boolean;
  title?: string;
  content: string;
  leftSideImg?: string;
  rightSideText?: string;
};
```

- [ ] **Step 3: Rewrite `types/servicesTypes.ts`**

```typescript
export type ServicesCardT = {
  title: string;
  description: string;
  tags: string[];
};

export type ServicesCardPropsT = {
  service: ServicesCardT;
  nr: string;
};

export type CardBodyPropsT = {
  tags: string[];
  description: string;
  opened: boolean;
};

export type ServicesMainPropsT = {
  data: {
    services: ServicesCardT[];
    slogan: string;
    introText: string;
    backgroundMobile: string;
    backgroundDesktop: string;
  };
};
```

- [ ] **Step 4: Rewrite `types/projectsTypes.ts`**

```typescript
export type ProjectT = {
  uuid: string;
  slug: string;
  name: string;
  description: string;
  logo: string;
  tempSlug: string;
  sections: ProjectSectionT[];
};

export type ProjectSectionT =
  | ProjectMainSectionT
  | SimpleSectionT
  | ScreenshotsSectionT
  | VideoSectionT
  | TeamSectionT
  | ProjectQuoteSectionT
  | TechstackSectionT;

type ProjectMainSectionT = {
  type: "main";
  cats: { Client: string; Region: string; Year: string; Industry: string };
  slides: { mainFoto: string; desktopView: string; mobileView: string }[];
};

type SimpleSectionT = {
  type: "simple";
  titleLine: string[];
  text: string;
};

type ScreenshotsSectionT = {
  type: "screenshots";
  gridColumnsNumber: number;
  images: string[];
};

type VideoSectionT = {
  type: "video";
  desktopScreenshot: string;
  mobileScreenshot: string;
};

type TeamSectionT = {
  type: "team";
  title: string;
  cards: { title: string; content: string }[];
};

type ProjectQuoteSectionT = {
  type: "quote";
  titleLine: string[];
  quotes: { quote: string; name: string; title: string; avatar: string }[];
};

type TechstackSectionT = {
  type: "techstack";
  title: string;
  tags: string[];
};

export type ProjectsHeaderPropsT = {
  data: {
    introText: string;
    slogan: string;
    backgroundDesktop: string;
    backgroundMobile: string;
  };
};

export type ProjectsCardPropsT = {
  project: ProjectT;
};

export type ProjectsMainPropsT = {
  projects: ProjectT[];
  slogan: string;
  introText: string;
  backgroundDesktop: string;
  backgroundMobile: string;
};
```

- [ ] **Step 5: Rewrite `types/footerTypes.ts`**

```typescript
export type OfficeT = {
  city: string;
  street: string;
  postalCode: string;
  phone: string;
  mail: string;
};

export type FooterPropsT = {
  data: {
    slogan: string;
    address: OfficeT[];
  };
};

export type FooterContactPropsT = {
  offices: OfficeT[];
};

export type FooterAddressPropsT = {
  office: OfficeT;
};
```

- [ ] **Step 6: Type-check (expect errors — downstream consumers not yet updated)**

```bash
npx tsc --noEmit 2>&1 | head -30
```

Expected: errors in components that still import old type names. This confirms the types themselves are valid.

- [ ] **Step 7: Commit**

```bash
git add types/
git commit -m "feat: rewrite type definitions for static JSON data (flat, T-suffixed)"
```

---

## Task 4: Update image components

**Files:**
- Modify: `components/general/customImage/CustomImgServer.tsx`
- Modify: `components/general/customImage/CustomImageClient.tsx`

- [ ] **Step 1: Rewrite `CustomImgServer.tsx`**

Replace the entire component. Remove `urlBase`, `data` prop, `WPImageAttributes` destructuring. Accept `src` + `alt` directly:

```typescript
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { CustomImagePropsT } from "../../../types/commonTypes";

export const CustomImgServer = ({
  //image component for server side rendering = no loading state
  src,
  className,
  style,
  priority,
  alt = "",
  heightFallback,
  widthFallback,
  unoptimized = false,
}: CustomImagePropsT) => {
  const height = heightFallback ?? 0;
  const width = widthFallback ?? 0;

  return (
    <>
      {src && (
        <Image
          priority={priority}
          style={style}
          className={twMerge(className)}
          src={src}
          width={width}
          height={height}
          alt={alt}
          unoptimized={unoptimized}
        />
      )}
    </>
  );
};
```

- [ ] **Step 2: Rewrite `CustomImageClient.tsx`**

Remove video detection, `urlBase`, `data` prop. Keep loading/spinner logic:

```typescript
"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CustomImagePropsT } from "../../../types/commonTypes";
import { Spinner } from "../Spinner";

type CustomImageClientPropsT = CustomImagePropsT & {
  showSpinner?: boolean;
};

export const CustomImageClient = ({
  src,
  className,
  style,
  priority,
  showSpinner = true,
  alt = "",
  heightFallback,
  widthFallback,
  unoptimized = false,
}: CustomImageClientPropsT) => {
  const [loaded, setLoaded] = useState(false);
  const height = heightFallback ?? 0;
  const width = widthFallback ?? 0;
  const onLoadingComplete = () => setLoaded(true);
  const opacity = loaded ? "opacity-1 duration-500 " : "opacity-0";

  return (
    <>
      {src && (
        <>
          <Image
            priority={priority}
            style={style}
            className={twMerge(className + opacity)}
            src={src}
            width={width}
            height={height}
            alt={alt}
            onLoad={onLoadingComplete}
            unoptimized={unoptimized}
          />
          <div className={`center-absolute absolute`}>
            {!loaded && showSpinner && <Spinner />}
          </div>
        </>
      )}
    </>
  );
};
```

- [ ] **Step 3: Commit**

```bash
git add components/general/customImage/
git commit -m "feat: simplify image components for static local images"
```

---

## Task 5: Update home page components

**Files:**
- Modify: `components/home/HomePage.tsx`
- Modify: `components/home/intro/Intro.tsx`
- Modify: `components/home/sections/Section.tsx`
- Modify: `components/home/sections/SimpleSection.tsx`
- Modify: `components/general/SimpleHeader.tsx`
- Modify: `components/home/sections/teamCardsSection/TeamCards.tsx`
- Modify: `components/home/sections/teamCardsSection/TeamCard.tsx`
- Modify: `components/home/sections/approachFullSection/Approach.tsx`
- Modify: `components/home/sections/quotes/Quotes.tsx`
- Modify: `components/home/sections/quotes/singleQuote/SingleQuote.tsx`

- [ ] **Step 1: Update `HomePage.tsx`**

Change import to new type. Remove `video` from destructuring. Change section key from `__typename` to `type`:

```typescript
import { Intro } from "./intro/Intro";

import { GradientMask } from "../general/gradientMask/GradientMask";
import { HomePagePropsT } from "../../types/homePageTypes";
import { Section } from "./sections/Section";
import { GetInTouchButton } from "./intro/getInTouchBtn/GetInTouchButton";

export const HomePage = ({ data }: HomePagePropsT) => {
  const {
    introTxt = "",
    backgroundDesktop,
    backgroundMobile,
    sections,
  } = data ?? {};
  return (
    <section
      title={`Home Page`}
      className={`relative mx-auto w-full max-w-[1920px] bg-bgc `}
    >
      <GradientMask top={true} />
      <GradientMask top={true} />
      <Intro
        txt={introTxt}
        backgroundDesktop={backgroundDesktop}
        backgroundMobile={backgroundMobile}
      />
      <div
        className={`no-scrollbar group relative z-[10] flex w-full flex-col overflow-x-hidden  `}
      >
        {sections?.length > 0 &&
          sections?.map((el, index) => (
            <Section home={true} key={el?.type + index} data={el} />
          ))}
      </div>
      <GetInTouchButton />
      <GradientMask />
      <GradientMask />
    </section>
  );
};
```

- [ ] **Step 2: Update `Intro.tsx`**

Change props from `WPImage` to `string`. Remove `WPImage` import. Pass `src` directly to `CustomImgServer`:

```typescript
"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { CustomImgServer } from "../../general/customImage/CustomImgServer";
import { AnimatedLetters } from "./animatedLetters/AnimatedLetters";
import { useMinLG } from "../../../hooks/useMediaQuery";
gsap.registerPlugin(ScrollTrigger);
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type IntroPropsT = {
  backgroundDesktop: string;
  backgroundMobile: string;
  txt: string;
};

export const Intro = ({ backgroundDesktop, backgroundMobile, txt }: IntroPropsT) => {
  const bg = useMinLG() ? backgroundDesktop : backgroundMobile;
  const bgcRef = useRef(null);
  const bgcContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(bgcRef.current, {
        opacity: "0",
        scrollTrigger: {
          trigger: bgcContainer.current,
          start: "bottom bottom",
          end: "bottom center",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={bgcRef}
        className={`fixed top-0 h-[120vh] bg-bgc pointer-events-none w-full`}
        style={{ height: "120svh" }}
      >
        <CustomImgServer
          priority={true}
          src={bg}
          className={"h-full w-auto max-w-[1440px] object-cover object-center "}
        />
      </div>
      <div ref={bgcContainer} className={`relative flex flex-col `}>
        <AnimatedLetters text={txt} />
      </div>
    </>
  );
};
```

- [ ] **Step 3: Update `Section.tsx`**

Switch discriminator from `__typename` to `type`. Use new type imports. Pass `largePhoto` as string directly:

```typescript
import { TeamCards } from "./teamCardsSection/TeamCards";
import { Quotes } from "./quotes/Quotes";
import { twMerge } from "tailwind-merge";
import { SimpleSection } from "./SimpleSection";
import { Approach } from "./approachFullSection/Approach";
import { SectionPropsT, HomeSectionT } from "../../../types/homePageTypes";

export const Section = ({ data, singleProjectPage, quote, home }: SectionPropsT) => {
  const {
    titleLine,
    text,
    type,
  } = data as HomeSectionT & { titleLine?: string[]; text?: string };

  const factsSection = type === "cards";
  const approachSection = type === "fullSection";
  const quoteSection = type === "quote";

  return (
    <section
      className={twMerge(
        `group flex flex-col`,
        singleProjectPage
          ? "py-0"
          : "paddings-left border-b border-gray2 py-12 last:border-0  xl:py-[10rem]"
      )}
    >
      <SimpleSection
        titleLine={titleLine}
        text={text}
        quote={quote}
        singleP={singleProjectPage}
        home={home}
      />
      {factsSection && data.type === "cards" && (
        <TeamCards
          home={home}
          cardDesktop={data.cardDesktop}
          cardMobile={data.cardMobile}
        />
      )}
      {approachSection && data.type === "fullSection" && (
        <Approach
          home={home}
          approachArray={data.cards}
          foto={data.largePhoto}
        />
      )}
      {quoteSection && data.type === "quote" && (
        <Quotes
          home={home}
          data={data.quotes}
          singleP={singleProjectPage}
        />
      )}
    </section>
  );
};
```

- [ ] **Step 4: Update `SimpleSection.tsx`**

Change `titleLine` type from `[{singleLine: string}]` to `string[]`:

```typescript
import { SimpleHeader } from "../../general/SimpleHeader";
import { SimpleSectionText } from "./simpleSectionText/SimpleSectionText";

export type SimpleSectionPropsT = {
  titleLine?: string[];
  text?: string;
  home?: boolean;
  quote?: boolean;
  singleP?: boolean;
};

export const SimpleSection = ({ titleLine, text, home }: SimpleSectionPropsT) => {
  return (
    <div className={`widePaddingR relative flex h-full shrink-0 flex-col `}>
      {titleLine && <SimpleHeader home={home} title={titleLine} />}
      {text && <SimpleSectionText text={text} home={home} />}
    </div>
  );
};
```

- [ ] **Step 5: Update `SimpleHeader.tsx`**

Change `title` type from `[{singleLine: string}]` to `string[]`. Remove `.singleLine` access:

```typescript
"use client";

import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { getMarkdownText } from "../../helpers/getMarkdownText";

gsap.registerPlugin(ScrollTrigger);
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type SimpleHeaderPropsT = {
  home?: boolean;
  title: string[];
};

export const SimpleHeader = ({ title, home }: SimpleHeaderPropsT) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(firstRef?.current, { y: `25%` });
      gsap.set(secondRef?.current, { y: `-25%` });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "center bottom-=5%",
          end: "center top+=7%",
          toggleActions: "play reverse play reverse",
        },
      });
      tl.to(firstRef.current, { y: 0, duration: 0.2 });
      tl.to(secondRef.current, { y: 0, duration: 0.2, delay: -0.2 });
    });
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => {
      ctx.revert();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={` overflow-hidden border-2 border-transparent font-poly text-40 uppercase sm:text-48 md:text-64 lg:text-80 xl:text-96 `}
    >
      {title?.map((el, index) => (
        <div
          ref={home ? (index === 0 ? firstRef : secondRef) : null}
          key={index + "text"}
          className={`break-words`}
        >
          {getMarkdownText(el)}
        </div>
      ))}
    </header>
  );
};
```

- [ ] **Step 6: Update `TeamCards.tsx`**

Import new types. Remove `.data.attributes` from `leftSideImg`:

```typescript
"use client";

import { TeamCard } from "./TeamCard";
import { TeamCardTypeT } from "../../../../types/homePageTypes";
import { useMinLG } from "../../../../hooks/useMediaQuery";

export const TeamCards = ({ cardDesktop, cardMobile, home }: TeamCardTypeT) => {
  const lg = useMinLG();
  const cards = lg ? cardDesktop : cardMobile;
  return (
    <>
      {cards.length > 1 && (
        <div className=" widePaddingR grid grid-cols-2 gap-x-6 gap-y-8 pt-20 md:grid-cols-3 md:gap-y-12 md:gap-x-9 md:pr-12 lg:block ">
          {cards.map((card, i) => {
            return (
              <TeamCard
                home={home}
                key={"mobileCard" + i}
                title={lg ? card?.leftSideTitle : card.title}
                content={card.content}
                leftSideImg={card?.leftSideImg}
                rightSideText={card?.rightSideText}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
```

- [ ] **Step 7: Update `TeamCard.tsx`**

Update type import. `leftSideImg` is now `string`, pass as `src` to `CustomImgServer`:

```typescript
"use client";
import { twMerge } from "tailwind-merge";

import { useRef } from "react";
import { CustomImgServer } from "../../../general/customImage/CustomImgServer";
import { TeamCardPropsT } from "../../../../types/homePageTypes";
import { useMoveDownAnimation } from "../../../../hooks/useMoveDownAnimation";

export const TeamCard = (props: TeamCardPropsT) => {
  const { title, content, leftSideImg, rightSideText, home } = props;
  const teamCardRef = useRef<HTMLDivElement>(null);
  useMoveDownAnimation(teamCardRef, home);

  return (
    <>
      <div ref={teamCardRef} className={`flex flex-col lg:flex-row pb-10 last:pb-0  `}>
        <div
          className={`relative flex flex-none flex-col  lg:w-[224px] xl:w-[208px]  border-gray5 rounded-3xl border-t
        `}
        >
          <div className="z-[2] mt-2 flex flex-col p-4 md:px-6  ">
            <div
              className={twMerge(
                `font-poly text-40 md:text-56`,
                !title && "pt-[12px] xxl:pl-2"
              )}
            >
              {title
                ? title
                : leftSideImg && (
                    <CustomImgServer src={leftSideImg} className={`w-1/2`} />
                  )}
            </div>
            <p className={`pt-[10px] text-16 md:pt-[6px]`}>{content}</p>
          </div>
        </div>
        <p className="flex w-full max-w-[394px] pl-[42px] xl:pl-[56px]  ">
          {rightSideText}
        </p>
      </div>
    </>
  );
};
```

- [ ] **Step 8: Update `Approach.tsx`**

Change `foto` from `any` (WPImageAttributes) to `string`. Pass as `src`:

```typescript
import { ApproachSingle } from "./ApproachSingle";
import { twMerge } from "tailwind-merge";
import { CustomImgServer } from "../../../general/customImage/CustomImgServer";

export type ApproachPropsT = {
  approachArray: Array<{ title: string; content: string }>;
  foto?: string;
  home?: boolean;
};

export const Approach = ({ approachArray, foto, home }: ApproachPropsT) => {
  return (
    <>
      <div
        className={twMerge(`
          pt-[3.75rem] pr-[calc(100/360*100vw)]
          md:pt-[72px] md:pr-14
          lg:pt-[90px] lg:pr-[calc(304/1024*100vw)]
          xl:pt-[112px] xl:pr-[calc(424/1440*100vw)]
          xxl:pr-[664px] `)}
      >
        <div
          className={`grid gap-x-10 md:grid-cols-3 xl:gap-x-12 xxl:gap-x-[9rem] `}
        >
          {approachArray.map((item, index) => {
            return (
              <ApproachSingle
                home={home}
                title={item.title}
                text={item.content}
                key={index + "approach"}
              />
            );
          })}
        </div>
      </div>
      {foto && (
        <div
          className={`mr-4 mt-9 md:mr-14 lg:mr-[calc(280/1024*100vw)] xl:mr-0`}
        >
          <CustomImgServer
            src={foto}
            className={` h-[480px] w-full max-w-[992px] rounded-3xl object-cover object-center  `}
          />
        </div>
      )}
    </>
  );
};
```

- [ ] **Step 9: Update `Quotes.tsx`**

Remove `WPImage` import. Change avatar type to `string`:

```typescript
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/navigation";
import { twMerge } from "tailwind-merge";
import { SingleQuote } from "./singleQuote/SingleQuote";
import { Arrow } from "./Arrow";
import SwiperCore, { Navigation, Keyboard, Autoplay, FreeMode } from "swiper";
import { QuoteT } from "../../../../types/homePageTypes";

SwiperCore.use([Navigation, Keyboard, Autoplay, FreeMode]);

type QuotesPropsT = {
  data: QuoteT[];
  singleP?: boolean;
  home?: boolean;
};

export const Quotes = ({ data, singleP, home }: QuotesPropsT) => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const mySwiper = useRef(null);
  const [init, setInit] = useState(false);

  const swiperOptions = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    effect: "fade" as "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 300,
    loop: true,
    className: "swiper-container w-full h-full  ",
  };

  return (
    <div ref={quoteRef} className={`relative`}>
      <div className={twMerge(` widePaddingR relative`)}>
        <Swiper
          onSwiper={() => setInit(true)}
          ref={mySwiper}
          {...swiperOptions}
        >
          {data.map((el, index) => (
            <SwiperSlide key={index + "swiperSlide"} className={`h-full`}>
              <SingleQuote key={index + el.title} el={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {data?.length > 1 && !singleP && (
        <div
          className={`absolute top-[80px] left-[75%] z-[10000] flex space-x-5 duration-200 group-hover:opacity-100 lg:left-[80%] lg:top-[100px] lg:space-x-10 lg:opacity-0 xl:top-[120px] xl:left-[60%] `}
        >
          <button aria-label="previous quote" ref={navigationPrevRef}>
            <Arrow />
          </button>
          <button aria-label="next quote" ref={navigationNextRef}>
            <Arrow className={"rotate-180"} />
          </button>
        </div>
      )}
    </div>
  );
};
```

- [ ] **Step 10: Update `SingleQuote.tsx`**

Change avatar from `WPImage` to `string`. Remove `.data.attributes` unwrapping. Pass as `src`:

```typescript
import { QuoteText } from "./QuoteText";
import { CustomImgServer } from "../../../../general/customImage/CustomImgServer";
import { QuoteAuthor } from "./QuoteAuthor";
import { QuoteT } from "../../../../../types/homePageTypes";

type SingleQuotePropsT = {
  el: QuoteT;
};

export const SingleQuote = ({ el }: SingleQuotePropsT) => {
  const hasAvatar = !!el.avatar;

  return (
    <>
      <QuoteText quote={el.quote} />
      <div className={`flex items-center pt-8 md:pt-10 xxl:pt-[4.25rem]`}>
        <div>
          {el.avatar && (
            <CustomImgServer
              src={el.avatar}
              className={`h-10 w-10 grow-0 rounded-full object-contain md:h-16 md:w-16`}
            />
          )}
        </div>
        <QuoteAuthor el={el} foto={hasAvatar} />
      </div>
    </>
  );
};
```

- [ ] **Step 11: Commit**

```bash
git add components/home/ components/general/SimpleHeader.tsx
git commit -m "feat: update home page components for static JSON data"
```

---

## Task 6: Update projects components

**Files:**
- Modify: `components/general/ProjectsHeader.tsx`
- Modify: `components/projects/ProjectsHeaderServer.tsx`
- Modify: `components/projects/ProjectsMain.tsx`
- Modify: `components/projects/projectCard/ProjectsCard.tsx`
- Modify: `components/projects/projectCard/ProjectCardLogo.tsx`

- [ ] **Step 1: Update `ProjectsHeader.tsx`**

Images are now strings. Remove `video`. Use new type:

```typescript
"use client";

import { ProjectsHeaderWrapper } from "../projects/ProjectsHeaderWrapper";
import { ProjectsHeaderServer } from "../projects/ProjectsHeaderServer";
import { ProjectsHeaderPropsT } from "../../types/projectsTypes";
import { useMinLG } from "../../hooks/useMediaQuery";

export const ProjectsHeader = ({ data }: ProjectsHeaderPropsT) => {
  const tablet = useMinLG();
  const bgcPhoto = tablet ? data?.backgroundDesktop : data?.backgroundMobile;
  const { introText, slogan } = data;

  return (
    <>
      <ProjectsHeaderWrapper>
        <ProjectsHeaderServer bgcPhoto={bgcPhoto} slogan={slogan} introText={introText} />
      </ProjectsHeaderWrapper>
    </>
  );
};
```

- [ ] **Step 2: Update `ProjectsHeaderServer.tsx`**

`bgcPhoto` is now a string. Remove `video` prop and `.data.attributes` unwrap:

```typescript
import { CustomImgServer } from "../general/customImage/CustomImgServer";
import { getMarkdownText } from "../../helpers/getMarkdownText";

export type ProjectsHeaderServerPropsT = {
  bgcPhoto: string;
  introText: string;
  slogan: string;
};

export const ProjectsHeaderServer = ({
  bgcPhoto,
  introText,
  slogan,
}: ProjectsHeaderServerPropsT) => {
  return (
    <>
      <div className=" container z-[2] pt-[69px] md:pt-[88px] ">
        <div
          className={`relative h-[480px] w-full overflow-hidden md:h-[400px]`}
        >
          <CustomImgServer
            priority={true}
            src={bgcPhoto}
            className={` z-[0] h-full w-full rounded-3xl object-cover   `}
          />
          <div
            className={`absolute inset-0 z-[2] flex h-full flex-col py-4
            px-4 640:px-6 md:py-6 lg:py-10 lg:px-10 `}
          >
            <div
              className={`self-end pr-[20%] text-16 640:pr-0
              640:pl-[330px] lg:pl-[600px] xl:pl-[850px] xl:text-20 xxl:pl-[1240px]`}
            >
              {getMarkdownText(introText)}
            </div>
            <p
              className={`mt-auto font-poly text-48 uppercase
              md:text-64 lg:text-80 xl:text-96`}
            >
              {slogan}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
```

- [ ] **Step 3: Update `ProjectsMain.tsx`**

Flat data access — no more `data.attributes` nesting. Use new type:

```typescript
"use client";
import { ProjectsCard } from "./projectCard/ProjectsCard";
import { ProjectsMainPropsT, ProjectT } from "../../types/projectsTypes";
import { ProjectsHeader } from "../general/ProjectsHeader";

export const ProjectsMain = ({ projects, slogan, introText, backgroundDesktop, backgroundMobile }: ProjectsMainPropsT) => {
  return (
    <div className={`no-scrollbar overflow-x-hidden`}>
      <ProjectsHeader data={{ introText, slogan, backgroundDesktop, backgroundMobile }} />
      <div className="container pt-12 pb-24 lg:pt-[136px] lg:pb-[120px] xl:pb-60 ">
        <div
          className="grid grid-cols-1 gap-x-4 gap-y-4 bg-bgc
        640:grid-cols-2 640:gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:pr-[334px] xxl:pr-[432px]"
        >
          {projects.length > 0 &&
            projects.map((project: ProjectT) => {
              return (
                <ProjectsCard
                  key={project.uuid}
                  project={project}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
```

- [ ] **Step 4: Update `ProjectsCard.tsx`**

Flat project shape. `logo` is a string:

```typescript
import { ProjectCardLogo } from "./ProjectCardLogo";
import { ProjectsCardPropsT } from "../../../types/projectsTypes";
import { ProjectCardHeader } from "./ProjectCardHeader";

export const ProjectsCard = ({ project }: ProjectsCardPropsT) => {
  const { name, description, logo, tempSlug } = project ?? {};

  let slug;

  if (project.name === "DMEXCO") {
    slug = "https://dmexco.com/";
  } else if (project.name === "PREMIUM HOMES") {
    slug = "/";
  } else {
    slug = tempSlug;
  }
  return (
    <>
      {project && project.name !== "PREMIUM HOMES" && (
        <a
          className={"block"}
          href={slug}
          target="_blank"
          rel={"noreferrer"}
        >
          <article
            className={` group relative flex h-[320px]  cursor-pointer flex-col   `}
          >
            <ProjectCardHeader name={name} description={description} />
            <ProjectCardLogo logo={logo} />
          </article>
        </a>
      )}
    </>
  );
};
```

- [ ] **Step 5: Update `ProjectCardLogo.tsx`**

`logo` is a string. Remove `WPImage` import and `.data.attributes`:

```typescript
import { CustomImgServer } from "../../general/customImage/CustomImgServer";

export type ProjectCardLogoPropsT = {
  logo: string;
};

export const ProjectCardLogo = ({ logo }: ProjectCardLogoPropsT) => {
  return (
    <>
      <div className={`my-6 flex items-center justify-between md:my-6 px-4 md:px-6 `}>
        {logo && (
          <CustomImgServer
            className={`max-h-24 max-w-[60%] object-cover`}
            src={logo}
          />
        )}
        <div className={` center ml-auto mr-3 `}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H17M17 1V17M17 1L1 17" stroke="white" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>
    </>
  );
};
```

- [ ] **Step 6: Commit**

```bash
git add components/general/ProjectsHeader.tsx components/projects/
git commit -m "feat: update projects components for static JSON data"
```

---

## Task 7: Update services components

**Files:**
- Modify: `components/services/ServicesMain.tsx`
- Modify: `components/services/servicesCard/CardBody.tsx`

- [ ] **Step 1: Update `ServicesMain.tsx`**

Use new type. Remove `video` from header data passthrough:

```typescript
import { ServicesCard } from "./servicesCard/ServicesCard";

import { ServicesMainPropsT } from "../../types/servicesTypes";
import { ProjectsHeader } from "../general/ProjectsHeader";

export const ServicesMain = ({ data }: ServicesMainPropsT) => {
  return (
    <div className={` no-scrollbar`}>
      <ProjectsHeader data={data} />
      <div className="container flex pt-10 pb-24 md:pt-14 lg:pb-[120px] lg:pt-20 xl:pb-60">
        <div className=" flex w-full flex-col lg:pr-[240px] xl:pr-[334px] xxl:pr-[432px] bg-bgc">
          {data?.services.length > 0 &&
            data.services.map((item, index) => {
              return (
                <ServicesCard
                  key={"servicesCard" + index}
                  nr={index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                  service={item}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
```

- [ ] **Step 2: Update `CardBody.tsx`**

Tags are now `string[]`. Remove `.tag` access:

```typescript
import { useEffect, useRef } from "react";
import { CardBodyPropsT } from "../../../types/servicesTypes";
import { twMerge } from "tailwind-merge";
import { getMarkdownText } from "../../../helpers/getMarkdownText";
import { Button } from "../../ui/Button";

export const CardBody = ({ tags, description, opened }: CardBodyPropsT) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref?.current) return;
    opened
      ? (ref.current.style.maxHeight = ref?.current?.scrollHeight + "px")
      : (ref.current.style.maxHeight = "0px");
  }, [opened]);

  return (
    <>
      <div ref={ref} className={`duration-500 `}>
        <div className={twMerge(`pb-6 duration-500 `,
          opened ? `opacity-100` : `opacity-0`
          )}>
          <div className="my-6 flex  flex-wrap items-center  gap-2 640:flex-row 640:items-center ">
            {tags.map(
              (tag, index) =>
                tag && (
                  <Button key={index + "tag"} className={"capitalize"}>
                    {tag}
                  </Button>
                )
            )}
          </div>
          <div className="flex text-16 text-lightgray">
            {getMarkdownText(description)}
          </div>
        </div>
      </div>
    </>
  );
};
```

- [ ] **Step 3: Update `ServicesCard.tsx`**

Update type import and component signature:

```typescript
"use client";

import { useState } from "react";
import { ServicesCardPropsT } from "../../../types/servicesTypes";
import { twMerge } from "tailwind-merge";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

export const ServicesCard = ({ service, nr }: ServicesCardPropsT) => {
  const [opened, setOpened] = useState(false);
  const { title, description, tags } = service;

  const onToggle = () => setOpened((p) => !p);
  return (
    <>
      <article
        role="button"
        onClick={onToggle}
        className={twMerge(
          ` relative cursor-pointer bg-bgc duration-500`,
          !opened ? ` hover:translate-y-[-10px]` : ` translate-y-[-10px]  `
        )}
      >
        <div className="z-[2] mb-4 px-4 pt-4 md:mb-6 md:px-6 md:pt-6 order-gray5 rounded-3xl border-t">
          <CardHeader nr={nr} opened={opened} title={title} />
          <CardBody tags={tags} description={description} opened={opened} />
        </div>
      </article>
    </>
  );
};
```

- [ ] **Step 4: Commit**

```bash
git add components/services/
git commit -m "feat: update services components for static JSON data"
```

---

## Task 8: Update footer components

**Files:**
- Modify: `components/footer/Footer.tsx`
- Modify: `components/footer/FooterContact.tsx`
- Modify: `components/footer/FooterAddress.tsx` (type import only)

- [ ] **Step 1: Update `Footer.tsx`**

Change type import:

In `components/footer/Footer.tsx` line 8, change:
```typescript
import { FooterProps } from "../../types/footerTypes";
```
to:
```typescript
import { FooterPropsT } from "../../types/footerTypes";
```

And update the component signature on line 11:
```typescript
export const Footer = ({ data }: FooterPropsT) => {
```

- [ ] **Step 2: Update `FooterContact.tsx`**

Remove Kraków filter workaround. Update type import:

```typescript
import { FooterAddress } from "./FooterAddress";
import { FooterContactPropsT } from "../../types/footerTypes";

export const FooterContact = ({ offices }: FooterContactPropsT) => {
  return (
    <div className=" pt-20 text-black 640:pt-0  ">
      <div
        className="flex 640:space-x-[89px] lg:space-x-[199px]
          xl:space-x-[182px] xxl:space-x-[134px]"
      >
        {offices &&
          offices.map((office, index) => {
            return <FooterAddress key={index + "office"} office={office} />;
          })}
      </div>
    </div>
  );
};
```

- [ ] **Step 3: Update `FooterAddress.tsx`** type import

Change `FooterAddressProps` to `FooterAddressPropsT` in the import and component signature.

- [ ] **Step 4: Commit**

```bash
git add components/footer/
git commit -m "feat: update footer components for static JSON data"
```

---

## Task 9: Update text page components

**Files:**
- Modify: `components/textPage/TextPageMain.tsx`
- Modify: `components/textPage/TextPageTitle.tsx`

- [ ] **Step 1: Update `TextPageMain.tsx`**

Data shape changes — fragments are now objects with `titleLine: string[]` and `text: string`:

```typescript
import { TextPageTitle } from "./TextPageTitle";
import { TextPageContent } from "./TextPageContent";

type TextPagePropsT = {
  data: {
    titleLine: string[];
    text: string;
  }[];
};

export const TextPageMain = ({ data }: TextPagePropsT) => {
  return (
    <section className={"bg-white pt-36 pb-20 lg:pb-24 xl:pb-28"}>
      <div
        className="paddings-left pr-[6.25rem] md:pr-[9.5rem] lg:pr-[17.5rem] xl:pr-[24.5rem] xxl:pr-[33.5rem] mx-auto max-w-[1920px]"
      >
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index + "textPage"}
                className={`relative flex flex-col `}
              >
                <TextPageTitle item={item} />
                <TextPageContent item={item} />
              </div>
            );
          })}
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Update `TextPageTitle.tsx`**

Change `titleLine` from `[{singleLine: string}]` to `string[]`. Remove `.singleLine`:

```typescript
import { getMarkdownText } from "../../helpers/getMarkdownText";

type TextPageTitlePropsT = {
  item: {
    titleLine: string[];
  };
};

export const TextPageTitle = ({ item }: TextPageTitlePropsT) => {
  return (
    <>
      {item?.titleLine && (
        <div
          className={`font-poly13 text-40 uppercase text-black sm:text-48 md:text-64 lg:text-80 xl:text-96 `}
        >
          {item?.titleLine?.map((el, index) => (
            <div key={index}>{getMarkdownText(el)}</div>
          ))}
        </div>
      )}
    </>
  );
};
```

- [ ] **Step 3: Commit**

```bash
git add components/textPage/
git commit -m "feat: update text page components for static JSON data"
```

---

## Task 10: Update page-level data boundaries

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/projects/page.tsx`
- Modify: `app/services/page.tsx`
- Modify: `app/about/[slug]/page.tsx`
- Modify: `app/server-sitemap.xml/route.ts`

- [ ] **Step 1: Update `app/page.tsx`**

Replace `getData` calls with JSON import. Pass data directly — sections are now inside `homeData`:

```typescript
import { HomePage } from "../components/home/HomePage";
import { MotionWrapper } from "../components/general/animationsWrappers/MotionWrapper";
import homeData from "../data/home.json";

export default function Home() {
  return (
    <>
      <MotionWrapper>
        <HomePage data={homeData} />
      </MotionWrapper>
    </>
  );
}
```

Note: `Home` is no longer `async` — no await needed.

- [ ] **Step 2: Update `app/layout.tsx`**

Replace `getData` call with JSON import:

```typescript
import "../styles/globals.css";
import { Metadata } from "next";
import React, { ReactNode } from "react";

import { poly, theinhardt } from "../public/fonts/fonts";

import { Navigation } from "../components/topNavigation/Navigation";
import { Footer } from "../components/footer/Footer";
import footerData from "../data/footer.json";

export const metadata: Metadata = {
  title: "Navarra lab",
  description: "Modern web development and design team",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${poly.className} ${theinhardt.className}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer data={footerData} />
        {/*<CookiebotScript />*/}
      </body>
    </html>
  );
}
```

Note: No longer `async`.

- [ ] **Step 3: Update `app/projects/page.tsx`**

```typescript
import { MotionWrapper } from "../../components/general/animationsWrappers/MotionWrapper";
import { ProjectsMain } from "../../components/projects/ProjectsMain";
import projectsData from "../../data/projects.json";

export default function Page() {
  return (
    <>
      <MotionWrapper>
        <ProjectsMain
          projects={projectsData.projects}
          slogan={projectsData.slogan}
          introText={projectsData.introText}
          backgroundDesktop={projectsData.backgroundDesktop}
          backgroundMobile={projectsData.backgroundMobile}
        />
      </MotionWrapper>
    </>
  );
}
```

- [ ] **Step 4: Update `app/services/page.tsx`**

```typescript
import { MotionWrapper } from "../../components/general/animationsWrappers/MotionWrapper";
import { ServicesMain } from "../../components/services/ServicesMain";
import servicesData from "../../data/services.json";

export default function Page() {
  return (
    <>
      <MotionWrapper>
        <ServicesMain data={servicesData} />
      </MotionWrapper>
    </>
  );
}
```

- [ ] **Step 5: Update `app/about/[slug]/page.tsx`**

```typescript
import { TextPageMain } from "../../../components/textPage/TextPageMain";
import textPages from "../../../data/textPages.json";

type AboutPagePropsT = {
  params: { slug: string };
};

type TextPageT = {
  slug: string;
  fragments: { titleLine: string[]; text: string }[];
};

export function generateStaticParams() {
  return textPages.map((page: TextPageT) => ({
    slug: page.slug,
  }));
}

export default function AboutPage({ params }: AboutPagePropsT) {
  const textPage = textPages.find(
    (item: TextPageT) => item.slug === params.slug
  );

  return <TextPageMain data={textPage?.fragments ?? []} />;
}
```

- [ ] **Step 6: Update `app/server-sitemap.xml/route.ts`**

```typescript
import { getServerSideSitemap } from "next-sitemap";
import projectsData from "../../data/projects.json";

export async function GET() {
  const dynamicUrls = projectsData.projects.map((project) => ({
    loc: `https://live.navarra-lab.com/projects/${project.slug}`,
    lastmod: new Date().toISOString(),
  }));

  const staticUrls = [
    { loc: "https://live.navarra-lab.com", lastmod: new Date().toISOString() },
    { loc: "https://live.navarra-lab.com/projects", lastmod: new Date().toISOString() },
    { loc: "https://live.navarra-lab.com/about", lastmod: new Date().toISOString() },
    { loc: "https://live.navarra-lab.com/services", lastmod: new Date().toISOString() },
  ];

  const allUrls = [...staticUrls, ...dynamicUrls];

  return getServerSideSitemap(allUrls);
}
```

- [ ] **Step 7: Commit**

```bash
git add app/
git commit -m "feat: replace all getData calls with static JSON imports"
```

---

## Task 11: Update config and delete dead code

**Files:**
- Modify: `next.config.js`
- Delete: `lib/apiUtils.js`
- Delete: `lib/queries/` (entire directory)
- Modify: `.env.local` (remove Strapi vars)

- [ ] **Step 1: Update `next.config.js`**

Remove the Strapi remote pattern:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {},
}

module.exports = nextConfig
```

- [ ] **Step 2: Delete `lib/apiUtils.js` and `lib/queries/`**

```bash
rm lib/apiUtils.js
rm -rf lib/queries/
```

If `lib/` is now empty, remove it:

```bash
rmdir lib 2>/dev/null || true
```

- [ ] **Step 3: Clean `.env.local`**

Remove `STRAPIBASEURL` and any Strapi-related values. Keep any other env vars that might be needed.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove Strapi CMS dependencies and config"
```

---

## Task 12: Verify full build

- [ ] **Step 1: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors. If errors appear, fix each one — they'll be leftover type mismatches from the migration.

- [ ] **Step 2: Run Next.js build**

```bash
npm run build
```

Expected: successful build with all pages statically generated.

- [ ] **Step 3: Run dev server and manually verify**

```bash
npm run dev
```

Check each route:
- `/` — home page renders with placeholder images
- `/services` — services page renders
- `/projects` — projects page renders with project cards
- `/about/privacy-policy` — text page renders
- `/about/terms` — text page renders

- [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: resolve build errors from static JSON migration"
```

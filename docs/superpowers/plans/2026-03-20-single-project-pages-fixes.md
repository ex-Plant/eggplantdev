# Single Project Pages — Fix Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix 3 critical/important issues found during code review of the single project pages implementation.

**Architecture:** All fixes are in the worktree at `.claude/worktrees/agent-ae160c91`. After fixes, merge the worktree branch into `main`.

**Tech Stack:** Next.js 14, TypeScript, Swiper 9, Tailwind CSS

---

### Task 1: Fix broken calc() CSS in main-slider.tsx

**Files:**
- Modify: `components/single-project/main-slider.tsx:36-42`

- [ ] **Step 1: Fix missing closing parentheses and remove duplicate xl line**

Replace lines 36-42:
```tsx
    className: `swiper-container w-full
      h-[calc(328/360*100vw)]
      md:h-[calc(320/768*100vw)]
      lg:h-[calc(400/1024*100vw]
      xl:h-[calc(560/1440*100vw]
      xl:h-[calc(560/1440*100vw]
      max-h-[720px]`,
```

With:
```tsx
    className: `swiper-container w-full
      h-[calc(328/360*100vw)]
      md:h-[calc(320/768*100vw)]
      lg:h-[calc(400/1024*100vw)]
      xl:h-[calc(560/1440*100vw)]
      max-h-[720px]`,
```

Changes: add `)` before `]` on lg/xl lines, remove duplicate xl line.

---

### Task 2: Remove dead navigation refs in main-slider.tsx

**Files:**
- Modify: `components/single-project/main-slider.tsx:5,22-30`

- [ ] **Step 1: Remove unused refs and navigation config**

Remove these lines:
```tsx
import { useRef } from "react";
```

```tsx
const navigationPrevRef = useRef(null);
const navigationNextRef = useRef(null);
const mySwiper = useRef(null);
```

```tsx
navigation: {
  prevEl: navigationPrevRef.current,
  nextEl: navigationNextRef.current,
},
```

Also remove `ref={mySwiper}` from the `<Swiper>` element (line 51).

- [ ] **Step 2: Verify the component still imports what it needs**

After removal, the only remaining React import is implicit (JSX). Swiper imports remain: `Swiper`, `SwiperSlide`, `SwiperCore`, `Keyboard`, `Autoplay`. `Navigation` import can also be removed since we're not using navigation.

Final imports should be:
```tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { SingleSlide } from "@/components/single-project/single-slide";
import { GeneralInfo } from "@/components/single-project/general-info";
import { ProjectMainSectionT } from "@/types/projectsTypes";

SwiperCore.use([Keyboard, Autoplay]);
```

Remove `"swiper/css/navigation"` import too since navigation is no longer used.

- [ ] **Step 3: Commit**

```bash
git add components/single-project/main-slider.tsx
git commit -m "fix: broken calc() CSS and dead navigation refs in main-slider"
```

---

### Task 3: Fix single-slide.tsx image layout

**Files:**
- Modify: `components/single-project/single-slide.tsx:14-46`

- [ ] **Step 1: Replace fill with explicit width/height on overlay images**

The problem: `next/image` with `fill` sets `position: absolute; width: 100%; height: 100%` via inline styles, which overrides Tailwind width/height classes. Only the background image (`mainFoto`) should use `fill`. The overlay images (`desktopView`, `mobileView`) need explicit `width`/`height` props so Tailwind classes control their sizing.

Replace the entire return block:
```tsx
return (
  <div className={`relative h-full w-full`}>
    <Image
      priority
      src={mainFoto}
      alt="Project main view"
      fill
      className="absolute top-0 left-0 h-1/2 w-full max-w-[1136px] rounded-3xl object-cover
        md:h-full md:w-[calc(464/768*100vw)]
        lg:w-[calc(624/1024*100vw)]
        xl:w-[calc(880/1440*100vw)]"
    />
    <Image
      priority
      src={desktopView}
      alt="Desktop view"
      width={992}
      height={620}
      className="absolute top-1/2 left-1/2 w-full max-w-[992px] -translate-x-1/2 -translate-y-1/2 object-contain
        md:left-auto md:right-0 md:w-[calc(464/768*100vw)] md:translate-x-0
        lg:w-[calc(544/1024*100vw)]
        xl:w-[calc(768/1440*100vw)]"
    />
    <Image
      priority
      src={mobileView}
      alt="Mobile view"
      width={416}
      height={800}
      className="absolute bottom-0 right-0 w-1/2 max-w-[416px] object-contain
        md:w-[calc(224/768*100vw)]
        lg:w-[calc(224/1024*100vw)]
        xl:w-[calc(320/1440*100vw)]"
    />
  </div>
);
```

Key changes:
- `mainFoto`: keeps `fill` (background image, should fill parent)
- `desktopView`: `fill` → `width={992} height={620}` (natural size, Tailwind controls display size)
- `mobileView`: `fill` → `width={416} height={800}` (natural size, Tailwind controls display size)

- [ ] **Step 2: Commit**

```bash
git add components/single-project/single-slide.tsx
git commit -m "fix: image layout in single-slide — use explicit dimensions for overlay images"
```

---

### Task 4: Build verification and merge

- [ ] **Step 1: Run TypeScript check from worktree**

```bash
cd .claude/worktrees/agent-ae160c91 && npx tsc --noEmit
```

Expected: no type errors.

- [ ] **Step 2: Run Next.js build from worktree**

```bash
cd .claude/worktrees/agent-ae160c91 && npx next build
```

Expected: build succeeds, static pages generated for all 3 project slugs.

- [ ] **Step 3: Merge worktree branch into main**

```bash
git merge worktree-agent-ae160c91
```

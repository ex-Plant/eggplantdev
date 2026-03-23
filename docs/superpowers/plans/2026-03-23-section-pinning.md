# Section Pinning Animation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pin each home page section in place while the user scrolls, then unpin and transition to the next section — creating a scroll-through "slide deck" feel.

**Architecture:** A single wrapper component (`PinnedSection`) uses GSAP ScrollTrigger's `pin: true` to hold each section in the viewport for one viewport-height of scroll distance. The wrapper is applied inside `RenderSections` around each section's output. The Intro is excluded (it already has its own scroll animation). Mobile gets the same pinning (no breakpoint opt-out) since GSAP handles touch scrolling natively.

**Tech Stack:** GSAP 3 + ScrollTrigger (already installed), `@gsap/react` `useGSAP` hook (already installed)

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `components/home/sections/pinned-section.tsx` | **Create** | `PinnedSection` wrapper — applies ScrollTrigger pin to its children |
| `components/home/sections/render-sections.tsx` | **Modify** | Wrap each section output in `PinnedSection` |
| `app/page.tsx` | **No change** | Already `"use client"`, already passes `isLast` — no modifications needed |

---

## Task 1: Create `PinnedSection` wrapper

**Files:**
- Create: `components/home/sections/pinned-section.tsx`

- [ ] **Step 1: Create the PinnedSection component**

```tsx
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type PinnedSectionPropsT = {
  children: React.ReactNode;
  isLast?: boolean;
};

export function PinnedSection({ children, isLast = false }: PinnedSectionPropsT) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isLast) return; // don't pin the last section — nothing to scroll into

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%", // pin for one viewport height of scrolling
        pin: true,
        pinSpacing: true,
      });
    },
    { scope: sectionRef, dependencies: [isLast] },
  );

  return (
    <div ref={sectionRef} className="will-change-transform">
      {children}
    </div>
  );
}
```

**Design decisions:**
- `isLast` skips pinning on the final section so it scrolls naturally into the footer.
- `pinSpacing: true` (default) adds spacer height so the document length stays correct.
- `end: "+=100%"` means each section stays pinned for exactly one viewport height of scroll. Adjust this value to make it feel shorter or longer.
- `will-change-transform` hints the browser to GPU-composite the pinned element.
- **How GSAP pin works internally:** When pinned, GSAP sets `position: fixed` on the wrapper div and applies inline `width`/`height` to preserve layout dimensions. You'll see these inline styles in DevTools — this is expected behavior, not a bug.

- [ ] **Step 2: Verify file created, no syntax errors**

Run: `npx tsc --noEmit --pretty 2>&1 | grep pinned-section || echo "No errors in pinned-section"`

- [ ] **Step 3: Commit**

```bash
git add components/home/sections/pinned-section.tsx
git commit -m "feat: add PinnedSection wrapper with GSAP ScrollTrigger pin"
```

---

## Task 2: Wire PinnedSection into RenderSections

**Files:**
- Modify: `components/home/sections/render-sections.tsx`

- [ ] **Step 1: Update RenderSections to wrap output in PinnedSection**

The current `RenderSections` is a server-compatible component (no `"use client"`). Since `PinnedSection` is a client component, it can be used as a child wrapper without forcing the parent to be client-side. However, `RenderSections` already receives `isLast` as a prop — we just need to use it.

Two changes to `render-sections.tsx` (minimal diff):

**Change 1:** Add import at the top of the file:
```tsx
import { PinnedSection } from "@/components/home/sections/pinned-section";
```

**Change 2:** Destructure `isLast` and wrap the return. Replace:
```tsx
export function RenderSections({ data }: SectionPropsT) {
```
with:
```tsx
export function RenderSections({ data, isLast }: SectionPropsT) {
```

And replace:
```tsx
  return renderContent();
```
with:
```tsx
  return (
    <PinnedSection isLast={isLast}>
      {renderContent()}
    </PinnedSection>
  );
```

Leave everything else untouched.

- [ ] **Step 2: Verify types pass**

Run: `npx tsc --noEmit --pretty 2>&1 | head -20`

- [ ] **Step 3: Visual test in browser**

Run: `npm run dev`

1. Open `http://localhost:3000`
2. Scroll down past the Intro
3. Each section should "stick" at the top of the viewport for roughly one full scroll-height, then release
4. The last section (type: `simple`) should scroll normally without pinning
5. Check that the footer appears correctly after the last section

- [ ] **Step 4: Commit**

```bash
git add components/home/sections/render-sections.tsx
git commit -m "feat: wrap home sections in PinnedSection for scroll pinning"
```

---

## Task 3: Tuning & edge cases

This task is for adjustments after the initial visual test. Common tweaks:

- [ ] **Step 1: Adjust pin duration if needed**

In `pinned-section.tsx`, change `end: "+=100%"` to a different value:
- `"+=50%"` — shorter pin (half viewport of scroll)
- `"+=150%"` — longer pin (1.5x viewport of scroll)

- [ ] **Step 2: Handle ScrollTrigger refresh for dynamic content (if needed)**

If sections contain images or async content that changes height after mount, add a refresh **after** creating the trigger. In `pinned-section.tsx`, inside `useGSAP`, add after `ScrollTrigger.create(...)`:

```tsx
ScrollTrigger.refresh();
```

Note: `useGSAP` already handles cleanup (killing ScrollTrigger instances) on unmount automatically — do not add a manual cleanup return for refresh.

- [ ] **Step 3: Check interaction with existing Intro animation**

The Intro (`components/home/intro/Intro.tsx`) uses its own ScrollTrigger to fade the background. Since the Intro is rendered separately from `sections.map(...)` in `page.tsx`, it is **not** wrapped in `PinnedSection` — no conflict expected. Verify by scrolling from top: Intro should fade as before, then first pinned section should catch.

- [ ] **Step 4: Check z-index stacking**

Pinned elements get `position: fixed` by GSAP. If sections overlap incorrectly, add increasing `z-index` via the `PinnedSection`. This can be done by passing `index` as a prop:

```tsx
// Only if needed — skip if stacking looks correct
<div ref={sectionRef} className="will-change-transform" style={{ zIndex: index }}>
```

- [ ] **Step 5: Final commit**

```bash
git add components/home/sections/pinned-section.tsx
git commit -m "fix: tune pinning duration and ScrollTrigger refresh"
```

---

## Notes

- **No test files**: This is a visual scroll animation — automated testing would require screenshot diffing or Playwright scroll simulation, which is overkill for a portfolio site. Visual verification in browser is the test.
- **Performance**: `will-change-transform` + GSAP's native `pin` is GPU-accelerated. No jank expected with 4 sections.
- **Existing ScrollTrigger usage**: `Intro.tsx`, `animated-letters.tsx`, and `scramble-text.tsx` all use ScrollTrigger independently. GSAP handles multiple ScrollTrigger instances on the same page without conflict.
- **Revert path**: Remove the `<PinnedSection>` wrapper from `render-sections.tsx` and delete `pinned-section.tsx`. Zero coupling.

---
name: section-concept-builder
description: Build portfolio content sections with dual-theme toggle (standard grey/white vs colorful gold). Use this skill whenever creating new section concepts, adding content sections to the test page, or when the user mentions "section concept", "new section", "content section", or wants to build About/Values/Services/Contact/Timeline/Process sections. Also trigger on "build a section", "add a contact block", "create an about section", or any request to modify existing section concepts or their theme switching.
---

# Section Concept Builder

Build content sections for the portfolio with a **dual-theme toggle** — each section switches between a clean standard look and a rich colorful version.

This skill handles the section-specific patterns. For palette, typography, geometry rules, and Playwright verification requirements, the `portfolio-design-system` skill is the authority — read it first if you haven't already.

## File Locations

| What | Where |
|------|-------|
| Section components | `components/home/sections/section-concepts/` |
| Test page | `app/(test)/sections-concepts-test/page.tsx` |
| Theme toggle | `components/home/sections/section-concepts/theme-toggle.tsx` |
| Content source | `data/home.en.json` |

## Dual-Theme Toggle

Every section receives a `colorful` boolean prop. The test page wraps each section with `ThemeToggle` — a `'use client'` component that provides a per-section toggle button.

### How it works

`ThemeToggle` renders a header row (number + label + toggle button) and passes `colorful` to the section via render prop:

```tsx
// Test page registry entry
{ id: "my-section", label: "My Section", component: (c) => <MySection colorful={c} /> }

// Test page rendering
<ThemeToggle label={label} index={i}>
  {(colorful) => component(colorful)}
</ThemeToggle>
```

### Standard theme (colorful=false)
No SVG geometry. Clean and minimal:
- `bg-transparent`, `text-white`, `text-lightgray`
- `border-white/10`, cards `bg-white/[0.02]`

### Colorful theme (colorful=true)
Sacred geometry SVGs, gold palette:
- `bg-[#0a0806]`, `text-[#f5e6c0]`, `text-[#c8b080]/50`
- `border-[#daa520]/12`, cards `bg-[#daa520]/[0.015]`
- SVG geometry rendered conditionally: `{colorful && (<svg>...</svg>)}`

## Component Template

```tsx
/* Agent: [Name] — [Section Name] */
import { cn } from "@/helpers/cn";

type [Name]PropsT = {
  colorful?: boolean;
  className?: string;
};

export function [Name]({ colorful = false, className }: [Name]PropsT) {
  return (
    <section className={cn(
      "relative py-20 md:py-32",
      colorful ? "bg-[#0a0806]" : "bg-transparent",
      className
    )}>
      {colorful && (
        <svg className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
          {/* Gold geometry at low opacity */}
        </svg>
      )}
      <div className="fest-container relative z-10">
        <h2 className={cn(
          "font-mono text-40 md:text-64 uppercase",
          colorful ? "text-[#f5e6c0]" : "text-white"
        )}>
          Title
        </h2>
        <p className={cn(
          "text-16 md:text-20 mt-6",
          colorful ? "text-[#c8b080]/50" : "text-lightgray"
        )}>
          Content
        </p>
      </div>
    </section>
  );
}
```

## Checklist — Creating a New Section

1. Create component in `components/home/sections/section-concepts/` with `colorful` prop
2. Use `cn()` to switch all visual classes between standard and colorful
3. Gate SVG geometry behind `{colorful && ...}`
4. Use real content from `data/home.en.json`
5. Add agent attribution comment: `/* Agent: [Name] — [Section Name] */`
6. Import in test page, add to `SECTION_REGISTRY` with `(c) => <Component colorful={c} />` pattern
7. Each section must have a **distinct layout** — check existing sections to avoid repeats
8. Keep under 100 lines, no `'use client'`, no blur effects
9. **Verify with Playwright** at 375px and 1440px (see portfolio-design-system skill for full checklist)

## Existing Sections (15)

| Section | Layout Type | Content |
|---------|------------|---------|
| Constellation Bio | Two-column with star-dot constellation | About Me |
| Orbital Values | 3-card triangular grid with orbit SVG | What I Value |
| Sacred Manifesto | Centered large statement with mandala | How I Work |
| Gilded Testimony | 3 stacked quote blocks with decorative marks | Testimonials |
| Neon Stack Diagram | 2-column with circuit-board grid | Tech Stack |
| Ritual Timeline | Vertical timeline with node dots | Career Journey |
| Cosmic Contact | Centered CTA with signal rings | Contact |
| Hieroglyph Services | 2x2 grid with large decorative numbers | Services |
| Void Process | 4-card horizontal flow with dashed connector | Process |
| Aubergine Codex | Masonry grid with corner brackets | Field Notes |
| Ecliptic Availability | Status beacon + side paragraph with eclipse rings | Availability |
| Sigil Expertise | Grouped tag cloud pills with pentagram web | Skills |
| Monolith Statement | Full-width giant pull-quote with pillar lines | Manifesto |
| Glyph Metrics | 3 large stat counters with sunburst rays | Stats |
| Tome Colophon | Asymmetric right-aligned footnote with book ornaments | Colophon |

When creating new sections, pick a layout type not in this list.

---
name: portfolio-design-system
description: Design system and visual rules for the portfolio site — palette, typography, sacred geometry, responsive requirements, and Playwright verification. Use this skill whenever editing or creating visual components in this portfolio — heroes, sections, field notes, codex concepts, or any UI with the sacred geometry / eggplant-in-space aesthetic. Trigger on file edits in components/home/, app/(test)/, or when the user mentions design direction, palette, colors, typography, geometry, or visual style for this project. Even casual mentions like "make it more gold", "fix the colors", "add geometry", or "check responsiveness" should trigger this.
---

# Portfolio Design System

This portfolio uses a **sacred geometry / cosmic eggplant** aesthetic inspired by the NATO "Echoes of Djembeya EP" cover art.

## Visual Reference

Before building anything visual, look at:
- **Primary reference**: `screenshots/inspirations/image.png` — the Djembeya cover art defining the gold/sacred geometry DNA
- **Existing work**: `screenshots/` — field-notes variants and hero screenshots showing the established visual language
- **Full creative brief**: `docs/design_spec/surreal-eggplant-supernova-prompt.md` — the generative prompt used for brainstorming new directions (read this for deep context, not as build instructions)

## Palette

### Primary — reach for these first
| Color | Hex | Role |
|-------|-----|------|
| Gold | `#daa520` | Accent, geometry strokes, headings |
| Bright gold | `#ffd700` | CTA, emphasis, active states |
| Warm gold | `#f0c040` | Secondary geometry, glows |
| Dark gold | `#c8860e` | Inner geometry, subtle strokes |
| Cream | `#f5e6c0` | Primary text on dark bg |
| Muted gold | `#c8b080` | Body text, subtitles |
| Cosmic black | `#0a0806` | Background (warm) |
| Deep void | `#080610` | Background (cool) |

### Secondary — sparingly as accents
| Color | Hex | When |
|-------|-----|------|
| Rose | `#e8a0c0` | Occasional decorative accent |
| Warm orange | `#f97316` | Highlights, energy |

### Neon — available but NOT default
`#10ffaa`, `#d946ef`, `#00e5ff` — use only when a design deliberately calls for rave/contrast energy. Gold palette comes first.

### Standard theme (non-colorful)
When components have a standard/white theme mode:
- Background: `bg-transparent` or `bg-bgc`
- Text: `text-white`, `text-lightgray`, `text-white/80`
- Borders: `border-white/10`, `border-white/5`
- Cards: `bg-white/[0.02]`, `border-white/10`

## Typography

- **Titles**: `font-mono uppercase` — this is non-negotiable for the sacred geometry aesthetic
- **Eyebrows/labels**: `font-mono text-sm uppercase tracking-widest` or `tracking-[0.4em]`
- **Body text**: default font (not mono), `text-16 md:text-20`
- **Sizing scale**: `text-40 md:text-64` for section titles, `text-48 md:text-72` for hero titles
- Title structure: two lines, first line in cream/white, second line in gold accent

## Sacred Geometry

SVG geometry is the visual signature. Rules:
- Use `preserveAspectRatio="xMidYMid slice"` for full-coverage backgrounds
- Gold strokes at **low opacity** (0.05–0.2) — geometry should be atmospheric, not dominant
- Stroke colors: cycle through `#daa520`, `#c8860e`, `#f0c040`
- Each component must use a **different geometry system** — do not repeat patterns
- Geometry vocabulary: circles, ellipses, triangles, diamonds, 4-point stars, arc paths, radial lines, concentric rings, corner brackets

### Geometry systems already used (do not repeat within same batch)
See `references/geometry-inventory.md` for the full list.

## Visual Rules

- **No blur**: Do NOT use `backdrop-blur`, `filter: blur()`, or `blur-*` Tailwind classes. Use `drop-shadow` or `radial-gradient` for glow/depth effects.
- **No `'use client'` in visual components** unless they need interactivity. Keep components as server components.
- **Agent attribution**: Every file starts with `/* Agent: [Name] — [Component Name] */`
- **Distinct layouts**: Each component must have its own composition logic. Do not repeat the same grid/card pattern across components.
- **Under 120 lines** per component.
- **Eggplant image**: `<img src="/logos/eggplant-logo-smooth.apng" />` with warm filter: `style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }}`

## Project Structure

### Test Pages
| Area | Route | Registry File | Component Directory |
|------|-------|---------------|---------------------|
| Heroes (all agents) | `/heros-test` | `app/(test)/heros-test/page.tsx` | `hero-concepts/` (Claude) + `hero-codex-concepts/` (Codex) |
| Sections (all) | `/sections-concepts-test` | `app/(test)/sections-concepts-test/page.tsx` | `section-concepts/` + `field-notes-propositions/` |

### Registry Pattern
Each test page has a registry array at the top. Add new components as imports + registry entries. The registry maps `{ id, label, component }`.

### Dev Nav
`components/test/dev-test-nav.tsx` — add new test page routes here.

### Content Source
`data/home.en.json` — use real portfolio content (About Me, Values, How I Work, etc.), never lorem ipsum.

## Responsive Requirements

- **Mobile-first**: default styles for mobile, then `sm:`, `md:`, `lg:`
- Grid columns: 1 on mobile, 2-3 on tablet/desktop
- Text must not overflow or clip on any viewport
- Touch targets: minimum 44x44px
- Sacred geometry must not cover text on small screens
- Simplify or hide decorative elements on mobile rather than shrinking everything

## Mandatory Playwright Verification

After creating or modifying visual components, verify with Playwright at:

| Viewport | Width |
|----------|-------|
| Mobile | 375px |
| Tablet | 768px |
| Desktop | 1440px |

### What to check:
- Headlines fit inside containers
- Text does not overflow or wrap broken
- Decorative geometry does not collide with text
- Spacing feels intentional at every breakpoint
- Visual hierarchy reads clearly
- Cards/grids reflow properly
- No horizontal scroll on mobile

### Process:
1. Navigate to the relevant test page
2. Screenshot at each viewport
3. If anything fails — fix and re-verify
4. Use `agent-browser` skill or Playwright scripts in `scripts/`

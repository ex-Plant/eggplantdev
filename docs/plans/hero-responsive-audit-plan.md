# Hero Responsive Audit & Fix Plan

## Goal

Every hero on the **Heroes test page** must look polished at all 5 breakpoints. Content visible, animations correctly positioned, nothing overflowing or cut off. Heroes expand naturally on large screens. Perfect on mobile.

After all heroes pass on the test page, verify on the **homepage** where they are used.

## Breakpoints

| Name | Width | Device |
|------|-------|--------|
| **Mobile** | 375px | iPhone SE/13 mini |
| **Tablet** | 768px | iPad portrait |
| **Laptop** | 1280px | 13" laptop |
| **Desktop** | 1440px | Standard desktop |
| **Wide** | 1920px | Full HD / ultrawide |

## All heroes on test page (6)

| # | Hero | Location | SVG viewBox | Geometry max radius | Needs geometry expansion? | Needs mobile fix? |
|---|------|----------|-------------|---------------------|--------------------------|-------------------|
| 1 | Soleil Aubergine | `home/soleil-aubergine` | 1200×800 | 352 (ray tips) | YES — rays don't reach edges | YES — text touches edges |
| 2 | Metatron's Cube | `home/metatrons-cube` | 1200×800 | 280 (containment circle) | YES — smallest geometry, huge empty space | YES — description overflows |
| 3 | Eggplants in Space | `home/eggplants-in-space` | 1200×800 | 380 (outer circle) | YES — inner geometry tiny, outer circles thin | YES — text edge overflow |
| 4 | Hex Lattice Shrine Gold | `test/hex-lattice-shrine` | 1200×800 | 380 (radial lines) + 302 (outer circle) | MAYBE — radial lines reach far but hex lattice is small | YES — no content padding |
| 5 | Cosmic Cult Flyer | `test/cosmic-cult-flyer` | 1200×800 | 500 (ray tips) + borders at edge | SKIP — rays and borders already fill viewBox | YES — no content padding |
| 6 | Glam Cosmic Billboard | `home/glam-cosmic-billboard` | 1200×800 | ~350 (arcs) + full-width stripes | SKIP — already fills well, uses grid layout | CHECK — has fest-container padding |

## Shared component issues (affects all heroes)

| Component | File | Current | Problem | Fix |
|-----------|------|---------|---------|-----|
| HeroDescription | `hero-description.tsx` | `max-w-md`, no `px-*` | Text touches screen edges on mobile | Add `px-4 md:px-0` |
| HeroEggplant | `hero-eggplant.tsx` | `size-48` base | Too large on 375px (192px = 51% of screen) | Reduce to `size-36 md:size-48 lg:size-56 xl:size-64` |
| HeroTitle | `hero-title.tsx` | `text-48 md:text-72 lg:text-80 xl:text-96` | `text-48` too large on 375px for long titles — "METATRON'S" and "HEX LATTICE" will overflow | Reduce base to `text-34 sm:text-48 md:text-72 lg:text-80 xl:text-96`. No per-hero overrides — one size scale for all. |
| HeroSubtitle | `hero-subtitle.tsx` | `text-xs lg:text-sm` | Fine on mobile | No change |
| Eggplant sizing | varies | Some use `HeroEggplant`, some use `EggplantImage` directly with hardcoded sizes | Inconsistent. Glam Billboard uses `h-56 w-56` hardcoded, others use `HeroEggplant` with `size-48`. | Migrate all heroes to use `HeroEggplant` for consistent sizing. The only valid reason to bypass it is a genuinely different preset/glowPreset, but sizing should come from the shared component. |
| RadialGlow | `radial-glow.tsx` | `size-[30rem]` fixed | Same glow size at 375px and 1920px | Add `lg:size-[40rem] xl:size-[50rem]` |

## Per-hero fixes

### Hero 1: Soleil Aubergine

**Files**: `components/home/soleil-aubergine/config.ts`, `hero-soleil-aubergine-hero-content.tsx`

#### SVG geometry expansion
- [ ] Increase long ray length: 340 → 480
- [ ] Increase short ray length: 220 → 320
- [ ] Add 3 outer corona rings: r=200 (0.08 opacity), r=260 (0.06), r=350 (0.05)
- [ ] Increase corner brackets: INSET 40→30, ARM_LEN 80→140, INNER_ARM_LEN 50→90

#### Mobile fix
- [ ] Add `px-6 md:px-0` to content wrapper in `SoleilHeroContent`

#### Verification at all 5 breakpoints
- [ ] 375px: text padded, eggplant fits, no overflow
- [ ] 768px: balanced layout
- [ ] 1280px: geometry fills most visible area
- [ ] 1440px: rays visible toward edges
- [ ] 1920px: geometry extends well, no empty corners

---

### Hero 2: Metatron's Cube

**Files**: `components/home/metatrons-cube/config.ts`, `metatrons-cube-sacred-geometry.tsx`, `metatrons-cube-hero-content.tsx`

#### SVG geometry expansion
- [ ] Increase containment circle: r=280 → r=350
- [ ] Add outer dashed circles: r=420, r=500 (very faint)
- [ ] Add 6 radial lines from center to r=480 at 60° intervals
- [ ] Add corner L-bracket accents at viewBox corners

#### Mobile fix
- [ ] Add `px-6 md:px-0` to content wrapper in `MetatronsHeroContent`

#### Verification at all 5 breakpoints
- [ ] Same criteria as Hero 1

---

### Hero 3: Eggplants in Space

**Files**: `components/home/eggplants-in-space/config.ts`, `eggplants-in-space-sacred-geometry.tsx`, `eggplants-in-space-hero-content.tsx`

#### SVG geometry expansion
- [ ] Add outer dashed circles: r=450, r=520 (very faint)
- [ ] Add 6 radial lines from center to r=500 at 60° intervals
- [ ] Increase connecting line stroke slightly for visibility

#### Mobile fix
- [ ] Add `px-6 md:px-0` to content wrapper in `EggplantsInSpaceHeroContent`

#### Verification at all 5 breakpoints
- [ ] Same criteria

---

### Hero 4: Hex Lattice Shrine Gold

**Files**: `components/test/hero-concepts/hex-lattice-shrine/config.ts`, `hex-lattice-shrine-sacred-geometry.tsx`, `hex-lattice-shrine-hero-content.tsx`

#### SVG geometry check
- [ ] Radial lines already reach r=380, outer circle at r=302 — verify if sufficient at 1920px
- [ ] If insufficient: add outer dashed circle r=450, extend radial lines to r=500

#### Mobile fix
- [ ] Add `px-6 md:px-0` to content wrapper in `HexLatticeHeroContent`

#### Verification at all 5 breakpoints
- [ ] Same criteria

---

### Hero 5: Cosmic Cult Flyer

**Files**: `components/test/hero-concepts/cosmic-cult-flyer/cosmic-cult-flyer-hero-content.tsx`

#### SVG geometry
- [ ] SKIP — rays reach r=500 and art deco borders fill viewBox edges. Already the largest geometry.

#### Mobile fix
- [ ] Add `px-6 md:px-0` to content wrapper in `CosmicCultFlyerHeroContent`
- [ ] Verify buttons don't overflow on 375px

#### Verification at all 5 breakpoints
- [ ] Same criteria

---

### Hero 6: Glam Cosmic Billboard

**Files**: `components/home/glam-cosmic-billboard/hero-glam-cosmic-billboard-hero-content.tsx`

#### SVG geometry
- [ ] SKIP — arcs span wide, diagonal stripes fill viewBox. Different layout (grid, not centered).

#### Mobile fix
- [ ] CHECK — uses `fest-container` which provides horizontal padding. Verify it's sufficient at 375px.

#### Verification at all 5 breakpoints
- [ ] Same criteria, but note: this hero uses a two-column grid that collapses to single column on mobile

---

## Execution order

### Phase 1: Shared components
1. Fix HeroDescription: add mobile padding
2. Fix HeroEggplant: responsive sizing from mobile to desktop
3. Fix RadialGlow: scale up on large viewports
4. Verify stashed HeroTitle/HeroSubtitle changes are correct

### Phase 2: Heroes (one at a time, verify before moving on)
5. Soleil Aubergine — geometry expansion + mobile padding → verify all 5 breakpoints
6. Metatron's Cube — geometry expansion + mobile padding → verify all 5 breakpoints
7. Eggplants in Space — geometry expansion + mobile padding → verify all 5 breakpoints
8. Hex Lattice Shrine Gold — geometry check + mobile padding → verify all 5 breakpoints
9. Cosmic Cult Flyer — mobile padding only → verify all 5 breakpoints
10. Glam Cosmic Billboard — verify only → screenshots at all 5 breakpoints

### Phase 3: Final verification
11. Screenshot ALL 6 heroes at ALL 5 breakpoints on the test page (`/heros-test`)
12. Screenshot the homepage — verify heroes in context with surrounding sections

### Phase 4: Cleanup
13. Run `/simplify` on all changed files — review for reuse, quality, and efficiency; fix any issues found
14. Commit

## Geometry reach targets

Center at (600, 400) in 1200×800 viewBox.

| Hero | Current max radius | Target | Strategy |
|------|-------------------|--------|----------|
| Soleil | 352 (59% of half-width) | 480+ (80%) | Longer rays, outer corona rings |
| Metatron | 280 (47%) | 480+ (80%) | Outer circles, radial lines, corner accents |
| Eggplants | 380 (63%) | 500+ (83%) | Outer circles, radial lines |
| Hex Lattice | 380 (63%) | 450+ (75%) | Verify first, extend if needed |
| Cosmic Cult | 500 (83%) | Already good | Skip |
| Glam Billboard | ~350 + full-width stripes | Already good | Skip |

## Mobile typography audit (375px)

Each hero title needs checking at 375px. Long titles may overflow or look cramped.

| Hero | Title text | Lines | Potential issue |
|------|-----------|-------|-----------------|
| Soleil Aubergine | "SOLEIL" / "AUBERGINE" | 2 | "AUBERGINE" is 9 chars — may be tight at text-48 |
| Metatron's Cube | "METATRON'S" / "CUBE" | 2 | "METATRON'S" is 10 chars — likely overflows at text-48 |
| Eggplants in Space | "EGGPLANT" / "IN" / "SPACE" | 3 | "EGGPLANT" is 8 chars — borderline |
| Hex Lattice Shrine | "HEX LATTICE" / "SHRINE" | 2 | "HEX LATTICE" is 11 chars with space — will overflow |
| Cosmic Cult Flyer | "COSMIC" / "CULT" / "FLYER" | 3 | Short words — should be fine |
| Glam Billboard | "AUBERGINE" / "D'OR" | 2 | Custom h1, not HeroTitle — separate audit |

**Action**: Reduce shared HeroTitle base size to `text-34 sm:text-48` so the longest title ("METATRON'S" / "HEX LATTICE") fits at 375px. No per-hero overrides — one consistent scale for all heroes.

## Verification checklist (per hero, per breakpoint)

- [ ] No text overflow or edge-touching
- [ ] Eggplant properly sized (not too large on mobile, not too small on desktop)
- [ ] SVG geometry fills visible area proportionally
- [ ] Animations (burst dots, central star, radial glow) positioned correctly
- [ ] Content vertically centered within min-h-screen
- [ ] Buttons (if present) don't overflow or wrap awkwardly

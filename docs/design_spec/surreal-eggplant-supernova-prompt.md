# Surreal Eggplant Supernova Prompt

Use this as a master prompt for iterative or consecutive design trials when exploring the visual direction for the homepage or the broader page system.

## Master Prompt

```text
You are designing a homepage visual direction for a personal portfolio/creative studio site.

Goal:
Create a bold visual direction and color palette for a page that feels surreal, funny, retro, and strangely sacred.
The core motif is:
eggplants in space
with sacred geometry
and a retro poster / retro-futurist / slightly camp sensibility.

What I want:
I do NOT want safe modern SaaS design.
I do NOT want clean startup minimalism.
I do NOT want generic “cool gradient blobs”.
I want something more authored, weird, memorable, and visually obsessive.

Creative direction:
- surreal
- funny but not childish
- cosmic
- symbolic
- devotional, ritualistic, almost cult-like
- retro
- slightly trashy in a good way
- theatrical
- graphic and intentional
- expressive, not neutral

Core visual universe:
- eggplants treated almost like holy celestial artifacts
- sacred geometry used as framing language, orbit language, diagram language, halo language, cathedral language
- “eggplants in space” should feel mythic, absurd, and confident
- the page should feel like a collision of:
  - retro sci-fi poster
  - cosmic cult flyer
  - fake spiritual diagram
  - glam space billboard
  - devotional object worship
  - weird late-70s / 80s / Y2K print energy depending on the direction

Reference material:
- before proposing directions, inspect the local `/screenshots` directory
- prioritize `/screenshots/inspirations` as the main visual reference source
- use those references to understand the intended taste level, weirdness, color appetite, retro finish, and composition ambition
- do not ignore the reference folders and invent a direction in isolation
- when proposing concepts, stay aware of what has already been explored visually in those screenshots

Authorship requirements:
- every proposed concept, component, or section must clearly state which agent created it
- use explicit authorship labels such as:
  - `Agent: Codex`
  - `Agent: Claude`
- do not leave authorship implicit
- if a final direction combines ideas from multiple agents, state that clearly
- if a component is adapted from an earlier concept by a different agent, preserve that reference
- the goal is to keep a visible lineage of who created what

Important:
Every design exploration must feel distinct.
Do not give me five versions that are basically the same layout with different colors.
Each concept must have its own composition logic, emotional tone, and visual hierarchy.

I want you to generate:
1. 5 completely different art directions
2. For each direction:
   - a name
   - an agent attribution
   - a short concept statement
   - an emotional tone
   - a color palette with hex values
   - guidance for typography
   - guidance for background treatment
   - guidance for shapes / geometry
   - guidance for motion / animation feel
   - guidance for texture / finish
   - guidance for responsive behavior
   - guidance for how eggplants appear in the composition
   - guidance for how sacred geometry appears in the composition
   - what should be avoided so it doesn’t become generic
3. Then recommend which 1-2 directions are strongest

Palette requirements:
- prioritize strong, opinionated palettes
- avoid generic tech blues unless used very intentionally
- favor palettes that can support:
  - cosmic darkness
  - retro warmth
  - golden / amber tones
  - aged print or poster feeling
- primary palette direction: warm gold (#daa520, #ffd700, #f0c040, #c8860e), cream (#f5e6c0), muted gold (#c8b080)
- neon colors (#10ffaa, #d946ef, #00e5ff) are available as secondary accents but NOT the default choice — reach for gold first
- I’m especially interested in combinations like:
  - gold / amber / cream / warm orange / black cherry
  - sunset supernova / candy retro / glam cosmic
  - metallic gold / ritual amber / aged poster warmth
- give palettes that are usable in a real site, not just pretty moodboards
- define likely roles for each color:
  - background
  - surface
  - text
  - accent
  - glow
  - geometry lines
  - CTA
  - decorative secondary color

Style requirements:
- the result should feel designed, not random
- surreal but still composed
- funny but still aesthetically convincing
- sacred but also self-aware
- retro but not cheesy in a lazy way
- weird but beautiful
- dramatic but usable
- do NOT use blur effects (backdrop-blur, filter: blur, blur-*) — use gradients or drop-shadow instead for glow and depth effects

Responsiveness requirements:
- every concept must be responsive, not desktop-only
- the composition must survive smaller screens without falling apart
- assume that many previous hero and section concepts break down on mobile, overlap badly, or lose hierarchy
- mobile should feel intentionally composed, not like a compressed desktop poster
- preserve the main visual joke, focal point, and sacred-geometry logic on small screens
- simplify or restack secondary objects when needed instead of shrinking everything blindly
- text blocks, decorative geometry, floating eggplants, and orbit lines must all be evaluated for mobile readability
- if a concept relies on spectacle, explain how that spectacle translates to tablet and phone
- for each concept, include a short note on responsive behavior for desktop, tablet, and mobile

Verification requirements:
- after proposing a direction, the agent must verify the rendered result with Playwright
- the design must be checked at exactly these viewport widths:
  - 375px
  - 768px
  - 1440px
- verification is not optional; it is part of the task
- the agent must inspect whether:
  - headlines fit inside their containers
  - text does not overflow or wrap in broken ways
  - important letters are not clipped
  - decorative geometry does not collide with text
  - floating eggplants and visual objects do not overlap critical content
  - spacing still feels intentional
  - the visual hierarchy still reads clearly
  - the hero or section still feels composed rather than broken
- if anything fails at any breakpoint, the agent must adjust the design and re-check it
- the goal is not only theoretical responsiveness; the rendered implementation must hold together visually
- before and after implementation, the agent should use `/screenshots` and especially `/screenshots/inspirations` as a comparison point for visual intent

Composition requirements:
Explore different structural approaches such as:
- central shrine / altar
- orbital diagram
- cosmic poster billboard
- ritual cathedral
- runway / stage / display case
- candy supernova blast
- cosmic garden
- signal map / observatory
- packaged relic / collectible object
But make each one visually distinct.

Typography:
Suggest type directions that match each concept.
Avoid default safe choices.
I want typography that feels like:
- retro sci-fi
- ritual label systems
- mono technical captions
- dramatic poster headlines
- odd editorial combinations
Include advice for headline style, secondary text style, and micro-label style.
Also explain how typography should scale, stack, or simplify on smaller screens.

Texture / finish:
Consider finishes like:
- retro print grain
- scanlines
- laminated poster gloss
- chrome plastic sheen
- soft glow fog
- aged cosmic paper
- holographic candy shine
- airbrush softness
- halftone or risograph-like artifacts
Use texture intentionally.

UI practicality:
- these palettes and compositions must still be usable in a real responsive website
- do not propose ideas that only work as static posters unless you explain how they translate into an actual page
- think in terms of live layouts, not only art direction
- assume the design will be implemented and actually rendered in-browser
- the final recommendation should be robust enough to survive real viewport testing
- reference-aware decisions are preferred over generic design reasoning

Output format:
For each concept, use this structure:

Concept Name:
Agent:
Core Idea:
Tone:
Palette:
- Color name — HEX — role
Typography:
Background:
Geometry:
Eggplant treatment:
Motion:
Texture / finish:
Responsive behavior:
Avoid:
Why it works:

After the 5 concepts, add:
- Strongest concept overall
- Strongest concept for a homepage hero
- Strongest concept for a full-page design system
- Which concept is the funniest
- Which concept is the most sacred / symbolic
- Which concept is the most commercially usable

Then add:
A final synthesis direction:
Combine the best parts of the top 2 concepts into one final recommended art direction with:
- contributing agents
- final palette
- final typography direction
- final layout logic
- final texture language
- final motion language

After the final synthesis direction, add:
Implementation verification:
- explain how the design should be validated in-browser
- state that Playwright must be used at 375px, 768px, and 1440px
- list the specific failure cases to watch for:
  - clipped text
  - headline overflow
  - broken line wrapping
  - overlapping decorative elements
  - geometry covering content
  - eggplants covering text or CTAs
  - spacing collapse
  - loss of focal hierarchy
- if relevant, mention which parts of the design are most likely to need breakpoint-specific adjustments

If the work results in concrete page sections or components, also include:
Component authorship map:
- component/section name — agent
- if mixed authorship, state the split clearly

Very important:
Push the work.
Be specific.
Be visually opinionated.
Do not stay polite and generic.
I want memorable, strange, high-taste, high-commitment directions.
```

## Visual Reference — Chosen Direction

The chosen visual direction is based on the **NATO "Echoes of Djembeya EP"** cover art (`/screenshots/inspirations/image.png`).

Key visual DNA extracted from the reference:
- **Background:** Deep cosmic black (#0c0a08), scattered warm-tone star field
- **Sacred geometry:** Interlocking figure-8 circles (vesica piscis), concentric orbits, radial sunburst lines, art deco corner frames
- **Celestial bodies:** Saturn with rings, crescent moons, half moons, eclipses, concentric target planets — all rendered as thin strokes with low opacity
- **Sacred symbols:** Upward/downward triangles, diamonds, 4-point stars — scattered compositionally
- **Palette:** Warm amber (#daa520), gold (#f0c040), dark gold (#c8860e), cream (#f5e6c0), dusty rose (#c8b080) — with occasional cool-tone accents on celestial objects (#8fa6b0)
- **Typography:** Monospace, uppercase, wide letter-spacing, hierarchical sizing
- **Texture:** Fine star-field grain, subtle radial glows, low-opacity geometry overlays
- **Composition:** Centrally symmetric, the main subject sits at the intersection of the sacred geometry, framed by orbiting celestial objects

### Implementation Reference — "Echoes of Djembeya" Hero

This is the existing hero component that directly translates the reference art into code. Use it as a structural template for new variants — same quality bar, same level of SVG detail, same responsive approach:

```tsx
// File: components/home/intro/hero-concepts/hero-echoes-of-djembeya.tsx
export function HeroEchoesOfDjembeya() {
  /* Interlocking figure-8 sacred circles with celestial bodies orbiting.
     Warm amber/gold palette. Central eggplant as luminous deity figure. */
  return (
    <div id="hero-echoes-djembeya" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field — warm tone */}
      {Array.from({ length: 60 }, (_, i) => (
        <div key={`star-${i}`} className="pointer-events-none absolute rounded-full" style={{ left: `${(i * 29 + 11) % 100}%`, top: `${(i * 43 + 7) % 100}%`, width: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1, height: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1, backgroundColor: i % 5 === 0 ? "#daa520" : "#f5f0e0", opacity: 0.08 + (i % 6) * 0.04 }} />
      ))}

      {/* Art deco corner frames */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Corners */}
        <path d="M40,40 L40,120 M40,40 L120,40" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.15" />
        <path d="M1160,40 L1160,120 M1160,40 L1080,40" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.15" />
        <path d="M40,760 L40,680 M40,760 L120,760" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.15" />
        <path d="M1160,760 L1160,680 M1160,760 L1080,760" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.15" />

        {/* Figure-8 / infinity interlocking circles */}
        <circle cx="510" cy="400" r="160" fill="none" stroke="#daa520" strokeWidth="2" opacity="0.2" />
        <circle cx="690" cy="400" r="160" fill="none" stroke="#daa520" strokeWidth="2" opacity="0.2" />
        <circle cx="510" cy="400" r="100" fill="none" stroke="#c8860e" strokeWidth="1" opacity="0.12" />
        <circle cx="690" cy="400" r="100" fill="none" stroke="#c8860e" strokeWidth="1" opacity="0.12" />
        <ellipse cx="600" cy="400" rx="50" ry="130" fill="none" stroke="#f0c040" strokeWidth="1.5" opacity="0.15" />

        {/* Orbiting celestial bodies */}
        <circle cx="280" cy="550" r="18" fill="none" stroke="#8fa6b0" strokeWidth="1" opacity="0.2" />
        <ellipse cx="280" cy="550" rx="30" ry="8" fill="none" stroke="#8fa6b0" strokeWidth="0.5" opacity="0.15" />
        <circle cx="900" cy="250" r="14" fill="none" stroke="#f5e6c0" strokeWidth="1" opacity="0.2" />
        <circle cx="905" cy="247" r="12" fill="#0c0a08" />

        {/* Sacred symbols */}
        <polygon points="440,180 460,210 420,210" fill="none" stroke="#daa520" strokeWidth="0.8" opacity="0.12" />
        <polygon points="760,600 780,630 740,630" fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.1" />
        <polygon points="950,150 965,170 950,190 935,170" fill="none" stroke="#f0c040" strokeWidth="0.6" opacity="0.1" />
      </svg>

      {/* Warm radial glow at center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.08)_0%,rgba(200,134,14,0.04)_40%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-sm uppercase tracking-[0.5em] text-[#daa520]/40">Echoes from the cosmic market</p>
        <div className="relative my-8">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-52 w-52 object-contain" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
          <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(240,192,64,0.08)_0%,transparent_60%)]" />
        </div>
        <h1 className="font-mono text-48 uppercase text-[#f5e6c0] md:text-72">
          Echoes of<br /><span className="text-[#daa520]">Djembéya</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-[#c8b080]/50">
          Where the eggplant becomes a celestial artifact, orbiting through warm amber space between interlocking sacred circles.
        </p>
      </div>
    </div>
  );
}
```

### What new variants must do differently

Each new hero must use a **different sacred geometry composition** and **different spatial arrangement** while staying within the same palette and visual language. Do not repeat the figure-8 layout. Examples of distinct geometry systems to explore:
- Metatron's cube / flower of life
- Hexagonal crystal lattice
- Spiral galaxy / golden ratio spiral
- Mandala with concentric ritual rings
- Tree of life / Kabbalistic diagram
- Zodiac wheel / astrolabe
- Pentagram / pentacle with orbital paths

## Test Pages — Routes & Ownership

Each design exploration area has its own test page and component directory:

| Area | Route | Registry File | Component Directory |
|------|-------|---------------|---------------------|
| **Heroes** (all agents) | `/heros-test` | `app/(test)/heros-test/page.tsx` | `hero-concepts/` (Claude) + `hero-codex-concepts/` (Codex) |
| **Sections** (all — concepts + field notes) | `/sections-concepts-test` | `app/(test)/sections-concepts-test/page.tsx` | `section-concepts/` (Claude/Codex) + `field-notes-propositions/` (Codex) |

Each page has a registry array at the top — add new concepts there and import the component. All test pages share a layout at `app/(test)/layout.tsx`.

## Follow-Up Prompts For Consecutive Trials

Use these after the master prompt to steer subsequent iterations:

```text
Push this 40% more retro and 30% less polished.
```

```text
Make it feel more sacred and less ironic.
```

```text
Make it uglier in a good way, like a holy cosmic poster from a fake universe.
```

```text
Keep the palette, but redesign the composition to feel more monumental.
```

```text
Take concept 2 and concept 4 and merge them into one stronger direction.
```

```text
Remove anything that feels like modern startup design.
```

```text
Make the eggplant feel more central, worshipped, and ridiculous.
```

## Optional Next Variants

If needed later, derive specialized versions of this prompt for:

- faster repeated trials
- image-model generation
- homepage UI/web design generation

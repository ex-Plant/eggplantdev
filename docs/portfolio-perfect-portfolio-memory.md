# Perfect Portfolio Memory

Agent: Codex

## Purpose

This file is the working memory for the portfolio refinement project.

The goal of this project is to turn the current site into a near-ideal portfolio:

- strong enough visually to feel singular and memorable
- clear enough editorially to work as a professional portfolio
- coherent enough as a story to connect the surreal eggplant universe with the real developer profile
- practical enough to help the owner find work as a full-stack developer

Use this file as the starting context for future sessions when the thread context is reset or intentionally cleaned up.

## Project State

The website started as a more standard agency-style portfolio and evolved into a surreal portfolio with:

- eggplants as the central personal motif
- sacred geometry
- cosmic / retro-futurist / devotional poster language
- a humorous but still aesthetically serious tone

The creative premise is:

- the owner has long used the eggplant motif as a nickname
- the owner also has a DJ identity: `Eggplant Man`
- the portfolio uses this motif to bring life and singularity to otherwise standard portfolio content

Current understanding:

- the project already has a strong visual identity
- the visuals are not the main weakness
- the bigger opportunity is editorial and structural:
  - better hero copy
  - better portfolio copy
  - better sequence / story logic
  - tighter connection between the absurd visual world and the real professional story

## Core Goal

One goal only:

Create the best possible portfolio for this owner, across:

- content
- visuals
- story
- positioning
- job-market usefulness as a full-stack developer

This means the site should feel:

- singular
- authored
- memorable
- professional
- coherent
- funny without becoming unserious
- visually confident without losing clarity

## Main Requirements

We need to finish the portfolio as a complete, coherent experience.

Priority requirements:

1. Create better text for the homepage hero eggplants.
2. Create better text for the real portfolio sections.
3. Build a compelling story across the page.
4. Decide the right order of heroes and content sections.
5. Audit whether anything is visually missing or structurally weak.
6. Make the site a better hiring tool for full-stack/frontend roles.

## Editorial Principles Agreed So Far

The strongest word for this portfolio is:

- `singularity`

The portfolio's biggest strength is that it does not feel generic. It feels like one person's universe rather than a polished remix of portfolio conventions.

Important editorial balance:

- keep the surreal eggplant mythology
- do not flatten the site into a normal portfolio
- do not let the concept overpower the professional message

Working content rule:

- hero sections = myth, posters, propaganda, cosmic ritual, absurdity
- portfolio section intros = grounded, sharp, lightly playful
- project descriptions = factual, professional, credible
- about / values = human, clear, trustworthy

Add one more important rule:

- the portfolio should preserve a singularity motif both conceptually and visually
- that singularity can be embodied by one recurring image logic: the floating giant cosmic eggplant as the central object / force / anomaly around which the page world is organized
- this should not be treated as a random decorative asset; it is one of the clearest symbols of the portfolio's identity

## High-Level Assessment We Reached

### Strengths

- strong singularity
- memorable visual world
- authored tone
- funny in a confident way
- much more distinctive than a standard portfolio
- clear personality

### Risks / Weaknesses

- the concept can overpower the professional message
- several hero texts can blur together if they all sound equally mystical
- some copy can become too smart / too ornamental for the amount of meaning it carries
- the portfolio content needs tighter pacing and sequencing so the user remembers both the world and the work

## Current Story Logic

The homepage should not feel like a random collection of cool hero posters.

The page carries two narrative lines at once:

- primary line = actual portfolio proof: intro, work, about, values, contact
- secondary line = eggplant mythology / object archive / cosmic object progression

The heroes are now treated as a parallel object system rather than as unrelated posters.

Each object currently plays this role:

- `Object #000` = opening anomaly / first contact / central weirdness
- `Object #001` = structure / system / build logic
- `Object #002` = ritualized craft / private method
- `Object #003` = operator role / keeping the world running
- `Object #004` = values-as-doctrine / internal code
- `Object #005` = final echo / contact afterimage

## Current Homepage Order Direction

Working sequence:

1. opening object
2. intro text
3. second object
4. team work
5. third object
6. freelance work
7. fourth object
8. about
9. fifth object
10. values
11. sixth object
12. contact / footer

Why this order:

- the first object establishes the world
- the intro translates the world into an actual developer profile
- `Team Work` follows the structure/system object
- `Freelance` follows the ritual/private-method object
- `About` comes before `Values`
- the final object should leave an afterimage rather than restart the mythology

## Shipped Homepage Object Copy

The following hero/object set was shipped during this conversation and should be treated as the current live baseline unless explicitly changed later.

```ts
soleilAubergine: {
  subtitle: "Object #000 Classification: pending",
  titleLine1: "Space",
  titleLine2: "Oddity",
  description:
    "Less vegetable, more minor celestial authority. Warm, theatrical, impossible to ignore, and somehow still tasteful.",
},

metatronsCube: {
  subtitle: "Object #001",
  titleLine1: "The",
  titleLine2: "Blueprint",
  description:
    "Every serious system starts with structure. For reasons nobody can fully explain, this one also started with an eggplant.",
},

hexLatticeShrine: {
  eyebrow: "Object #002",
  titleLine1: "Peculiar",
  titleLine2: "Shrine",
  description:
    "At some point the layout stopped being a layout and became a shrine. The eggplant remained at the center, supervising alignment and other minor miracles.",
},

cosmicFlower: {
  subtitle: "Object #003",
  titleLine1: "Ritual",
  titleLine2: "Operator",
  description:
    "The singularity emerged, word had to spread. Management wasn't prepared for the eggplant.",
},

cosmicCultFlyer: {
  subtitle: "Object #004",
  titleLine1: "The",
  titleLine2: "Code",
  description:
    "Do not question the eggplant. The eggplant is the question. It works on my machine.",
},

glamCosmicBillboard: {
  subtitle: "Object #005: AGI ACHIEVED",
  titleLine1: "Final",
  titleLine2: "Echo",
  description:
    "Still out there, still orbiting. Transmission remains possible.",
  buttons: ["Signal to noise", "Scroll to top"],
},
```

Important note:

- this shipped set is not necessarily the final literary ideal
- it was accepted because it was coherent enough, visually compatible, and good enough to move the project forward
- future work should prioritize the remaining portfolio structure and copy over more hero-title micro-optimization

## What Was Proposed For Hero Copy

There were multiple hero-copy directions:

### Direction A: More deadpan, more editorial

This direction is the one worth revisiting if we want sharper, more singular homepage copy.

Recovered draft set:

- `Glam Cosmic Billboard`
  - subtitle: `Luxury Object / Celestial Grade`
  - title: `Golden Eggplant`
  - description: `A prestige artifact for people with expensive taste and suspiciously strong opinions about frontend architecture. Distilled from lacquer, starlight, and one successful deploy.`
  - buttons: `View Specimen`, `Watch Transmission`

- `Soleil Aubergine`
  - subtitle: `Sacred Produce / Solar Grade`
  - title: `Eggplant Sun`
  - description: `Not quite a star, not exactly a vegetable. More like a radiant authority suspended in space, warming the whole page by simply existing.`

- `Metatron's Cube`
  - subtitle: `Universal Wiring Diagram`
  - title: `Metatron's Cube`
  - description: `Every serious system starts with structure. For reasons nobody can fully explain, this one also starts with an eggplant.`

- `Hex Lattice Shrine`
  - eyebrow: `Crystalline Build Pattern`
  - title: `Hex Lattice Shrine`
  - description: `The grid became sacred somewhere around version three. Since then the eggplant has remained at the center, supervising alignment and other minor miracles.`

- `Cosmic Cult Flyer`
  - subtitle: `Membership Now Open`
  - title: `Cosmic Cult Flyer`
  - description: `No robes. No doctrine. Just excellent visual instincts, careful frontend work, and a mild but persistent devotion to the sacred eggplant.`
  - buttons: `Join the Order`, `Read the Fine Print`

- `Cosmic Flower`
  - subtitle: `Signal Still Active`
  - title: `Eggplant in Space`
  - description: `One glossy object continues its journey through sacred geometry, deploy cycles, and the occasional avoidable complication. Transmission remains stable.`
  - buttons: `Track Signal`, `Proceed Anyway`

### Direction B: Centralized V2 copy

A separate `v2` copy set was also created and stored in code. It is slightly more polished and presentational.

## What Was Proposed For Portfolio Copy

The portfolio content should become:

- cleaner
- more authored
- less CV-like
- less generic agency-template language
- still credible and professional

Suggested direction:

- intro text should sound like a strong positioning statement, not a biography summary
- section intros should feel clear and assured, with only a light wink
- about / values should be tightened slightly
- project descriptions should remain the most grounded and trustworthy copy on the site

## Visual / Structural Audit Still Needed

We still need to review the visual side more intentionally.

Open audit questions:

- Is the current order of heroes optimal?
- Are there too many heroes or not enough?
- Does every hero earn its place?
- Is there a missing section or missing bridge between sections?
- Is the page too concept-heavy in some areas?
- Is there enough hiring clarity for someone landing on the page cold?
- Does the page communicate full-stack capability strongly enough?
- Do the visuals support the work, or ever distract from it?

## Files Created / Relevant So Far

### Memory / Planning

- [docs/portfolio-perfect-portfolio-memory.md](/Users/konradantonik/workspace/portfolio/old_page/docs/portfolio-perfect-portfolio-memory.md)

### Hero Copy

- [data/hero-copy.ts](/Users/konradantonik/workspace/portfolio/old_page/data/hero-copy.ts)

This file currently stores:

- homepage hero copy
- localized `en` / `pl`
- `default` and `v2` variants

### Portfolio Copy Variant

- [data/home-copy-v2.en.json](/Users/konradantonik/workspace/portfolio/old_page/data/home-copy-v2.en.json)
- [data/home-copy-v2.pl.json](/Users/konradantonik/workspace/portfolio/old_page/data/home-copy-v2.pl.json)

### Comparison Route

- [app/(test)/copy-v2/page.tsx](</Users/konradantonik/workspace/portfolio/old_page/app/(test)/copy-v2/page.tsx>)

This route exists to compare alternate copy without replacing the live/default homepage text immediately.

## Current Understanding Of What Still Needs To Be Done

The job is not finished.

We still need:

1. Finalize the remaining real portfolio section copy around the shipped hero set.
2. Audit whether the current page sequence still needs adjustments now that the object system is live.
3. Audit missing sections or missing transitions.
4. Audit whether the page sells the owner clearly as a strong developer.
5. Ensure the site is not only unique but effective as a hiring portfolio.
6. Resist wasting time on low-value hero micro-polish unless a real problem appears in the page.

## Recommended Next Session Starting Point

When resuming work, start here:

1. Review the current homepage hero order.
2. Compare `default` vs `v2` hero copy.
3. Decide whether to restore / adapt the more deadpan editorial hero set listed above.
4. Rewrite the real portfolio section text using the agreed editorial rules.
5. Audit whether a new bridge section, contact hook, or role-positioning statement should be added.

## Resume Prompt

If starting a new session, use something like:

`Use docs/portfolio-perfect-portfolio-memory.md as the project memory. Continue refining the portfolio toward the goal described there. Focus on hero copy, portfolio copy, sequence, and overall hiring effectiveness.`

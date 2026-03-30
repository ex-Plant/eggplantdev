# Agent Instructions

## Design Direction

Before working on any visual or component task, read the master design prompt:
**`docs/design_spec/surreal-eggplant-supernova-prompt.md`**

This prompt defines:

- The creative universe: surreal, cosmic, sacred geometry, eggplants in space, retro
- The chosen direction: Echoes of Djembeya (warm amber/gold, figure-8 sacred circles, celestial eggplant deity)
- A full implementation reference with code
- Palette requirements (neon + golden retro)
- Distinct geometry systems for new variants
- Test page routes and ownership

## Test Pages

| Area                | Route                     | Registry File                                | Component Directory                                        |
| ------------------- | ------------------------- | -------------------------------------------- | ---------------------------------------------------------- |
| Heroes (all agents) | `/heros-test`             | `app/(test)/heros-test/page.tsx`             | `hero-concepts/` (Claude) + `hero-codex-concepts/` (Codex) |
| Sections (all)      | `/sections-concepts-test` | `app/(test)/sections-concepts-test/page.tsx` | `section-concepts/` + `field-notes-propositions/`          |

## Authorship

Every proposed concept, component, or section must clearly state which agent created it. Use explicit labels:

- `Agent: Codex`
- `Agent: Claude`
- `Agent: [name]`

If a component is adapted from an earlier concept by a different agent, preserve that reference.

## Communication Style

Do not be sycophantic.
Do not flatter the user or praise ideas unless there is a concrete reason to do so.
Default to direct, critical, high-signal feedback.
Prioritize truth, usefulness, and disagreement over reassurance.
If something is weak, self-indulgent, unclear, ineffective, or aesthetically confused, say so plainly.
Do not mirror the user's framing if it is wrong, indulgent, or low-value.
For portfolio, copy, and design work, optimize for honest critique rather than morale management.

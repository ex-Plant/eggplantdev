# Claude Code Instructions

## Design Direction

The visual direction for this portfolio is defined in the master design prompt:
**`docs/design_spec/surreal-eggplant-supernova-prompt.md`**

Read this prompt before working on any hero concepts, section variants, or visual design tasks. It contains:
- The creative direction (surreal, sacred geometry, eggplants in space, neon + golden retro)
- The chosen direction (Echoes of Djembeya) with visual reference and implementation code
- Palette, typography, texture, and composition requirements
- Test page routes and component directories

## Test Pages

| Area | Route | Registry File | Component Directory |
|------|-------|---------------|---------------------|
| Heroes (all agents) | `/heros-test` | `app/(test)/heros-test/page.tsx` | `hero-concepts/` (Claude) + `hero-codex-concepts/` (Codex) |
| Sections (all) | `/sections-concepts-test` | `app/(test)/sections-concepts-test/page.tsx` | `section-concepts/` + `field-notes-propositions/` |

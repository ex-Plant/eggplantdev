# Hero Style Audit — All Selected Heroes

> Extracted from 14 non-rejected hero components. Use this to build a coherent design token system.

---

## Background Colors

| Value | Heroes |
|---|---|
| `#0a0806` | Reliquary d'Or, Cathédrale Cosmique, Soleil Aubergine, Cosmic Cult Flyer, Sacred Ascension Gold |
| `#0c0a08` | Sacred Mandala, Echoes of Djembéya, Soleil Aubergine (muted), Cosmic Aubergine (gold) |
| `#080610` | Hypercube Altar, Hex Lattice Shrine |
| `#08070a` | Celestial Altar |
| `#0a0908` | Ritual Observatory |
| `#0a0408` | Glam Cosmic Billboard |
| `#020204` | Sacred Ascension (green) |
| `#030108` | Cosmic Aubergine (neon) |

**Observation:** 8 different near-blacks. Most cluster around warm `#0a0806` / `#0c0a08`. Could consolidate to 2-3.

---

## Gold Palette

| Role | Value | Count |
|---|---|---|
| Bright gold | `#ffd700` | 10 heroes |
| Standard gold | `#daa520` | 13 heroes |
| Dark gold / amber | `#c8860e` | 10 heroes |
| Soft gold | `#f0c040` | 7 heroes |
| Caption / muted | `#c8b080` | 11 heroes |
| Cream / ivory | `#f5e6c0` | 11 heroes |

**Observation:** These 6 values are the core warm palette. Very consistent across heroes.

---

## Accent Colors

| Color | Value | Heroes |
|---|---|---|
| Neon green | `#10ffaa` | Hypercube, Hex Lattice, Sacred Ascension, Cosmic Aubergine |
| Neon cyan | `#00e5ff` | Hypercube, Hex Lattice |
| Neon pink / magenta | `#d946ef` | Hypercube, Hex Lattice, Cosmic Aubergine |
| Hot pink | `#ff1493` | Glam Cosmic Billboard |
| Rose | `#e8a0c0` | Cathédrale Cosmique |
| Cool blue / steel | `#8fa6b0` | Echoes of Djembéya, Celestial Altar |
| Lime green | `#39ff14` | Sacred Ascension |
| Green accent | `#00e676` | Sacred Ascension |

**Observation:** Neon accents only appear in the "Geometry Overload" batch + Sacred Ascension + Cosmic Aubergine neon variant. The gold-themed heroes avoid them entirely.

---

## Text Colors & Opacity Patterns

### Eyebrow / Subtitle
| Pattern | Value | Count |
|---|---|---|
| Gold 30-40% | `text-[#daa520]/30..40` or `text-[#ffd700]/35` | 8 heroes |
| Neon green 30% | `text-[#10ffaa]/30` | 1 hero |
| Neon cyan 30% | `text-[#00e5ff]/30` | 1 hero |
| Hot pink 40% | `text-[#ff1493]/40` | 1 hero |

### Title (h1)
| Pattern | Value | Count |
|---|---|---|
| Cream `#f5e6c0` | Full opacity | 8 heroes |
| Gold `#daa520` | Full opacity | 5 heroes |
| Bright gold `#ffd700` | Full opacity | 3 heroes |
| White | Full opacity | 1 hero (Cosmic Aubergine) |

### Title accent (span)
| Pattern | Value | Count |
|---|---|---|
| Gold `#daa520` | Full opacity | 5 heroes |
| Cream `#f5e6c0` | Full opacity | 4 heroes |
| Bright gold `#ffd700` | Full opacity | 2 heroes |

### Description
| Pattern | Value | Count |
|---|---|---|
| Caption gold 40-50% | `text-[#c8b080]/40..50` | 10 heroes |
| White 30-35% | `text-white/30..35` | 2 heroes |

### Buttons
| Pattern | Value |
|---|---|
| Gold 50-70% text + 20-25% border | Cosmic Cult Flyer, Glam Billboard |
| Accent color 50-60% text + 20-30% border | Glam Billboard (pink), Cosmic Aubergine |

---

## Text Sizes

### Eyebrow / Subtitle
| Class | Heroes |
|---|---|
| `text-xs` | Metatrons, Sacred Mandala, Soleil |
| `text-sm` | Echoes, Cosmic Cult Flyer, Glam Billboard |
| `text-12` | Hex Lattice, Reliquary, Cathédrale |

### Description
| Class | Heroes |
|---|---|
| `text-sm` | Metatrons, Hypercube, Sacred Mandala |
| `text-14` | Hex Lattice |
| `text-16` | Reliquary, Cathédrale, Echoes, Cosmic Cult Flyer, Celestial Altar, Ritual Observatory, Sacred Ascension Gold |
| `text-20` | Glam Billboard, Cosmic Aubergine |

### Title (h1) — mobile → desktop
| Pattern | Heroes |
|---|---|
| `text-48 md:text-72` | Metatrons, Hypercube, Hex Lattice, Reliquary, Cathédrale, Echoes, Sacred Mandala |
| `text-48` (no md) | Sacred Ascension Gold |
| `text-56 md:text-[5rem]` | Cosmic Cult Flyer |
| `text-64 md:text-72` | Celestial Altar |
| `text-64 md:text-[5.5rem]` | Cosmic Aubergine |
| `text-[4rem] md:text-[6rem]` | Glam Billboard |
| `text-20` | Sacred Ascension (uses tracking instead of size) |

**Observation:** Dominant pattern is `text-48 md:text-72` (7 out of 14). Several outliers.

---

## Typography

### Font
- `font-mono` — **universal** on all text in all heroes
- `fontFamily: "monospace"` inline — Cosmic Cult Flyer subtitle, Glam Billboard h1, Ritual Observatory SVG text
- `font-bold` — only Glam Billboard h1

### Letter Spacing
| Class | Context |
|---|---|
| `tracking-[0.4em]` | Most eyebrows/subtitles |
| `tracking-[0.5em]` | Reliquary, Cathédrale, Soleil eyebrows |
| `tracking-[0.6em]` | Cosmic Cult Flyer subtitle |
| `tracking-widest` | Metatrons, Hypercube, Sacred Mandala eyebrows |
| `tracking-tight` | Metatrons, Hypercube, Sacred Mandala h1 |
| `tracking-wider` | Button text |

### Case
- `uppercase` — **universal** on all eyebrows, titles, and buttons

### Leading
| Class | Context |
|---|---|
| `leading-none` | Most h1s (7 heroes) |
| `leading-tight` | Reliquary, Cathédrale h1 |
| `leading-[0.9]` | Glam Billboard h1 |
| `leading-relaxed` | Descriptions (Soleil, Glam, Cosmic Aubergine) |

---

## Eggplant Filters

### Gold / warm treatment
| Filter | Hero |
|---|---|
| `sepia(0.2) saturate(1.3)` | Cosmic Cult Flyer |
| `sepia(0.25) saturate(1.4) brightness(0.95)` | Celestial Altar |
| `sepia(0.3) saturate(1.4)` | Ritual Observatory |
| `sepia(0.3) saturate(1.5) brightness(0.9)` | Echoes, Sacred Ascension Gold |
| `sepia(0.3) saturate(1.6) brightness(0.9) hue-rotate(-10deg)` | Cathédrale |
| `sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15)` | Soleil |
| `sepia(0.4) saturate(1.8) brightness(0.85)` | Reliquary |
| `sepia(0.15) saturate(1.6) brightness(1.05)` | Glam Billboard |
| `sepia(1) saturate(0.5) drop-shadow(0 0 40px rgba(218,165,32,0.3))` | Metatrons (gold) |

### Silver / metallic treatment
| Filter | Hero |
|---|---|
| `saturate(0) brightness(1.4) contrast(1.2) drop-shadow(...)` | Metatrons (silver) |
| `saturate(0) brightness(1.2) contrast(1.1) drop-shadow(...)` | Metatrons (mono) |
| `saturate(0.15) brightness(1.4) contrast(0.9)` | Cosmic Aubergine (gold palette) |

### Neon / accent treatment (Tailwind classes)
| Filter | Hero |
|---|---|
| `sepia saturate-50 hue-rotate-15 drop-shadow-[...]` | Hypercube |
| `saturate-[0.7] sepia-[0.2] drop-shadow-[...]` | Hex Lattice |
| `drop-shadow-[...] saturate-50 sepia` | Sacred Mandala |

### No filter
| Hero |
|---|
| Sacred Ascension (green), Cosmic Aubergine (neon) |

**Observation:** 9+ unique warm filter combos. Could consolidate to 2-3 presets: `warm-subtle`, `warm-rich`, `warm-bright`.

---

## Glow Gradients (EggplantImage glow prop)

| Size | Gradient | Hero |
|---|---|---|
| 420px | `ellipse, rgba(218,165,32,0.1) 0%, rgba(255,215,0,0.03) 40%, transparent 70%` | Reliquary |
| 500px | `ellipse, rgba(218,165,32,0.07) 0%, transparent 65%` | Cathédrale |
| 500px | `circle, rgba(218,165,32,0.12) 0%, rgba(240,192,64,0.05) 40%, transparent 70%` | Sacred Ascension Gold |
| 500px | `circle, rgba(218,165,32,0.14) 0%, rgba(16,255,170,0.04) 35%, rgba(217,70,239,0.02) 55%, transparent 70%` | Hypercube |
| 400px | `circle, rgba(0,229,255,0.1) 0%, rgba(218,165,32,0.06) 40%, transparent 70%` | Hex Lattice |
| 500px | `circle, rgba(218,165,32,0.14) 0%, rgba(200,134,14,0.05) 40%, transparent 70%` | Sacred Mandala |
| — | `circle, rgba(240,192,64,0.08) 0%, transparent 60%` | Echoes |
| 300px | `ellipse, rgba(240,192,64,0.06) 0%, transparent 70%` | Celestial Altar |
| 350px | `circle, rgba(218,165,32,0.1) 0%, rgba(255,20,147,0.04) 50%, transparent 70%` | Glam Billboard |

**Observation:** All glows use gold rgba variants. Could define 2-3 glow presets.

---

## SVG Geometry — Common Stroke Colors

| Color | Opacity Range | Used for |
|---|---|---|
| `#daa520` | 0.06–0.20 | Primary geometry lines |
| `#ffd700` | 0.08–0.25 | Bright polygon strokes |
| `#c8860e` | 0.06–0.15 | Dark secondary lines |
| `#f0c040` | 0.10–0.20 | Soft gold accents |
| `#f5e6c0` | 0.08–0.15 | Cream star lines |
| `#10ffaa` | 0.04–0.12 | Neon geometry (Batch 5 only) |
| `#00e5ff` | 0.08–0.12 | Cyan vertices (Batch 5 only) |
| `#d946ef` | 0.05–0.06 | Magenta geometry (Batch 5 only) |

---

## Layout Patterns

### Universal root div
```
relative flex min-h-screen items-center justify-center overflow-hidden
```
Exception: Glam Billboard, Cosmic Aubergine — no `justify-center` (left-aligned grid layout)

### SVG container
```
pointer-events-none absolute inset-0 h-full w-full
viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"
```

### Content wrapper
```
relative z-10 flex flex-col items-center text-center
```
Exception: Glam Billboard — `fest-container grid gap-12 md:grid-cols-[1fr_auto] md:items-center`

### EggplantImage sizes
| Size | Heroes |
|---|---|
| `h-36 w-36` | Ritual Observatory |
| `h-44 w-44` | Hex Lattice, Cosmic Cult Flyer |
| `h-48 w-48` | Hypercube, Cathédrale, Sacred Mandala, Celestial Altar, Sacred Ascension Gold |
| `h-52 w-52` | Reliquary, Soleil, Echoes |
| `h-56 w-56` | Glam Billboard, Cosmic Aubergine |

---

## Consolidation Opportunities

1. **Backgrounds:** 8 values → could be 2-3 (`--bg-warm`, `--bg-cool`, `--bg-deep`)
2. **Eggplant filters:** 9+ warm combos → 3 presets (`warm-subtle`, `warm-rich`, `warm-bright`)
3. **Text sizes:** Eyebrow `text-xs`/`text-sm`/`text-12` → pick one. Title `text-48 md:text-72` is dominant.
4. **Tracking:** Eyebrow `tracking-[0.4em]`/`tracking-[0.5em]`/`tracking-widest` → pick one.
5. **Description color:** `text-[#c8b080]/40..50` is near-universal. Standardize to one opacity.
6. **Glow gradients:** All gold-based. Define 2-3 size/intensity presets.
7. **EggplantImage sizes:** 5 values. Could be 3 (`sm`, `md`, `lg`).

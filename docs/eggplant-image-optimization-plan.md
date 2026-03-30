# Eggplant Image Optimization Plan

## Current State (updated 2026-03-30)

| File                        | Size   | Dimensions | Frames | Status                                             |
| --------------------------- | ------ | ---------- | ------ | -------------------------------------------------- |
| `eggplant-logo-smooth.apng` | 8.5 MB | 480x480    | 68     | **Active** — animated, lazy-loaded after page idle |
| `eggplant-logo.png`         | 131 KB | 480x480    | —      | **Active** — static placeholder, shown instantly   |
| `eggplant-logo-nobg.apng`   | 4.7 MB | 480x480    | 35     | Unused — tested, visibly worse quality             |
| `eggplant-logo.gif`         | 1.7 MB | ?          | ?      | Unused — tested, looks bad                         |
| `eggplant-logo-email.png`   | 8.4 KB | ?          | —      | Email signature                                    |

### What's already done

- [x] **Lazy loading implemented** — `EggplantImage` shows the static PNG (131 KB) on first render, then swaps to the animated APNG after the page is idle via `requestIdleCallback`. Non-blocking, won't compete with critical resources.
- [x] **Deleted unused variants** — removed `-long` (29 MB) and `-slow` (8.5 MB), saving 37.5 MB.
- [x] **Tested alternatives** — `-nobg` (worse quality), `-long` (no visible difference from smooth), `.gif` (bad quality) all rejected.

### What's left

- [ ] **Generate a smaller animated version for mobile** — 8.5 MB is still wasteful over cellular
- [ ] **Delete `-nobg`** — confirmed worse quality, unused
- [ ] **Optionally convert to WebP** for further compression

---

## Next Step: Mobile-Optimized Animated Version

The current lazy-load pattern already helps perceived performance (instant static PNG), but mobile users still download 8.5 MB in the background over cellular. We need a smaller animated file for mobile.

### Approach: Resized APNG (240x240) + optional WebP conversion

**Step 1** — Generate a 240x240 APNG from the smooth version:

```bash
ffmpeg -i public/logos/eggplant-logo-smooth.apng -vf scale=240:240 -plays 0 public/logos/eggplant-logo-smooth-mobile.apng
```

**Step 2** — Measure. If still too large, convert both to animated WebP:

```bash
# Desktop WebP
ffmpeg -i public/logos/eggplant-logo-smooth.apng -c:v libwebp -quality 85 -loop 0 public/logos/eggplant-logo-smooth.webp

# Mobile WebP
ffmpeg -i public/logos/eggplant-logo-smooth.apng -vf scale=240:240 -c:v libwebp -quality 85 -loop 0 public/logos/eggplant-logo-smooth-mobile.webp
```

**Step 3** — Update `useAnimatedSrc` hook to pick the right animated source based on viewport width:

```ts
const isMobile = window.innerWidth < 768;
const animatedUrl = isMobile ? ANIMATED_MOBILE_SRC : ANIMATED_SRC;
```

### Expected sizes

| Variant | Format | Est. Size        | Resolution |
| ------- | ------ | ---------------- | ---------- |
| Desktop | APNG   | 8.5 MB (current) | 480x480    |
| Mobile  | APNG   | ~2-3 MB          | 240x240    |
| Desktop | WebP   | ~3-5 MB          | 480x480    |
| Mobile  | WebP   | ~500 KB-1 MB     | 240x240    |

---

## Other Options Considered

### Option C: Looping video (MP4/WebM) — rejected for now

Would give 95%+ compression (~200-500 KB) but requires:

- Replacing `<Image>` with `<video autoplay loop muted playsinline>`
- CSS `filter` presets unreliable on mobile `<video>`
- Transparency needs WebM VP9 alpha
- Animation hooks (`useYoyo`, `useZeroGravity`) need testing with `<video>`

Too much component churn for now. Revisit if WebP sizes are still unacceptable.

### Option D: Reduced frame count — can combine with any approach

Drop from 68 to 34 frames for ~50% size reduction with barely perceptible difference:

```bash
ffmpeg -i eggplant-logo-smooth.apng -vf "select='not(mod(n\,2))',setpts=N/FRAME_RATE/TB" -plays 0 eggplant-logo-reduced.apng
```

Can be applied on top of any other option.

### Option F: Static PNG + CSS animation — not viable

The APNG has a 3D-style rotation that CSS cannot replicate.

---

## Cleanup Candidates

| File                      | Size   | Action                         |
| ------------------------- | ------ | ------------------------------ |
| `eggplant-logo-nobg.apng` | 4.7 MB | Delete — tested, worse quality |
| `eggplant-logo.gif`       | 1.7 MB | Delete — tested, looks bad     |

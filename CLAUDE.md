# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MONSTER LAB — landing page for custom Labubu collectible figures. Built for a FADU/Belluweb design class (DG3 2026, Cátedra Belluccia).

**No build toolchain.** Pure static HTML/CSS/JS. Open `index.html` in a browser to run; there are no install or build steps.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Main landing page (12 sections) |
| `detalle.html` | UI Kit & Design System reference (self-contained, CSS inline) |

## Design System

All tokens live in `:root` in `css/styles.css`. Key values:

| Token | Value | Role |
|---|---|---|
| `--neon` | `#c4ff2e` | Primary accent (neon green) |
| `--pink` | `#ff2d95` | Secondary accent / danger |
| `--violet` | `#8b3fff` | Tertiary / glow |
| `--void` | `#0a0612` | Deepest background |
| `--font-display` | Syne | Headings, buttons |
| `--font-body` | Outfit | Body text |
| `--font-mono` | Space Mono | Labels, eyebrows, prices |

Aesthetic: **"Cyberpunk Mischievous"** — dark backgrounds, neon accents, grain overlay, glitch effects.

## JS Architecture (`js/main.js`)

Single IIFE, vanilla JS, no dependencies. Modules:

- **Spotlight** — tracks `pointermove` and sets `--mx`/`--my` CSS vars on `.spotlight`
- **Reveal** — `IntersectionObserver` adds `.in` class to `.reveal` elements on scroll
- **Sea of sameness** — dynamically creates 36 `.same` spans inside `#sea`; index 22 gets `.same--star`
- **Before/After slider** — pointer events on `#compare`; dragging clips `#compareClip` width; keyboard accessible via `ArrowLeft`/`ArrowRight` on `#compareHandle`
- **Gallery parallax** — reads `data-speed` on `.mg__item`, applies `translateY` offset per scroll tick using `requestAnimationFrame`
- All animations respect `prefers-reduced-motion`

## Gallery Images

Gallery items use parallax depth via `data-speed` attribute:
- `0.85–0.92` → background/slow layer
- `1.0` → neutral
- `1.05–1.15` → foreground/fast layer

To add gallery images, duplicate a `<figure class="mg__item" data-speed="…">` in the `#galeria` section of `index.html`. Preferred format: WebP, max 250 KB, `loading="lazy"`.

## CSS Structure

`styles.css` sections in order: reset → tokens → atmosphere (`.spotlight`, `.grain`) → typography → layout → buttons → nav → hero → marquee → problem/sea → compare → styles grid → steps → idea → why cards → masonry gallery → testimonials → exclusivity → FAQ → final CTA → footer → reveal → responsive → reduced-motion → experience section.

The hero section has **duplicate rule blocks** (an earlier mobile-first block and a later overriding block) — this is intentional legacy from iterative development; the later declarations win.

## detalle.html

Standalone design system document. CSS is **inline** (not linked to `styles.css`) and uses different token names (`--bg-base`, `--accent-primary: #d4ff00`, etc.). Edit it independently — changes there do not affect the main site.

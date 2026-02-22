# CLAUDE.md — noahkramer.design

Personal portfolio site. Static HTML/CSS/JS — no build step, no framework, no package manager.

---

## Stack

- **HTML** — hand-authored, no templating
- **CSS** — Tailwind v4.1.12 pre-built (`css/styles.css`, 124 KB) + hand-written overrides (`css/overrides.css`)
- **JS** — vanilla, single file (`script.js`)
- **Fonts** — Google Fonts: Space Mono (400, 700) + IBM Plex Mono (400, 500, 600)

---

## File structure

```
index.html              Homepage (left panel: bio; right panel: project list)
about.html              About page
projects/
  mission-free-college.html   Case study — Mission: Free College
  odu_v4.html                 Case study shell (right panel empty)
  learn-from-anywhere.html    Case study shell (right panel empty)
css/
  styles.css            Tailwind pre-built — DO NOT EDIT
  overrides.css         All hand-written CSS — edit here
assets/                 Images and video
script.js               UTC clock, rotate-text, typewriter, hover-preview
```

---

## CSS rules

**Never touch `css/styles.css`** — it is a pre-built Tailwind bundle. Changing class names in HTML breaks styles; Tailwind is not running JIT.

All custom CSS goes in `css/overrides.css`. It is loaded after `styles.css` on every page.

### Design tokens (`:root` in overrides.css)
```
--cs-border: 1px solid #26262d
--cs-text:   #e2e2e2
--cs-muted:  #9999aa
--cs-accent: #39ff14   (neon green)
--cs-mono:   'Space Mono', monospace
--cs-plex:   'IBM Plex Mono', monospace
```

### Case study semantic classes (overrides.css)
Used in `projects/mission-free-college.html`. Pattern for future case study pages:

| Class | Role |
|---|---|
| `.cs-stats` / `.cs-stat` / `.cs-stat__value` / `.cs-stat__label` | Metrics row |
| `.cs-stat__value--accent` | Green stat value |
| `.cs-hero` | Hero section (96px/112px padding, bottom border) |
| `.cs-statement` | Hero body copy (32px bold mono) |
| `.cs-problems` | Problems section wrapper |
| `.cs-section` | Generic section (64px/72px padding, top border) |
| `.cs-tag` | Green uppercase label e.g. `[ SOLUTION 01 ]` |
| `.cs-heading` | Section h2 (40px bold mono) |
| `.cs-label` | Muted uppercase small label |
| `.cs-body` | Body paragraph (15px IBM Plex Mono, muted) |
| `.cs-callout` / `.cs-callout--wide` | Arrow callout text |
| `.cs-problem-list/item/num/text` | Numbered problem list |
| `.cs-detail-list/item/num/text` | Numbered detail list (smaller) |
| `.cs-img` / `.cs-img--constrained` | Full-width or max-560px image |
| `.cs-img-pair` | Side-by-side image pair |
| `.cs-gallery` | 2-col image grid |

### Utility classes
- `.pb-skills` — `padding-bottom: 20px` (skills container on homepage)
- `.tw-grid` / `.tw-grid__measure` — grid overlay for typewriter h1 sizing

---

## Layout

Two-panel layout on all pages:
- **Left panel**: `flex: 0 0 35%` — project info, always visible
- **Right panel**: `flex: 1 1 0%` — scrollable content
- Targeted via `[data-name="Section"]:first-child` / `:last-child`

Mobile breakpoint (`max-width: 1000px`): panels stack vertically, body is the scroll container.

---

## JavaScript (script.js)

Four self-contained IIFEs — no dependencies:

1. **UTC clock** — updates `.utc-clock` every second
2. **Rotate text** — cycles `.rotate-text` through phrases every 3 s
3. **Typewriter** — IntersectionObserver on `[data-typewriter]`; types text on scroll-into-view, staggered 200 ms. Text content is read from the element at init and stored in `data-typewriter-text`.
4. **Hover preview** — `#hover-preview` img follows cursor over `[data-hover-img]` rows

---

## Conventions

- No inline `style=` attributes on content elements — use classes in `overrides.css`
- `data-name="..."` attributes are Figma Make structural hooks — used by CSS selectors, do not remove
- Figma font class names use colon syntax (e.g. `font-['Space_Mono:Bold',sans-serif]`) — overrides.css maps these to real Google Fonts families
- Project pages live in `/projects/` — use `../` for all asset/CSS/JS paths
- Logo links to `index.html` (or `../index.html` from `/projects/`)
- Nav contains only `/About` — no `/Index` link

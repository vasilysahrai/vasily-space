# Vasily's Space

A personal portfolio website with a dark, animated design — built to showcase projects and skills clearly and professionally.

**Live Demo:** [vasily-space.vercel.app](https://vasily-space.vercel.app)

---

## Features

- **Canvas particle system** — 90 floating particles rendered in real time with `requestAnimationFrame`
- **Typing animation** — cycles through 5 role titles with accurate type/delete timing
- **Scroll reveal** — IntersectionObserver triggers staggered fade-in on every section
- **Animated stat counters** — numbers count up when the About section enters the viewport
- **Active nav highlighting** — scroll position tracked to highlight the current section link
- **Glassmorphism cards** — translucent project cards with gradient top-border reveal on hover
- **Fully responsive** — adapts cleanly to mobile, tablet, and desktop

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, keyframe animations) |
| Scripting | Vanilla JavaScript (ES6+, Canvas API, IntersectionObserver) |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Hosting | Vercel |

## Skills Demonstrated

- **DOM manipulation & event-driven programming** — scroll listeners, dynamic class toggling, live text rendering
- **Canvas 2D API** — particle physics simulation with per-frame clearing and draw cycles
- **Performance-aware animation** — `requestAnimationFrame` loop, `IntersectionObserver` for deferred rendering
- **CSS architecture** — design token system via CSS custom properties, responsive grid layouts, complex keyframe sequences
- **Clean UI/UX design** — consistent dark theme, micro-interactions, readable typography hierarchy

## Project Structure

```
vasily-space/
├── index.html     # Single-page markup — navbar, hero, about, projects, skills, contact, footer
├── style.css      # All styles — design tokens, layout, animations, responsive breakpoints
└── script.js      # All interactivity — particles, typing, scroll reveal, counters, nav state
```

## Setup

No build step required — open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
```

## License

MIT — open source, free to use and adapt.

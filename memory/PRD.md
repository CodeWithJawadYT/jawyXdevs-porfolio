# PRD — JawyXdevs Portfolio Landing Page

## Original Problem Statement
Build a 3D Creator portfolio landing page for "JawyXdevs" — dark theme (#0C0C0C), Kanit font, premium web-engineering studio identity. Exact spec provided by user covering Hero, Marquee, About, Services, Projects sections, reusable components (FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton), real project data (6 client sites), and contact info (tel:03151082775, jawyXdevs@gmail.com). Original "Jack" identity fully removed.

## User Choices
- Existing React (CRA/craco) setup instead of Vite+TS
- Live screenshots captured from the 6 real project websites
- AI-generated premium 3D chrome hero visual, "full 3d interactive"

## Architecture
- Frontend-only landing page (no backend endpoints used)
- React 19 + Tailwind + framer-motion 11 + lenis smooth scroll + lucide-react
- `src/sections/`: HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection, ContactFooter
- `src/components/`: FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton
- `src/data/projects.js`: the 6 real projects (name, url, category, description, slug)
- Assets: `public/assets/hero-chrome.png` (AI chrome object, black bg converted to alpha via unscreen script), `public/projects/{slug}_{top|mid|tall}.jpg` (live playwright captures)
- Scripts: `/app/scripts/capture.py`, `capture_bxc.py`, `unscreen.py`

## Implemented (June 2026)
- Hero: massive gradient JAWYXDEVS heading, nav (About/Services/Projects/Contact smooth-scroll), tagline, ContactButton, interactive 3D hero visual (Magnet + mouse-tilt rotateX/Y + float animation + glow)
- Marquee: 2 scroll-driven rows (right/left) of real project screenshots, 420x270 tiles
- About: gradient heading, 4 corner 3D decor images (figma CDN), char-by-char scroll-reveal paragraph, ContactButton
- Services: white rounded-top section, 5 numbered services with staggered FadeIn
- Projects: 6 sticky-stacking cards (scale-down effect), real screenshots (2 stacked + 1 tall), LiveProjectButton opening real URLs in new tab
- Contact footer: "Let's Build" heading, phone/email links, bottom bar
- Lenis smooth momentum scrolling, Kanit font, page title set

## Backlog
- P2: mobile fine-tuning pass beyond default responsive classes
- P2: custom cursor / preloader moment
- P2: SEO meta/OG tags

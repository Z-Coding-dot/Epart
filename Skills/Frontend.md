# Task: Build the Epart company website (Dari, RTL, premium, mobile-first PWA)

Attached: (1) the full site plan in Dari — the SINGLE SOURCE OF TRUTH for all copy, pages, routes, services; (2) three reference images; (3) the logo file. Read the whole plan before coding. Use its Dari copy verbatim; do not rewrite or translate it. This prompt adds design direction and OVERRIDES the plan where stated.

## 1. Stack
Vite + React + Tailwind CSS + React Router + Motion for React + Lucide React + vite-plugin-pwa. Font: Vazirmatn (self-hosted, subset, `font-display: swap`). One language only (Dari, `dir="rtl"`, `lang="fa-AF"`), but keep all strings in /src/data so another language can be added later. No i18n library now.

## 2. Design direction (must look premium, not templated)
References: (a) orange-gradient landing with a huge circular shape and floating rounded UI; (b) white rounded card layered over a dark curved panel with a hero illustration; (c) Nylas: dark, high-contrast, bold headline, sharp geometric accents, generous spacing. Take composition, rhythm and boldness — NOT their colors or stock imagery.
- Palette from the plan only: #FF6B00, #FFB202, #111827, #F3F4F6, #FFFFFF, as Tailwind tokens/CSS variables.
- Hero: dark with orange/gold aurora or gradient glow, big Dari headline, 2 CTAs, plus a code-built composition (laptop/phone/dashboard mockups with floating cards, subtle parallax). No stock photos, no fake numbers.
- Alternate dark/light sections with curved/diagonal dividers. Rounded cards, glass surfaces, consistent Lucide icons, one accent gradient, strong type scale.
- Motion: scroll-reveal, hover lifts, gradient buttons, marquee of service categories. Respect `prefers-reduced-motion`.

## 3. Mobile-first (equal priority to desktop — design mobile deliberately, don't just shrink desktop)
- Write styles mobile-first; test at 360, 390, 430, 768, 1024, 1440. No horizontal scroll at any width.
- Fluid typography with `clamp()`: body ≥16px, Dari line-height ~1.8–1.9 (Vazirmatn needs more leading), headings tight but never clipped. Check long Dari headings wrap cleanly.
- Touch targets ≥44px, no hover-only interactions (provide tap equivalents), `:active` feedback.
- Mobile header: compact bar + full-screen animated menu sheet with services accordion. Optional sticky bottom CTA bar (درخواست پروژه / واتساپ) on mobile.
- Respect safe areas (`env(safe-area-inset-*)`): floating WhatsApp button and bottom bar must not collide with each other, the back-to-top button, or the iOS home indicator.
- Mobile layouts: stacked cards, horizontal snap-scroll carousels for projects/articles/process steps, full-width buttons, forms with correct `inputmode`/`type`/`autocomplete` (tel, email), large inputs.
- Heavy effects (WebGL, cursor effects, big parallax) disabled on mobile; use static gradients instead.
- Screenshot every page at 390px and review it visually before reporting done.

## 4. PWA
- vite-plugin-pwa, `registerType: "autoUpdate"`, with an unobtrusive "new version available" toast if update needs confirmation.
- Manifest: name «ایپارت | Epart», short_name "Epart", `dir: "rtl"`, `lang: "fa-AF"`, `start_url: "/"`, `display: "standalone"`, theme_color #111827, background_color #111827 (or white — pick by splash look), icons 192/512 + maskable 512 generated from the logo, apple-touch-icon, `<meta name="theme-color">`.
- Caching: precache app shell + fonts; runtime cache images (stale-while-revalidate); NEVER cache or intercept `wa.me`/WhatsApp links.
- Offline: a styled Dari offline fallback page. Pages not cached show it; don't pretend the WhatsApp form works offline (show a clear "internet required" message).
- Optional custom "نصب اپلیکیشن" button using `beforeinstallprompt` (hide on iOS/unsupported; don't nag).
- Must coexist with static prerendering (see §9); verify the build produces a valid service worker and that Lighthouse PWA/installability checks pass.

## 5. Reusable components (strict rule)
Before creating ANY component, search /components/ui and /components/shared. Reuse or extend via props/variants (e.g. class-variance-authority) instead of making a near-duplicate. Create a new component only if no existing one can be reasonably extended — and when you do, make it generic and place it in the right folder.
Required base set (build first, then use everywhere): Button (variants: primary/secondary/ghost, sizes, link mode), Container, Section, SectionTitle, Card (base) → ServiceCard/ProjectCard/BlogCard built on it, Badge/Tag, Icon wrapper, Input/Textarea/Select/FormField, Accordion (FAQ), Reveal (scroll animation wrapper), Marquee, Carousel (snap), Modal/Sheet, Breadcrumb, Seo (head meta), CTABanner, Section dividers. No copy-pasted markup between pages. No inline one-off styles that belong in a token or variant.

## 6. Folder structure (follow exactly; add files only where they fit)
```
epart/
├── public/
│   ├── images/{logo,services,projects,blog}/
│   ├── icons/            # PWA icons, apple-touch-icon, favicon
│   ├── fonts/            # Vazirmatn (woff2, subset)
│   ├── robots.txt
│   └── offline.html      # (or route) Dari offline fallback
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/       # Header, Footer, MobileMenu, MainLayout, WhatsAppFloat, BackToTop, MobileCTABar
│   │   ├── ui/           # Button, Card, Badge, Input, Textarea, Select, FormField, Accordion(FAQ), Modal, Carousel, Marquee, Reveal, SectionTitle, Container, Section, Breadcrumb
│   │   ├── shared/       # ServiceCard, ProjectCard, BlogCard, CTABanner, ContactForm, Seo, InstallPrompt, UpdateToast
│   │   ├── home/         # Hero, AboutSection, ServicesSection, PortfolioSection, WhyChooseUs, ProcessSection, CTASection
│   │   └── reactbits/    # ReactBits components installed here, untouched wrappers if needed
│   ├── pages/            # Home, About, Services, ServiceDetails, Portfolio, ProjectDetails, Blog, BlogDetails, Contact, Privacy, NotFound
│   ├── data/             # services.js, projects.js, articles.js, settings.js (phone, WhatsApp, email, address, socials)
│   ├── hooks/            # useMediaQuery, useReducedMotion, useInstallPrompt, ...
│   ├── utils/            # whatsapp.js (build message + URL), validators.js, format.js (Persian digits)
│   ├── styles/           # index.css (tokens, base, RTL fixes)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js        # includes PWA + prerender config
```
Routes and page responsibilities: plan §2. English URLs, Dari content.

## 7. React Bits Pro
Docs: https://pro.reactbits.dev/docs/components (paid; shadcn registry — see /docs/installation). FIRST verify access/license. If unavailable, tell me immediately and fall back to free React Bits (reactbits.dev) or custom Motion; do not stall or fake it.
Use sparingly. Candidates: Aurora Blur / Liquid Lines (hero bg), Preloader, Modal Cards / Animated List (services), Infinite Gallery / Comparison Slider (portfolio), Smooth Cursor (desktop fine-pointer only).
Hard rules:
- NO per-letter/per-character text animations (split-text, glitch, scramble, letter swap) on Dari text — it breaks Arabic-script joining. Animate by line/word only, or apply text effects to Latin text only ("Epart").
- Max one WebGL/shader background per page, lazy-loaded, static fallback on mobile/reduced-motion.
- Test each component in RTL and at 360px before using it.

## 8. WhatsApp form (overrides plan §8 server behavior)
No backend. Contact form and every quote/start-project form submits by opening WhatsApp:
- `https://wa.me/<number>?text=<encodeURIComponent(message)>`, opened via `window.open(url, "_blank", "noopener")`.
- Number ONLY from /src/data/settings.js (international format, digits only; I will provide it).
- Plan §8 fields EXCEPT file attachment (wa.me can't attach); add hint «فایل‌ها را بعد از باز شدن واتساپ ارسال کنید.»
- Validate (name, phone, description required; phone format; inline Dari errors). Build a clean labelled Dari message in /utils/whatsapp.js. Keep URL < ~1800 chars (truncate description gracefully).
- Service pages prefill the service field. One shared ContactForm component used everywhere.
- Success state must NOT say the request was registered. Use «در حال انتقال به واتساپ… اگر باز نشد، روی دکمه زیر کلیک کنید» + fallback link.
- Floating WhatsApp button on all pages, same number.
- All contact details/socials from settings.js only.

## 9. Content integrity, SEO, performance
- No invented stats, testimonials, clients, or finished projects. Portfolio: full UI + schema, but clearly marked placeholder entries (flagged in dev) or hidden until real data. Testimonials hidden while empty.
- Logo: use the provided file from /public/images/logo via one Logo component.
- Services: schema per plan §11, all categories/items from §4 in services.js, but render only `active: true` items; default only main groups active; ask me which items to enable.
- SEO: static prerendering from the start (e.g. vite-react-ssg or equivalent), per-page title/meta/OG, sitemap, robots, JSON-LD (Organization, Service).
- Performance: route code-splitting, lazy images (AVIF/WebP), no layout shift. Lighthouse mobile ≥ 90 for Performance/Accessibility/SEO/Best Practices on Home, plus PWA installable.
- Accessibility: focus states, labels, contrast on orange, keyboard-usable menus.
- Persian digits in Dari prose, Latin digits for phone numbers/links.
- No dead buttons/links.

## 10. Process
1. Confirm ReactBits access, then give a short plan: design tokens, base component list, where ReactBits is used.
2. Build foundation (tokens, base ui components, layout, PWA setup) + Home. Run it, screenshot at 390px and 1440px, show me BEFORE other pages.
3. After approval, build remaining pages reusing existing components. Then run: RTL audit, 360px overflow check, form → WhatsApp URL test, Lighthouse (incl. PWA), offline test, build with zero console errors.
4. Report what is placeholder and what I must still provide (real projects, active services, email/address/socials).
Ask me only if blocked; otherwise decide and flag the decision.
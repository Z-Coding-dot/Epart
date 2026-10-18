# Epart

Dari / RTL website built with Vite, React, TypeScript, Tailwind, React Router and Motion. Contact forms open a prepared WhatsApp message; there is no application backend.

## Local development

```sh
npm install
npm run dev
npm run build
npm run preview
```

On Windows PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

## Design and branding

- Colors from `Skills/Frontend.md`: orange `#FF6B00`, gold `#FFB202`, navy `#111827`, light `#F3F4F6`, and white. Shared tokens live in `src/styles/index.css` and `tailwind.config.js`.
- Original logos: `public/images/logo/epart-logo.jpeg` and `E_logo.jpeg`. The shared `Logo` uses an optimized crop of the supplied wordmark. The favicon and PWA icons use the supplied E mark.
- To regenerate derived logo assets, run `python scripts/prepare-brand-assets.py` with Pillow installed. Originals are preserved.
- Floating navigation with a pill border. Shared cards have rounded silhouettes, optional corner cutouts and orange/gold arrows. Service and project cards reuse this component.
- The compact navbar uses translucent glass, backdrop blur and layered shadows. `Logo` uses a background-removed transparent WebP, so it has no white rectangle over the glass. The source and imagegen edit prompt are recorded in `scripts/logo-image-prompt.md`.
- Service category cards on Home and Services select a same-page detail panel and scroll it below the sticky navbar. The catalog contains 44 active options (20 web/app types and eight each for branding, marketing and support). Small cards preserve the main card interactions and prefill the contact form with the chosen service/type.
- The contact page uses a compact two-column form on larger screens alongside an orange guidance panel. The two panels stretch to the same height on desktop and stack on mobile.
- Service subcards are compact icon tiles (two columns on mobile, three on tablets, four on desktop). They expand on hover, keyboard focus or tap to show their complete details without clipping.
- Cards reveal on scroll with a damped spring, lift on hover and respond to taps; reduced-motion preferences disable these movements. The service ticker lists 16 services and repeats two identical viewport-filling groups for a seamless loop, pausing on hover and staying still for reduced-motion users.
- The website background, navigation, banners, forms, footer, offline page and PWA splash colors are white. Cards use the main brand orange with dark title text at rest.
- The hero follows the supplied agency reference: an orange curved panel with Dari copy and two CTAs, alongside a person holding a laptop over a soft circular backdrop. Desktop composition is mirrored for RTL; mobile stacks the copy above the image. The portrait is generated illustrative imagery; its source, runtime asset and exact generation prompt are documented in `scripts/hero-image-prompt.md`.
- Cards show their title with a subject-related Lucide illustration at rest. Desktop hover or keyboard focus anywhere on the card darkens the orange surface and replaces the artwork with the subtitle and full description in white. Touch users have a separate description toggle, while the card link continues to open its detail page.
- About, portfolio and process sections have transparent backgrounds so the global hexagon pattern remains visible. About feature cards explain mobile-first design, RTL and project delivery. The footer includes a large project invitation, brand signature, page/service navigation and a compact legal row; contact details appear only when configured.
- `HexagonalBackground.tsx` is an original canvas fallback inspired by the supplied hexagon reference. Its orange/gold light follows a desktop cursor. Touch/small screens and reduced-motion users receive static lighting. Rendering is event-driven, with no continuous animation loop or WebGL dependency.

## React Bits Pro

Both official registries are configured in `components.json`, using an environment variable in the Authorization header. Setup reference: https://pro.reactbits.dev/docs/installation

The licensed Hexagonal Vault component is **not installed**. No license key was available during this update, and the component registry returned HTTP 401. The custom fallback is used instead.

To install the licensed version later:

1. Copy `.env.example` to `.env.local` and set `REACTBITS_LICENSE_KEY` locally.
2. Run `npx shadcn@latest add @reactbits-starter/hexagonal-vault-tw`.
3. Replace the fallback import in `src/components/layout/MainLayout.tsx` with a wrapper for the installed component, retaining the brand colors and touch/reduced-motion fallback.

Never use a `VITE_` prefix for this key; it is an installation credential, not a browser runtime secret. Environment files are ignored by Git.

## Content still needed

The full Dari site plan referenced by the frontend brief is absent from this checkout. Existing home/service copy is provisional. Portfolio entries and the contact number are placeholders; project cards are visibly labelled as examples. Replace these in `src/data/` before launching. Contact details are centralized in `src/data/settings.ts`.

## Verification and remaining audit items

- TypeScript and production build pass, including generation of the PWA manifest and service worker.
- Previous browser QA covered the original 17 routes at 390px, before removal of the blog pages; the home page was also checked at 360, 430, 768, 1024 and 1440px. Screenshots and results are in ignored `artifacts/qa/`.
- Interaction checks cover menu focus/escape, form validation, intercepted WhatsApp handoff, offline form behavior, desktop cursor lighting and reduced-motion static lighting. No external message is sent during QA.
- The existing project still lacks static prerendering and a sitemap; its SEO helper currently uses relative canonical URLs. A production domain and a separate SEO/prerender pass are needed to meet the original brief fully.
- Lighthouse scores and installability have not been certified. A successful build alone does not certify those requirements.

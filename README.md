# Lante Homepage

A responsive, vertically scrolling homepage recreated from five supplied designs with React, TypeScript, Tailwind CSS 4, and Vite. No backend or API keys are needed.

## Setup

Requires Node.js 22.13 or newer and pnpm 10 or newer.

pnpm install
pnpm dev





`dist/` contains a complete static application, suitable for a static host. All fonts and images are bundled locally.

## Architecture

- `src/styles.css`: centralized Tailwind design tokens, baseline accessibility and four shared composition styles. Brand colors: navy `#020D19`, orange `#FD6509`, translucent orange `#FD65090D`.
- `src/components/ui.tsx`: reusable typed buttons, links, logo and content container.
- `src/sections/`: hero, property showcase, digital leases, pricing and footer in that order.
- `src/components/Header.tsx`: promotional banner, desktop dropdowns, mobile navigation.
- `src/components/DashboardPreview.tsx`: illustrative dashboard recreated as React markup because the dashboard source image was not supplied separately.
- `src/components/PlanDialog.tsx`: accessible native dialog with a mock sign-up interaction.
- `src/data.ts`: typed plan and footer data plus the billing calculation.
- `src/App.tsx`: page composition and selected-plan state.

The property photo and logo come from the supplied assets. The dark logo recolors only the white letters of the provided logo. Poppins approximates the reference typography; fonts are served locally.

## Interactions

- Navigation and footer links scroll to the relevant homepage sections. Dropdowns are keyboard-operable native details elements.
- Mobile menu closes after selecting a link.
- Promotional banner dismisses for the current page session.
- Monthly/annual toggle updates every plan. Annual billing gives the stated 12% reduction, displaying the discounted monthly equivalent and a yearly total based on the rounded monthly price.
- Get Started opens a mock plan-selection dialog. Email validation is native; no data is sent or retained and no payment or account is created.
- Learn More buttons reveal contextual mock information.
- Footer arrow returns to the top; reduced-motion preferences disable smooth scrolling.
- Social links point to platform homepages because no Lante profile URLs were supplied. Contact details and placeholder text are preserved from the references.

## Live review guide

To change a brand color, edit its token in `styles.css`. To change pricing or included features, edit `plans` in `data.ts`. To change the annual reduction, edit `annualDiscount`. Repeated pricing cards all use one typed component. Buttons share variants, while section-specific compositions use Tailwind utilities.






# Lante Homepage

A responsive frontend for Lante, a property-management platform. I built this project from five reference designs, with the goal of turning static layouts into a cohesive webpage that works across screen sizes and has meaningful interactions.

## About the project

The starting point was a set of homepage designs rather than an existing application. I needed to bring the sections together, keep the visual style consistent, and make the page feel like one product instead of five separate screens.

I approached it section by section: first understanding the layout and repeated design patterns, then setting up the React project, building reusable components, and finally adding the interactions and responsive behavior.

This repository is the **homepage frontend**, not a complete property-management system. The dashboard is a visual preview, and the sign-up flow is a demonstration rather than a connected service.

## How I approached the build

### 1. Breaking down the designs

I started by identifying the main sections: the header and hero, property showcase, digital leases, pricing, and footer. I also looked for elements that appeared repeatedly, such as buttons, containers, typography, and brand colors. This helped me avoid styling every section independently.

### 2. Setting up the structure

I used **React and TypeScript** with **Vite** for the frontend, and **Tailwind CSS** for styling. Instead of putting the entire page in one component, I separated the main sections into `src/sections/` and kept shared interface elements in `src/components/`.

The main page composition lives in `src/App.tsx`. Pricing content and calculation logic live in `src/data.ts`, making them easier to update without rewriting the cards.

### 3. Building the interface

Once the structure was in place, I worked through the sections and paid attention to spacing, typography, colors, alignment, and how the layout changes on smaller screens. I used the supplied logo and property image.



### 4. Adding interactions

I wanted the page to do more than display the designs. The navigation links move between sections, the mobile menu can be opened and closed, and the promotional banner can be dismissed.

The pricing section has monthly and annual billing options. Switching to annual billing applies a **12% discount** to the displayed monthly-equivalent price.



## Tech stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- Lucide React for icons
- Poppins, bundled locally
- Node.js test runner for pricing tests

## Features

- Responsive homepage with desktop and mobile navigation
- Property showcase and digital lease sections
- Reusable buttons, containers, and pricing cards
- Monthly/annual pricing switch with discount calculation
- Plan-selection dialog with native email validation
- Dismissible promotional banner
- Section navigation and back-to-top control
- Basic keyboard and reduced-motion accessibility considerations

## Project structure


src/
├── components/
│   ├── DashboardPreview.tsx
│   ├── Header.tsx
│   ├── SocialIcon.tsx
│   └── ui.tsx
├── sections/
│   ├── Hero.tsx
│   ├── PropertyShowcase.tsx
│   ├── DigitalLeases.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── App.tsx
├── data.ts
├── main.tsx
└── styles.css


## Running locally

You will need **Node.js 22.13+** and **pnpm 10+**.

bash

pnpm install
pnpm dev




## Current scope and next steps

This version focuses on the homepage experience. Some text and links are placeholders from the reference designs, and the dashboard and registration flow are illustrative. There is no backend integration, authentication, property database, or payment processing.


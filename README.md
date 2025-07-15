# Mini eCommerce Site – Test Assignment for Stackbuld

This is a simple mini eCommerce site built as a test assignment for **Stackbuld**. It uses **Next.js App Router** and includes basic product listing, cart, and checkout functionality. The focus was on clean structure and implementation, not production readiness.

## Features

- Product listing
- Product detail page (dynamic routing)
- Add to cart and view cart
- Checkout page (placeholder)
- Responsive components
- Minimal styling and no authentication

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Zustand (for cart & search state)
- React Query

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm

### Installation & Running the App

```bash
npm install
npm run dev
```

### Folder Structure

.
├── app
│   ├── cart
│   │   └── page.tsx
│   ├── checkout
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── product
│       └── [slug]
│           └── page.tsx
├── components
│   ├── cart
│   │   ├── cartCard.tsx
│   │   └── orderSummary.tsx
│   ├── Error.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LoadingSkeleton.tsx
│   ├── Newsletter.tsx
│   ├── ProductCard.tsx
│   └── Products.tsx
├── constants.ts
├── libs
│   └── ReactQueryProvider.tsx
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── images
│   │   └── [product images...]
│   └── products.json
├── queries
│   └── products.queries.ts
├── README.md
├── services
│   └── products.service.ts
├── store
│   ├── cart.store.ts
│   └── search.store.ts
├── tailwind.config.ts
├── tsconfig.json
└── types.ts
# Stackbuld-Ecommerce

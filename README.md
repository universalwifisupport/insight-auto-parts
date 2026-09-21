# Premium Auto Parts Hub

A premium, modern automotive parts lead-generation website with a light theme, strong visual hierarchy and polished responsive behavior across desktop, tablet and mobile. It showcases three product categories — Engines, Transmissions and Other Parts — with detailed product pages, a functional cart, and phone-first "Call Now to Order" conversion flows instead of online checkout.

Built as a client-side single-page application with [Vite](https://vitejs.dev), [React](https://react.dev) and [TanStack Router](https://tanstack.com/router).

## Development

You need Node.js 18+ installed.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

`npm run build` outputs a static SPA bundle in `dist/`. Deploy it behind any static host, and make sure unknown paths fall back to `index.html` so client-side routing works (e.g. an SPA rewrite/404 rule).

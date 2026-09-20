# Omar Diab Portfolio

A React + TypeScript + Tailwind CSS portfolio migrated from the original static page.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`npm run lint` checks the TypeScript and React source. `npm run format` formats the project with Prettier.

## Deploy

The Vite app can be deployed to Vercel or Netlify with the default build command `npm run build` and output directory `dist`.

For GitHub Pages, this project is already configured with `base: '/portfolio/'` in `vite.config.ts`, matching the repository name. The included `.github/workflows/deploy.yml` builds and deploys `dist` automatically whenever `main` changes.

The original static page is retained at `legacy/index.html` for comparison.

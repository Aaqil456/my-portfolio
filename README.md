# Aaqil Ahamad — Portfolio

Personal portfolio for Aaqil Ahamad, software engineer (full-stack, AI automation & Web3).
Live at **https://aaqil456.github.io/my-portfolio/**.

Built with React, TypeScript, Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173/my-portfolio/
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
```

## Updating content

Everything on the page — intro, experience, projects, skills, education and links — lives in
[`src/data/profile.ts`](src/data/profile.ts). Edit that file; the components pick it up automatically.

- **Featured project:** `featuredProject` (currently [Sentysis](https://sentysis.com/)) is shown full-width above
  the regular project grid — it's the one piece of current, live work on the page.
- **Photos:** project screenshots and the portrait are in `src/assets/img/`.
- **Colours & fonts:** design tokens are defined at the top of `src/index.css` (light and dark themes). The whole
  site uses a single typeface, Inter.

## Deploying to GitHub Pages

```bash
npm run deploy
```

This builds the site and publishes `dist/` to the `gh-pages` branch. The base path is set to
`/my-portfolio/` in `vite.config.ts` — change it there if the repository is renamed.

## Project structure

```
src/
  components/   page sections (Hero, About, Experience, Projects, Skills, Education, Contact)
  data/         profile.ts — all site content
  hooks/        theme toggle, scroll-spy and reveal-on-scroll
  index.css     Tailwind setup and design tokens
```

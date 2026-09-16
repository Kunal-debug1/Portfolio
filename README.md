# Kunal Gaikwad — Portfolio

A responsive, editorial-style developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Commands

```bash
npm run lint
npm run build
npm run start
```

## Content

Professional profile, projects, skills, experience, and education live in `src/data/portfolio.ts`. Update that file rather than editing UI components. The résumé is served from `public/Kunal_Gaikwad_Resume.pdf`.

## Architecture

- `src/app` — App Router pages, metadata routes, and global styles
- `src/app/work/[slug]` — statically generated project case studies
- `src/components` — interactive navigation and contact form
- `src/data` — central, typed portfolio content

## Deployment

The project is ready to deploy on Vercel. Import the repository, keep the default build command (`npm run build`), and deploy. No environment variables are currently required.

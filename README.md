# Sanjay S Dev Portfolio

Professional portfolio for Sanjay S Dev, a data analyst and automation specialist focused on ETL pipelines, reporting systems, dashboard design, and practical data workflows.

The site presents Sanjay's story, experience, projects, skills, education, resume, and contact paths in a polished single-page portfolio built with Next.js.

## Overview

This portfolio is designed to highlight data work through clear project narratives rather than a static resume page. It includes:

- Hero, story, experience, projects, skills, education, and contact sections
- Case-study style project cards for ASU, Hitachi Digital Services, IISc, and Riipen work
- Responsive layout and accessible navigation
- Framer Motion scroll interactions
- Static export support for GitHub Pages
- Resume and certificate assets served from `public/`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React icons
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Builds the production site. In GitHub Actions, the project is exported as a static site into `out/`.

```bash
npm run start
```

Starts the production Next.js server for non-static deployments.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

```text
app/
  layout.tsx        Site metadata, fonts, and root layout
  page.tsx          Main portfolio page composition
  globals.css       Global styles and Tailwind theme values
components/
  sections/         Portfolio sections: hero, story, experience, projects, skills, education, contact
  ui/               Shared UI components
  SiteHeader.tsx    Header and navigation
  AnimatedBackground.tsx
lib/
  data.ts           Portfolio content for roles, projects, skills, and education
public/
  resume.pdf        Resume asset
  certificates/     Certificate files
  images/logos      Project, organization, and profile assets
```

## Content Updates

Most portfolio content is managed in `lib/data.ts`.

Update this file when adding or editing:

- Work experience
- Projects
- Skills
- Education
- Certificate links
- Project metadata and descriptions

Static files such as resumes, certificates, logos, and project images should be placed in `public/` and referenced with root-relative paths such as `/resume.pdf`.

## Deployment

The site is configured for GitHub Pages deployment through GitHub Actions.

On pushes to `main`, the workflow installs dependencies, runs the production build, uploads the generated `out/` directory, and deploys it to GitHub Pages.

When running inside GitHub Actions, `next.config.ts` enables:

- Static export output
- `/Portfolio` as the base path
- Unoptimized images for static hosting compatibility

## Notes

- This is a private portfolio project.
- The project currently uses npm and includes a `package-lock.json`.
- Keep personal assets, resume files, and public profile links current before publishing.

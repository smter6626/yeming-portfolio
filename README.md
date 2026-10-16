# Yeming Dai portfolio

A bilingual personal portfolio covering machine learning research, AI workflows, and desktop software. Built with Next.js, React, and TypeScript, with a project atlas, five case studies, and a printable resume.

## Local development

Requires Node.js 20.9+ and npm.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). To preview on another device on the same network, use `http://<computer-LAN-IP>:3000`.

## Build and preview

```bash
npm run typecheck
npm run build
npm run preview
```

The build exports static files to `out/`. Preview runs at [localhost:3001](http://localhost:3001). The resume page supports browser printing and saving as PDF.

## Open without a server

Every `npm run build` also creates `Yeming-Portfolio.html` in the project root. Double-click that file to browse the complete portfolio. It includes both languages, project pages, styles, and icons, so it can be copied elsewhere and opened without Node.js, Python, or a network connection.

Language switching, project filtering, the atlas, browser back/forward, section links, and resume printing work within the file. Links to papers, GitHub, and downloads open their online destinations.

The file is generated from the same static pages as the website. Rebuild after content changes to update it. Generated HTML is excluded from Git; the exporter and its small navigation script live in `scripts/`. To repackage an existing `out/` export, run `npm run export:offline`.

## Pages and content

English pages use `/`, `/resume/`, and `/work/<id>/`. Chinese pages use `/zh/`, `/zh/resume/`, and `/zh/work/<id>/`. The language buttons open the corresponding page and retain its section anchor.

- `src/content/`: project descriptions, profile, education, and skills in both languages.
- `src/components/`: project atlas, project pages, navigation, and resume views.
- `src/app/`: localized routes, metadata, and shared styles.
- `src/lib/`: content types and language helpers.
- `public/`: project icons and favicon.

Project pages are generated from the shared content model. The layout supports phones, tablets, and desktop screens, with keyboard navigation and reduced-motion styles.

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

## Public website

The portfolio is hosted at [smter6626.github.io/yeming-portfolio](https://smter6626.github.io/yeming-portfolio/), with [Chinese pages](https://smter6626.github.io/yeming-portfolio/zh/).

GitHub Pages serves the root of the dedicated `gh-pages` branch. With Node.js, Python 3.9+, Git, and an authenticated GitHub CLI installed, publish an update from a clean, committed source checkout:

```bash
git push origin main
npm run deploy:pages
```

The deployment script builds the current source and publishes only `out/` to `gh-pages` using a temporary checkout. GitHub then processes the website update. The source commit is recorded in each publication commit; local handoff files and the single-file offline copy are excluded.

Local builds use the domain root. The deployment script reads the site's path from GitHub Pages and sets `NEXT_PUBLIC_BASE_PATH` during the build so navigation, language switching, and assets work under `/yeming-portfolio/`. To reproduce that build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/yeming-portfolio npm run build
```

Serve that export under `/yeming-portfolio/`. For the normal local preview, rebuild with `npm run build` without the variable. The generated single-file HTML works independently of either hosting path.

When adding plain internal anchors, browser navigation, or asset URLs, use `sitePath` from `src/lib/site-path.ts`; Next.js `Link` prefixes its route automatically. A custom domain can be configured later in GitHub Pages, followed by another deployment to rebuild for its new path.

## Open without a server

Every `npm run build` also creates `Yeming-Portfolio.html` in the project root. Double-click that file to browse the complete portfolio, starting in English. It includes both languages, project pages, styles, and icons, so it can be copied elsewhere and opened without Node.js, Python, or a network connection.

Language switching, project filtering, the optional atlas, browser back/forward, section links, and resume printing work within the file. Atlas nodes open project pages directly; focus or hover shows a preview. Links to papers, GitHub, and downloads open their online destinations.

The file is generated from the same static pages as the website. Rebuild after content changes to update it. Generated HTML is excluded from Git; the exporter and its small navigation script live in `scripts/`. To repackage an existing `out/` export, run `npm run export:offline`.

## Pages and content

English pages use `/`, `/resume/`, and `/work/<id>/`. Chinese pages use `/zh/`, `/zh/resume/`, and `/zh/work/<id>/`. The language buttons open the corresponding page and retain its section anchor.

- `src/content/`: project descriptions, profile, education, and skills in both languages.
- `src/components/`: project atlas, project pages, navigation, and resume views.
- `src/app/`: localized routes, metadata, and shared styles.
- `src/lib/`: content types and language helpers.
- `public/`: project icons and favicon.

Project pages are generated from the shared content model. The layout supports phones, tablets, and desktop screens, with keyboard navigation and reduced-motion styles.

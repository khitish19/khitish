# SETUP

Modern React app (Vite + React 19 + Framer Motion) that renders your profile and career timeline.

## Prerequisites

- **Node.js 18+** (check with `node -v`)
- **npm** (comes with Node)

## Quick Start

```bash
# 1. Clone and enter the repo
git clone <your-repo-url>
cd khitish_profile

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

## Edit Content

All resume data lives in a single file:

```
src/data/resumeData.js
```

- **Add a new project**: add an object to the relevant company's `projects` array.
- **Add a new company**: add an object to the `experience` array.
- **Update skills**: edit the `skills` object.

Save the file — Vite hot-reloads the page automatically.

## Project Structure

```
├── index.html                 ← Vite entry point
├── vite.config.js             ← Vite configuration
├── package.json
├── src/
│   ├── main.jsx               ← React mount point
│   ├── App.jsx                ← Root component
│   ├── index.css              ← All styling (design tokens, glass panels, animations)
│   ├── data/
│   │   └── resumeData.js      ← All resume content (edit here)
│   └── components/
│       ├── Header.jsx         ← Profile card
│       ├── Timeline.jsx       ← Year-grouped timeline
│       ├── YearBlock.jsx      ← Expandable year section
│       ├── CompanyCard.jsx    ← Expandable company section
│       ├── ProjectCard.jsx    ← Expandable project with drill-down
│       └── SkillsSection.jsx  ← Skills & tech stack
├── RESUME.md                  ← Source resume (reference)
├── DETAILS.md                 ← Source project details (reference)
└── README.md                  ← Project goals
```

## Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Troubleshooting

- If port 5173 is in use, Vite will auto-pick the next available port.
- Clear browser cache if styles look stale after updates.

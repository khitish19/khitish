# SETUP

This project is a static web app that renders your profile and timeline from:
- `RESUME.md`
- `DETAILS.md`

No build tooling is required.

## 1) Prerequisites

Install any one of the following:
- **Python 3** (recommended), or
- **Node.js** (for `npx serve`)

## 2) Clone and open repo

```bash
git clone <your-repo-url>
cd khitish_profile
```

## 3) Run locally on localhost

### Option A: Python (recommended)

```bash
python3 -m http.server 8000
```

Open:
- `http://localhost:8000`

### Option B: Node.js

```bash
npx serve .
```

Open the localhost URL shown in terminal.

## 4) Edit content

The app reads data directly from markdown files, so updates are easy:
- Update work experience bullets in `RESUME.md`
- Add richer project drill-down details in `DETAILS.md`

Refresh the browser to see changes.

## 5) Troubleshooting

- If the page is blank, ensure you are using a local server (do **not** open `index.html` directly as `file://`)
- If a port is busy, run on another port, for example:

```bash
python3 -m http.server 5173
```

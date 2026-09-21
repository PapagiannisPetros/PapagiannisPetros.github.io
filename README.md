# Petros Papagiannis Personal Website

Personal website built with `Next.js` App Router and static export.

## Structure

- `app/`: layout, homepage and global styles
- `components/`: sections and shared UI
- `data/site.ts`: Greek editable content
- `data/site.en.ts`: English editable content
- `next.config.ts`: static export config for hosting without a server

## Run Locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run build
```

The project uses `output: "export"`, so the generated `out/` directory can be served as static files.

To preview the export locally after building:

```bash
python3 -m http.server 4173 -d out
```

Then open `http://localhost:4173`.

## Common Edits

- Text, links, contact details: `data/site.ts` and `data/site.en.ts`
- Visual direction and responsive styling: `app/globals.css`
- Homepage structure: `app/page.tsx`

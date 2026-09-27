# Aquila Investment Society

Single-page static site built with Next.js and Tailwind CSS.
Sections: mission, founder, executive board, contact.

## Editing content

All copy, board members, contact details and settings are in **`content/site.ts`**.
Components never need to change for text edits.

Before launch, search that file for `TODO` and replace:

- `site.url`: the production domain (used for SEO, Open Graph and the sitemap)
- `board.members`: names, bios, LinkedIn URLs and photos
- `contact.email` and `contact.linkedin`
- `contact.form.endpoint`: your Formspree endpoint (create a form at formspree.io)

Until the Formspree endpoint is set, the form tells visitors to email instead.

### Photos

Put square images (at least 400 x 400) in `public/board/`, then set `photo` for the
founder or a board member to the path, e.g. `photo: "/board/aidan-maier.jpg"`.
Without a photo, the site shows initials on a soft gradient.

### Open positions

Leave a board member's `name` empty (`""`) and the card shows "To be announced".

### Performance panel

Hidden by default. To enable, set `features.showPerformance` to `true` and fill in
`performance` in `content/site.ts`.

### House style

British spelling, no em or en dashes, no exclamation marks. `npm run check:copy`
checks the content file (and the built page, if present). It also runs automatically
before every build, so a violation stops the build.

## Development

Requires Node.js 20.9 or later (see `.nvmrc`).

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # copy check, then static site written to /out
npm run export:logo  # regenerate the PNG logos in /brand
```

## Deploying to Vercel

The site is fully static (`output: "export"`), so Vercel needs no special settings.

1. Push this repository to GitHub.
2. In Vercel, choose **Add New > Project** and import the repository.
3. Leave every setting on its default (framework preset: Next.js) and click **Deploy**.
4. Once it is live, copy the address Vercel gives you (or your custom domain) into
   `site.url` in `content/site.ts`, commit and push. Vercel redeploys automatically on
   every push to `main`.

`vercel.json` adds a few standard security headers. Unknown addresses show the custom
404 page.

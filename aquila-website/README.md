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

Put square images (at least 400 x 400) in `public/board/` (create the folder the first
time), then set `photo` for the
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

Unknown addresses show the custom 404 page.

## Security

The site is static: there is no server code, database, login, API or secret key, so
most attack surface simply does not exist. What is in place:

- **Security headers** (`vercel.json`): a Content-Security-Policy plus clickjacking,
  MIME-sniffing, referrer and permissions policies. HTTPS and HSTS are applied by Vercel.
- **Content-Security-Policy**: the page may only load scripts, styles, fonts and images
  from this site, and may only send data to Formspree. If you later add analytics, an
  embedded video, a map or photos hosted on another site, they will be blocked until
  that address is added to the policy in `vercel.json`.
- **Contact form**: handled by Formspree, with a hidden spam trap and length limits.
- **Dependencies**: run `npm audit` and `npm update` now and then, or turn on Dependabot
  alerts and security updates in the GitHub repository settings.
- **No secrets in the repository**: `.env` files are git-ignored. Never commit keys.

The Formspree endpoint in `content/site.ts` is public by design and is not a secret.

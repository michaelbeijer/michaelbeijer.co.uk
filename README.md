# michaelbeijer.co.uk

Professional website of Michael Beijer (Dutch↔English patent & technical translator).

## Development

```bash
cd galactic-giant
npm install
npm run dev
```

## Deployment

The GitHub Actions workflow deploys the built site to GitHub Pages.

- Source: `galactic-giant/`
- Build output: `galactic-giant/dist/`
- Custom domain: `galactic-giant/public/CNAME`

If you ever need to deploy under a subpath (e.g. `/<repo>/`), set `ASTRO_BASE` in the workflow.

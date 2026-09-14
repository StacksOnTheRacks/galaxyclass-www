# Galaxy Class Gaming

Public marketing site for **Galaxy Class Gaming** — a design-focused gaming studio.

**First featured product:** [Riffle](https://github.com/StacksOnTheRacks/riffle-poker) — standalone no-limit Texas Hold'em (play chips) with embed-mode for hosts (RiffSync first).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

Static export for S3 + CloudFront (CDK-ready):

```bash
npm run build
```

Output lands in `out/`.

## Stack

- Next.js 15 (App Router, static export)
- Tailwind CSS
- Framer Motion (respects `prefers-reduced-motion`)

## Deploy

AWS CDK deployment will be added later. The static `out/` directory is the deploy artifact.

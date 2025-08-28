## NoWalletGaming Frontend (React + TypeScript + Vite)

A fast, wallet-free way to explore web games. Frontend in React + TypeScript + Vite, powered by my first Express backend.

## Stack
- React 19, TypeScript 5, Vite 7
- Routing: `react-router-dom`
- UI: Tailwind CSS (utility-first) + custom CSS
- Icons/Lottie: `lucide-react`, `lottie-react`
- Linting: ESLint 9

## Quick Start

### Prerequisites
- Node 18+ (LTS)
- pnpm (recommended) or npm

### Install
```bash
# with pnpm
pnpm install

# or with npm
npm install
```

### Run Dev
```bash
# http://localhost:5173
pnpm dev
```

### Build
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

### Lint
```bash
pnpm lint
```

## Scripts
- dev: Vite dev server
- build: Type-check (tsc -b) + Vite build
- preview: Preview built app
- lint: ESLint across project

## Project Structure
```
src/
  components/       # Header, NavBar, Footer, etc.
  pages/            # Home, NWG, Api, DevChoice, Contributer
  utils/            # Cards, Featured, DropList, ScrollUp
  styles/           # CustomCss.css
  types/            # CardsTypes.ts
  assets/           # Images, lottie
```

## API (Express)
Public, CORS-enabled, JSON responses, no auth.

Base URL: `https://no-wallet-gaming-back-end.vercel.app`

Endpoints:
```txt
GET /                 -> all games (JSON)
GET /games            -> game names only
GET /games?genre=...  -> filter by genre (WIP)
```

Example usage:
```bash
curl -X GET https://no-wallet-gaming-back-end.vercel.app
```

```ts
fetch('https://no-wallet-gaming-back-end.vercel.app')
  .then(r => r.json())
  .then(data => console.log(data));
```

## Frontend Highlights
- Strongly-typed components and props
- Responsive layout with Tailwind utilities
- API page with copy-to-clipboard and usage snippets
- Reusable cards (game, contributor, featured, etc.)

## Roadmap
- Pagination and cursor-based fetching
- Filters/sorting via query params
- Structured error envelopes and status codes
- End-to-end types (client ↔ server)
- Request validation (zod)
- Rate limiting
- Caching (CDN + ETag/conditional requests)
- OpenAPI/Swagger docs

## Development Notes
- This is my first backend (Express) project powering the React TS frontend
- Deployed to Vercel; serverless-friendly Express setup

## Contributing
- Fork, create a feature branch, open a PR

## License
MIT

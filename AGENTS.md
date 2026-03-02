# AGENTS GUIDE

Comprehensive reference for maintainers of the `amplication-WNIP/blog` monorepo. This document captures verified project behavior as of the latest repository analysis.

## Project Overview

- **Type:** Mixed JavaScript/TypeScript monorepo generated with Amplication.
- **Apps:**
  - `apps/blog-server` – NestJS 8 backend exposing REST/GraphQL APIs, Prisma ORM, JWT auth, Docker workflows.
  - `apps/blog-server-admin` – React 16 + React Admin frontend bootstrapped with Create React App, consumes the server GraphQL endpoint.
- **Config style:** Environment variables stored in per-app `.env` files; defaults are checked in for local usage.

## Repository Structure

```
apps/
  blog-server/          # NestJS backend (Prisma, scripts, Docker, README)
  blog-server-admin/    # React Admin frontend (CRA, React Admin, README)
README.md                # Minimal root stub
```

## Key Technologies

| Area  | Stack |
| --- | --- |
| Backend | Node.js 16+, NestJS 8 (`@nestjs/graphql`, `@nestjs/swagger`), Prisma 4, Apollo Server Express, JWT auth, class-validator, Docker |
| Frontend | React 16.14, React Admin 3.19, Material-UI 4, CRA scripts, Apollo client |
| Tooling | ts-node, npm-run-all, Jest 27, ts-jest, Docker Compose, TypeScript 4 |

## Environment Configuration

### Backend (`apps/blog-server/.env`)
Key variables (see README table for full list): `PORT`, `DB_URL`, `DB_*`, `BCRYPT_SALT`, `JWT_SECRET_KEY`, `JWT_EXPIRATION`, `COMPOSE_PROJECT_NAME`.

### Frontend (`apps/blog-server-admin/.env`)
- `PORT` (defaults to 3001)
- `REACT_APP_SERVER_URL` (points to running backend instance, e.g., `http://localhost:3000`)

> Default secrets are stored locally for convenience. Replace with secure values for non-local environments.

## Development Workflows

### Backend (NestJS)
1. `cd apps/blog-server`
2. Install deps: `npm install`
3. Generate Prisma client: `npm run prisma:generate`
4. Local DB via Docker: `npm run docker:dev`
5. Initialize schema + seed:
   ```sh
   npm run db:init
   ```
6. Start API server: `npm run start`

#### Additional scripts (see `package.json`)
- `npm run start:watch` / `start:debug` – reload/debug modes.
- `npm run db:migrate-save -- --name '<desc>'` – create migration snapshot.
- `npm run db:migrate-up` – apply migrations.
- `npm run seed` – rerun seed script (`scripts/seed.ts`).
- `npm run docker:dev` – provision Postgres service defined in `docker-compose.dev.yml`.
- `npm run compose:up` / `compose:down` – full container workflow via `docker-compose.yml`.

### Frontend (React Admin)
1. `cd apps/blog-server-admin`
2. Install deps: `npm install`
3. Ensure backend reachable at `REACT_APP_SERVER_URL`.
4. Start dev server: `npm run start` (served at `http://localhost:3001`).
5. Production build: `npm run build`.
6. CRA eject (irreversible): `npm run eject`.

### Docker Workflows
- Backend: `apps/blog-server/docker-compose.dev.yml` (Postgres only) and `docker-compose.yml` (full stack). Default DB credentials come from `.env`.
- Frontend: `apps/blog-server-admin/Dockerfile` builds CRA bundle; `npm run package:container` wraps build.

## Code & Architecture Patterns

### Backend
- Feature modules under `apps/blog-server/src` (`auth`, `post`, `user`, `tag`, etc.) follow NestJS module/provider/controller service pattern.
- `prisma/` directory holds schema and migrations (via Prisma CLI).
- `scripts/` contains operational helpers (`seed.ts`, `clean.ts`).
- GraphQL schema auto-generated via decorators (`@nestjs/graphql`).
- Security: JWT auth (see dependencies `@nestjs/jwt`, `passport-jwt`), role-based access via `nest-access-control` and `grants.json`.

### Frontend
- CRA structure with React Admin resources inside `apps/blog-server-admin/src` (components, pages, data providers).
- Uses `ra-data-graphql-amplication` to bind to the auto-generated GraphQL API.
- Material-UI for theming/layout.

## Quality & Testing

- Backend testing via Jest (`npm test` in `apps/blog-server`). `ts-jest` configured for TypeScript.
- Frontend uses CRA testing stack (`react-scripts test`, React Testing Library packages present).
- Linting/formatting follow defaults from CRA/NestJS templates; `.prettierignore` exists in backend root.

## Common Tasks & References

| Task | Location / Command |
| --- | --- |
| Update database schema | Edit `apps/blog-server/prisma/schema.prisma`, run `npm run db:migrate-save` + `db:migrate-up` |
| Seed sample data | `npm run seed` (backend) |
| Clean DB | `npm run db:clean` |
| Serve static assets | Configure in `apps/blog-server/src/serveStaticOptions.service.ts` |
| Health checks | `apps/blog-server/src/health` module |
| Swagger docs | Generated via `apps/blog-server/src/swagger.ts` |
| Admin customization | Modify React Admin resources under `apps/blog-server-admin/src` |

## Critical Rules

1. Always align backend and frontend schema changes; regenerate Prisma client + update React Admin queries as needed.
2. Keep `.env` secrets out of production commits; use provided templates for local dev only.
3. Run database migrations before seeding to avoid schema drift.
4. When updating dependencies, ensure Dockerfiles remain compatible (Node runtime versions, etc.).

## Reference Examples

- **Backend module layout:** `apps/blog-server/src/post/post.module.ts` (typical Nest module with service + resolver).
- **Prisma utilities:** `apps/blog-server/src/prisma/prismaClient.ts` (interactions, error handling).
- **Admin data provider:** `apps/blog-server-admin/src/data-provider/ra-data-provider.ts` (GraphQL binding for CRUD views).
- **Docker Compose snippet:** `apps/blog-server/docker-compose.dev.yml` (Postgres service definition).

## Additional Resources

- Amplication documentation: <https://docs.amplication.com/guides/getting-started>
- React Admin docs: <https://marmelab.com/react-admin/>
- NestJS docs: <https://docs.nestjs.com/>

---
_Last updated: based on repository analysis completed by the automated workflow._

# 🏗️ Project Structure

Complete project structure and organization.

## 📁 Directory Structure

```
gocardless-frontend/
├── docs/                          # 📚 Documentation
├── e2e/                           # Playwright E2E tests config
├── public/                        # Static assets
├── src/
│   ├── assets/                    # Images, styles, fonts
│   │   ├── base.css              # CSS variables
│   │   ├── main.css              # Global styles + Tailwind
│   │   └── logo.svg
│   │
│   ├── components/                # Reusable components
│   │   ├── HelloWorld/
│   │   │   ├── HelloWorld.vue
│   │   │   ├── HelloWorld.spec.ts
│   │   │   └── index.ts
│   │   └── UserWelcome/
│   │       ├── UserWelcome.vue
│   │       ├── WelcomeItem.vue
│   │       ├── UserWelcome.spec.ts
│   │       ├── icons/
│   │       └── index.ts
│   │
│   ├── composables/               # Composition functions
│   │   ├── useApiRequest/
│   │   │   ├── useApiRequest.ts
│   │   │   ├── useApiRequest.spec.ts
│   │   │   └── index.ts
│   │   ├── useQuasarNotify/
│   │   ├── useQuasarDialog/
│   │   ├── useQuasarLoading/
│   │   └── index.ts              # Central export
│   │
│   ├── interfaces/                # TypeScript types
│   │   ├── api.interface.ts
│   │   ├── pokemon.interface.ts
│   │   └── index.ts
│   │
│   ├── router/                    # Vue Router config
│   │   └── index.ts
│   │
│   ├── services/                  # API services
│   │   ├── axios-interceptor/
│   │   ├── base/
│   │   ├── example/
│   │   └── index.ts
│   │
│   ├── stores/                    # Pinia stores
│   │   └── counter.ts
│   │
│   ├── views/                     # Page components
│   │   ├── HomeView/
│   │   ├── AboutView/
│   │   ├── example/              # Example pages
│   │   └── layouts/
│   │
│   ├── App.vue                    # Root component
│   ├── main.ts                    # Entry point
│   └── quasar-variables.sass     # Quasar theme
│
├── .env                           # Environment variables
├── package.json                   # Dependencies
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
├── vitest.config.ts               # Vitest config
├── playwright.config.ts           # Playwright config
└── PULL_REQUEST_TEMPLATE.md       # PR template
```

## 🎯 Key Principles

### 1. Colocation
Files that change together, live together.
- Component + Tests + Types in same folder
- See [Colocation Pattern](./COLOCATION_PATTERN.md)

### 2. Feature-Based
Organized by feature/domain, not by file type.

### 3. Central Exports
Each folder has `index.ts` for clean imports.

### 4. Type Safety
All types centralized in `@/interfaces`.

### 5. Testability
Every component/service/composable has tests.

## 📚 More Details

See individual documentation files for deep dives into each aspect.


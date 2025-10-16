# 🚀 Getting Started

Quick start guide to get up and running.

## 📋 Prerequisites

- Node.js 20.19+ or 22.12+
- pnpm 9+

## ⚡ Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Setup Environment
```bash
# Create .env file
echo "VITE_API_BASE_URL=https://pokeapi.co/api/v2" > .env
```

### 3. Run Development Server
```bash
pnpm dev
```

Visit: `http://localhost:5173`

### 4. Run Tests
```bash
# Unit tests
pnpm test:unit

# E2E tests
pnpm test:e2e

# Type check
pnpm type-check
```

## 📖 Available Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/pokemon` | Pokemon API example |
| `/quasar-plugins` | Quasar plugins demo |
| `/about` | About page |

## 🛠️ Development

### Commands
```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run linter
pnpm format       # Format code
pnpm test:unit    # Run unit tests
pnpm test:e2e     # Run E2E tests
pnpm type-check   # Check TypeScript
```

### Project Structure
See [Project Structure](./PROJECT_STRUCTURE.md) for details.

## 📚 Next Steps

1. Read [Project Structure](./PROJECT_STRUCTURE.md)
2. Read [Service Layer](./SERVICE_LAYER.md)
3. Check example pages
4. Start building!

---

[← Back to Documentation](./README.md)


# 📁 Colocation Pattern

## What is Colocation?

**Colocation** = Files that change together, live together.

Instead of organizing by file type, we organize by feature.

## ❌ Before (By Type)

```
components/
├── Button.vue
├── Card.vue
└── Form.vue

tests/
├── Button.spec.ts
├── Card.spec.ts
└── Form.spec.ts

types/
├── Button.types.ts
├── Card.types.ts
└── Form.types.ts
```

**Problems:**
- Hard to find related files
- Hard to delete features
- Doesn't scale well

## ✅ After (Colocated)

```
components/
├── Button/
│   ├── Button.vue
│   ├── Button.spec.ts
│   ├── Button.types.ts
│   └── index.ts
│
├── Card/
│   ├── Card.vue
│   ├── Card.spec.ts
│   └── index.ts
│
└── Form/
    ├── Form.vue
    ├── Form.spec.ts
    └── index.ts
```

**Benefits:**
- ✅ Everything related in one place
- ✅ Delete folder = delete feature
- ✅ Easy to find tests
- ✅ Scales to 1000+ components

## 📦 Folder Structure

### Component Folder
```
MyComponent/
├── MyComponent.vue        # Component
├── MyComponent.spec.ts    # Unit test
├── MyComponent.e2e.ts     # E2E test (optional)
├── MyComponent.types.ts   # Types (optional)
├── MyComponent.stories.ts # Storybook (future)
└── index.ts               # Export
```

### Service Folder
```
user/
├── user.service.ts
├── user.service.spec.ts
└── index.ts
```

### Composable Folder
```
useMyFeature/
├── useMyFeature.ts
├── useMyFeature.spec.ts
└── index.ts
```

## 🎯 Benefits

1. **Easy to Find** - Test is next to component
2. **Easy to Delete** - Remove folder, remove everything
3. **Easy to Move** - Copy folder to another project
4. **Scalable** - Works with 1000+ files
5. **Clear Ownership** - One folder = one feature

## 📚 More Info

- [Project Structure](./PROJECT_STRUCTURE.md)
- [Adding Features](./ADDING_FEATURES.md)

---

[← Back to Documentation](./README.md)


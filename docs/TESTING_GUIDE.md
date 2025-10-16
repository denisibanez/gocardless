# 🧪 Testing Guide

Complete guide to testing in this project.

## 🎯 Testing Stack

- **Vitest** - Unit and integration tests
- **Playwright** - E2E browser tests  
- **Vue Test Utils** - Component testing utilities

## 📝 Test Types

### Unit Tests (.spec.ts)
Test individual units (components, composables, services) in isolation.

**Location:** Next to the file being tested

```
Component.vue
Component.spec.ts  ← Unit test
```

### E2E Tests (.e2e.ts)
Test complete user flows in a real browser.

**Location:** Next to view files

```
HomeView.vue
HomeView.e2e.ts  ← E2E test
```

## 🚀 Running Tests

```bash
# Unit tests (fast)
pnpm test:unit

# Unit tests in watch mode
pnpm test:unit --watch

# E2E tests (slow, requires browser)
pnpm test:e2e

# E2E in UI mode
pnpm test:e2e --ui

# Type checking
pnpm type-check

# All checks
pnpm lint && pnpm type-check && pnpm test:unit
```

## 📚 Examples

### Component Test
```typescript
// HelloWorld.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders message', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' }
    });
    expect(wrapper.text()).toContain('Test');
  });
});
```

### Composable Test
```typescript
// useApiRequest.spec.ts
import { describe, it, expect, vi } from 'vitest';
import { useApiRequest } from './useApiRequest';

describe('useApiRequest', () => {
  it('handles success', async () => {
    const mockApi = vi.fn().mockResolvedValue({ data: 'test' });
    const { data, execute } = useApiRequest(mockApi);
    
    await execute();
    
    expect(data.value).toEqual({ data: 'test' });
  });
});
```

### E2E Test
```typescript
// HomeView.e2e.ts
import { test, expect } from '@playwright/test';

test('loads home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main')).toBeVisible();
});
```

## ✅ Test Coverage

Current test files:
- Component tests: 2
- View tests: 3
- Service tests: 1
- Composable tests: 1
- E2E tests: 2

**Total:** 9 test files

## 💡 Best Practices

1. ✅ Keep tests next to code
2. ✅ Test behavior, not implementation
3. ✅ Use descriptive test names
4. ✅ Mock external dependencies
5. ✅ Test edge cases

---

[← Back to Documentation](./README.md)


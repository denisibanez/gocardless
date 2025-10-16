# 🎣 Composables Documentation

Reusable composition functions for Vue 3.

## 📦 Available Composables

### useApiRequest
**File:** `src/composables/useApiRequest/`

Handles API requests with automatic loading/error states.

```typescript
const { data, loading, error, execute } = useApiRequest(
  () => userService.getAll(),
  { successMessage: 'Users loaded!' }
);

await execute();
```

**Features:**
- ✅ Automatic loading state
- ✅ Error handling
- ✅ Success notifications (optional)
- ✅ Full TypeScript support
- ✅ Callbacks (onSuccess, onError)

### useQuasarNotify
**File:** `src/composables/useQuasarNotify/`

Typed wrapper for Quasar Notify plugin.

```typescript
const { showSuccess, showError, showWarning, showInfo } = useQuasarNotify();

showSuccess('Operation successful!');
showError('Something went wrong');
```

### useQuasarDialog
**File:** `src/composables/useQuasarDialog/`

Typed wrapper for Quasar Dialog plugin.

```typescript
const { confirm, alert, prompt } = useQuasarDialog();

const ok = await confirm('Delete?', 'Are you sure?');
if (ok) {
  // Delete item
}
```

### useQuasarLoading
**File:** `src/composables/useQuasarLoading/`

Typed wrapper for Quasar Loading plugin.

```typescript
const { show, hide, withLoading } = useQuasarLoading();

await withLoading(fetchData(), 'Loading...');
```

## 🧪 Testing

All composables have unit tests in their folders.

Run tests:
```bash
pnpm test:unit
```

---

[← Back to Documentation](./README.md)


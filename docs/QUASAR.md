# 🎯 Quasar Framework Integration

Complete guide to using Quasar in this project.

## ✅ What's Configured

### Installed Packages
- `quasar@2.18.5` - Framework
- `@quasar/extras@1.17.0` - Icons and fonts
- `@quasar/vite-plugin@1.10.0` - Vite integration

### Plugins Enabled
- ✅ **Notify** - Toast/Snackbar notifications
- ✅ **Dialog** - Dialogs and confirmations
- ✅ **Loading** - Global loading overlay
- ✅ **LoadingBar** - Top progress bar
- ✅ **BottomSheet** - Mobile action sheets

## 🎨 Usage

### Components
```vue
<template>
  <q-btn color="primary" label="Click Me" @click="handleClick" />
  
  <q-card>
    <q-card-section>
      <div class="text-h6">Title</div>
    </q-card-section>
  </q-card>
  
  <q-input v-model="text" filled label="Enter text" />
  
  <q-table :rows="rows" :columns="columns" />
</template>
```

### Plugins via Composables

```typescript
import { useQuasarNotify, useQuasarDialog, useQuasarLoading } from '@/composables';

// Notifications
const { showSuccess } = useQuasarNotify();
showSuccess('Saved!');

// Dialogs
const { confirm } = useQuasarDialog();
const ok = await confirm('Delete?', 'Sure?');

// Loading
const { show, hide } = useQuasarLoading();
show('Loading...');
```

## 📚 Examples

- `/quasar` - Component showcase
- `/quasar-plugins` - Plugin examples
- `/quasar-tailwind` - Quasar + Tailwind compatibility

## 🎨 Customization

Edit `src/quasar-variables.sass` to customize theme colors.

## 📖 Resources

- [Quasar Docs](https://quasar.dev)
- [Components](https://quasar.dev/vue-components)
- [Plugins](https://quasar.dev/quasar-plugins)

---

[← Back to Documentation](./README.md)


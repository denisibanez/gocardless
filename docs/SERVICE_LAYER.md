# 🔧 Service Layer Documentation

Complete guide to the API service layer.

## 🎯 Overview

The service layer handles all HTTP communication with backend APIs.

## 📦 Components

### 1. Axios Interceptor
**Location:** `src/services/axios-interceptor/`

Centralized Axios instance with:
- ✅ Authentication (Bearer token)
- ✅ Error handling (401, 403, 404, 500)
- ✅ Automatic notifications (Quasar toasts)
- ✅ Token management

### 2. BaseService
**Location:** `src/services/base/`

Abstract class providing CRUD operations:
- `getAll(params?)` - List all
- `getById(id)` - Get single item
- `create(data)` - Create new
- `update(id, data)` - Full update (PUT)
- `patch(id, data)` - Partial update (PATCH)
- `delete(id)` - Delete item
- `customGet(path, params?)` - Custom GET
- `customPost(path, data?)` - Custom POST

### 3. Example Service
**Location:** `src/services/example/pokemon.service.ts`

Real-world example using PokéAPI showing how to:
- Extend BaseService
- Add custom methods
- Use TypeScript interfaces
- Handle API responses

## 📝 Creating a Service

```typescript
// src/services/user/user.service.ts
import { BaseService } from '@/services/base';
import type { User, CreateUserDTO, UpdateUserDTO } from '@/interfaces';

class UserService extends BaseService<User, CreateUserDTO, UpdateUserDTO> {
  protected basePath = '/users';
  
  // Custom methods
  async getByEmail(email: string): Promise<User> {
    return this.customGet('/by-email', { email });
  }
}

export default new UserService();
```

## 🚀 Usage

```typescript
import { userService } from '@/services';

// Get all
const users = await userService.getAll();

// Get by ID
const user = await userService.getById('123');

// Create
const newUser = await userService.create({
  name: 'John',
  email: 'john@example.com'
});

// Update
const updated = await userService.update('123', userData);

// Delete
await userService.delete('123');
```

## 🔔 Automatic Notifications

All HTTP errors show automatic notifications:
- 401/403 → "Unauthorized: Invalid or expired token"
- 404 → "Resource not found"  
- 500 → "Internal server error"
- 400 → "Bad request"

No need to manually handle errors!

## 🧪 Testing

See `src/services/base/base.service.spec.ts` for test examples.

---

[← Back to Documentation](./README.md)


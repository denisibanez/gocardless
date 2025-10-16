/**
 * Services Index
 *
 * Export core services infrastructure
 * Import your services from here when you create them
 */

// Core
export { default as axiosInstance } from './axios-interceptor'
export { BaseService } from './base'

// Services
export { default as pokemonService } from './example/pokemon.service'

/**
 * HOW TO USE:
 *
 * 1. Create your service (extend BaseService)
 * 2. Export it here
 * 3. Import in your components:
 *
 * import { pokemonService } from '@/services';
 * import type { Pokemon } from '@/interfaces';
 *
 * Note: Types are now centralized in @/interfaces
 */

/**
 * ============================================================================
 * INTERFACES INDEX
 * ============================================================================
 *
 * Central export point for all application interfaces and types.
 * Import from here for better organization and consistency.
 *
 * @example
 * import { Pokemon, UseApiRequestOptions } from '@/interfaces';
 */

// API Interfaces
export type {
  UseApiRequestOptions,
  ApiRequestState,
  NamedAPIResource,
  PaginatedResponse,
} from './api.interface'

// Pokemon Interfaces
export type {
  Pokemon,
  SimplePokemon,
  PokemonListResponse,
  Ability,
  Cries,
  GameIndex,
  HeldItem,
  Move,
  MoveVersion,
  Sprites,
  Stat,
  Type,
  VersionDetail,
} from './pokemon.interface'

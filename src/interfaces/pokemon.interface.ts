import type { NamedAPIResource } from './api.interface'

/**
 * ============================================================================
 * POKEMON API INTERFACES
 * ============================================================================
 *
 * TypeScript interfaces for PokéAPI responses.
 * Based on: https://pokeapi.co/docs/v2
 */

/**
 * Pokemon Ability
 */
export interface Ability {
  ability: NamedAPIResource
  is_hidden: boolean
  slot: number
}

/**
 * Pokemon Cries (sounds)
 */
export interface Cries {
  latest: string
  legacy: string
}

/**
 * Game Index for different Pokemon versions
 */
export interface GameIndex {
  game_index: number
  version: NamedAPIResource
}

/**
 * Version detail for held items
 */
export interface VersionDetail {
  rarity: number
  version: NamedAPIResource
}

/**
 * Held Item
 */
export interface HeldItem {
  item: NamedAPIResource
  version_details: VersionDetail[]
}

/**
 * Move version details
 */
export interface MoveVersion {
  level_learned_at: number
  move_learn_method: NamedAPIResource
  version_group: NamedAPIResource
}

/**
 * Pokemon Move
 */
export interface Move {
  move: NamedAPIResource
  version_group_details: MoveVersion[]
}

/**
 * Pokemon Sprites (images)
 */
export interface Sprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other?: {
    'official-artwork'?: {
      front_default: string
      front_shiny: string
    }
    home?: {
      front_default: string
      front_shiny: string
    }
  }
}

/**
 * Pokemon Stat
 */
export interface Stat {
  base_stat: number
  effort: number
  stat: NamedAPIResource
}

/**
 * Pokemon Type
 */
export interface Type {
  slot: number
  type: NamedAPIResource
}

/**
 * Complete Pokemon data
 * Main interface for a Pokemon from the API
 */
export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  weight: number
  is_default: boolean
  order: number
  abilities: Ability[]
  cries: Cries
  forms: NamedAPIResource[]
  game_indices: GameIndex[]
  held_items: HeldItem[]
  location_area_encounters: string
  moves: Move[]
  species: NamedAPIResource
  sprites: Sprites
  stats: Stat[]
  types: Type[]
}

/**
 * Pokemon list response from API
 */
export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: NamedAPIResource[]
}

/**
 * Simplified Pokemon data
 * Contains only the most commonly used fields for display
 */
export interface SimplePokemon {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    front_default: string | null
    official_artwork?: string
  }
  types: Array<{ name: string; slot: number }>
  stats: Array<{ name: string; base_stat: number }>
}

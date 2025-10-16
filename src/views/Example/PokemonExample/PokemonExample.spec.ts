import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import PokemonExample from './PokemonExample.vue'

// Mock the pokemon service
vi.mock('@/services/pokemon', () => ({
  default: {
    getPokemon: vi.fn(),
    updatePokemon: vi.fn(),
    deletePokemon: vi.fn(),
    patchPokemon: vi.fn()
  }
}))

describe('PokemonExample', () => {
  it('renders page title', () => {
    const wrapper = mount(PokemonExample, {
      global: {
        plugins: [Quasar]
      }
    })
    expect(wrapper.text()).toContain('Pokémon Viewer')
  })

  it('renders search button', () => {
    const wrapper = mount(PokemonExample, {
      global: {
        plugins: [Quasar]
      }
    })
    expect(wrapper.text()).toContain('Search')
  })
})


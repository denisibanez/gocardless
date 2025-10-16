import { describe, it, expect, vi, beforeEach } from 'vitest'
import pokemonService from './pokemon.service'

// Mock the BaseService methods
vi.mock('../base/base.service', () => ({
  BaseService: class {
    protected basePath = '/pokemon'

    async customGet<T>(): Promise<T> {
      return {} as T
    }
  },
}))

describe('pokemonService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getByNameOrId', () => {
    it('should be defined', () => {
      expect(pokemonService.getByNameOrId).toBeDefined()
      expect(typeof pokemonService.getByNameOrId).toBe('function')
    })
  })

  describe('getSimplified', () => {
    it('should be defined', () => {
      expect(pokemonService.getSimplified).toBeDefined()
      expect(typeof pokemonService.getSimplified).toBe('function')
    })
  })

  describe('getList', () => {
    it('should be defined', () => {
      expect(pokemonService.getList).toBeDefined()
      expect(typeof pokemonService.getList).toBe('function')
    })
  })

  describe('search', () => {
    it('should be defined', () => {
      expect(pokemonService.search).toBeDefined()
      expect(typeof pokemonService.search).toBe('function')
    })
  })

  describe('getByType', () => {
    it('should be defined', () => {
      expect(pokemonService.getByType).toBeDefined()
      expect(typeof pokemonService.getByType).toBe('function')
    })
  })
})

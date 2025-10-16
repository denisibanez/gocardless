import { describe, it, expect, vi } from 'vitest'
import { useQuasarLoading } from './useQuasarLoading'

// Mock Quasar
vi.mock('quasar', () => ({
  useQuasar: () => ({
    loading: {
      show: vi.fn(),
      hide: vi.fn(),
      isActive: false,
    },
  }),
}))

describe('useQuasarLoading', () => {
  it('provides loading methods', () => {
    const { show, hide, withLoading, isActive } = useQuasarLoading()

    expect(show).toBeTypeOf('function')
    expect(hide).toBeTypeOf('function')
    expect(withLoading).toBeTypeOf('function')
    expect(isActive).toBeTypeOf('function')
  })

  it('withLoading handles promise', async () => {
    const { withLoading } = useQuasarLoading()
    const mockPromise = Promise.resolve('test')

    const result = await withLoading(mockPromise, 'Loading...')

    expect(result).toBe('test')
  })
})

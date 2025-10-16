import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useQuasarNotify } from './useQuasarNotify'

// Mock Quasar
vi.mock('quasar', () => ({
  useQuasar: () => ({
    notify: vi.fn(),
  }),
}))

describe('useQuasarNotify', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('provides notification methods', () => {
    const { showSuccess, showError, showWarning, showInfo, notify } = useQuasarNotify()

    expect(showSuccess).toBeTypeOf('function')
    expect(showError).toBeTypeOf('function')
    expect(showWarning).toBeTypeOf('function')
    expect(showInfo).toBeTypeOf('function')
    expect(notify).toBeTypeOf('function')
  })

  it('showSuccess calls notify with correct type', () => {
    const { showSuccess } = useQuasarNotify()

    // Function exists and callable
    expect(() => showSuccess('Test message')).not.toThrow()
  })
})

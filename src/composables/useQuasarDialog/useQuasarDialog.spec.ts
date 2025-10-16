import { describe, it, expect, vi } from 'vitest'
import { useQuasarDialog } from './useQuasarDialog'

// Mock Quasar
vi.mock('quasar', () => ({
  useQuasar: () => ({
    dialog: vi.fn().mockReturnValue({
      onOk: vi.fn().mockReturnThis(),
      onCancel: vi.fn().mockReturnThis(),
    }),
  }),
}))

describe('useQuasarDialog', () => {
  it('provides dialog methods', () => {
    const { confirm, alert, prompt, showDialog } = useQuasarDialog()

    expect(confirm).toBeTypeOf('function')
    expect(alert).toBeTypeOf('function')
    expect(prompt).toBeTypeOf('function')
    expect(showDialog).toBeTypeOf('function')
  })

  it('confirm returns promise', async () => {
    const { confirm } = useQuasarDialog()
    const result = confirm('Title', 'Message')

    expect(result).toBeInstanceOf(Promise)
  })
})

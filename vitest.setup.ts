import { vi } from 'vitest'
import { config } from '@vue/test-utils'

// Mock Quasar globally
vi.mock('quasar', async () => {
  const actual = await vi.importActual('quasar')
  return {
    ...actual,
    Notify: {
      create: vi.fn(),
    },
    Loading: {
      show: vi.fn(),
      hide: vi.fn(),
    },
    Dialog: {
      create: vi.fn(),
    },
  }
})

// Setup global test environment
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Configure Vue Test Utils to shallow render Quasar components (preserving slots)
config.global.stubs = {
  QBtn: { template: '<button><slot /></button>' },
  QCard: { template: '<div class="q-card"><slot /></div>' },
  QCardSection: { template: '<div class="q-card-section"><slot /></div>' },
  QCardActions: { template: '<div class="q-card-actions"><slot /></div>' },
  QSeparator: { template: '<hr class="q-separator" />' },
  QList: { template: '<div class="q-list"><slot /></div>' },
  QItem: { template: '<div class="q-item"><slot /></div>' },
  QItemSection: { template: '<div class="q-item-section"><slot /></div>' },
  QItemLabel: { template: '<div class="q-item-label"><slot /></div>' },
  QAvatar: { template: '<div class="q-avatar"><slot /></div>' },
  QTabs: { template: '<div class="q-tabs"><slot /></div>' },
  QTab: { template: '<div class="q-tab"><slot /></div>' },
  QTabPanels: { template: '<div class="q-tab-panels"><slot /></div>' },
  QTabPanel: { template: '<div class="q-tab-panel"><slot /></div>' },
}


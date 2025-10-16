import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import QuasarTailwindTest from './QuasarTailwindTest.vue'

describe('QuasarTailwindTest', () => {
  it('renders page title', () => {
    const wrapper = mount(QuasarTailwindTest, {
      global: {
        plugins: [Quasar],
      },
    })
    expect(wrapper.text()).toContain('Quasar + Tailwind')
  })

  it('renders compatibility test content', () => {
    const wrapper = mount(QuasarTailwindTest, {
      global: {
        plugins: [Quasar],
      },
    })
    expect(wrapper.text()).toContain('Compatibility Test')
  })
})

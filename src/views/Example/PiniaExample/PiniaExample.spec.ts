import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { Quasar } from 'quasar'
import PiniaExample from './PiniaExample.vue'

describe('PiniaExample', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders page title', () => {
    const wrapper = mount(PiniaExample, {
      global: {
        plugins: [Quasar]
      }
    })
    expect(wrapper.text()).toContain('Pinia Store Example')
  })

  it('displays initial count of 0', () => {
    const wrapper = mount(PiniaExample, {
      global: {
        plugins: [Quasar]
      }
    })
    expect(wrapper.text()).toContain('0')
  })

  it('displays correct double count', () => {
    const wrapper = mount(PiniaExample, {
      global: {
        plugins: [Quasar]
      }
    })
    expect(wrapper.text()).toContain('Double Value:')
  })
})

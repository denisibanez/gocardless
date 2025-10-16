import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import QuasarExample from './QuasarExample.vue'

describe('QuasarExample', () => {
  it('renders page title', () => {
    const wrapper = mount(QuasarExample, {
      global: {
        plugins: [Quasar]
      }
    })
    expect(wrapper.text()).toContain('Quasar')
  })

  it('renders successfully installed message', () => {
    const wrapper = mount(QuasarExample, {
      global: {
        plugins: [Quasar]
      }
    })
    expect(wrapper.text()).toContain('successfully installed')
  })

  it('renders component availability message', () => {
    const wrapper = mount(QuasarExample, {
      global: {
        plugins: [Quasar]
      }
    })
    expect(wrapper.text()).toContain('All components are available')
  })
})


import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import QuasarPluginsExample from './QuasarPluginsExample.vue'

describe('QuasarPluginsExample', () => {
  it('renders page title', () => {
    const wrapper = mount(QuasarPluginsExample, {
      global: {
        plugins: [Quasar],
      },
    })
    expect(wrapper.text()).toContain('Quasar Plugins')
  })

  it('renders notify section', () => {
    const wrapper = mount(QuasarPluginsExample, {
      global: {
        plugins: [Quasar],
      },
    })
    expect(wrapper.text()).toContain('Notify')
  })

  it('renders dialog section', () => {
    const wrapper = mount(QuasarPluginsExample, {
      global: {
        plugins: [Quasar],
      },
    })
    expect(wrapper.text()).toContain('Dialog')
  })

  it('renders loading section', () => {
    const wrapper = mount(QuasarPluginsExample, {
      global: {
        plugins: [Quasar],
      },
    })
    expect(wrapper.text()).toContain('Loading')
  })
})

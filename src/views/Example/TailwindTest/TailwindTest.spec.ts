import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TailwindTest from './TailwindTest.vue'

describe('TailwindTest', () => {
  it('renders page title', () => {
    const wrapper = mount(TailwindTest)
    expect(wrapper.text()).toContain('Tailwind')
  })

  it('renders utilities section', () => {
    const wrapper = mount(TailwindTest)
    expect(wrapper.text()).toContain('Utilities')
  })

  it('renders button examples', () => {
    const wrapper = mount(TailwindTest)
    expect(wrapper.text()).toContain('Button Examples')
  })
})

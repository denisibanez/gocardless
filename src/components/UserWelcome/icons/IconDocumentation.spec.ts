import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconDocumentation from './IconDocumentation.vue'

describe('IconDocumentation', () => {
  it('renders svg element', () => {
    const wrapper = mount(IconDocumentation)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct dimensions', () => {
    const wrapper = mount(IconDocumentation)
    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('20')
    expect(svg.attributes('height')).toBe('17')
  })
})


import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconEcosystem from './IconEcosystem.vue'

describe('IconEcosystem', () => {
  it('renders svg element', () => {
    const wrapper = mount(IconEcosystem)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct dimensions', () => {
    const wrapper = mount(IconEcosystem)
    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('18')
    expect(svg.attributes('height')).toBe('20')
  })
})

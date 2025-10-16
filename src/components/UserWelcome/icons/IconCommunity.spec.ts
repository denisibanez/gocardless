import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconCommunity from './IconCommunity.vue'

describe('IconCommunity', () => {
  it('renders svg element', () => {
    const wrapper = mount(IconCommunity)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct dimensions', () => {
    const wrapper = mount(IconCommunity)
    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('20')
    expect(svg.attributes('height')).toBe('20')
  })
})

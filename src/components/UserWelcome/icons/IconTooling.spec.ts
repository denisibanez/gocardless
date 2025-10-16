import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconTooling from './IconTooling.vue'

describe('IconTooling', () => {
  it('renders svg element', () => {
    const wrapper = mount(IconTooling)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct dimensions', () => {
    const wrapper = mount(IconTooling)
    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('24')
    expect(svg.attributes('height')).toBe('24')
  })
})


import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconSupport from './IconSupport.vue'

describe('IconSupport', () => {
  it('renders svg element', () => {
    const wrapper = mount(IconSupport)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct dimensions', () => {
    const wrapper = mount(IconSupport)
    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('20')
    expect(svg.attributes('height')).toBe('20')
  })
})


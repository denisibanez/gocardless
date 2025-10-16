import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WelcomeItem from './WelcomeItem.vue'

describe('WelcomeItem', () => {
  it('renders icon slot', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<div class="test-icon">Icon</div>',
        heading: 'Test Heading',
        default: 'Test Content',
      },
    })

    expect(wrapper.html()).toContain('test-icon')
  })

  it('renders heading slot', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        heading: 'Test Heading',
      },
    })

    expect(wrapper.text()).toContain('Test Heading')
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('has documentation links', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' },
    })
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })
})

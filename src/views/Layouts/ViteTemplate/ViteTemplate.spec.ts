import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import ViteTemplate from './ViteTemplate.vue'

describe('ViteTemplate', () => {
  it('renders header with logo', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: { template: '<div>Home</div>' } }],
    })

    const wrapper = mount(ViteTemplate, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('.logo').exists()).toBe(true)
  })

  it('renders navigation links', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: { template: '<div>Home</div>' } }],
    })

    const wrapper = mount(ViteTemplate, {
      global: {
        plugins: [router],
      },
    })

    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
  })
})

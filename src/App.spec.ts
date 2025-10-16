import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

describe('App', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: { template: '<div>Home</div>' },
      },
    ],
  })

  it('renders without crashing', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('contains RouterView component', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          RouterView: true,
        },
      },
    })
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })
})

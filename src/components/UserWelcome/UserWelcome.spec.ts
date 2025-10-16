import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { UserWelcome } from './index'

describe('UserWelcome', () => {
  it('renders welcome sections', () => {
    const wrapper = mount(UserWelcome)
    expect(wrapper.find('h3').exists()).toBe(true)
  })
})

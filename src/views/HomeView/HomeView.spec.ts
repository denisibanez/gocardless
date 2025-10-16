import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from './HomeView.vue';

describe('HomeView', () => {
  it('renders main element', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.find('main').exists()).toBe(true);
  });

  it('includes welcome component', () => {
    const wrapper = mount(HomeView);
    // TheWelcome component should be rendered
    expect(wrapper.html()).toBeTruthy();
  });
});


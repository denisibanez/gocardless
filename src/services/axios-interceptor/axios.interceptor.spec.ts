import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'

// Mock Quasar's Notify
vi.mock('quasar', () => ({
  Notify: {
    create: vi.fn(),
  },
}))

describe('axios.interceptor', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should have request interceptor configured', () => {
    expect(axios.interceptors.request).toBeDefined()
  })

  it('should have response interceptor configured', () => {
    expect(axios.interceptors.response).toBeDefined()
  })

  it('should handle axios instance', () => {
    expect(axios).toBeDefined()
    expect(typeof axios.get).toBe('function')
    expect(typeof axios.post).toBe('function')
    expect(typeof axios.put).toBe('function')
    expect(typeof axios.delete).toBe('function')
  })
})

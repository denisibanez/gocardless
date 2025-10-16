import { describe, it, expect, vi, beforeEach } from 'vitest'
import { BaseService } from './base.service'

vi.mock('../axios-interceptor')

// Concrete implementation for testing
class TestService extends BaseService<{ id: string; name: string }> {
  protected basePath = '/test'
}

describe('BaseService', () => {
  let service: TestService

  beforeEach(() => {
    service = new TestService()
    vi.clearAllMocks()
  })

  it('creates service instance', () => {
    expect(service).toBeInstanceOf(BaseService)
  })

  it('has CRUD methods', () => {
    expect(service.getAll).toBeDefined()
    expect(service.getById).toBeDefined()
    expect(service.create).toBeDefined()
    expect(service.update).toBeDefined()
    expect(service.delete).toBeDefined()
  })
})

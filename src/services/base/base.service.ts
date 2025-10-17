import axiosApiInstance from '../axios-interceptor'
import type { AxiosRequestConfig } from 'axios'

/**
 * Base service class with common CRUD operations
 * Extend this class to create specific services with type safety
 * 
 * @example
 * // Using default baseURL from axios instance
 * class UserService extends BaseService<User> {
 *   protected basePath = '/users'
 * }
 * 
 * @example
 * // Using custom baseURL
 * class ExternalService extends BaseService<Data> {
 *   protected baseURL = 'https://api.external.com'
 *   protected basePath = '/data'
 * }
 */
export abstract class BaseService<T, CreateDTO = Omit<T, 'id'>, UpdateDTO = Partial<T>> {
  protected abstract basePath: string
  protected baseURL?: string // Optional custom baseURL

  /**
   * Build the full URL for requests
   */
  private buildUrl(path: string): string {
    if (this.baseURL) {
      return `${this.baseURL}${path}`
    }
    return path
  }

  /**
   * Get all items
   */
  async getAll(params?: Record<string, unknown>): Promise<T[]> {
    const config: AxiosRequestConfig = { params }
    const response = await axiosApiInstance.get<T[]>(this.buildUrl(this.basePath), config)
    return response.data
  }

  /**
   * Get item by ID
   */
  async getById(id: string | number): Promise<T> {
    const response = await axiosApiInstance.get<T>(this.buildUrl(`${this.basePath}/${id}`))
    return response.data
  }

  /**
   * Create new item
   */
  async create(data: CreateDTO): Promise<T> {
    const response = await axiosApiInstance.post<T>(this.buildUrl(this.basePath), data)
    return response.data
  }

  /**
   * Update existing item
   */
  async update(id: string | number, data: UpdateDTO): Promise<T> {
    const response = await axiosApiInstance.put<T>(this.buildUrl(`${this.basePath}/${id}`), data)
    return response.data
  }

  /**
   * Partially update existing item
   */
  async patch(id: string | number, data: UpdateDTO): Promise<T> {
    const response = await axiosApiInstance.patch<T>(this.buildUrl(`${this.basePath}/${id}`), data)
    return response.data
  }

  /**
   * Delete item
   */
  async delete(id: string | number): Promise<void> {
    await axiosApiInstance.delete(this.buildUrl(`${this.basePath}/${id}`))
  }

  /**
   * Custom GET request
   */
  protected async customGet<R>(path: string, params?: Record<string, unknown>): Promise<R> {
    const config: AxiosRequestConfig = { params }
    const response = await axiosApiInstance.get<R>(this.buildUrl(`${this.basePath}${path}`), config)
    return response.data
  }

  /**
   * Custom POST request
   */
  protected async customPost<R>(path: string, data?: unknown): Promise<R> {
    const response = await axiosApiInstance.post<R>(this.buildUrl(`${this.basePath}${path}`), data)
    return response.data
  }
}

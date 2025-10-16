import type { Ref } from 'vue'

/**
 * ============================================================================
 * API INTERFACES
 * ============================================================================
 *
 * Generic interfaces for API requests and responses.
 * Used across the application for consistent API handling.
 */

/**
 * Options for useApiRequest composable
 */
export interface UseApiRequestOptions {
  /** Show loading state (default: true) */
  showLoading?: boolean
  /** Success message to display */
  successMessage?: string
  /** Error message to display */
  errorMessage?: string
  /** Callback on success */
  onSuccess?: (data: unknown) => void
  /** Callback on error */
  onError?: (error: Error) => void
}

/**
 * State returned by useApiRequest composable
 */
export interface ApiRequestState<T> {
  /** Response data */
  data: Ref<T | null>
  /** Error object if request failed */
  error: Ref<Error | null>
  /** Loading state */
  loading: Ref<boolean>
  /** Execute the request */
  execute: () => Promise<void>
  /** Reset the state */
  reset: () => void
}

/**
 * Generic API Resource reference
 * Common pattern in REST APIs
 */
export interface NamedAPIResource {
  /** Resource name */
  name: string
  /** Resource URL */
  url: string
}

/**
 * Generic paginated list response
 */
export interface PaginatedResponse<T> {
  /** Array of items */
  data: T[]
  /** Total count of items */
  total: number
  /** Current page */
  page: number
  /** Items per page */
  limit: number
  /** Next page URL */
  next?: string | null
  /** Previous page URL */
  previous?: string | null
}

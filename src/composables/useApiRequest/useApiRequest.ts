import { ref, type Ref } from 'vue'
import { Notify, Loading } from 'quasar'
import type { UseApiRequestOptions, ApiRequestState } from '@/interfaces'

/**
 * Composable for handling API requests with loading, error and success states
 * Automatically shows Quasar Loading overlay and notifications for success/error
 *
 * @example
 * const { data, loading, error, execute } = useApiRequest(
 *   () => userService.getAll(),
 *   { successMessage: 'Users loaded!' }
 * );
 *
 * await execute();
 */
export function useApiRequest<T>(
  apiCall: () => Promise<T>,
  options: UseApiRequestOptions = {},
): ApiRequestState<T> {
  const data = ref<T | null>(null) as Ref<T | null>
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const { showLoading = true, successMessage, errorMessage, onSuccess, onError } = options

  const execute = async () => {
    try {
      loading.value = showLoading
      error.value = null

      // Show Quasar Loading overlay
      if (showLoading) {
        Loading.show({
          message: 'Loading...',
          spinnerColor: 'primary',
          messageColor: 'white',
          backgroundColor: 'dark',
        })
      }

      const result = await apiCall()
      data.value = result

      // Show success notification if message provided
      if (successMessage) {
        Notify.create({
          type: 'positive',
          message: successMessage,
          icon: 'check_circle',
          position: 'top-right',
          timeout: 2500,
        })
      }

      onSuccess?.(result)
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Unknown error')
      error.value = errorObj

      // Show error notification
      // Only show if we have a custom error message (to avoid duplicate notifications from interceptor)
      if (errorMessage) {
        Notify.create({
          type: 'negative',
          message: errorMessage,
          icon: 'error',
          position: 'top-right',
          timeout: 3000,
        })
      }

      onError?.(errorObj)
      throw errorObj
    } finally {
      loading.value = false

      // Hide Quasar Loading overlay
      if (showLoading) {
        Loading.hide()
      }
    }
  }

  const reset = () => {
    data.value = null
    error.value = null
    loading.value = false
  }

  return {
    data,
    error,
    loading,
    execute,
    reset,
  }
}

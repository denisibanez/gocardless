import { useQuasar } from 'quasar'

/**
 * ============================================================================
 * QUASAR LOADING COMPOSABLE
 * ============================================================================
 *
 * Wrapper composable for Quasar's Loading plugin
 * Provides methods for showing/hiding global loading overlay
 */

export function useQuasarLoading() {
  const $q = useQuasar()

  /**
   * Show loading overlay
   *
   * @param message - Loading message to display
   * @param options - Additional loading options
   *
   * @example
   * const { show, hide } = useQuasarLoading();
   * show('Loading data...');
   * // ... async operation
   * hide();
   */
  const show = (message = 'Loading...', options = {}) => {
    $q.loading.show({
      message,
      spinnerColor: 'primary',
      messageColor: 'white',
      backgroundColor: 'dark',
      ...options,
    })
  }

  /**
   * Hide loading overlay
   */
  const hide = () => {
    $q.loading.hide()
  }

  /**
   * Show loading for a promise
   * Automatically shows/hides loading based on promise state
   *
   * @param promise - Promise to track
   * @param message - Loading message
   * @returns The promise result
   *
   * @example
   * const { withLoading } = useQuasarLoading();
   * const data = await withLoading(
   *   fetchData(),
   *   'Loading data...'
   * );
   */
  const withLoading = async <T>(promise: Promise<T>, message = 'Loading...'): Promise<T> => {
    try {
      show(message)
      const result = await promise
      return result
    } finally {
      hide()
    }
  }

  /**
   * Check if loading is active
   */
  const isActive = () => {
    return $q.loading.isActive
  }

  return {
    show,
    hide,
    withLoading,
    isActive,
  }
}

import { useQuasar } from 'quasar';

/**
 * ============================================================================
 * QUASAR NOTIFY COMPOSABLE
 * ============================================================================
 *
 * Wrapper composable for Quasar's Notify plugin
 * Provides typed methods for showing notifications
 */

export function useQuasarNotify() {
  const $q = useQuasar();

  /**
   * Show success notification
   *
   * @param message - Message to display
   * @param options - Additional notify options
   *
   * @example
   * const { showSuccess } = useQuasarNotify();
   * showSuccess('Data saved successfully!');
   */
  const showSuccess = (message: string, options = {}) => {
    $q.notify({
      type: 'positive',
      message,
      icon: 'check_circle',
      position: 'top-right',
      ...options,
    });
  };

  /**
   * Show error notification
   *
   * @param message - Error message to display
   * @param options - Additional notify options
   */
  const showError = (message: string, options = {}) => {
    $q.notify({
      type: 'negative',
      message,
      icon: 'error',
      position: 'top-right',
      ...options,
    });
  };

  /**
   * Show warning notification
   *
   * @param message - Warning message to display
   * @param options - Additional notify options
   */
  const showWarning = (message: string, options = {}) => {
    $q.notify({
      type: 'warning',
      message,
      icon: 'warning',
      position: 'top-right',
      ...options,
    });
  };

  /**
   * Show info notification
   *
   * @param message - Info message to display
   * @param options - Additional notify options
   */
  const showInfo = (message: string, options = {}) => {
    $q.notify({
      type: 'info',
      message,
      icon: 'info',
      position: 'top-right',
      ...options,
    });
  };

  /**
   * Show custom notification
   *
   * @param options - Full notify options
   */
  const notify = (options: Record<string, unknown>) => {
    $q.notify(options);
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    notify,
  };
}


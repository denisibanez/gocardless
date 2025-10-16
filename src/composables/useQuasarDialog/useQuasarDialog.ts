import { useQuasar } from 'quasar';

/**
 * ============================================================================
 * QUASAR DIALOG COMPOSABLE
 * ============================================================================
 *
 * Wrapper composable for Quasar's Dialog plugin
 * Provides typed methods for showing dialogs and confirmations
 */

export function useQuasarDialog() {
  const $q = useQuasar();

  /**
   * Show confirmation dialog
   *
   * @param title - Dialog title
   * @param message - Dialog message
   * @returns Promise that resolves to true if confirmed, false if cancelled
   *
   * @example
   * const { confirm } = useQuasarDialog();
   * const confirmed = await confirm('Delete Item', 'Are you sure?');
   * if (confirmed) {
   *   // Delete the item
   * }
   */
  const confirm = (
    title: string,
    message: string,
    options = {}
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      $q.dialog({
        title,
        message,
        cancel: true,
        persistent: false,
        ...options,
      })
        .onOk(() => resolve(true))
        .onCancel(() => resolve(false));
    });
  };

  /**
   * Show alert dialog
   *
   * @param title - Dialog title
   * @param message - Dialog message
   *
   * @example
   * const { alert } = useQuasarDialog();
   * await alert('Success', 'Your changes have been saved!');
   */
  const alert = (title: string, message: string, options = {}): Promise<void> => {
    return new Promise((resolve) => {
      $q.dialog({
        title,
        message,
        persistent: false,
        ...options,
      }).onOk(() => resolve());
    });
  };

  /**
   * Show prompt dialog (input)
   *
   * @param title - Dialog title
   * @param message - Prompt message
   * @param defaultValue - Default input value
   * @returns Promise that resolves to input value or null if cancelled
   *
   * @example
   * const { prompt } = useQuasarDialog();
   * const name = await prompt('Enter Name', 'What is your name?', 'John');
   * if (name) {
   *   console.log('Name:', name);
   * }
   */
  const prompt = (
    title: string,
    message: string,
    defaultValue = '',
    options = {}
  ): Promise<string | null> => {
    return new Promise((resolve) => {
      $q.dialog({
        title,
        message,
        prompt: {
          model: defaultValue,
          type: 'text',
        },
        cancel: true,
        persistent: false,
        ...options,
      })
        .onOk((value: string) => resolve(value))
        .onCancel(() => resolve(null));
    });
  };

  /**
   * Show custom dialog
   *
   * @param options - Full dialog options
   */
  const showDialog = (options: Record<string, unknown>): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      $q.dialog(options)
        .onOk((data: unknown) => resolve(data))
        .onCancel(() => reject(new Error('Dialog cancelled')));
    });
  };

  return {
    confirm,
    alert,
    prompt,
    showDialog,
  };
}


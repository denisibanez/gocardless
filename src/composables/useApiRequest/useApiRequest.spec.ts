import { describe, it, expect, vi } from 'vitest';
import { useApiRequest } from './useApiRequest';

describe('useApiRequest', () => {
  it('initializes with correct default states', () => {
    const mockApiCall = vi.fn().mockResolvedValue({ data: 'test' });

    const { data, loading, error } = useApiRequest(mockApiCall);

    expect(data.value).toBeNull();
    expect(loading.value).toBe(false);
    expect(error.value).toBeNull();
  });

  it('sets loading state during execution', async () => {
    const mockApiCall = vi.fn().mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ data: 'test' }), 100))
    );

    const { loading, execute } = useApiRequest(mockApiCall);

    const promise = execute();
    expect(loading.value).toBe(true);

    await promise;
    expect(loading.value).toBe(false);
  });

  it('sets data on successful execution', async () => {
    const testData = { id: 1, name: 'Test' };
    const mockApiCall = vi.fn().mockResolvedValue(testData);

    const { data, execute } = useApiRequest(mockApiCall);

    await execute();

    expect(data.value).toEqual(testData);
    expect(mockApiCall).toHaveBeenCalledOnce();
  });

  it('calls onSuccess callback', async () => {
    const testData = { id: 1 };
    const onSuccess = vi.fn();
    const mockApiCall = vi.fn().mockResolvedValue(testData);

    const { execute } = useApiRequest(mockApiCall, { onSuccess });

    await execute();

    expect(onSuccess).toHaveBeenCalledWith(testData);
  });

  it('sets error on failed execution', async () => {
    const testError = new Error('Test error');
    const mockApiCall = vi.fn().mockRejectedValue(testError);

    const { error, execute } = useApiRequest(mockApiCall);

    try {
      await execute();
    } catch {
      // Expected to throw
    }

    expect(error.value).toBeInstanceOf(Error);
  });

  it('calls onError callback', async () => {
    const testError = new Error('Test error');
    const onError = vi.fn();
    const mockApiCall = vi.fn().mockRejectedValue(testError);

    const { execute } = useApiRequest(mockApiCall, { onError });

    try {
      await execute();
    } catch {
      // Expected
    }

    expect(onError).toHaveBeenCalled();
  });

  it('resets state', async () => {
    const mockApiCall = vi.fn().mockResolvedValue({ data: 'test' });

    const { data, error, loading, execute, reset } = useApiRequest(mockApiCall);

    await execute();
    expect(data.value).not.toBeNull();

    reset();

    expect(data.value).toBeNull();
    expect(error.value).toBeNull();
    expect(loading.value).toBe(false);
  });
});


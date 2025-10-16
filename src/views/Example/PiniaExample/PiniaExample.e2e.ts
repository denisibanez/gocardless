import { test, expect } from '@playwright/test'

test.describe('PiniaExample', () => {
  test('should load pinia example page', async ({ page }) => {
    await page.goto('/pinia')
    await expect(page.getByText('Pinia Store Example')).toBeVisible()
  })

  test('should increment counter', async ({ page }) => {
    await page.goto('/pinia')

    // Check initial value
    await expect(page.locator('.text-h1').first()).toContainText('0')

    // Click increment
    await page.getByRole('button', { name: 'Increment' }).click()

    // Check value increased
    await expect(page.locator('.text-h1').first()).toContainText('1')
  })

  test('should decrement counter', async ({ page }) => {
    await page.goto('/pinia')

    // Click decrement
    await page.getByRole('button', { name: 'Decrement' }).click()

    // Check value decreased
    await expect(page.locator('.text-h1').first()).toContainText('-1')
  })

  test('should reset counter', async ({ page }) => {
    await page.goto('/pinia')

    // Increment a few times
    await page.getByRole('button', { name: 'Increment' }).click()
    await page.getByRole('button', { name: 'Increment' }).click()

    // Reset
    await page.getByRole('button', { name: 'Reset' }).click()

    // Should be 0
    await expect(page.locator('.text-h1').first()).toContainText('0')
  })

  test('should display double count', async ({ page }) => {
    await page.goto('/pinia')

    // Increment twice
    await page.getByRole('button', { name: 'Increment' }).click()
    await page.getByRole('button', { name: 'Increment' }).click()

    // Double should be 4
    await expect(page.getByText(/Double Value:/)).toContainText('4')
  })
})

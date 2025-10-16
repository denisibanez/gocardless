import { test, expect } from '@playwright/test'

test.describe('QuasarPluginsExample', () => {
  test('should load quasar plugins example page', async ({ page }) => {
    await page.goto('/quasar-plugins')
    await expect(page.getByText('Quasar Plugins Examples')).toBeVisible()
  })

  test('should have notify section with buttons', async ({ page }) => {
    await page.goto('/quasar-plugins')
    await expect(page.getByText('📢 Notify (Snackbar)')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Success' })).toBeVisible()
  })

  test('should have dialog section with buttons', async ({ page }) => {
    await page.goto('/quasar-plugins')
    await expect(page.getByText('💬 Dialog')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Confirm' })).toBeVisible()
  })

  test('should have loading section with buttons', async ({ page }) => {
    await page.goto('/quasar-plugins')
    await expect(page.getByText('⏳ Loading')).toBeVisible()
    await expect(page.getByRole('button', { name: /Show Loading/i }).first()).toBeVisible()
  })

  test('should have practical example section', async ({ page }) => {
    await page.goto('/quasar-plugins')
    await expect(page.getByText('🚀 Real World Example')).toBeVisible()
    await expect(page.getByRole('button', { name: /Delete Item/i })).toBeVisible()
  })
})

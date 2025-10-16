import { test, expect } from '@playwright/test'

test.describe('QuasarExample', () => {
  test('should load quasar example page', async ({ page }) => {
    await page.goto('/quasar')
    await expect(page.getByText('Quasar Framework Examples')).toBeVisible()
  })

  test('should render components tab', async ({ page }) => {
    await page.goto('/quasar')
    await expect(page.getByText('Components', { exact: true }).first()).toBeVisible()
  })

  test('should render successfully installed message', async ({ page }) => {
    await page.goto('/quasar')
    await expect(page.getByText(/successfully installed/i)).toBeVisible()
  })
})


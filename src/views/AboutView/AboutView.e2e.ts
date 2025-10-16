import { test, expect } from '@playwright/test'

test.describe('AboutView', () => {
  test('should load about page', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'This is an about page' })).toBeVisible()
  })

  test('should have correct route', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="/about"]')
    await expect(page).toHaveURL(/.*about/)
  })
})

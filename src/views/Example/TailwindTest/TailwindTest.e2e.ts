import { test, expect } from '@playwright/test'

test.describe('TailwindTest', () => {
  test('should load tailwind test page', async ({ page }) => {
    await page.goto('/tailwind-test')
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('should render tailwind styled elements', async ({ page }) => {
    await page.goto('/tailwind-test')
    await expect(page.locator('.bg-gradient-to-br')).toBeVisible()
  })
})


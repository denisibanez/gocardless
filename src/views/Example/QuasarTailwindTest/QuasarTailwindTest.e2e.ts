import { test, expect } from '@playwright/test'

test.describe('QuasarTailwindTest', () => {
  test('should load quasar tailwind test page', async ({ page }) => {
    await page.goto('/quasar-tailwind')
    await expect(page.getByRole('heading', { name: /Compatibility Test/i }).first()).toBeVisible()
  })

  test('should render quasar components', async ({ page }) => {
    await page.goto('/quasar-tailwind')
    await expect(page.getByRole('button', { name: /Quasar Button/i }).first()).toBeVisible()
  })

  test('should render tailwind styled elements', async ({ page }) => {
    await page.goto('/quasar-tailwind')
    await expect(page.getByText(/Pure Tailwind/i)).toBeVisible()
  })
})


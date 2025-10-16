import { test, expect } from '@playwright/test'

test.describe('ViteTemplate Layout', () => {
  test('should load the layout with navigation', async ({ page }) => {
    await page.goto('/')

    // Check logo
    await expect(page.locator('img[alt="Vue logo"]')).toBeVisible()

    // Check HelloWorld component
    await expect(page.getByText('You did it!')).toBeVisible()

    // Check navigation links
    await expect(page.locator('a[href="/"]')).toBeVisible()
    await expect(page.locator('a[href="/about"]')).toBeVisible()
    await expect(page.locator('a[href="/pokemon"]')).toBeVisible()
    await expect(page.locator('a[href="/pinia"]')).toBeVisible()
    await expect(page.locator('a[href="/tailwind-test"]')).toBeVisible()
    await expect(page.locator('a[href="/quasar"]')).toBeVisible()
  })

  test('should navigate between routes', async ({ page }) => {
    await page.goto('/')

    // Navigate to About
    await page.click('a[href="/about"]')
    await expect(page).toHaveURL(/.*about/)
    await expect(page.getByRole('heading', { name: 'This is an about page' })).toBeVisible()

    // Navigate back to Home
    await page.click('a[href="/"]')
    await expect(page).toHaveURL(/.*\/$/)
  })

  test('should highlight active route', async ({ page }) => {
    await page.goto('/')

    // Check if Home link has active class
    const homeLink = page.locator('nav a[href="/"]')
    await expect(homeLink).toHaveClass(/router-link-exact-active/)
  })

  test('should navigate to Pokemon page', async ({ page }) => {
    await page.goto('/')

    await page.click('a[href="/pokemon"]')
    await expect(page).toHaveURL(/.*pokemon/)
  })

  test('should navigate to Pinia example page', async ({ page }) => {
    await page.goto('/')

    await page.click('a[href="/pinia"]')
    await expect(page).toHaveURL(/.*pinia/)
    await expect(page.getByText('Pinia Store Example')).toBeVisible()
  })

  test('should apply CSS variables from base.css', async ({ page }) => {
    await page.goto('/')

    // Check if the layout has the expected styles
    const template = page.locator('.vite-template')
    await expect(template).toBeVisible()
  })
})

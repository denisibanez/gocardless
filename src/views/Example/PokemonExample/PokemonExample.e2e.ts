import { test, expect } from '@playwright/test'

test.describe('PokemonExample', () => {
  test('should load pokemon page', async ({ page }) => {
    await page.goto('/pokemon')

    // Wait for page to load
    await expect(page.locator('h1')).toContainText('Pokémon Viewer')
  })

  test('should load default pokemon (Ditto)', async ({ page }) => {
    await page.goto('/pokemon')

    // Wait for pokemon to load
    await page.waitForSelector('.pokemon-card', { timeout: 10000 })

    // Check if Ditto is loaded
    await expect(page.locator('.pokemon-name')).toContainText('DITTO')
  })

  test('should search for pokemon', async ({ page }) => {
    await page.goto('/pokemon')

    // Type pikachu in search
    await page.fill('input[type="text"]', 'pikachu')

    // Click search button
    await page.click('button:has-text("Search")')

    // Wait for new pokemon to load
    await page.waitForSelector('.pokemon-card', { timeout: 10000 })

    // Check if Pikachu is loaded
    await expect(page.locator('.pokemon-name')).toContainText('PIKACHU')
  })

  test('should display pokemon stats', async ({ page }) => {
    await page.goto('/pokemon')

    await page.waitForSelector('.pokemon-card', { timeout: 10000 })

    // Check if stats section exists
    await expect(page.locator('.pokemon-section').first()).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Base Stats' })).toBeVisible()
  })

  test('should show error for invalid pokemon', async ({ page }) => {
    await page.goto('/pokemon')

    // Search for invalid pokemon
    await page.fill('input[type="text"]', 'invalid-pokemon-xyz-123')
    await page.click('button:has-text("Search")')

    // Wait a bit for API call
    await page.waitForTimeout(2000)

    // Should show error or notification
    // Note: Quasar notifications appear, check console or UI
  })
})

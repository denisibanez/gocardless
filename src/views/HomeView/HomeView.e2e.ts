import { test, expect } from '@playwright/test';

test.describe('HomeView', () => {
  test('should load home page', async ({ page }) => {
    await page.goto('/');

    // Check if page loaded
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have navigation', async ({ page }) => {
    await page.goto('/');

    // Check navigation links
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  });
});


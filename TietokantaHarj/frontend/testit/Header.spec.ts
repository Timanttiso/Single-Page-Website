import { test, expect } from '@playwright/test';

const appAddress = 'http://localhost:5173'

test('The app should display the title in the header', async ({ page }) => {
    await page.goto(appAddress);
    await expect(page.locator('h1')).toHaveText('Welcome to Our Company website');
    await page.pause();
});
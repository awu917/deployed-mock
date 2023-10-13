import { test, expect } from '@playwright/test';

test('searching before loading produces an error message', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('search');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await expect (page.getByText('Error: Load a file before attempting to search')).toBeVisible();
  })
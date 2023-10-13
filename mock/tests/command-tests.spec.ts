import { test, expect } from '@playwright/test';

test('mode changes the shape between brief and verbose', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await expect(page.getByText('Command: mode Output:')).toBeVisible()
  })

test('mode changes the shape between verbose and brief', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect(page.getByText('Command: mode Output:')).not.toBeVisible()
  })

test('load successful', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/d20_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('view');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect (page.getByRole('cell', { name: 'Campaign' })).toBeVisible();
    await expect (page.getByRole('cell', { name: 'Brennan Lee Mulligan' }).first()).toBeVisible();
    await expect (page.getByRole('cell', { name: 'Mentopolis' })).toBeVisible();
    await expect (page.getByRole('cell', { name: '2022' })).toBeVisible();
  })
import { test, expect } from '@playwright/test';

test('mode changes the shape between brief and verbose', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await expect(page.getByText('Command: mode Output:')).toBeVisible()
  })

test('mode changes the shape between verbose and brief', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect(page.getByText('Command: mode Output:')).not.toBeVisible()
  })

test('load successful', async ({ page }) => {
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

test('load unsuccessful', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('load_csv bad_input');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await expect (page.getByText('Error: File not found')).toBeVisible();
  })


test('viewing after loading is successful', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/d20_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('view');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect (page.getByRole('cell', { name: 'Mentopolis' })).toBeVisible();
  })

test('viewing before loading produces an error message', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('view');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await expect (page.getByText('Error: Load a file before attempting to view')).toBeVisible();
  })

test('viewing after loading multiple files is successful', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/d20_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('view');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect (page.getByRole('cell', { name: 'Mentopolis' })).toBeVisible();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/dininghall_csv');
    await page.getByRole('button', { name: 'Submitted 2 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('view');
    await page.getByRole('button', { name: 'Submitted 3 times' }).click();
    await expect (page.getByRole('cell', { name: 'impossible burger' })).toBeVisible();
  })



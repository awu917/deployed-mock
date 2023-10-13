import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByPlaceholder('Enter command here!').click();
  await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/d20_csv');
  await page.getByRole('button', { name: 'Submitted 0 times' }).click();
  await page.getByPlaceholder('Enter command here!').click();
  await page.getByPlaceholder('Enter command here!').fill('view');
  await page.getByRole('button', { name: 'Submitted 1 times' }).click();
  await page.getByRole('cell', { name: 'Campaign' }).click();
  await page.getByRole('cell', { name: 'Brennan Lee Mulligan' }).nth(2).click();
  await page.getByRole('cell', { name: 'Mentopolis' }).click();
  await page.getByRole('cell', { name: '2022' }).click();
});
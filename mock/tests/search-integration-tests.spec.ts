import { test, expect } from '@playwright/test';

test('searching before loading produces an error message', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('search');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await expect (page.getByText('Error: Load a file before attempting to search')).toBeVisible();
  })

  test('testing search is successful with dataset 1', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/d20_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('search Brennan Lee Mulligan');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect (page.getByRole('cell', { name: 'Brennan Lee Mulligan' }).first()).toBeVisible();
    await expect (page.getByRole('cell', { name: 'The Unsleeping City' })).toBeVisible();
  })

  test('testing search returns nothing for empty dataset', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/empty_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('search fanny');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 2 times' }).click();
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/empty_csv');
    await page.getByRole('button', { name: 'Submitted 3 times' }).click();
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('search fanny');
    await page.getByRole('button', { name: 'Submitted 4 times' }).click();
    await expect (page.getByText('Command: search fanny Output:').nth(1)).toBeVisible();
  })

  test('testing search is successful for one row dataset', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/one_row_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').click();
    await page.getByPlaceholder('Enter command here!').fill('search 1984');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect (page.getByRole('cell', { name: 'George Orwell' })).toBeVisible();
    await expect (page.getByRole('cell', { name: '1984' })).toBeVisible();
  })

  test('integration test: loading two datasets and then searching', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('user/data/d20_csv');
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/d20_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/dininghall_csv');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('search portion');
    await page.getByRole('button', { name: 'Submitted 2 times' }).click();
    await expect (page.getByRole('cell', { name: 'yakisoba' })).toBeVisible();
    await expect (page.getByRole('cell', { name: 'portion' }).first()).toBeVisible();

  })

  test('integration test: loading, viewing, and then searching with column identifier', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/dininghall_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('view');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect (page.getByRole('cell', { name: 'unlimited' }).nth(1)).toBeVisible();
    await page.getByPlaceholder('Enter command here!').fill('search 5 portion');
    await page.getByRole('button', { name: 'Submitted 2 times' }).click();
    await expect (page.getByRole('cell', { name: 'portion' }).first()).toBeVisible();
    await expect (page.getByRole('cell', { name: 'impossible burger' })).toBeVisible();

  })

  test('integration test: loading, changing mode, and then searching', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/d20_csv');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect (page.getByText('Command: load_csv user/data/d20_csv Output:')).toBeVisible();
    await page.getByPlaceholder('Enter command here!').fill('search Brennan');
    await page.getByRole('button', { name: 'Submitted 2 times' }).click();
    await expect (page.getByRole('cell', { name: 'Brennan Lee Mulligan' }).first()).toBeVisible();
    await expect (page.getByRole('cell', { name: 'Fantasy High: Sophomore Year' })).toBeVisible();

  })

  test('integration test: changing mode, loading, searching, loading, seraching', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('mode');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await expect (page.getByText('Command: mode Output:')).toBeVisible();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/d20_csv');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('search Brennan');
    await page.getByRole('button', { name: 'Submitted 2 times' }).click();
    await expect (page.getByRole('cell', { name: 'Fantasy High: Freshman Year' })).toBeVisible();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/dininghall_csv');
    await page.getByRole('button', { name: 'Submitted 3 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('search portion');
    await page.getByRole('button', { name: 'Submitted 4 times' }).click();
    await expect (page.getByRole('cell', { name: 'peaches' })).toBeVisible();

  })

  test('integration test: loading unsuccessfully, searching unsuccessfully, loading, seraching', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByPlaceholder('Enter command here!').fill('load_csv bad_input');
    await page.getByRole('button', { name: 'Submitted 0 times' }).click();
    await expect (page.getByText('Error: File not found')).toBeVisible();
    await page.getByPlaceholder('Enter command here!').fill('search fanny');
    await page.getByRole('button', { name: 'Submitted 1 times' }).click();
    await expect (page.getByText('Error: Load a file before attempting to search')).toBeVisible();
    await page.getByPlaceholder('Enter command here!').fill('load_csv user/data/dininghall_csv');
    await page.getByRole('button', { name: 'Submitted 2 times' }).click();
    await page.getByPlaceholder('Enter command here!').fill('search portion');
    await page.getByRole('button', { name: 'Submitted 3 times' }).click();
    await expect (page.getByRole('cell', { name: 'yakisoba' })).toBeVisible();
  })

  
  
  
  
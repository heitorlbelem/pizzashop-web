import { expect, test } from '@playwright/test'

test('display monthly revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  expect(page.getByText('R$ 2.940,00')).toBeVisible()
  expect(page.getByText('-2% em relação ao mês passado')).toBeVisible()
})

test('display monthly orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('-3% em relação ao mês passado')).toBeVisible()
})

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  expect(page.getByText('1', { exact: true })).toBeVisible()
  expect(page.getByText('-15% em relação a ontem')).toBeVisible()
})

test('display monthly canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-3% em relação ao mês passado')).toBeVisible()
})

import { expect, test } from '@playwright/test'

test('navigate to new sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer login' }).click()
  expect(page.url()).toContain('/sign-in')
})

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('john.doe@example.com')
  await page.getByLabel('Seu celular').fill('61981818282')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Estabelecimento cadastrado com sucesso')
  await expect(toast).toBeVisible()
})

test('sign up with wrong data', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do estabelecimento').fill('Wrong Name')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('john.doe@example.com')
  await page.getByLabel('Seu celular').fill('61981818282')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Erro ao cadastrar restaurante')
  await expect(toast).toBeVisible()
  await page.waitForTimeout(2000)
})

import { test, expect } from '../base/base-test'
import { users } from '../data/users'

test.describe('Login - SauceDemo', () => {

  test('Login - user can login with valid account', async ({ loginPage, page }) => {

    await test.step('User logs in with valid credentials', async () => {
      await loginPage.login(
        users.standard.username,
        users.standard.password
      )
    })

    await test.step('User should be redirected to Products page', async () => {
      await expect(page).toHaveURL(/inventory/)
    })

  })

  test('Login - user cannot login with invalid password', async ({ loginPage }) => {

    await test.step('User logs in with invalid credentials', async () => {
      await loginPage.login(
        users.invalid.username,
        users.standard.password
      )
    })

    await test.step('User should see an error message', async () => {
      await expect(loginPage.errorMessage).toBeVisible()
    })

  })
})


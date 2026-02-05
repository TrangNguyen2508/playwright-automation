<<<<<<< HEAD
import { test, expect } from '../base/base-test'
import { users } from '../data/users'

test.describe('Login - SauceDemo', () => {

  test('Login successfully', async ({ loginPage, page }) => {
    await loginPage.login(
      users.standard.username,
      users.standard.password
    )

    await expect(page).toHaveURL(/inventory/)
  })

  test('Login failed', async ({ loginPage }) => {
    await loginPage.login(
      users.locked.username,
      users.standard.password
    )

    await expect(loginPage.errorMessage).toBeVisible()
  })
})
=======
import { test, expect } from '../base/base-test'
import { users } from '../data/users'

test.describe('Login - SauceDemo', () => {

  test('Login successfully', async ({ loginPage, page }) => {
    await loginPage.login(
      users.standard.username,
      users.standard.password
    )

    await expect(page).toHaveURL(/inventory/)
  })

  test('Login failed', async ({ loginPage }) => {
    await loginPage.login(
      users.locked.username,
      users.standard.password
    )

    await expect(loginPage.errorMessage).toBeVisible()
  })
})
>>>>>>> 0b1fee05cd924de33373d95d48354ead14eb2ea1

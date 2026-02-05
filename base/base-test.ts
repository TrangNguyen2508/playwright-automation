<<<<<<< HEAD
import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { InventoryPage } from '../pages/inventory.page'
import { CartPage } from '../pages/cart.page'
import { CheckoutPage } from '../pages/checkout.page'

type MyFixtures = {
  loginPage: LoginPage
  inventoryPage: InventoryPage
  cartPage: CartPage
  checkoutPage: CheckoutPage
}

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page))
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page))
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page))
  }
})

export const expect = test.expect
=======
import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { InventoryPage } from '../pages/inventory.page'
import { CartPage } from '../pages/cart.page'
import { CheckoutPage } from '../pages/checkout.page'

type MyFixtures = {
  loginPage: LoginPage
  inventoryPage: InventoryPage
  cartPage: CartPage
  checkoutPage: CheckoutPage
}

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page))
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page))
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page))
  }
})

export const expect = test.expect
>>>>>>> 0b1fee05cd924de33373d95d48354ead14eb2ea1

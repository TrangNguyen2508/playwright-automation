import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test.describe('Cart - add and remove products', () => {

  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await test.step('User logs in with valid credentials', async () => {
      await loginPage.login(
        users.standard.username,
        users.standard.password
      )
    })

    await test.step('User is on Products page', async () => {
      await inventoryPage.verifyOnInventoryPage()
    })
  })

  test('Cart - user can add one product and remove it', async ({
    inventoryPage,
    cartPage
  }) => {

    const product = products.backpack

    await test.step('User adds a product to cart', async () => {
      await inventoryPage.addProductToCart(product)
    })

    await test.step('User opens cart page', async () => {
      await inventoryPage.openCart()
    })

    await test.step('User removes the product from the cart', async () => {
      await cartPage.removeItem(product)
    })

    await test.step('User should see cart is empty', async () => {
      const isEmpty = await cartPage.isCartEmpty()
      expect(isEmpty).toBe(true)
    })

  })

  test('Cart - user can add multiple products and remove multiple products', async ({
    inventoryPage,
    cartPage
  }) => {

    const addedProducts = [
      products.backpack,
      products.light,
      products.jacket
    ]

    const removedProducts = [
      products.light,
      products.jacket
    ]

    await test.step('User adds multiple products to cart', async () => {
      for (const product of addedProducts) {
        await inventoryPage.addProductToCart(product)
      }
    })

    await test.step('User opens cart page', async () => {
      await inventoryPage.openCart()
    })

    await test.step('User removes multiple products from the cart', async () => {
      for (const product of removedProducts) {
        await cartPage.removeItem(product)
      }
    })

    await test.step('User should see remaining product in the cart', async () => {
      const remainingProduct = products.backpack
      const item = await cartPage.getItemByName(remainingProduct)
      await expect(item).toBeVisible()
    })

  })

})

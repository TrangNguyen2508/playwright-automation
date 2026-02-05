<<<<<<< HEAD
import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test('Add product then remove from cart', async ({
  loginPage,
  inventoryPage,
  cartPage
}) => {
  const productName = products.backpack

  // Login (goto đã nằm trong login())
  await loginPage.login(
    users.standard.username,
    users.standard.password
  )

  // Add product
  await inventoryPage.verifyOnInventoryPage()
  await inventoryPage.addProductToCart(productName)

  // Open cart
  await inventoryPage.openCart()

  // Verify product in cart
  const item = await cartPage.getItemByName(productName)
  await expect(item).toBeVisible()

  // Remove product
  await cartPage.removeItem(productName)

  // Verify cart empty
  const isEmpty = await cartPage.isCartEmpty()
  expect(isEmpty).toBe(true)
})
=======
import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test('Add product then remove from cart', async ({
  loginPage,
  inventoryPage,
  cartPage
}) => {
  const productName = products.backpack

  // Login (goto đã nằm trong login())
  await loginPage.login(
    users.standard.username,
    users.standard.password
  )

  // Add product
  await inventoryPage.verifyOnInventoryPage()
  await inventoryPage.addProductToCart(productName)

  // Open cart
  await inventoryPage.openCart()

  // Verify product in cart
  const item = await cartPage.getItemByName(productName)
  await expect(item).toBeVisible()

  // Remove product
  await cartPage.removeItem(productName)

  // Verify cart empty
  const isEmpty = await cartPage.isCartEmpty()
  expect(isEmpty).toBe(true)
})
>>>>>>> 0b1fee05cd924de33373d95d48354ead14eb2ea1

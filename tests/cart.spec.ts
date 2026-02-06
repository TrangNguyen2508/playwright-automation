import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test('Cart - user can add product then remove from cart', async ({
  loginPage,
  inventoryPage,
  cartPage
}) => {
  const productName = products.backpack

  await test.step('User logs in with valid credentials', async () => {
    // Login (goto đã nằm trong login())
    await loginPage.login(
      users.standard.username,
      users.standard.password
    )
  })

  await test.step('User is on Product page', async () => {
    // On product page
    await inventoryPage.verifyOnInventoryPage()
  })

  await test.step('User adds a product to cart', async () => {
    // Add product
    await inventoryPage.addProductToCart(productName)
  })

  await test.step('User clicks on cart icon', async () => {
    // Open cart
    await inventoryPage.openCart()
  })

  await test.step('User should see the selected product in the cart', async () => {
    // Verify product in cart
    const item = await cartPage.getItemByName(productName)
    await expect(item).toBeVisible()
  })

  await test.step('User removes the product in the cart', async () => {
    // Remove product
    await cartPage.removeItem(productName)
  })

  await test.step('User sees cart badge count is empty', async () => {
    // Verify cart empty
    const isEmpty = await cartPage.isCartEmpty()
    expect(isEmpty).toBe(true)
  })

})


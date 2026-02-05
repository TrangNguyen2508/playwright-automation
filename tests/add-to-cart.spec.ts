import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test('Add product to cart', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(
        users.standard.username,
        users.standard.password
    )

    // Inventory
    await inventoryPage.verifyOnInventoryPage()

    // Add product
    await inventoryPage.addProductToCart(products.backpack)

    // Verify car badge
    const count = await inventoryPage.getCartCount()
    expect(count).toBe('1')
})

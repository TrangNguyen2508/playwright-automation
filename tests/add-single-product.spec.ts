import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test('Add to cart - product is added successfully', async ({ loginPage, inventoryPage }) => {

    await test.step('User logs in with valid credentials', async () => {
        await loginPage.login(
            users.standard.username,
            users.standard.password
        )
    })

    await test.step('User is redirected to Products page', async () => {
        // Inventory
        await inventoryPage.verifyOnInventoryPage()
    })

    await test.step('User adds a product to cart', async () => {
        // Add product
        await inventoryPage.addProductToCart(products.backpack)
    })

    await test.step('User should see cart badge count is 1', async () => {
        // Verify car badge
        const count = await inventoryPage.getCartCount()
        expect(count).toBe(1)
    })

})

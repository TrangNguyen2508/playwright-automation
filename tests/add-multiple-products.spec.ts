import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'


test('Cart - user can add multiple products to cart', async ({
    loginPage,
    inventoryPage,
    cartPage
}) => {

    const selectedProducts = [
        products.backpack,
        products.light,
        products.jacket

    ]
    
    await test.step('User logs in with valid credentials', async () => {
        await loginPage.login(
            users.standard.username,
            users.standard.password
        )
    })

    await test.step('User is on Products page', async () => {
        await inventoryPage.verifyOnInventoryPage()
    })

    await test.step('User adds multiple products to cart', async () => {
        for (const product of selectedProducts) {
            await inventoryPage.addProductToCart(product)
        }
    })

    await test.step('User should see cart badge count equals number of added products', async () => {
        const count = await inventoryPage.getCartCount()
        expect(count).toBe(selectedProducts.length)
    })

    await test.step('User opens cart page', async () => {
        await inventoryPage.openCart()
    })
    
    await test.step('User should see all selected products in the cart', async () => {
        for (const product of selectedProducts) {
            const item = await cartPage.getItemByName(product)
            await expect(item).toBeVisible()
        }
    })
})
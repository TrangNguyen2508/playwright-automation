import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test.describe('Cart - add products to cart', () => {

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

    test('User can add one product to cart', async ({ inventoryPage, cartPage }) => {

        const product = products.backpack

        await test.step('User adds a product to cart', async () => {
            await inventoryPage.addProductToCart(product)
        })

        await test.step('User opens cart page', async () => {
            await inventoryPage.openCart()
        })

        await test.step('User should see the product in the cart', async () => {
            const item = await cartPage.getItemByName(product)
            await expect(item).toBeVisible()
        })

    })

    test('User can add multiple products to cart', async ({ inventoryPage, cartPage }) => {

        const productsToAdd = [
            products.backpack,
            products.light,
            products.jacket
        ]

        await test.step('User adds multiple products to cart', async () => {
            for (const product of productsToAdd) {
                await inventoryPage.addProductToCart(product)
            }
        })

        await test.step('User opens cart page', async () => {
            await inventoryPage.openCart()
        })

        await test.step('User should see all added products in the cart', async () => {
            for (const product of productsToAdd) {
                const item = await cartPage.getItemByName(product)
                await expect(item).toBeVisible()
            }
        })

    })

})

import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'
import { checkoutInfo } from '../data/checkout-info'

test('Checkout - user can complete checkout flow', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
}) => {

    await test.step('User logs in with valid credentials', async () => {
        //Login
        await loginPage.login(users.standard.username, users.standard.password)
    })

    await test.step('User is on Products page', async () => {
        //On product page
        await inventoryPage.verifyOnInventoryPage()

    })
    await test.step('User adds a product to cart', async () => {
        await inventoryPage.addProductToCart(products.backpack)
    })
    await test.step('User opes cart page', async () => {
        // Open cart
        await inventoryPage.openCart()
    })

    await test.step('User clicks Checkout button', async () => {
        //Cart - click checkout
        await cartPage.checkout()
    })

    await test.step('User fills their information', async () => {
        //Checkout info
        await checkoutPage.fillInformation(
            checkoutInfo.firstName,
            checkoutInfo.lastName,
            checkoutInfo.postalCode
        )
    })

    await test.step('User clicks Finish button', async () => {
        //Finish
        await checkoutPage.finishCheckOut()
    })

    await test.step('User should see order confirmation message', async () => {
        //Verify success
        await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!')
    })


})
<<<<<<< HEAD
import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test('Complete checkout flow', async({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
})=>{

//Login
await loginPage.goto()
await loginPage.login(users.standard.username, users.standard.password)

//Add product
await inventoryPage.verifyOnInventoryPage()
await inventoryPage.addProductToCart(products.backpack)

//Cart
await inventoryPage.openCart()
await cartPage.checkout()

//Checkout info
await checkoutPage.fillInformation('Trang', 'Tester', '10000')

//Finish
await checkoutPage.finishCheckOut()

//Verify success
await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!')
=======
import { test, expect } from '../base/base-test'
import { users } from '../data/users'
import { products } from '../data/products'

test('Complete checkout flow', async({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
})=>{

//Login
await loginPage.goto()
await loginPage.login(users.standard.username, users.standard.password)

//Add product
await inventoryPage.verifyOnInventoryPage()
await inventoryPage.addProductToCart(products.backpack)

//Cart
await inventoryPage.openCart()
await cartPage.checkout()

//Checkout info
await checkoutPage.fillInformation('Trang', 'Tester', '10000')

//Finish
await checkoutPage.finishCheckOut()

//Verify success
await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!')
>>>>>>> 0b1fee05cd924de33373d95d48354ead14eb2ea1
})
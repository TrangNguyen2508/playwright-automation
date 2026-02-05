<<<<<<< HEAD
import type { Page, Locator } from '@playwright/test'
export class CartPage {
    readonly page: Page
    readonly cartItems: Locator
    readonly checkOutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.cartItems = page.locator('.cart_item')
        this.checkOutButton = page.locator('[data-test="checkout"]')

    }
    async getItemByName(productName: string){
        await this.cartItems.first().waitFor({state:'visible'})
        return this.cartItems
      .locator('.inventory_item_name')
      .getByText(productName)
    }

    async removeItem(productName: string) {
        await this.page
            .locator('.cart_item')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Remove' })
            .click()
    }

    async isCartEmpty() {
        return (await this.cartItems.count() === 0)
    }

    async checkout(){
        await this.checkOutButton.click()
    }
=======
import type { Page, Locator } from '@playwright/test'
export class CartPage {
    readonly page: Page
    readonly cartItems: Locator
    readonly checkOutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.cartItems = page.locator('.cart_item')
        this.checkOutButton = page.locator('[data-test="checkout"]')

    }
    async getItemByName(productName: string){
        await this.cartItems.first().waitFor({state:'visible'})
        return this.cartItems
      .locator('.inventory_item_name')
      .getByText(productName)
    }

    async removeItem(productName: string) {
        await this.page
            .locator('.cart_item')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Remove' })
            .click()
    }

    async isCartEmpty() {
        return (await this.cartItems.count() === 0)
    }

    async checkout(){
        await this.checkOutButton.click()
    }
>>>>>>> 0b1fee05cd924de33373d95d48354ead14eb2ea1
}
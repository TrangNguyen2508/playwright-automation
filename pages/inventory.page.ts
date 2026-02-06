import type { Page, Locator } from '@playwright/test'
import { BasePage } from '../base/base.page'

export class InventoryPage{
    readonly page: Page
    readonly inventoryContainer: Locator
    readonly cartBadge: Locator

    constructor(page: Page) {
        this.page = page
        this.inventoryContainer = page.locator('.inventory_list')
        this.cartBadge = page.locator('.shopping_cart_badge')
    }

    async verifyOnInventoryPage() {
        await this.inventoryContainer.waitFor({ state: 'visible' })
    }

    async addProductToCart(productName: string) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Add to cart' })
            .click()
    }

    async getCartCount() {
        await this.cartBadge.waitFor({ state: 'visible' })
        return this.cartBadge.textContent()
    }

    async openCart() {
        await this.page.locator('.shopping_cart_link').click()
    }
}


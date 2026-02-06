import type{Page, Locator} from '@playwright/test'
export class CheckoutPage{
    readonly page: Page
    readonly firstNameInput: Locator
    readonly lastNameInpur: Locator
    readonly postalCodeInput: Locator
    readonly continueButton: Locator
    readonly finishButton: Locator
    readonly successMessage: Locator

    constructor (page: Page){
        this.page=page
        this.firstNameInput = page.locator('[data-test="firstName"]')
        this.lastNameInpur = page.locator('[data-test="lastName"]')
        this.postalCodeInput = page.locator('[data-test="postalCode"]')
        this.continueButton = page.locator('[data-test="continue"]')
        this.finishButton = page.locator('[data-test="finish"]')
        this.successMessage = page.locator('[data-test="complete-header"]')
    }

    async fillInformation(firstName: string, lastName: string, zipCode: string){
        await this.firstNameInput.fill(firstName)
        await this.lastNameInpur.fill(lastName)
        await this.postalCodeInput.fill(zipCode)
        await this.continueButton.click()
    }
    
    async finishCheckOut(){
        await this.finishButton.click()
    }
}
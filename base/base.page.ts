import type { Page } from '@playwright/test'

export class BasePage {
  protected page: Page
  protected baseUrl = 'https://www.saucedemo.com/'

  constructor(page: Page) {
    this.page = page
  }

  async goto(path: string = '') {
    await this.page.goto(`${this.baseUrl}${path}`)
  }
}

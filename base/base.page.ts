<<<<<<< HEAD
import type { Page } from '@playwright/test'

export class BasePage {
  protected page: Page
  

  constructor(page: Page) {
    this.page = page
  }

  async goto(path: string = '') {
    await this.page.goto(path)
  }
}
=======
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
>>>>>>> 0b1fee05cd924de33373d95d48354ead14eb2ea1

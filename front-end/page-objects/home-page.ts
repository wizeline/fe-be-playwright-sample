import { Page, Locator } from '@playwright/test'

export class HomePage{
    readonly page: Page
    readonly memberButton: Locator
    readonly testBoardLink: Locator
    
    constructor(page: Page){
        this.page = page
        this.testBoardLink = page.locator('[title="Test Board"]')
        this.memberButton = page.locator('[data-testid="header-member-menu-button"]')
    }

}
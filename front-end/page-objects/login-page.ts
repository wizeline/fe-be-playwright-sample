import { Page, Locator } from '@playwright/test' //when building new Page classes we need to import the Page and Locator Objects

export class LoginPage{
    //we need to define the type of each variable before using them
    readonly page: Page
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly logInButton: Locator
    readonly logInWithAtlassianButton: Locator

    constructor(page: Page){
        this.page = page
        //the following locators use different strategies as an example, they're not necessarily optimized
        this.emailInput = page.locator('input[id="user"]') //locator built using regular CSS selectors
        this.passwordInput = page.getByPlaceholder('Enter password') //locator using the Playwright's Testing Library format
        this.logInWithAtlassianButton = page.locator('text=Log in with Atlassian') //locator built using Playwright's text selector
        this.logInButton = page.locator('#login-submit') //you can also use # for id's and . for classes to shorten the selectors length
    }

    //in TypeScript, we define both the parameters and their types for each function
    async logInWithAtlassian(email: string, password: string){
        await this.emailInput.fill(email)
        await this.emailInput.press('Enter')
        await this.passwordInput.fill(password)
        await this.logInButton.click()
    }
}
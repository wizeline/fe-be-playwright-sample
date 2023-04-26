import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/home-page'

test.describe('@Login feature testing', () => {
    let homePage: HomePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
    })

    //before running this test make sure the 'trello-auth.json' file is up to date
    //in order to update the file run the code-gen script and log in successfully 
    test.use({storageState: './trello-auth.json' })

    //this login test focuses on the testing of the Storage State feature to skip the authentication
    test('As a user, I want to log into Trello by using Playwright\'s Storage State', async ({page}) => {
        await page.goto('https://trello.com/galazautomation/boards') //notice how it navigates to the boards without loging in
        await expect(homePage.memberButton).toBeVisible()
    })
})
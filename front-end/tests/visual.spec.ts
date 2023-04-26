import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login-page'
import { HomePage } from '../page-objects/home-page'
import { BoardPage } from '../page-objects/board-page'
import { URL, CREDENTIALS } from '../data/constants'

test.describe('Visual Automation testing', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let boardPage: BoardPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        boardPage = new BoardPage(page)

        await page.goto(URL.login)
        await loginPage.logInWithAtlassian(CREDENTIALS.email as string, CREDENTIALS.password as string)
        await expect(homePage.memberButton).toBeVisible()
    })

    test('The Home page style should look as expected', async ({ page }) => {
        //if you delete the snapshots under the visual.spec.ts-snapshots folder it will create a new snapshot every time you run the script on a new browser
        await expect(page).toHaveScreenshot('test-board.png', {
            mask: [homePage.memberButton] //I use the mask option to ignore the member button so it can run successfully on any account 
        })
    })
})
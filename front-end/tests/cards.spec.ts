import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login-page'
import { HomePage } from '../page-objects/home-page'
import { BoardPage } from '../page-objects/board-page'
import { CardsAPI } from '../../API/classes/cards-api'
import { CREDENTIALS, URL, CARD, LIST } from '../data/constants'

test.describe('@Cards @fe feature testing', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let boardPage: BoardPage
    let cardsRequests: CardsAPI 
    let cardId: string

     test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        boardPage = new BoardPage(page)

        await page.goto(URL.login)
        await loginPage.logInWithAtlassian(CREDENTIALS.email as string, CREDENTIALS.password as string)
        await expect(homePage.memberButton).toBeVisible()
     })

     test.afterEach(async ({request}) => {
        cardsRequests = new CardsAPI(request)

        await cardsRequests.deleteCard(cardId) 
     })

    test('As a user, I want to add a new card to the To Do list', async ({browserName}) => {
        await homePage.testBoardLink.click()
        await boardPage.addNewCardToList(LIST.toDo, CARD, browserName)
        //it intercepts the cardId so it can be deleted by API during the afterEach hook
        cardId = await boardPage.getCardId()
        //assertion
        await boardPage.assertCardAddedToList(LIST.toDo, CARD, browserName)
    })

    test('As a user, I want to add a new card to the Doing list', async ({browserName}) => {
        //in Playwright you can use a test.step to group up actions and make reports easier to read
        await test.step('Go to the Test Board', async () => {
            await homePage.testBoardLink.click() //this step can be added to the beforeEach but I left it here to compare the use of test.step
        })

        await test.step('Add a new card to the "Doing" list', async () => {
            await boardPage.addNewCardToList(LIST.doing, CARD, browserName)
            //it intercepts the cardId so it can be deleted by API during the afterEach hook
            cardId = await boardPage.getCardId()
        })
        
        await test.step('Validate the card was successfully added', async () => {
            //assertion
            await boardPage.assertCardAddedToList(LIST.doing, CARD, browserName)
        })
    })

})
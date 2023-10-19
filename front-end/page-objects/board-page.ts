import { Locator, Page, expect } from "@playwright/test"
import { Card } from '../data/data-interfaces'

export class BoardPage{
    readonly page: Page
    readonly newCardTextarea: Locator
    readonly addCardConfirmButton: Locator
    readonly listContainer: Locator
    readonly addToCardButton: Locator
    readonly cardTitle: Locator

    constructor(page: Page){
        this.page = page
        this.listContainer = page.locator('.js-list-content')
        this.addToCardButton = page.locator('text=Add a card')
        this.newCardTextarea = page.locator('.list-card-composer-textarea')
        this.addCardConfirmButton = page.locator('text=Add card')
        this.cardTitle = page.locator('.list-card-title')
    }

    async addNewCardToList(list: string, card: Card, browserName: string){
        let listLocator: Locator = this.listContainer.filter({ hasText: list }) //you can use the hasText option to filter locators by text

        await listLocator.locator(this.addToCardButton).click()
        //I use the browserName to generate a unique name per browser so we can execute different browsers in parallel
        await listLocator.locator(this.newCardTextarea).fill(`${card.title}: ${list} - Browser: ${browserName}`) 
        await listLocator.locator(this.addCardConfirmButton).click()
    }

    async assertCardAddedToList(list: string, card: Card, browserName: string){
        let listLocator: Locator = this.listContainer.filter({ hasText: list })
        await expect(listLocator.locator(this.cardTitle, { hasText: `${card.title}: ${list} - Browser: ${browserName}` })).toBeVisible()
    }

    async getCardId(){
        let response = await this.page.waitForResponse(response => response.url().includes('/cards') && response.status() === 200)
        let responseJson = await response.json()
        let cardId = responseJson['id']

        return cardId
    }
}
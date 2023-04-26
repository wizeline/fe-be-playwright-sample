import { Locator, Page, expect } from "@playwright/test"
import { Card } from '../data/data-interfaces'

export class BoardPage{
    readonly page: Page
    readonly newCardTextarea: Locator
    readonly addCardConfirmButton: Locator
    readonly listSelector: string
    readonly addToCardButtonSelector: string
    readonly newCardTextareaSelector: string
    readonly addCardConfirmButtonSelector: string
    readonly cardTitleSelector: string

    constructor(page: Page){
        this.page = page
        //selectors
        //I use plain selectors for this class so we can build locators dynamically inside the functions
        this.listSelector = '.js-list-content'
        this.addToCardButtonSelector = 'text=Add a card'
        this.newCardTextareaSelector = '.list-card-composer-textarea'
        this.addCardConfirmButtonSelector = 'text=Add card'
        this.cardTitleSelector = '.list-card-title'
    }

    async addNewCardToList(list: string, card: Card, browserName: string){
        let listLocator: Locator = this.page.locator(this.listSelector, { hasText: list }) //locators can filter by text using the hasText option

        await listLocator.locator(this.addToCardButtonSelector).click()
        //I use the browserName to generate a unique name per browser so we can execute different browsers in parallel
        await listLocator.locator(this.newCardTextareaSelector).fill(`${card.title}: ${list} - Browser: ${browserName}`) 
        await listLocator.locator(this.addCardConfirmButtonSelector).click()
    }

    async assertCardAddedToList(list: string, card: Card, browserName: string){
        let listLocator: Locator = this.page.locator(this.listSelector, { hasText: list })
        await expect(listLocator.locator(this.cardTitleSelector, { hasText: `${card.title}: ${list} - Browser: ${browserName}` })).toBeVisible()
    }

    async getCardId(){
        let response = await this.page.waitForResponse(response => response.url().includes('/cards') && response.status() === 200)
        let responseJson = await response.json()
        let cardId = responseJson['id']

        return cardId
    }
}
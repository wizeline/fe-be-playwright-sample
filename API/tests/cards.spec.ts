import { test, expect } from '@playwright/test'
import { CardsAPI } from '../classes/cards-api'
import { BOARD } from '../../front-end/data/constants'

test.describe('@Cards @api testing', () => {
    let cardsRequest: CardsAPI

    test.beforeEach(async ({ request }) => {
        cardsRequest = new CardsAPI(request)
    })

  test('As a user, I want to retrieve all cards from a board', async () => {
      let response = await cardsRequest.getCardsFromBoard(BOARD.id)

      expect(response.status(),`Response: ${await response.text()}`).toBe(200)
  })

})
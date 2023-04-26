import { APIRequestContext } from "@playwright/test"
import { AUTHORIZATION_PARAMETERS, API_BASE_URL } from "../data/constants"

export class CardsAPI{
    readonly request: APIRequestContext
    readonly authorization: string
    readonly baseUrl: string
    
    constructor(request: APIRequestContext){
        this.request = request
        this.authorization = AUTHORIZATION_PARAMETERS
        this.baseUrl = API_BASE_URL as string
    }

    async getCardsFromBoard(boardId: string){
        let response = await this.request.get(`${this.baseUrl}boards/${boardId}/cards?${this.authorization}`)
        return response
    }

    async deleteCard(cardId: string){
        let response = await this.request.delete(`${this.baseUrl}cards/${cardId}?${this.authorization}`)
        return response
    }
}
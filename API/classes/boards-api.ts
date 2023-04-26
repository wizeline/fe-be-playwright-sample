import { APIRequestContext } from '@playwright/test'
import { AUTHORIZATION_PARAMETERS, API_BASE_URL } from "../data/constants"

export class BoardsAPI{
    readonly request: APIRequestContext
    readonly authorization: string
    readonly baseUrl: string

    constructor(request: APIRequestContext){
        this.request = request
        this.authorization = AUTHORIZATION_PARAMETERS
        this.baseUrl = API_BASE_URL as string
    }

    async getBoards(){
        let response = await this.request.get(`${this.baseUrl}members/me/boards?${this.authorization}`)
        return response
    }

    async getBoard(boardId: string){
        let response = await this.request.get(`${this.baseUrl}boards/${boardId}?${this.authorization}`)
        let responseJson = await response.json()

        return [response, responseJson]
    }

    async createBoard(boardName: string){
        let response = await this.request.post(`${this.baseUrl}boards?name=${boardName}&${this.authorization}`)
        let responseJson = await response.json()

        return [response, responseJson]
    }

    async deleteBoard(boardId: string){
        let response = await this.request.delete(`${this.baseUrl}boards/${boardId}?${this.authorization}`)
        return response
    }

}
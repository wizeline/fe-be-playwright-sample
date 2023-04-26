import { test, expect } from '@playwright/test'
import { BoardsAPI } from '../classes/boards-api'
import { BOARD } from '../../front-end/data/constants'

//I use the serial method to run the tests sequentially and stop the block execution if any of them fails
test.describe.serial('@Boards @api feature testing', () => {
    let boardsRequest: BoardsAPI
    let boardId: string
    let boardName: string

    test.beforeEach(async ({ request }) => {
        boardsRequest = new BoardsAPI(request)
    })

  test('As a user, I want to retrieve my boards', async () => {
    let response = await boardsRequest.getBoards()
    //the second argument on the expect function is used to display the response text in case the test fails
    expect(response.status(),`Response: ${await response.text()}`).toBe(200)
  })

  test('As a user, I want to create a board', async () => {
    let [response, responseJson] = await boardsRequest.createBoard(BOARD.name)
    boardId = responseJson['id']
    boardName = responseJson['name']

    expect(response.status(),`Response: ${await response.text()}`).toBe(200)
  }) 

  test('As a user, I want to retrieve a single board', async () => {
    let [response, responseJson] = await boardsRequest.getBoard(boardId)
    let retrievedBoardName = responseJson['name']  

    expect(response.status(),`Response: ${await response.text()}`).toBe(200)
    expect(retrievedBoardName,`Response: ${await response.text()}`).toBe(boardName)
  })
  
  test('As a user, I want to delete a board', async () => {
      let response = await boardsRequest.deleteBoard(boardId)

      expect(response.status(),`Response: ${await response.text()}`).toBe(200)
  })

})
import dotenv from 'dotenv'
import { Url, Credentials, Lists, Card, Board } from './data-interfaces'
dotenv.config()

export const URL: Url = {
    home: `${process.env.BASE_URL}home`,
    login: `${process.env.BASE_URL}login`
}

export const CREDENTIALS: Credentials = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
}

export const LIST: Lists = {
    toDo: 'To Do',
    doing: 'Doing',
    done: 'Done'
}

export const CARD: Card = {
    id: '',
    title: 'Card added to the following list: ',
    description: 'New card added'
}

export const BOARD: Board = {
    id: '6398f2c66ffb2f04bbffedd3',
    name: 'Automation Board'
}
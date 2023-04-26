import dotenv from 'dotenv'
dotenv.config()

export const AUTHORIZATION_PARAMETERS: string = `key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`

export const API_BASE_URL: string | undefined = process.env.API_BASE_URL
import path from 'path'
import cors from 'cors'
import express from 'express'
import { routes } from './modules/routes'
import { log } from './lib/logging/logger'
import { userInfo, existing_users } from './modules/data/users'

const port = 8080
// keep track of which user is logged in
export let LOGGED_IN_USER = ''
export const USER_DICT: { [key: string]: userInfo } = {}
// TODO: create interface for needed nutrients
export const USER_NUTIENTS: { [key: string]: object } = {}
export const RECOMMENDER_DICT = {}

// load existing users
existing_users.forEach((user) => {
  USER_DICT[user.name] = user
})

const app = express()

app.use(cors())
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ extended: true, limit: '30mb' }))
app.use(express.text({ limit: '30mb' }))

routes(app)

app.listen(port, () => {
  log.info(`[server]: Server is running at http://localhost:${port}/api/v1`)
})

export default app

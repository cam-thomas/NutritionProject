import path from 'path'
import cors from 'cors'
import express from 'express'
import { routes } from './modules/routes'
import log from './lib/logging/logger'
import { userInfo, existing_users } from './modules/data/users'
import { nutrients } from './modules/data/nutrients'
import { foodType } from './modules/data/foods'
import { initData } from './initData'

const port = 8080
// keep track of which user is logged in
export var LOGGED_IN_USER = {
  name: ''
}

// Static: always the same amount of nutrients per person
export const NEEDED_NUTRIENTS: { [key: string]: nutrients } = {}
// maps users name to auth & personal info
export const USER_DICT: { [key: string]: userInfo } = {}
// maps users name to current nutrients
export const CURRENT_NUTRIENTS: { [key: string]: nutrients } = {}
// maps users name to what foods we currently recommend for them
export const RECOMMENDER_DICT: { [key: string]: foodType[] } = {}

initData()

// express application
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

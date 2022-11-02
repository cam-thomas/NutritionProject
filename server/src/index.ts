import path from 'path'
import cors from 'cors'
import { loadEnv } from './lib/config/loadEnv'
import express from 'express'
import { routes } from './modules/routes'
import connectToDb from './modules/utils/connectToDb'
import log from './lib/logging/logger'

const start = async () => {
  await loadEnv()
  await connectToDb()
}

start()

const port = process.env.PORT

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

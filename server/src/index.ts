import path from 'path'
import cors from 'cors'
import express from 'express'
import { routes } from './modules/routes'
import log from './lib/logging/logger'

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

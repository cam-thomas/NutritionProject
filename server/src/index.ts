import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { routes } from './modules/routes'

console.log('[info] Loading Environment variables..')
const envPath = path.resolve(process.cwd(), '.env')

const result = dotenv.config({ path: envPath })

if (result.error) {
  console.log('Unable to load env variables.. gracefully shutting down')
  process.exit(1)
}

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ extended: true, limit: '30mb' }))
app.use(express.text({ limit: '30mb' }))

routes(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}/api/v1`)
})

export default app

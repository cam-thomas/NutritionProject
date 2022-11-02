import path from 'path'
import dotenv from 'dotenv'
import log from '../logging/logger'

export const loadEnv = async () => {
  log.info('Loading Environment variables..')
  const envPath = path.resolve(process.cwd(), '.env')

  const result = dotenv.config({ path: envPath })
  if (result.error) {
    log.fatal('Unable to load env variables.. gracefully shutting down')
    process.exit(1)
  }
}

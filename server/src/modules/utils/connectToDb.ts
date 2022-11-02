import mongoose from 'mongoose'
import log from '../../lib/logging/logger'

const connectToDb = async () => {
  try {
    const DB_URI = process.env.DB_CONNECTION_URI || ''

    await mongoose.connect(DB_URI)
    log.info(`Connected to Db at: ${DB_URI}`)
  } catch (e) {
    log.error(`Unable to connect to MongoDB with error: `, e)
    process.exit(1)
  }
}

export default connectToDb

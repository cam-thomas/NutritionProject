import * as express from 'express'
import { createSessionHandler } from '../controllers/auth/authController'
import validateResource from '../middleware/validateResource'
import { createSessionSchema } from '../schema/authSchema'

// Authentication Router
export default express
  .Router()
  .post('/', validateResource(createSessionSchema), createSessionHandler)

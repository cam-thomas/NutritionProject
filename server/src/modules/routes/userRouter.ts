import * as express from 'express'
import validateResource from '../middleware/validateResource'
import { createUserSchema } from '../schema/userSchema'
import { createUserHandler } from '../controllers/user/createUser'
// template router
export default express
  .Router()
  // create user -> middleware ensures req body has needed info
  .post('/', validateResource(createUserSchema), createUserHandler)
  // get user
  .get('/')

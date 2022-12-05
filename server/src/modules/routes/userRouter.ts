import * as express from 'express'

import { createUserHandler } from '../controllers/createUser'
// template router
export default express
  .Router()
  // create user -> middleware ensures req body has needed info
  .post('/', createUserHandler)
  // get user
  .get('/')

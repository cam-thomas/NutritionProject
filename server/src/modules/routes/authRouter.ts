import * as express from 'express'

import { loginHandler } from '../controllers/login'
import { createUserHandler } from '../controllers/createUser'
// template router
export default express
  .Router()
  // create user -> middleware ensures req body has needed info
  .get('/login', loginHandler)
  // get user
  .post('/register', createUserHandler)

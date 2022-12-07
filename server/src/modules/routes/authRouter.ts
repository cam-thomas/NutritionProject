import * as express from 'express'

import { loginHandler } from '../controllers/login'
import { logOutHandler } from '../controllers/logout'
import { createUserHandler } from '../controllers/createUser'
// template router
export default express
  .Router()
  // create user -> middleware ensures req body has needed info
  .post('/login', loginHandler)
  .get('/logout', logOutHandler)
  // get user
  .post('/register', createUserHandler)

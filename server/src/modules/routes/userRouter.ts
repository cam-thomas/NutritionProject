import * as express from 'express'

// template router
export default express
  .Router()
  // create user -> middleware ensures req body has needed info
  .post('/')
  // get user
  .get('/')
  .put('/')

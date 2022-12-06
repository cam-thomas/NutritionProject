import * as express from 'express'
import { updateNutrients } from '../controllers/updateNutrients'
import { editUserHandler } from '../controllers/editUser'
// template router
export default express
  .Router()
  .get('/')
  .put('/editUser', editUserHandler)
  .put('/addFood', updateNutrients)

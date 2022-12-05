import * as express from 'express'
import { updateNutrients } from '../controllers/updateNutrients'

// template router
export default express
  .Router()
  .get('/')
  .post('/')
  .put('/addFood', updateNutrients)

import * as express from 'express'
import { registerUser } from '../controllers/auth/registerUser'
// Authentication Router

export default express.Router().post('/register/', registerUser)

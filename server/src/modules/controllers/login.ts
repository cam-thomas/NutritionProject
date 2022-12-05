import { Request, Response, NextFunction } from 'express'
import { USER_DICT, LOGGED_IN_USER } from '../../index'
import { log as l } from '../../lib/logging/logger'

export const loginHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email
    const password = req.body.password

    if (!isUser(email, password)) {
      return res.status(404).send('User Not Found')
    }

    return res.status(200).send('User successfully logged in')
  } catch (e) {
    return res.status(500).send(e)
  }
}

const isUser = (email: string, password: string): boolean => {
  for (let key in USER_DICT) {
    const user = USER_DICT[key]
    if (user.email === email && user.password === password) {
      return true
    }
  }
  return false
}

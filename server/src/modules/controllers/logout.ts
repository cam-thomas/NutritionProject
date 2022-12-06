import { Request, Response, NextFunction } from 'express'
import { USER_DICT, LOGGED_IN_USER } from '../../index'
import log from '../../lib/logging/logger'

export const logOutHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    log.info(`Logging out user ${LOGGED_IN_USER.name}`)
    // update logged in user
    LOGGED_IN_USER.name = ''

    return res.status(200).send('User successfully logged out')
  } catch (e) {
    return res.status(500).send(e)
  }
}

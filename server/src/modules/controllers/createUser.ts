import { Request, Response, NextFunction } from 'express'
import { USER_DICT, LOGGED_IN_USER } from '../../index'
import log from '../../lib/logging/logger'

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body
    // User already exists
    if (USER_DICT[body.name] && USER_DICT[body.name].email === body.email) {
      return res.status(409).send('Account already exists')
    }
    // add user to dict
    USER_DICT[body.name] = {
      name: body.name,
      email: body.email,
      password: body.password,
      loggedIn: true,
      gender: body.gender,
      age: body.age,
      height: body.height,
      weight: body.weight
    }
    const new_user = USER_DICT[body.name]

    // update logged in user
    LOGGED_IN_USER.name = new_user.name

    // TODO: grab needed info for user to send back to main page

    log.info(`Created User: ${new_user.name}`)
    // console.log(new_user)
    return res.status(201).send({ name: new_user.name })
  } catch (e) {
    return res.status(500).send(e)
  }
}

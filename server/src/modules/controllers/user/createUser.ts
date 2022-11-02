import { Request, Response, NextFunction } from 'express'
import { createUser } from '../../service/userService'
import { CreateUserInput } from '../../schema/userSchema'

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response,
  next: NextFunction
) => {
  const body = req.body

  try {
    const user = await createUser(body)
    return res.status(201).send('User successfully created')
  } catch (e) {
    if (e.code === 11000) {
      return res.status(409).send('Account already exists')
    }
    return res.status(500).send(e)
  }
}

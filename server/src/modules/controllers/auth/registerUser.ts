import { Request, Response, NextFunction } from 'express'

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userName = req.params.username
  const passWord = req.params.password

  // username or password not received
  if (!userName || !passWord) {
    res.status(400).send('Invalid Input')
  }

  // implement user login, with valid token / refresh token ?
}

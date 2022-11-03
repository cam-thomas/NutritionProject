import { Request, Response, NextFunction } from 'express'
import { signAccessToken, signRefreshToken } from '../../service/authService'
import { CreateSessionInput } from '../../schema/authSchema'
import { findUserByEmail } from '../../service/userService'

export const createSessionHandler = async (
  req: Request<{}, {}, CreateSessionInput>,
  res: Response,
  next: NextFunction
) => {
  const message = 'Invalid email or password'
  const { email, password } = req.body

  const user = await findUserByEmail(email)

  // check that user exists
  if (!user) {
    return res.send(message)
  }

  console.log('This is the user', user)

  // check that password matches
  const isValid = await user.validatePassword(password)

  if (!isValid) {
    return res.send(message)
  }

  // sign an access token
  const accessToken = signAccessToken(user)

  // sign a refreshToken
  const refreshToken = await signRefreshToken({
    userId: user._id
  })
  // send the tokens
  return res.send({ accessToken, refreshToken })
}

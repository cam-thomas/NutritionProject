import { DocumentType } from '@typegoose/typegoose'
import SessionModel from '../model/sessionModel'
import { User } from '../model/userModel'
import { signJwt } from '../utils/jwt'

export const createSession = async ({ userId }: { userId: string }) => {
  return SessionModel.create({ user: userId })
}

export const signAccessToken = (user: DocumentType<User>) => {
  const payload = user.toJSON()

  const accessToken = signJwt(payload, 'accessToken')

  return accessToken
}

export const signRefreshToken = async ({ userId }: { userId: string }) => {
  const session = await createSession({ userId })

  const refreshToken = signJwt(
    {
      session: session._id
    },
    'refreshToken'
  )
  return refreshToken
}

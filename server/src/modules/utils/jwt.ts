import jwt from 'jsonwebtoken'

// sign access tokens with appropriate key
export const signJwt = (
  object: Object,
  keyName: 'accessToken' | 'refreshToken',
  options?: jwt.SignOptions | undefined
) => {
  var key: any = null
  if (keyName === 'accessToken') {
    key = process.env.ACCESS_TOKEN_PRIVATE_KEY
  } else {
    key = process.env.REFRESH_PRIVATE_KEY
  }

  const signingKey = Buffer.from(key, 'base64').toString('ascii')

  return jwt.sign(object, signingKey, {
    ...(options && options),
    algorithm: 'RS256'
  })
}

// verify the token against public key
export const verifyJwt = <T>(
  token: string,
  keyName: 'accessToken' | 'refreshToken'
): T | null => {
  var key: any = null
  if (keyName === 'accessToken') {
    key = process.env.ACCESS_TOKEN_PUBLIC_KEY
  } else {
    key = process.env.REFRESH_PUBLIC_KEY
  }

  const publicKey = Buffer.from(key, 'base64').toString('ascii')

  try {
    const decoded = jwt.verify(token, publicKey) as T
    return decoded
  } catch (e) {
    return null
  }
}

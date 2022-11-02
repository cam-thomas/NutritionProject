import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
  pre,
  DocumentType
} from '@typegoose/typegoose'
import argon2 from 'argon2'
import { nanoid } from 'nanoid'
import log from '../../lib/logging/logger'

@pre<User>('save', async function () {
  // is the password being modified ?
  if (!this.isModified('password')) {
    return
  }
  // hash inputted password
  const hash = await argon2.hash(this.password)
  this.password = hash
  return
})
@modelOptions({
  schemaOptions: {
    timestamps: true
  },

  options: {
    // allows password reset code to be nullable
    allowMixed: Severity.ALLOW
  }
})
export class User {
  @prop({ lowercase: true, required: true, unique: true })
  email: string

  @prop({ required: true })
  firstName: string

  @prop({ required: true })
  lastName: string

  @prop({ required: true, unique: true })
  username: string

  @prop({ required: true })
  password: string

  @prop({ required: true, default: () => nanoid() })
  verificationCode: string

  @prop()
  passwordResetCode: string | null

  @prop({ default: false })
  verified: boolean

  // candidatePassword == password user supplies on login
  async validatePassword(this: DocumentType<User>, candidatePassword: string) {
    try {
      return await argon2.verify(this.password, candidatePassword)
    } catch (e) {
      log.error('Could not validate password', e)
      return false
    }
  }
}

const userModel = getModelForClass(User)

export default userModel

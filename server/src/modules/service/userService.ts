import userModel, { User } from '../model/userModel'

export const createUser = (input: Partial<User>) => {
  return userModel.create(input)
}

export function findUserById(id: string) {
  return userModel.findById(id)
}

export function findUserByEmail(email: string) {
  return userModel.findOne({ email })
}

export function findUserByUsername(username: string) {
  return userModel.findOne({ username })
}

import userModel, { User } from '../model/userModel'

export const createUser = (input: Partial<User>) => {
  return userModel.create(input)
}

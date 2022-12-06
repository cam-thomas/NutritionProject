export interface userInfo {
  name: string
  email: string
  password: string
  loggedIn: boolean
  gender: string
  age: number
  height: number
  weight: number
}

export const existing_users = [
  {
    name: 'John',
    email: 'john123@gmail.com',
    password: 'password',
    loggedIn: false,
    gender: 'male',
    age: 25,
    height: 72,
    weight: 190
  },
  {
    name: 'Kai',
    email: 'kai123@gmail.com',
    password: 'password',
    loggedIn: false,
    gender: 'male',
    age: 30,
    height: 58,
    weight: 175
  }
]

export const EditedEricaNutrients = {
  calories: 2150,
  carbs: 242,
  protein: 60,
  fat: 48
}
// Erica's initial things
// {
//   name: 'Erica',
//   email: 'erica123@gmail.com',
//   password: 'password',
//   loggedIn: false,
//   gender: 'female',
//   age: 27,
//   height: 58,
//   weight: 175
// }

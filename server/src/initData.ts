import {
  NEEDED_NUTRIENTS,
  USER_DICT,
  RECOMMENDER_DICT,
  CURRENT_NUTRIENTS
} from './index'
import { userInfo, existing_users } from './modules/data/users'

export const initData = () => {
  // load existing users
  existing_users.forEach((user) => {
    USER_DICT[user.name] = user
  })

  // load Kai and Erica's needed nutrients
  NEEDED_NUTRIENTS['Erica'] = {
    calories: 2197,
    carbs: 247,
    protein: 64,
    fat: 49
  }

  // Kai's initial info
  NEEDED_NUTRIENTS['Kai'] = {
    calories: 2873,
    carbs: 323,
    protein: 64,
    fat: 64
  }

  CURRENT_NUTRIENTS['Kai'] = {
    calories: 1573,
    carbs: 150,
    protein: 20,
    fat: 21
  }
  RECOMMENDER_DICT['Kai'] = [
    {
      foodName: 'Banana',
      calories: 105,
      carbs: 27,
      protein: 1,
      fat: 1
    },
    {
      foodName: 'Fried Eggs',
      calories: 180,
      carbs: 1,
      protein: 13,
      fat: 13
    },
    {
      foodName: 'Turkey Sandwich',
      calories: 324,
      carbs: 29,
      protein: 21,
      fat: 13
    },
    {
      foodName: 'Bacon',
      calories: 161,
      carbs: 1,
      protein: 12,
      fat: 12
    }
  ]
}

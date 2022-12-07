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
    Calories: 2197,
    Carbohydrates: 247,
    Protein: 64,
    Fat: 49,
    Fiber: 25
  }

  // Kai's initial info
  NEEDED_NUTRIENTS['Kai'] = {
    Calories: 2873,
    Carbohydrates: 323,
    Protein: 64,
    Fat: 64,
    Fiber: 30
  }

  CURRENT_NUTRIENTS['Kai'] = {
    Calories: 1573,
    Carbohydrates: 150,
    Protein: 20,
    Fat: 21,
    Fiber: 17
  }
  RECOMMENDER_DICT['Kai'] = [
    {
      foodName: 'Banana',
      Calories: 105,
      Carbohydrates: 27,
      Protein: 1,
      Fat: 1,
      Fiber: 3
    },
    {
      foodName: 'Fried Eggs',
      Calories: 180,
      Carbohydrates: 1,
      Protein: 13,
      Fat: 13,
      Fiber: 0
    },
    {
      foodName: 'Turkey Sandwich',
      Calories: 324,
      Carbohydrates: 29,
      Protein: 21,
      Fat: 13,
      Fiber: 2
    },
    {
      foodName: 'Bacon',
      Calories: 161,
      Carbohydrates: 1,
      Protein: 12,
      Fat: 12,
      Fiber: 0
    }
  ]
}

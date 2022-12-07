import {
  NEEDED_NUTRIENTS,
  USER_DICT,
  RECOMMENDER_DICT,
  CURRENT_NUTRIENTS,
  FOODS_EATEN
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
  FOODS_EATEN['Kai'] = [
    {
      foodName: 'Steak',
      Calories: 610,
      Carbohydrates: 0,
      Protein: 58,
      Fat: 41,
      Fiber: 0
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
      foodName: 'Oatmeal',
      Calories: 166,
      Carbohydrates: 28,
      Protein: 6,
      Fat: 4,
      Fiber: 4
    }
  ]

  CURRENT_NUTRIENTS['Kai'] = {
    Calories: 1917,
    Carbohydrates: 29,
    Protein: 77,
    Fat: 58,
    Fiber: 4
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

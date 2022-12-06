import { LOGGED_IN_USER, RECOMMENDER_DICT } from '../../index'
import { foodsList, foodType } from '../data/foods'

// randomly recommends food items to logged in user
// TODO: Better implementation needed to ensure we can get to
//       a case where we meet daily requirements..
export const recommend = () => {
  const user = LOGGED_IN_USER.name

  const recFoods = [
    foodsList[Math.floor(Math.random() * foodsList.length)],
    foodsList[Math.floor(Math.random() * foodsList.length)],
    foodsList[Math.floor(Math.random() * foodsList.length)],
    foodsList[Math.floor(Math.random() * foodsList.length)]
  ]

  // Update what we currently recommend for the logged in user
  RECOMMENDER_DICT[user] = recFoods
  return recFoods
}

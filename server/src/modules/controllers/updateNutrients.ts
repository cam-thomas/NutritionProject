import { Request, Response, NextFunction } from 'express'

import {
  LOGGED_IN_USER,
  CURRENT_NUTRIENTS,
  RECOMMENDER_DICT
} from '../../index'
import { foodsList, foodType } from '../data/foods'

export const updateNutrients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // payload = the food that was added
    const body = req.body
    const newFood = body.addedFood

    // getUpdated nutrients
    const nutrients = _updateNutrients(newFood)

    // get new recommended foods
    const recFoods = recommend()
    const data = {
      nutrients: nutrients,
      recommendedFoods: recFoods
    }
    console.log(`Updating nutrients.. returning data: ${data}`)
    res.status(200).send(data)
  } catch (e) {
    return res.status(500).send(e)
  }
}

// radnomly recommends food items to logged in user
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

// updates nutrients for logged in user based on food that was added
// returns new nutrients needed by logged in user
export const _updateNutrients = (addedFood: string) => {
  const user = LOGGED_IN_USER.name
  console.log(`Logged in user is.. ${user}`)
  // grab food info for food that was added
  let addedNutrients: foodType = {
    foodName: '',
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0
  }
  foodsList.forEach((food) => {
    if (food.foodName === addedFood) {
      addedNutrients = food
    }
  })
  if (addedNutrients.foodName === '') {
    console.log('Nutrient not in nutrient list... shuttind down')
    process.exit(1)
  }
  const tmpUser = CURRENT_NUTRIENTS[user]
  console.log(tmpUser)
  // Calories
  if (tmpUser.calories < addedNutrients.calories) {
    CURRENT_NUTRIENTS[user].calories = 0
  } else {
    CURRENT_NUTRIENTS[user].calories =
      tmpUser.calories - addedNutrients.calories
  }

  // Carbs
  if (tmpUser.carbs < addedNutrients.carbs) {
    CURRENT_NUTRIENTS[user].carbs = 0
  } else {
    CURRENT_NUTRIENTS[user].carbs = tmpUser.carbs - addedNutrients.carbs
  }

  // Protein
  if (tmpUser.protein < addedNutrients.protein) {
    CURRENT_NUTRIENTS[user].protein = 0
  } else {
    CURRENT_NUTRIENTS[user].protein = tmpUser.protein - addedNutrients.protein
  }

  // Fat
  if (tmpUser.fat < addedNutrients.fat) {
    CURRENT_NUTRIENTS[user].fat = 0
  } else {
    CURRENT_NUTRIENTS[user].fat = tmpUser.fat - addedNutrients.fat
  }

  return CURRENT_NUTRIENTS[user]
}

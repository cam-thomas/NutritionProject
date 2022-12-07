import { Request, Response, NextFunction } from 'express'
import { recommend } from './helpers'
import { LOGGED_IN_USER, CURRENT_NUTRIENTS, FOODS_EATEN } from '../../index'
import { foodsList, foodType } from '../data/foods'
import log from '../../lib/logging/logger'

export const updateNutrients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get food added from payload
    const newFood = req.body.addedFood

    // getUpdated nutrients
    const nutrients = _updateNutrients(newFood)

    // get new recommended foods
    const recFoods = recommend()
    const data = {
      nutrients: nutrients,
      recommendedFoods: recFoods,
      foodsEaten: FOODS_EATEN[LOGGED_IN_USER.name]
    }

    log.info(`Updating nutrients for user ${LOGGED_IN_USER.name}`)

    res.status(200).send(data)
  } catch (e) {
    return res.status(500).send(e)
  }
}

// updates nutrients for logged in user based on food that was added
// returns new nutrients needed by logged in user
export const _updateNutrients = (addedFood: string) => {
  const user = LOGGED_IN_USER.name

  // grab food info for food that was added
  let addedNutrients: foodType = {
    foodName: '',
    Calories: 0,
    Carbohydrates: 0,
    Protein: 0,
    Fat: 0,
    Fiber: 0
  }
  foodsList.forEach((food) => {
    if (food.foodName === addedFood) {
      addedNutrients = food
    }
  })
  // Sanity check to make sure we aren't adding an invalid food
  if (addedNutrients.foodName === '') {
    console.log('Nutrient not in nutrient list... shutting down')
    process.exit(1)
  }

  // Calories
  CURRENT_NUTRIENTS[user].Calories += addedNutrients.Calories
  // Carbs
  CURRENT_NUTRIENTS[user].Carbohydrates += addedNutrients.Carbohydrates
  // Protein
  CURRENT_NUTRIENTS[user].Protein += addedNutrients.Protein
  // Fat
  CURRENT_NUTRIENTS[user].Fat += addedNutrients.Fat
  // Fiber
  CURRENT_NUTRIENTS[user].Fiber += addedNutrients.Fiber

  // add food to FOODS_EATEN list for that user
  FOODS_EATEN[user].push(addedNutrients)
  return CURRENT_NUTRIENTS[user]
}

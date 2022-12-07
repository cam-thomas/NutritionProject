import { Request, Response, NextFunction } from 'express'
import {
  USER_DICT,
  LOGGED_IN_USER,
  CURRENT_NUTRIENTS,
  NEEDED_NUTRIENTS
} from '../../index'
import log from '../../lib/logging/logger'
import { recommend } from './helpers'

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body
    // User already exists
    if (USER_DICT[body.name] && USER_DICT[body.name].email === body.email) {
      return res.status(409).send('Account already exists')
    }
    // set logged in user
    LOGGED_IN_USER.name = body.name

    // add user to dict
    USER_DICT[body.name] = {
      name: body.name,
      email: body.email,
      password: body.password,
      loggedIn: true,
      gender: body.gender,
      age: body.age,
      height: body.height,
      weight: body.weight
    }
    const new_user = USER_DICT[body.name]

    // update logged in user
    LOGGED_IN_USER.name = new_user.name

    // init current nutrients to 0
    CURRENT_NUTRIENTS[new_user.name] = {
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      fiber: 0
    }
    // get recommended foods
    const recFoods = recommend()
    const resData = {
      dailyNutrients: NEEDED_NUTRIENTS[new_user.name],
      currentNutrients: CURRENT_NUTRIENTS[new_user.name],
      recommendedFoods: recFoods
    }

    log.info(`Created User: ${new_user.name}`)

    return res.status(201).send(resData)
  } catch (e) {
    return res.status(500).send(e)
  }
}

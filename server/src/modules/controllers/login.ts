import { Request, Response, NextFunction } from 'express'
import {
  USER_DICT,
  LOGGED_IN_USER,
  RECOMMENDER_DICT,
  CURRENT_NUTRIENTS,
  NEEDED_NUTRIENTS
} from '../../index'
import { userInfo } from '../data/users'
import log from '../../lib/logging/logger'

export const loginHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email
    const password = req.body.password

    const user = getUser(email, password)

    if (!user) {
      return res.status(404).send('User Not Found')
    }

    // set logged in user
    LOGGED_IN_USER.name = user.name

    // currently recommended foods
    const recFoods = RECOMMENDER_DICT[user.name]
    // current user nutrients
    const currNutrients = CURRENT_NUTRIENTS[user.name]
    // recommended nutrients for that person
    const recNutrients = NEEDED_NUTRIENTS[user.name]

    const resData = {
      dailyNutrients: recNutrients,
      currentNutrients: currNutrients,
      recommendedFoods: recFoods
    }
    log.info(`Successfully logged in user ${user.name}`)
    return res.status(200).send(resData)
  } catch (e) {
    return res.status(500).send(e)
  }
}

const getUser = (email: string, password: string): userInfo | false => {
  for (let key in USER_DICT) {
    const user = USER_DICT[key]
    if (user.email === email && user.password === password) {
      return user
    }
  }
  return false
}

import { Request, Response, NextFunction } from 'express'
import {
  USER_DICT,
  LOGGED_IN_USER,
  CURRENT_NUTRIENTS,
  NEEDED_NUTRIENTS
} from '../../index'
import log from '../../lib/logging/logger'
import { EditedEricaNutrients } from '../data/users'

// note: this endpoint only works for Erica editing her weight lmao
export const editUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // update Ericas required daily nutrients
    NEEDED_NUTRIENTS['Erica'] = EditedEricaNutrients

    // TODO: Need to update & send back recommended nutrients
    const resData = {
      dailyNutrients: NEEDED_NUTRIENTS['Erica']
    }

    log.info(`Edited User: ${LOGGED_IN_USER.name}`)

    return res.status(201).send(resData)
  } catch (e) {
    return res.status(500).send(e)
  }
}

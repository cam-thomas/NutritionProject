import { Application, Router, Request, Response, NextFunction } from 'express'
import { userRouter } from './tempRouter'

// TODO: Figure out API design and add any additonal routes
export const routes = (app: Application): void => {
  app.use('/api/v1/user', userRouter)
  app.use('/api/v1/', Router().get('/', pulse))
}

// sysytem health endpoint
export const pulse = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.status(200).send('Server is Healthy')
  } catch (err) {
    next(err)
  }
}

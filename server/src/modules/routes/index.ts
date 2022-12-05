import { Application, Router, Request, Response, NextFunction } from 'express'
import userRouter from './userRouter'
// import authRouter from './authRouter'

// TODO: Figure out API design and add any additonal routes
export const routes = (app: Application): void => {
  // app.use('/api/v1/auth/login', authRouter)
  app.use('/api/v1/users', userRouter)
  app.use('/api/v1/HealthCheck', Router().get('/', pulse))
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

import * as express from 'express'

// template router
export const userRouter = express
  .Router()
  .get('/:userId', async (req, res) => {
    res.status(200).send({
      name: 'Pedro',
      age: 22,
      progress: 0,
      TODO: 'figure out everything'
    })
  })
  .post('/:userId', async () => {
    return {
      status: 'TODO'
    }
  })

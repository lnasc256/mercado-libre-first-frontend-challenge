import express from 'express'
import { applyRoutes } from '../../utils/common'
import * as types from '../../types'

const router = express.Router()

const routes: types.Routes = [
  {
    path: '/',
    controller: async (request: express.Request, response: express.Response) => {
      response.send('Hello world!')
    }
  }
]

applyRoutes(router, ...routes)

export default router

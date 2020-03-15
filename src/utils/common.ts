import express from 'express'
import * as types from '../types'

export const applyMiddlewares = (router: express.Router, ...middlewares: Array<types.Middleware>) => {
  const applyMiddleware = (middleware: types.Middleware) => {
    middleware(router)
  }

  middlewares.forEach(applyMiddleware)
}

export const applyRoutes = (router: express.Router, ...routes: types.Routes) => {
  const applyRoute = (route: types.Route) => {
    const { path, method = 'get', controller } = route

    const higherOrderController = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      try {
        await controller(request, response)
      } catch (error) {
        next(error)
      }
    }

    router[method](path, higherOrderController)
  }

  routes.forEach(applyRoute)
}

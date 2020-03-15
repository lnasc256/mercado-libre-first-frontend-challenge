import express from 'express'
import * as errorHandlers from '../utils/error-handlers'

export const handleNotFoundError = (router: express.Router) => {
  router.use(errorHandlers.notFound)
}

export const handleClientError = (router: express.Router) => {
  router.use(errorHandlers.client)
}

export const handleServerError = (router: express.Router) => {
  router.use(errorHandlers.server)
}

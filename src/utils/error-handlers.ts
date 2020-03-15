import express from 'express'
import { HTTPClientError, HTTP404Error } from '../utils/http-errors'

export const notFound = () => {
  throw new HTTP404Error('Method not found')
}

export const client = (error: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
  if (error instanceof HTTPClientError) {
    response.status(error.statusCode)
    response.send(error.message)
  } else {
    next(error)
  }
}

export const server = (error: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
  console.error(500, error)
  const message: string = process.env.NODE_ENV === 'production' ? 'Internal Server Error' : (error.stack ?? 'blank error')
  response.status(500)
  response.send(message)
}

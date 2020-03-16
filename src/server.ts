import express from 'express'
import { applyMiddlewares } from './utils/common'
import { allowCors, parseRequestBody } from './middlewares/common'
import { handleNotFoundError, handleClientError, handleServerError } from './middlewares/error'
import routes from './routes'

const PORT = 3000

const server = express()

applyMiddlewares(server, allowCors, parseRequestBody)

server.use('/api', routes)

applyMiddlewares(server, handleNotFoundError, handleClientError, handleServerError)

const onStart = () => {
  console.log(`Server is running http://localhost:${PORT}...`)
}

server.listen(PORT, onStart)

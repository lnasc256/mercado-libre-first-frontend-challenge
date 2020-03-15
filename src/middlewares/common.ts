import express from 'express'
import cors from 'cors'
import parser from 'body-parser'

export const allowCors = (router: express.Router) => {
  const corsHandler = cors({ credentials: true, origin: true })
  router.use(corsHandler)
}

export const parseRequestBody = (router: express.Router) => {
  const urlEncodedParserHandler = parser.urlencoded({ extended: true })
  const jsonParserHandler = parser.json()
  router.use(urlEncodedParserHandler, jsonParserHandler)
}

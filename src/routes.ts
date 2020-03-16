import express from 'express'
import itemRoutes from './services/item/routes'

const router = express.Router()

router.use('/items', itemRoutes)

export default router

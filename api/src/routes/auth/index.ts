import express from 'express'
import controllers from '../../controllers/auth'

const router = express.Router()

router.post('/signup', controllers.signup)

router.post('/login', controllers.login)

export default router
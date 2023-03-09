import express from 'express'
import authRoutes from './routes/auth'

const app = express()

/* Middlewares */

/* Routes */
app.use('/api/v1/auth', authRoutes)

export default app
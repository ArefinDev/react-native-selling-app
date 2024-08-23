import express, { NextFunction, Request, Response } from 'express'
import createHttpError, { HttpError } from 'http-errors'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import { authRouter } from './routes/auth.route'

export const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/v1/auth', authRouter)

//not found route
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ message: 'No route found' })
})

//custom error logger
app.use((err: HttpError, req: Request, res: Response, Next: NextFunction) => {
  console.error(
    `Invalid field: ${err.fieldName} - Invalid value: ${err.value} - Error Message: ${err.message} - Error Name: ${err.name}`
  )
})

//global error handler
app.use(globalErrorHandler)

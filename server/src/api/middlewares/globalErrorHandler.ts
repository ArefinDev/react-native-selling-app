import { NextFunction, Request, Response } from 'express'
import { HttpError } from 'http-errors'

export const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  Next: NextFunction
) => {
  const statusCode = err.statusCode || 500
  res
    .status(statusCode)
    .json({ message: err.message || 'Internal server error' })
}

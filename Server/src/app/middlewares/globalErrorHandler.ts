/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { Prisma } from '../../../generated/prisma';
import status from 'http-status';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = status.INTERNAL_SERVER_ERROR;
  const success = false;
  let message = err.message || 'Something went wrong!';
  let error = err;

  if (err instanceof Prisma.PrismaClientValidationError) {
    message = 'Validation Error';
    error = err.message;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      message = 'Duplicate Key error';
      error = err.meta;
    }
  }

  res.status(statusCode).json({
    success,
    message,
    error,
  });
};

export default globalErrorHandler;

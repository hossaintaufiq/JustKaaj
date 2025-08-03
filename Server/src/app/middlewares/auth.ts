/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error('You are not authorized!');
      }
      const verifiedUser = jwt.verify(
        token,
        process.env.JWT_REFRESH_SECRET as Secret
      ) as JwtPayload;

      req.user = verifiedUser;

      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new Error('Forbidden!');
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;

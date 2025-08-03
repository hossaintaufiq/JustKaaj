import { RequestHandler } from 'express';
import { AuthService } from './auth.service';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const userLogin: RequestHandler = catchAsync(async (req, res) => {
  const result = await AuthService.userLogin(req.body);
  const { refreshToken } = result;
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
  });
  sendResponse(res, {
    data: {
      accessToken: result.accessToken,
    },
    message: 'Successfully logged in',
    statusCode: status.OK,
    success: true,
  });
});
const refreshToken: RequestHandler = catchAsync(async (req, res) => {
  const cookie = req.cookies.refreshToken;
  const result = await AuthService.refreshToken(cookie);
  sendResponse(res, {
    data: result,
    message: 'Successfully logged in',
    statusCode: status.OK,
    success: true,
  });
});

export const AuthController = {
  userLogin,
  refreshToken,
};

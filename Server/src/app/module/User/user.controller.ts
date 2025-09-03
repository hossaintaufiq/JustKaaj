import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import { UserService } from './user.service';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.createUserIntoDb(req);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'User created Successfully',
    data: result,
  });
});

const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.createAdminIntoDb(req);
  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: 'Admin Created Successfully',
    data: result,
  });
});
const createServicePorvider: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.createServiceProvider(req);
  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: 'Service Provider Created Successfully',
    data: result,
  });
});

const getMe: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.getMe(req);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'User fetched successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  createAdmin,
  createServicePorvider,
  getMe,
};

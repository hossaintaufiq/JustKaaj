import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserRole } from '@prisma/client';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserSchemaValidation),
  UserController.createUser
);
router.post(
  '/create-admin',
  auth(UserRole.SUPER_ADMIN),
  validateRequest(UserValidation.createAdminSchemaValidation),
  UserController.createAdmin
);
router.post(
  '/create-provider',
  validateRequest(UserValidation.createServiceProviderSchema),
  UserController.createServicePorvider
);
router.get(
  '/getMe',
  auth(UserRole.SERVICE_PROVIDER, UserRole.USER, UserRole.ADMIN),
  UserController.getMe
);
router.patch(
  '/update-profileImg',
  auth(UserRole.SERVICE_PROVIDER, UserRole.USER, UserRole.ADMIN),
  validateRequest(UserValidation.updateProfileImg),
  UserController.updateProfileImg
);

export const UserRoute = router;

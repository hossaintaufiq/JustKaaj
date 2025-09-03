import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

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

export const UserRoute = router;

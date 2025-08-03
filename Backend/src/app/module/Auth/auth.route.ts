import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.authValidationSchema),
  AuthController.userLogin
);
router.post('/refresh-token', AuthController.refreshToken);

export const AuthRoute = router;

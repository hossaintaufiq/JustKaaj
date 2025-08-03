import express from 'express';
import { PCategoryController } from './parent_category.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';
import validateRequest from '../../middlewares/validateRequest';
import { ParnetCategoryValidation } from './parent_category.validation';

const router = express.Router();

router.post(
  '/create',
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(
    ParnetCategoryValidation.createParentCategoryValidationSchema
  ),
  PCategoryController.createParentCategory
);

export const PCategoryRoute = router;

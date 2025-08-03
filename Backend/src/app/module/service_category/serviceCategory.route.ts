import express from 'express';
import { ServiceCategoryController } from './serviceCategoty.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceCategoryValidation } from './serviceCategory.validation';

const router = express.Router();

router.post(
  '/create',
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(
    ServiceCategoryValidation.createServiceCategorySchemaValidation
  ),
  ServiceCategoryController.createServiceCategory
);

export const ServiceCategoryRoute = router;

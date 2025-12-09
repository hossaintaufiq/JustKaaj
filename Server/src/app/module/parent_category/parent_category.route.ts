import express from 'express';
import { PCategoryController } from './parent_category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ParnetCategoryValidation } from './parent_category.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(
    ParnetCategoryValidation.createParentCategoryValidationSchema
  ),
  PCategoryController.createParentCategory
);

router.get('/', PCategoryController.getAllParentCategory);
export const PCategoryRoute = router;

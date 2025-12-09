import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidation } from './order.validation';
import { OrderController } from './order.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';

const router = express.Router();

router.post(
  '/create',
  auth(UserRole.USER),
  validateRequest(OrderValidation.createOrder),
  OrderController.createOrder
);

router.patch(
  '/update-status/:id',
  auth(UserRole.ADMIN, UserRole.SERVICE_PROVIDER),
  validateRequest(OrderValidation.updateStatus),
  OrderController.updateOrderStatus
);
router.get('/user', auth(UserRole.USER), OrderController.getUserOrders);
router.get(
  '/provider',
  auth(UserRole.SERVICE_PROVIDER),
  OrderController.getProviderOrders
);
router.get(
  '/:id',
  auth(UserRole.USER, UserRole.SERVICE_PROVIDER, UserRole.ADMIN),
  OrderController.getOrderById
);

export const OrderRoutes = router;

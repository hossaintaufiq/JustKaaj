import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderService } from './order.service';
import status from 'http-status';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Order created successfully',
    data: result,
  });
});

const updateOrderStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await OrderService.updateOrderStatus(id, status);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Order status updated successfully',
    data: result,
  });
});

const getUserOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getUserOrders(req);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User orders retrieved successfully',
    data: result,
  });
});

const getProviderOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getProviderOrders(req);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Provider orders retrieved successfully',
    data: result,
  });
});
const getOrderById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderService.getOrderById(id);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Order retrieved successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  updateOrderStatus,
  getUserOrders,
  getProviderOrders,
  getOrderById,
};

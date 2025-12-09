import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import { ServiceOfService } from './service.service';

const createService: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceOfService.createServiceIntodb(req);
  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: 'Service Created Successfully',
    data: result,
  });
});

const getAllServices: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceOfService.getAllServicesFromDb();
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Services Retrieved Successfully',
    data: result,
  });
});

const getMyServices: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceOfService.getMyServices(req);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'My Services Retrieved Successfully',
    data: result,
  });
});

const getServiceById: RequestHandler = catchAsync(async (req, res) => {
  const serviceId = req.params.id;
  const result = await ServiceOfService.getServiceByIdFromDb(serviceId);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Service Retrieved Successfully',
    data: result,
  });
});

const updateService: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceOfService.updateService(req);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Service updated Successfully',
    data: result,
  });
});
const deleteService: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceOfService.deleteService(req);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Service deleted Successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getServiceById,
  getMyServices,
  updateService,
  deleteService,
};

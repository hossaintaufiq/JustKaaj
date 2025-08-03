import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceCategoryService } from './serviceCategory.service';

const createServiceCategory = catchAsync(async (req, res) => {
  const result = await ServiceCategoryService.createServiceCategory(req);
  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: 'Successfully created a Service Category',
    data: result,
  });
});

export const ServiceCategoryController = {
  createServiceCategory,
};

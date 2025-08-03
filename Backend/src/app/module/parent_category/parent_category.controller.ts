import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PCategoryService } from './parent_category.service';

const createParentCategory = catchAsync(async (req, res) => {
  const result = await PCategoryService.createParentCategory(req);
  sendResponse(res, {
    success: true,
    message: 'Successfully created a parent Category',
    data: result,
    statusCode: status.CREATED,
  });
});

export const PCategoryController = {
  createParentCategory,
};

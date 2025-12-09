import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ChatService } from './chat.service';

const sendMessage = catchAsync(async (req, res) => {
  const result = await ChatService.sendMessage(req);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Message sent successfully',
    data: result,
  });
});
const getAllMessagesFromASender = catchAsync(async (req, res) => {
  const result = await ChatService.getAllMessagesFromASender(req);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'All messages retrieved successfully',
    data: result,
  });
});
const getAllUserIChatWith = catchAsync(async (req, res) => {
  const result = await ChatService.getAllUserIChatWith(req);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'All chat users retrieved successfully',
    data: result,
  });
});

const getUnreadMessagesCount = catchAsync(async (req, res) => {
  const result = await ChatService.getUnreadMessagesCount(req);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'All unread messages count retrieved successfully',
    data: result,
  });
});

export const ChatController = {
  sendMessage,
  getAllMessagesFromASender,
  getAllUserIChatWith,
  getUnreadMessagesCount,
};

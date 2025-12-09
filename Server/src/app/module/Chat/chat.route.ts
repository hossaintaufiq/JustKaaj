import express from 'express';
import auth from '../../middlewares/auth';
import { ChatController } from './chat.controller';
import { UserRole } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { ChatValidation } from './chat.validation';

const router = express.Router();

router.post(
  '/send/:receiverId',
  auth(UserRole.SERVICE_PROVIDER, UserRole.ADMIN, UserRole.USER),
  validateRequest(ChatValidation.sendMessage),
  ChatController.sendMessage
);

router.get(
  '/received/:receiverId',
  auth(UserRole.SERVICE_PROVIDER, UserRole.ADMIN, UserRole.USER),
  ChatController.getAllMessagesFromASender
);

router.get(
  '/users',
  auth(UserRole.SERVICE_PROVIDER, UserRole.ADMIN, UserRole.USER),
  ChatController.getAllUserIChatWith
);

router.get(
  '/unread-count',
  auth(UserRole.SERVICE_PROVIDER, UserRole.ADMIN, UserRole.USER),
  ChatController.getUnreadMessagesCount
);

export const ChatRoute = router;

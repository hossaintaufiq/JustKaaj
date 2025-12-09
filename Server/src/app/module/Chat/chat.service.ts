/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { prisma } from '../../utils/prisma';

const sendMessage = async (req: Request) => {
  const senderId = (req as any).user.id;
  const { message } = req.body;
  const { receiverId } = req.params;

  const newMessage = await prisma.chat.create({
    data: { senderId, receiverId, message },
    include: {
      sender: { select: { user_id: true, fullName: true } },
      receiver: { select: { user_id: true, fullName: true } },
    },
  });

  return newMessage;
};

const getAllMessagesFromASender = async (req: Request) => {
  const senderId = (req as any).user.id; // Current logged-in user
  const { receiverId } = req.params;

  // 1. Fetch all messages between the two users
  const messages = await prisma.chat.findMany({
    where: {
      OR: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    },
    orderBy: { createdAt: 'asc' },
  });

  // 2. Update unread messages sent TO the current user (senderId) from receiverId
  await prisma.chat.updateMany({
    where: {
      senderId: receiverId,
      receiverId: senderId,
      isRead: false,
    },
    data: {
      isRead: true,
    },
  });

  return messages;
};

const getAllUserIChatWith = async (req: Request) => {
  const senderId = (req as any).user.id;

  const chats = await prisma.chat.findMany({
    where: {
      OR: [{ senderId }, { receiverId: senderId }],
    },
    include: {
      sender: { select: { user_id: true, fullName: true, profileImage: true } },
      receiver: {
        select: { user_id: true, fullName: true, profileImage: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  const uniqueUsers = Array.from(
    new Map(
      chats.map((chat) => {
        const user = chat.senderId === senderId ? chat.receiver : chat.sender;
        return [user.user_id, user];
      })
    ).values()
  );

  return uniqueUsers;
};

const getUnreadMessagesCount = async (req: Request) => {
  const userId = (req as any).user.id;
  const unreadCount = await prisma.chat.count({
    where: {
      receiverId: userId,
      isRead: false,
    },
  });
  return unreadCount;
};

export const ChatService = {
  sendMessage,
  getAllMessagesFromASender,
  getAllUserIChatWith,
  getUnreadMessagesCount,
};

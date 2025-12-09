/* eslint-disable @typescript-eslint/no-explicit-any */

import { Order_Status } from '@prisma/client';
import { prisma } from '../../utils/prisma';
import { Request } from 'express';

export const createOrder = async (req: Request) => {
  const data = req.body;
  const userId = (req as any).user?.id;
  await prisma.service.findUniqueOrThrow({
    where: { id: data.serviceId },
  });
  return await prisma.$transaction(async (tx) => {
    // Step 1: Create Address first
    const newAddress = await tx.address.create({
      data: {
        area_name: data.address.area_name,
        street_address: data.address.street_address,
        city: data.address.city,
        state: data.address.state,
        postal_code: data.address.postal_code,
      },
    });

    // Step 2: Create Order linked to that address
    const newOrder = await tx.order.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        serviceId: data.serviceId,
        userId,
        providerId: data.providerId,
        price: data.price,
        quantity: data.quantity,
        scheduledDate: data.scheduledDate,
        scheduledTime: data.scheduledTime,
        address: {
          connect: { address_id: newAddress.address_id }, // link the created address
        },
      },
      include: {
        service: true,
        user: true,
        provider: true,
        address: true,
      },
    });

    // Step 3: Return combined result
    return {
      success: true,
      message: 'Order created successfully',
      data: newOrder,
    };
  });
};

const updateOrderStatus = async (id: string, status: Order_Status) => {
  const updated = await prisma.order.update({
    where: { id },
    data: { status },
  });
  return updated;
};

const getUserOrders = async (req: Request) => {
  const userId = (req as any).user.id;
  const orders = await prisma.order.findMany({
    where: { userId },
    include: {
      service: true,
      provider: {
        include: {
          user: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
  return orders;
};

const getProviderOrders = async (req: Request) => {
  const providerEmail = (req as any).user.email;
  const provider = await prisma.service_Provider.findFirstOrThrow({
    where: { email: providerEmail },
  });

  const orders = await prisma.order.findMany({
    where: { providerId: provider.id },
    include: {
      service: true,
      user: true,
    },
    orderBy: { createdAt: 'desc' },
  });
  return orders;
};

const getOrderById = async (id: string) => {
  const result = await prisma.order.findUniqueOrThrow({
    where: { id },
    include: {
      service: true,
      user: true,
      address: true,
      provider: {
        include: {
          user: true,
        },
      },
    },
  });
  return result;
};

export const OrderService = {
  createOrder,
  updateOrderStatus,
  getUserOrders,
  getProviderOrders,
  getOrderById,
};

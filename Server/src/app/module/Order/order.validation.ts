import { z } from 'zod';

const createOrder = z.object({
  body: z.object({
    serviceId: z.string({ required_error: 'Service ID is required' }),
    providerId: z.string({ required_error: 'Provider ID is required' }),
    price: z.number({ required_error: 'Price is required' }),
    quantity: z.number().optional(),
    scheduledDate: z.string({ required_error: 'Scheduled date is required' }),
    scheduledTime: z.string({ required_error: 'Scheduled time is required' }),
  }),
});

const updateStatus = z.object({
  body: z.object({
    status: z.enum([
      'CONFIRMED',
      'IN_PROGRESS',
      'COMPLETED',
      'CANCELLED',
      'REJECTED',
    ]),
  }),
});

export const OrderValidation = {
  createOrder,
  updateStatus,
};

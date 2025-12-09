import { z } from 'zod';

const availabilitySchema = z.object({
  day: z.string(),
  startTime: z.string().nullable().optional(),
  endTime: z.string().nullable().optional(),
  isAvailable: z.boolean().default(true),
});

const createServiceSchemaValidation = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    area: z.string().min(1, 'Area is required'),
    price: z.number().nonnegative('Price must be non-negative'),
    category: z.array(z.string()).nonempty('At least one category is required'),
    availabilities: z
      .array(availabilitySchema)
      .nonempty('Availability is required'),
  }),
});

const updateServiceSchemaValidation = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required').optional(),
    description: z.string().min(1, 'Description is required').optional(),
    area: z.string().min(1, 'Area is required').optional(),
    price: z.number().nonnegative('Price must be non-negative').optional(),
    category: z.array(z.string()).optional(),
    availabilities: z.array(availabilitySchema).optional(),
  }),
});

export const ServiceValidation = {
  createServiceSchemaValidation,
  updateServiceSchemaValidation,
};

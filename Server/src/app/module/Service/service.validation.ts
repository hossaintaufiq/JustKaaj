import { z } from 'zod';

const createServiceSchemaValidation = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    base_price: z.number().nonnegative(),
    price_unit: z.string(),
    estimed_duration: z.string(),
    category: z.array(z.string()).nonempty(),
  }),
});

export const ServiceValidation = {
  createServiceSchemaValidation,
};

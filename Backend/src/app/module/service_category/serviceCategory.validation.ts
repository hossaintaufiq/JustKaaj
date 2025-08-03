import { z } from 'zod';

const createServiceCategorySchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    icon: z.string(),
    description: z.string(),
    is_Active: z.boolean(),
    parent_category: z.string(),
  }),
});

export const ServiceCategoryValidation = {
  createServiceCategorySchemaValidation,
};

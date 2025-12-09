import { z } from 'zod';

const createServiceCategorySchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    parent_category: z.string(),
  }),
});

export const ServiceCategoryValidation = {
  createServiceCategorySchemaValidation,
};

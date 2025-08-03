import { z } from 'zod';

const createParentCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    icon: z.string(),
    description: z.string(),
    is_Active: z.boolean(),
  }),
});

export const ParnetCategoryValidation = {
  createParentCategoryValidationSchema,
};

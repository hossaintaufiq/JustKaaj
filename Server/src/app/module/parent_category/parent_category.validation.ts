import { z } from 'zod';

const createParentCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

export const ParnetCategoryValidation = {
  createParentCategoryValidationSchema,
};

import { z } from 'zod';

const authValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});

export const AuthValidation = {
  authValidationSchema,
};

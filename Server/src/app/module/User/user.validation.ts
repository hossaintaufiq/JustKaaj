import { z } from 'zod';

const addressSchema = z.object({
  street_address: z.string(),
  city: z.string(),
  state: z.string().length(2), // Assuming US state code
  postal_code: z.number(),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

const createAdminSchemaValidation = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
    role: z.literal('ADMIN'),
    address: addressSchema,
  }),
});

const createUserSchemaValidation = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
    address: addressSchema,
  }),
});
const createServiceProviderSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
    role: z.literal('SERVICE_PROVIDER'),
    address: addressSchema,
    business_name: z.string(),
    business_license: z.number(),
    nid_number: z.number(),
    govt_id_or_tin: z.number(),
    facebook_profile: z.string().url().optional(),
    website_link: z.string().url().optional(),
    area_name: z.string(),
    postal_code: z.number(),
    category: z.string(),
  }),
});

export const UserValidation = {
  createAdminSchemaValidation,
  createUserSchemaValidation,
  createServiceProviderSchema,
};

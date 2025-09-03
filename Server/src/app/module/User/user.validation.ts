import { z } from 'zod';

const addressSchema = z.object({
  street_address: z.string(),
  city: z.string(),
  state: z.string(),
  postal_code: z.number(),
  area_name: z.string(),
});

const createAdminSchemaValidation = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string(),
    phone: z.string(),
    address: addressSchema,
  }),
});

const createUserSchemaValidation = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string(),
    phone: z.string(),
    address: addressSchema,
  }),
});
const createServiceProviderSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string(),
    phone: z.string(),
    address: addressSchema,
    business_name: z.string(),
    business_license: z.string().nonempty(),
    nid_number: z.string().nonempty(),
    govt_id_or_tin: z.string().nonempty(),
    facebook_profile: z.string().url().optional(),
    website_link: z.string().url().optional(),
    category: z.string(),
  }),
});

export const UserValidation = {
  createAdminSchemaValidation,
  createUserSchemaValidation,
  createServiceProviderSchema,
};

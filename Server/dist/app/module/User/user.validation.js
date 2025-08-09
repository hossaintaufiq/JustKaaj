"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const addressSchema = zod_1.z.object({
    street_address: zod_1.z.string(),
    city: zod_1.z.string(),
    state: zod_1.z.string().length(2), // Assuming US state code
    postal_code: zod_1.z.number(),
    latitude: zod_1.z.number().min(-90).max(90),
    longitude: zod_1.z.number().min(-180).max(180),
});
const createAdminSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(6),
        fullName: zod_1.z.string(),
        phone: zod_1.z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
        role: zod_1.z.literal('ADMIN'),
        address: addressSchema,
    }),
});
const createUserSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(6),
        fullName: zod_1.z.string(),
        phone: zod_1.z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
        address: addressSchema,
    }),
});
const createServiceProviderSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(6),
        fullName: zod_1.z.string(),
        phone: zod_1.z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
        role: zod_1.z.literal('SERVICE_PROVIDER'),
        address: addressSchema,
        business_name: zod_1.z.string(),
        business_license: zod_1.z.number(),
        nid_number: zod_1.z.number(),
        govt_id_or_tin: zod_1.z.number(),
        facebook_profile: zod_1.z.string().url().optional(),
        website_link: zod_1.z.string().url().optional(),
        area_name: zod_1.z.string(),
        postal_code: zod_1.z.number(),
        category: zod_1.z.string(),
    }),
});
exports.UserValidation = {
    createAdminSchemaValidation,
    createUserSchemaValidation,
    createServiceProviderSchema,
};

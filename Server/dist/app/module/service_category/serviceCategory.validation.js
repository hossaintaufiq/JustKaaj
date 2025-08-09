"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryValidation = void 0;
const zod_1 = require("zod");
const createServiceCategorySchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string(),
        description: zod_1.z.string(),
        is_Active: zod_1.z.boolean(),
        parent_category: zod_1.z.string(),
    }),
});
exports.ServiceCategoryValidation = {
    createServiceCategorySchemaValidation,
};

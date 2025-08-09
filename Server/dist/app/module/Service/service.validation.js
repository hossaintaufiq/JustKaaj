"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const createServiceSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string(),
        base_price: zod_1.z.number().nonnegative(),
        price_unit: zod_1.z.string(),
        estimed_duration: zod_1.z.string(),
        category: zod_1.z.array(zod_1.z.string()).nonempty(),
    }),
});
exports.ServiceValidation = {
    createServiceSchemaValidation,
};
